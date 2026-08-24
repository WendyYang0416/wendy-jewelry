const { getStore } = require('@netlify/blobs');

/* 生成产品图 URL（与前端 getDefaultProducts 保持一致） */
function img(prompt, size = 'landscape_4_3') {
  return `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`;
}

/* 默认产品数据（首次访问时自动初始化到 Blobs，保证所有访客看到一致数据） */
function defaultProducts() {
  return [
    {
      id: 'p1', active: true, category: 'phoneChain',
      name: 'Pearl & Crystal Beaded Phone Chain',
      nameAr: 'سلسلة هاتف من اللؤلؤ والكريستال المزركش',
      nameEs: 'Cadena para Teléfono con Perlas y Cristales',
      price: 2.5,
      material: 'Stainless Steel + Acrylic Beads + Pearl',
      materialAr: 'الفولاذ المقاوم للصدأ + خرز أكريليك + لؤلؤ',
      materialEs: 'Acero Inoxidable + Cuentas de Acrílico + Perla',
      weight: 15,
      description: 'Elegant beaded phone chain with pearl accents and crystal beads. Universal attachment fits all smartphones. Perfect accessory for daily use and gift.',
      descriptionAr: 'سلسلة هاتف أنيقة مزينة باللؤلؤ وخرز الكريستال. ملحق مثالي للاستخدام اليومي والهدايا.',
      descriptionEs: 'Cadena para teléfono elegante con detalles de perlas y cuentas de cristal. Accesorio perfecto para uso diario y regalo.',
      image: img('e-commerce product photo of a beautiful beaded phone chain strap with pearl, crystal and gold beads, white background, studio lighting', 'landscape_4_3'),
      colors: [
        { name: 'Rose Gold', image: img('e-commerce product photo of rose gold beaded phone chain, white background', 'landscape_4_3') },
        { name: 'Silver', image: img('e-commerce product photo of silver beaded phone chain, white background', 'landscape_4_3') },
        { name: 'Gold', image: img('e-commerce product photo of gold beaded phone chain, white background', 'landscape_4_3') }
      ]
    },
    {
      id: 'p2', active: true, category: 'phoneChain',
      name: 'Cute Charm Phone Chain (Korean Style)',
      nameAr: 'سلسلة هاتف برموز لطيفة (أسلوب كوري)',
      nameEs: 'Cadena para Teléfono con Dijes Lindos (Estilo Coreano)',
      price: 1.8,
      material: 'Alloy + Resin Charms + Nylon Cord',
      materialAr: 'سبيكة + تعاليق راتنجية + حبل نايلون',
      materialEs: 'Alebación + Dijes de Resina + Cordón de Nailon',
      weight: 12,
      description: 'Korean style cute charm phone chain with colorful resin pendants. Lightweight and trendy. MOQ 100 pcs per design.',
      descriptionAr: 'سلسلة هاتف كورية اللون مع تعاليق ملونة. خفيفة الوزن وعصرية.',
      descriptionEs: 'Cadena para teléfono de estilo coreano con dijes coloridos. Ligera y moderna.',
      image: img('e-commerce product photo of cute korean style phone chain strap with colorful charms and beads, white background', 'landscape_4_3'),
      colors: [
        { name: 'Pink', image: img('e-commerce product photo of pink cute korean phone chain, white background', 'landscape_4_3') },
        { name: 'Purple', image: img('e-commerce product photo of purple cute korean phone chain, white background', 'landscape_4_3') },
        { name: 'Rainbow', image: img('e-commerce product photo of rainbow colorful cute korean phone chain, white background', 'landscape_4_3') }
      ]
    },
    {
      id: 'p3', active: true, category: 'bracelet',
      name: 'Boho Multi-layer Beaded Bracelet',
      nameAr: 'سوار بوهو متعدد الطبقات',
      nameEs: 'Pulsera Boho de Múltiples Capas con Cuentas',
      price: 3.2,
      material: 'Natural Stone + Alloy + Elastic Cord',
      materialAr: 'حجر طبيعي + سبيكة + حبل مرن',
      materialEs: 'Piedra Natural + Alebación + Cordón Elástico',
      weight: 28,
      description: 'Bohemian style multi-layer bracelet with natural stones. Stackable design, comfortable fit. Perfect for beach and daily wear.',
      descriptionAr: 'سوار بوهو متعدد الطبقات مع أحجار طبيعية. تصميم قابل للتكديس.',
      descriptionEs: 'Pulsera bohemia de múltiples capas con piedras naturales. Diseño apilable.',
      image: img('e-commerce product photo of boho multi-layer beaded bracelet with natural stones, white background', 'landscape_4_3'),
      colors: [
        { name: 'Turquoise', image: img('e-commerce product photo of turquoise boho bracelet, white background', 'landscape_4_3') },
        { name: 'Earth Tone', image: img('e-commerce product photo of earth tone brown beaded boho bracelet, white background', 'landscape_4_3') },
        { name: 'Ocean Blue', image: img('e-commerce product photo of ocean blue beaded boho bracelet, white background', 'landscape_4_3') }
      ]
    },
    {
      id: 'p4', active: true, category: 'bracelet',
      name: '18K Gold Plated Minimalist Chain Bracelet',
      nameAr: 'سوار سلسلة بسيط مطلي بالذهب عيار 18 قيراط',
      nameEs: 'Pulsera de Cadena Minimalista Chapada en Oro 18K',
      price: 4.5,
      material: 'Brass + 18K Gold Plated',
      materialAr: 'نحاس + مطلي بالذهب عيار 18 قيراط',
      materialEs: 'Latón + Chapado en Oro 18K',
      weight: 8,
      description: 'Minimalist dainty chain bracelet. 18K gold plated, tarnish-resistant. Adjustable length 16+3cm.',
      descriptionAr: 'سوار سلسلة دقيق بسيط. مطلي بالذهب عيار 18 قيراط، مقاوم للبهتان.',
      descriptionEs: 'Pulsera de cadena delicada minimalista. Chapada en oro 18K, resistente al deslustre.',
      image: img('e-commerce product photo of 18k gold plated dainty minimalist chain bracelet, white background', 'landscape_4_3'),
      colors: [
        { name: 'Gold', image: img('e-commerce product photo of gold dainty minimalist bracelet, white background', 'landscape_4_3') },
        { name: 'Silver', image: img('e-commerce product photo of silver dainty minimalist bracelet, white background', 'landscape_4_3') },
        { name: 'Rose Gold', image: img('e-commerce product photo of rose gold dainty minimalist bracelet, white background', 'landscape_4_3') }
      ]
    },
    {
      id: 'p5', active: true, category: 'necklace',
      name: 'Butterfly Pendant Choker Necklace',
      nameAr: 'قلادة تشوكر مع قلادة فراشة',
      nameEs: 'Collar Gargantilla con Dije de Mariposa',
      price: 3.8,
      material: 'Alloy + Enamel + Chain',
      materialAr: 'سبيكة + مينا + سلسلة',
      materialEs: 'Alebación + Esmalte + Cadena',
      weight: 18,
      description: 'Cute butterfly pendant choker. Trendy design, great for women and teens. Available in multiple colors.',
      descriptionAr: 'قلادة تشوكر بقلادة فراشة لطيفة. تصميم عصري.',
      descriptionEs: 'Collar gargantilla con dije de mariposa. Diseño moderno.',
      image: img('e-commerce product photo of butterfly pendant choker necklace, white background', 'landscape_4_3'),
      colors: [
        { name: 'Blue', image: img('e-commerce product photo of blue butterfly choker necklace, white background', 'landscape_4_3') },
        { name: 'Pink', image: img('e-commerce product photo of pink butterfly choker necklace, white background', 'landscape_4_3') },
        { name: 'Purple', image: img('e-commerce product photo of purple butterfly choker necklace, white background', 'landscape_4_3') }
      ]
    },
    {
      id: 'p6', active: true, category: 'necklace',
      name: 'Layered Coin Pendant Necklace',
      nameAr: 'قلادة طبقات بميدالية عملة',
      nameEs: 'Collar de Capas con Dije de Moneda',
      price: 5.2,
      material: 'Stainless Steel + Coin Pendant',
      materialAr: 'الفولاذ المقاوم للصدأ + ميدالية عملة',
      materialEs: 'Acero Inoxidable + Dije de Moneda',
      weight: 22,
      description: 'Multi-layered necklace with engraved coin pendant. Waterproof and hypoallergenic stainless steel.',
      descriptionAr: 'قلادة متعددة الطبقات بميدالية عملة محفورة. فولاذ مقاوم للصدأ مضاد للحساسية.',
      descriptionEs: 'Collar de múltiples capas con dije de moneda grabado. Acero inoxidable hipoalergénico.',
      image: img('e-commerce product photo of layered coin pendant necklace, white background', 'landscape_4_3'),
      colors: [
        { name: 'Gold', image: img('e-commerce product photo of gold layered coin necklace, white background', 'landscape_4_3') },
        { name: 'Silver', image: img('e-commerce product photo of silver layered coin necklace, white background', 'landscape_4_3') }
      ]
    },
    {
      id: 'p7', active: true, category: 'anklet',
      name: 'Shell Charm Beach Anklet Set',
      nameAr: 'مجموعة خلاخيل شاطئية بقرود الصدف',
      nameEs: 'Juego de Tobilleras de Playa con Dijes de Concha',
      price: 2.6,
      material: 'Shell + Alloy + Beads',
      materialAr: 'صدفة + سبيكة + خرز',
      materialEs: 'Concha + Alebación + Cuentas',
      weight: 14,
      description: 'Beachy boho anklet set with natural shell charms. Adjustable size, perfect for summer vacation.',
      descriptionAr: 'مجموعة خلاخيل شاطئية بقرود الصدف الطبيعية. حجم قابل للتعديل.',
      descriptionEs: 'Juego de tobilleras playeras con dijes de concha natural. Tamaño ajustable.',
      image: img('e-commerce product photo of shell charm beach anklet set, white background', 'landscape_4_3'),
      colors: [
        { name: 'Natural White', image: img('e-commerce product photo of white shell anklet, white background', 'landscape_4_3') },
        { name: 'Beige', image: img('e-commerce product photo of beige shell anklet, white background', 'landscape_4_3') }
      ]
    },
    {
      id: 'p8', active: true, category: 'anklet',
      name: 'Adjustable Cuban Link Anklet',
      nameAr: 'خلخل كوباني قابل للتعديل',
      nameEs: 'Tobillera Cubana Ajustable',
      price: 3.5,
      material: 'Stainless Steel Cuban Chain',
      materialAr: 'سلسلة كوبانية من الفولاذ المقاوم للصدأ',
      materialEs: 'Cadena Cubana de Acero Inoxidable',
      weight: 16,
      description: 'Stylish cuban link anklet. Stainless steel, waterproof and no color fade. Adjustable length.',
      descriptionAr: 'خلخل كوباني أنيق من الفولاذ المقاوم للصدأ، مقاوم للماء.',
      descriptionEs: 'Tobillera cubana elegante de acero inoxidable, resistente al agua.',
      image: img('e-commerce product photo of cuban link chain anklet, white background', 'landscape_4_3'),
      colors: [
        { name: 'Gold', image: img('e-commerce product photo of gold cuban anklet, white background', 'landscape_4_3') },
        { name: 'Silver', image: img('e-commerce product photo of silver cuban anklet, white background', 'landscape_4_3') }
      ]
    },
    {
      id: 'p9', active: true, category: 'ring',
      name: 'Stackable Crystal Zircon Ring Set',
      nameAr: 'مجموعة خواتم زركون كريستالية قابلة للتكديس',
      nameEs: 'Juego de Anillos de Circón Cristalino Apilables',
      price: 3.9,
      material: 'Copper + Zirconia Stone',
      materialAr: 'نحاس + حجر الزركونيا',
      materialEs: 'Cobre + Piedra de Circonia',
      weight: 20,
      description: 'Luxury stackable zircon ring set (4pcs). Sparkling AAA zirconia, gold plated. Great for parties and weddings.',
      descriptionAr: 'مجموعة خواتم زركون فاخرة قابلة للتكديس (4 قطع). ماسية زركونيا AAA.',
      descriptionEs: 'Juego de anillos de circón de lujo apilables (4 piezas). Circonia AAA brillante.',
      image: img('e-commerce product photo of luxury stackable crystal zircon ring set, white background', 'landscape_4_3'),
      colors: [
        { name: 'Gold', image: img('e-commerce product photo of gold zircon ring set, white background', 'landscape_4_3') },
        { name: 'Rose Gold', image: img('e-commerce product photo of rose gold zircon ring set, white background', 'landscape_4_3') },
        { name: 'Silver', image: img('e-commerce product photo of silver zircon ring set, white background', 'landscape_4_3') }
      ]
    },
    {
      id: 'p10', active: true, category: 'ring',
      name: 'Minimalist Open Adjustable Ring',
      nameAr: 'خاتم مفتوح بسيط قابل للتعديل',
      nameEs: 'Anillo Abierto Minimalista Ajustable',
      price: 1.6,
      material: '925 Sterling Silver Plated',
      materialAr: 'مطلي بالفضة الإسترلينية 925',
      materialEs: 'Chapado en Plata de Ley 925',
      weight: 3,
      description: 'Simple dainty open ring. Adjustable to all finger sizes. Perfect for everyday wear and gifting.',
      descriptionAr: 'خاتم مفتوح بسيط ودقيق. قابل للتعديل ليناسب جميع أحجام الأصابع.',
      descriptionEs: 'Anillo abierto simple y delicado. Ajustable a todos los tamaños de dedo.',
      image: img('e-commerce product photo of minimalist open adjustable silver ring, white background', 'landscape_4_3'),
      colors: [
        { name: 'Silver', image: img('e-commerce product photo of silver minimalist open ring, white background', 'landscape_4_3') },
        { name: 'Gold', image: img('e-commerce product photo of gold minimalist open ring, white background', 'landscape_4_3') }
      ]
    }
  ];
}

async function getList() {
  const store = getStore('products');
  let raw = await store.get('list');
  if (!raw) {
    const def = defaultProducts();
    await store.set('list', JSON.stringify(def));
    raw = JSON.stringify(def);
  }
  return JSON.parse(raw);
}

exports.handler = async (event) => {
  try {
    if (event.httpMethod !== 'GET') {
      return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
    }
    const products = await getList();
    const id = event.queryStringParameters && event.queryStringParameters.id;
    if (id) {
      const p = products.find((x) => x.id === id);
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(p || null)
      };
    }
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(products)
    };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};
