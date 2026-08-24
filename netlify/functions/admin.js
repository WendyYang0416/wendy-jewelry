const { getStore } = require('@netlify/blobs');

/* 从 Netlify 环境变量读取后台密码（默认 wendy123） */
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'wendy123';

function ok(body) {
  return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) };
}
function fail(code, msg) {
  return { statusCode: code, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ error: msg }) };
}

function uid() {
  return 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

async function getList() {
  const store = getStore('products');
  let raw = await store.get('list');
  if (!raw) return [];
  return JSON.parse(raw);
}

async function saveList(list) {
  const store = getStore('products');
  await store.set('list', JSON.stringify(list));
}

exports.handler = async (event) => {
  try {
    if (event.httpMethod !== 'POST') {
      return fail(405, 'Method Not Allowed');
    }

    const body = event.body ? JSON.parse(event.body) : {};
    const pwd = body.password || (event.headers['x-admin-password'] || '');

    /* 登录校验 */
    if (pwd !== ADMIN_PASSWORD) {
      return fail(401, 'Unauthorized: wrong password');
    }

    const action = body.action;
    let list = await getList();

    switch (action) {
      case 'add': {
        const product = body.product;
        if (!product || !product.name) return fail(400, 'product.name required');
        product.id = product.id || uid();
        product.active = product.active !== false;
        list.push(product);
        await saveList(list);
        return ok({ success: true, product });
      }
      case 'update': {
        const product = body.product;
        if (!product || !product.id) return fail(400, 'product.id required');
        const idx = list.findIndex((p) => p.id === product.id);
        if (idx === -1) return fail(404, 'product not found');
        list[idx] = Object.assign({}, list[idx], product);
        await saveList(list);
        return ok({ success: true, product: list[idx] });
      }
      case 'delete': {
        const id = body.id;
        if (!id) return fail(400, 'id required');
        const before = list.length;
        list = list.filter((p) => p.id !== id);
        await saveList(list);
        return ok({ success: true, removed: before - list.length });
      }
      case 'toggle': {
        const id = body.id;
        if (!id) return fail(400, 'id required');
        const p = list.find((x) => x.id === id);
        if (!p) return fail(404, 'product not found');
        p.active = !p.active;
        await saveList(list);
        return ok({ success: true, active: p.active });
      }
      case 'replace': {
        /* 整体替换（用于初始化默认数据或批量导入） */
        if (!Array.isArray(body.products)) return fail(400, 'products array required');
        await saveList(body.products);
        return ok({ success: true, count: body.products.length });
      }
      case 'list': {
        return ok({ products: list });
      }
      default:
        return fail(400, 'unknown action: ' + action);
    }
  } catch (e) {
    return fail(500, e.message);
  }
};
