// 站点业务数据：内容集中在此，改文案 / 加产品只动这个文件即可
// 中英双语：name/en（产品名）、desc/en_desc（描述）、specs/en_specs（规格）、cert（认证名本身为英文）
window.PRODUCTS = [
  // ============ 水产出口 - 主营产品（2026-08-23 用户确认）============
  { id: 'sea-cucumber-frozen', name: '冷冻海参', en: 'Frozen Sea Cucumber', category: 'seafood', icon: 'c3', tag: '辽参·活冻',
    img: 'img/sea-cucumber-frozen.jpg',
    specs: [
      { k: '品种', v: '刺参（Stichopus japonicus）' },
      { k: '产地', v: '辽宁大连海域' },
      { k: '规格', v: '单只 50-200g，按大小分级' },
      { k: '加工', v: '活参去内脏清洗、单冻' },
      { k: '包装', v: '单只真空 / 1kg 盒装' },
      { k: '储存', v: '-18℃ 冷冻 / 冷链运输' }
    ],
    en_specs: [
      { k: 'Species', v: 'Japanese Sea Cucumber (Stichopus japonicus)' },
      { k: 'Origin', v: 'Dalian, Liaoning, China' },
      { k: 'Size', v: '50-200g each, graded by size' },
      { k: 'Processing', v: 'Cleaned, single frozen' },
      { k: 'Packing', v: 'Vacuum per piece / 1kg box' },
      { k: 'Storage', v: 'Frozen at -18℃ / cold chain' }
    ],
    desc: '大连辽参是海参中品质最优的品种之一，肉质厚实、弹性十足，富含胶原蛋白、海参皂苷与多种微量元素。活捕后即刻去内脏单冻，最大程度保留鲜活口感与营养，适用于炖煮、煲汤、即食加工及高端礼品渠道。',
    en_desc: 'Dalian sea cucumber is among the finest varieties. Thick flesh, rich in collagen, saponins and trace elements. Cleaned and single-frozen right after harvest to preserve freshness and nutrition. Ideal for soups, stews, ready-to-eat processing and premium gift channels.',
    cert: ['HACCP', 'ISO 22000', 'Geographical Indication (Dalian)' ] },
  { id: 'sea-cucumber-dried', name: '干海参', en: 'Dried Sea Cucumber', category: 'seafood', icon: 'c2', tag: '辽参·淡干',
    img: 'img/sea-cucumber-dried.jpg',
    specs: [
      { k: '品种', v: '刺参（Stichopus japonicus）' },
      { k: '产地', v: '辽宁大连海域' },
      { k: '加工', v: '淡干工艺（低盐/无盐）' },
      { k: '规格', v: '30-100 头/斤，按头数分级' },
      { k: '泡发率', v: '≥ 12 倍' },
      { k: '包装', v: '礼盒装 / 真空盒' }
    ],
    en_specs: [
      { k: 'Species', v: 'Japanese Sea Cucumber (Stichopus japonicus)' },
      { k: 'Origin', v: 'Dalian, Liaoning, China' },
      { k: 'Processing', v: 'Light-dried (low salt / salt-free)' },
      { k: 'Grade', v: '30-100 pcs per 500g, graded by count' },
      { k: 'Rehydration', v: '≥ 12x expansion' },
      { k: 'Packing', v: 'Gift box / vacuum box' }
    ],
    desc: '传统淡干工艺加工的大连辽参，含盐量低、泡发率高，最大程度保留海参本味与营养价值。可常温长期保存，是商务礼赠与家庭滋补的高端选择，畅销日韩及华人市场。',
    en_desc: 'Traditionally light-dried Dalian sea cucumber with low salt content and high rehydration rate, preserving natural flavor and nutrition. Long shelf life at room temperature. A premium choice for business gifts and home nourishment, popular in Japan, Korea and Chinese communities worldwide.',
    cert: ['HACCP', 'Geographical Indication (Dalian)'] },
  { id: 'mantis-shrimp', name: '濑尿虾', en: 'Mantis Shrimp', category: 'seafood', icon: 'c1', tag: '渤海湾·活冻',
    img: 'img/mantis-shrimp.jpg',
    specs: [
      { k: '学名', v: '口虾蛄（Oratosquilla oratoria）' },
      { k: '产地', v: '渤海湾 / 黄海北部' },
      { k: '规格', v: '8-20 只/斤，按大小分级' },
      { k: '加工', v: '活捕船冻 / 整只速冻' },
      { k: '包装', v: '1kg / 2kg 真空袋' },
      { k: '季节', v: '3-5 月为最佳赏味期' }
    ],
    en_specs: [
      { k: 'Species', v: 'Mantis Shrimp (Oratosquilla oratoria)' },
      { k: 'Origin', v: 'Bohai Bay / North Yellow Sea' },
      { k: 'Size', v: '8-20 pcs per 500g, graded by size' },
      { k: 'Processing', v: 'Boat-frozen alive / whole quick-frozen' },
      { k: 'Packing', v: '1kg / 2kg vacuum bag' },
      { k: 'Season', v: 'Best from March to May' }
    ],
    desc: '渤海湾春季时令海鲜，肉质饱满弹牙、鲜甜多汁，被誉为"皮皮虾中的上品"。活捕船冻工艺锁住鲜度，清蒸、白灼、椒盐、避风塘做法皆宜，是国内中高端餐饮渠道的明星单品。',
    en_desc: 'A seasonal delicacy from Bohai Bay with firm, sweet and juicy flesh. Boat-frozen to lock in freshness. Perfect for steaming, boiling, salt & pepper or Typhoon Shelter style. A star item for mid-to-high-end restaurants.',
    cert: ['HACCP'] },
  { id: 'sea-urchin', name: '海胆', en: 'Sea Urchin (Uni)', category: 'seafood', icon: 'c4', tag: '紫海胆·活鲜',
    img: 'img/sea-urchin.jpg',
    specs: [
      { k: '品种', v: '紫海胆 / 马粪海胆' },
      { k: '产地', v: '辽宁大连 / 山东长岛' },
      { k: '规格', v: '单只 80-150g' },
      { k: '加工', v: '活体开壳取黄 / 即食冰鲜' },
      { k: '包装', v: '木盒 / 食品级托盘' },
      { k: '储存', v: '0-4℃ 冰鲜 / -18℃ 冷冻' }
    ],
    en_specs: [
      { k: 'Species', v: 'Purple Sea Urchin / Hemicentrotus' },
      { k: 'Origin', v: 'Dalian / Changdao, China' },
      { k: 'Size', v: '80-150g each' },
      { k: 'Processing', v: 'Fresh-shucked / ready-to-eat chilled' },
      { k: 'Packing', v: 'Wooden box / food-grade tray' },
      { k: 'Storage', v: 'Chilled 0-4℃ / frozen -18℃' }
    ],
    desc: '高端日料与海鲜餐厅首选食材。海胆黄（生殖腺）色泽金黄、入口即化、鲜甜浓郁。活体加工后冰鲜直运，主要面向日本、韩国及国内一线城市高端餐饮渠道。',
    en_desc: 'A top choice for high-end Japanese restaurants and seafood dining. The golden gonads are rich, creamy and intensely sweet. Processed live and shipped chilled, mainly serving premium dining channels in Japan, Korea and major Chinese cities.',
    cert: ['HACCP', 'ISO 22000'] },

  // ============ 农产品 ============
  { id: 'tea', name: '云南黄精茶', en: 'Yunnan Huangjing Tea', category: 'agri', icon: 'c2', tag: '初级农产品',
    specs: [{ k: '产地', v: '云南' }, { k: '规格', v: '10g/袋 × 15袋/盒' }, { k: '类型', v: '颗粒袋泡' }, { k: '资质', v: '初级农产品' }],
    en_specs: [{ k: 'Origin', v: 'Yunnan, China' }, { k: 'Size', v: '10g × 15 bags per box' }, { k: 'Type', v: 'Granule tea bag' }, { k: 'Category', v: 'Primary agricultural product' }],
    desc: '精选云南高山黄精，标准化分装，主打健康养生茶饮场景。',
    en_desc: 'Premium Yunnan high-mountain huangjing (Polygonatum), standard-packed as a healthy wellness tea.' },
  { id: 'grain', name: '五谷杂粮', en: 'Grains & Cereals', category: 'agri', icon: 'c4', tag: '产地直采',
    specs: [{ k: '产地', v: '东北 / 华北' }, { k: '规格', v: '5kg / 10kg' }, { k: '渠道', v: '商超 / 餐饮' }, { k: '服务', v: '分级包装' }],
    en_specs: [{ k: 'Origin', v: 'Northeast / North China' }, { k: 'Size', v: '5kg / 10kg' }, { k: 'Channels', v: 'Retail / F&B' }, { k: 'Service', v: 'Graded packing' }],
    desc: '产地直采、标准化分级的优质杂粮，服务商超与餐饮供应链。',
    en_desc: 'Direct-sourced, standard-graded quality grains and cereals for retail and F&B supply chains.' },

  // ============ 电子物料 ============
  { id: 'mcu', name: '微控制器单元', en: 'MCU Components', category: 'electronic', icon: 'c3', tag: '全球采购',
    specs: [{ k: '类别', v: '半导体 / 被动器件' }, { k: '服务', v: '现货 / 期货' }, { k: '交期', v: '7-30 天' }, { k: '认证', v: '原厂 / 授权' }],
    en_specs: [{ k: 'Category', v: 'Semiconductors / Passive' }, { k: 'Service', v: 'Spot / Futures' }, { k: 'Lead Time', v: '7-30 days' }, { k: 'Certification', v: 'OEM / Authorized' }],
    desc: '面向制造与贸易客户的电子元器件全球采购与合规报关供应。',
    en_desc: 'Global sourcing and compliant customs clearance of electronic components for manufacturing and trading clients.' },
  { id: 'pcba', name: 'PCBA 模组', en: 'PCBA Modules', category: 'electronic', icon: 'c2', tag: '定制供应',
    specs: [{ k: '类别', v: '成品模组' }, { k: '服务', v: '定制 / 批量' }, { k: '交期', v: '按订单' }, { k: '认证', v: 'RoHS' }],
    en_specs: [{ k: 'Category', v: 'Finished modules' }, { k: 'Service', v: 'Custom / Batch' }, { k: 'Lead Time', v: 'Per order' }, { k: 'Certification', v: 'RoHS' }],
    desc: '为工业客户提供 PCBA 模组与配套物料的稳定供应。',
    en_desc: 'Stable supply of PCBA modules and supporting materials for industrial clients.' },
];

window.BUSINESS_LINES = [
  { id: 'seafood', name: '水产出口', en: 'Seafood Export', desc: '主营大连辽参（冻/干）、濑尿虾、海胆等高附加值海产品，覆盖海参、虾类、贝类全品类，远销日韩及全球华人市场。', en_desc: 'Focused on high-value seafood including Dalian sea cucumber (frozen/dried), mantis shrimp and sea urchin, covering sea cucumber, shrimp and shellfish across all categories, exported to Japan, Korea and global Chinese markets.', icon: 'c1' },
  { id: 'agri', name: '农产品', en: 'Agricultural Products', desc: '精选优质农产品，从产地直采到标准化分级包装，服务商超、餐饮与食品加工渠道。', en_desc: 'Premium agricultural products from direct farm sourcing to standardized graded packing, serving retail, F&B and food processing channels.', icon: 'c2' },
  { id: 'electronic', name: '电子物料', en: 'Electronic Components', desc: '电子元器件与工业物料的全球采购与供应，为制造与贸易客户提供稳定货源与合规报关服务。', en_desc: 'Global sourcing and supply of electronic components and industrial materials, providing stable supply and compliant customs clearance for manufacturing and trading clients.', icon: 'c3' },
];

/* ============================================================
   以下为 2026-09-12 新增内容数据
   —— 首页/内页所有新增板块的文案都在这里，改字只动本文件
   —— 每条都带 zh / en 双语字段
   ============================================================ */

/* ===== 首页 Hero 补充信息 ===== */
window.HERO = {
  eyebrow: { zh: '水产出口 · 农产品 · 电子物料', en: 'Seafood · Agri Products · Electronic Components' },
  bg: 'img/sea-urchin.jpg',
  primaryBtn: { zh: '获取报价', en: 'Get a Quote' },
  ghostBtn: { zh: '查看产品业务', en: 'View Products' },
  scroll: { zh: '向下浏览', en: 'Scroll' },
};

/* ===== 首页实力数据条 ===== */
window.SITE_STATS = [
  { value: '30+', zh: '出口国家和地区', en: 'Countries & Regions' },
  { value: '4', zh: '主营海产品类', en: 'Core Seafood Categories' },
  { value: '3', zh: '核心业务板块', en: 'Business Lines' },
  { value: '1', zh: '工作日询价响应', en: 'Business Day Response' },
];

/* ===== 精选产品（首页实拍展示，取自 PRODUCTS 中的 4 个水产单品） ===== */
window.FEATURED_IDS = ['sea-cucumber-frozen', 'sea-cucumber-dried', 'mantis-shrimp', 'sea-urchin'];

/* ===== 产地与供应链 ===== */
window.SUPPLY_CHAIN = {
  label: { zh: 'Origin & Supply Chain', en: 'Origin & Supply Chain' },
  title: { zh: '从渤海湾产地，到全球餐桌', en: 'From Bohai Bay Waters to Tables Worldwide' },
  p1: {
    zh: '海洋牧场的海参、濑尿虾与海胆主要来自辽宁大连及渤海湾、黄海北部海域。这一带水温低、生长周期长，海参肉质厚实、虾蟹贝类鲜味物质积累充足，是国内公认的优质冷水海域产区。',
    en: 'Our sea cucumber, mantis shrimp and sea urchin come mainly from Dalian (Liaoning) and the Bohai Bay / northern Yellow Sea. These cold, slow-growth waters are widely recognised in China as a premium cold-water producing region, giving thicker sea cucumber flesh and richer flavour in shellfish.'
  },
  p2: {
    zh: '我们在产地完成直采与初加工，再由具备出口食品生产资质的合作加工方按标准完成分选、清洗、速冻与包装，全程冷链经由深圳运营中心对接报关与出运。',
    en: 'We source and pre-process at origin; certified partner processing plants then handle grading, cleaning, quick-freezing and packing to standard. The whole chain is temperature-controlled, with customs clearance and shipping coordinated through our Shenzhen operation centre.'
  },
  points: [
    { zh: '产地直采，减少中间环节', en: 'Direct sourcing at origin, fewer middlemen' },
    { zh: '持证加工方按出口标准生产', en: 'Certified partner plants producing to export standards' },
    { zh: '冷冻 -18℃ / 冰鲜 0-4℃ 全程温控', en: 'Full cold chain: frozen -18℃ / chilled 0-4℃' },
    { zh: '深圳运营中心统一对接报关与物流', en: 'Shenzhen operation centre handles clearance and logistics' },
  ],
  media: 'img/sea-cucumber-frozen.jpg',
  cap: { zh: '大连辽参 · 活捕后即刻去内脏单冻', en: 'Dalian sea cucumber · cleaned and single-frozen right after harvest' },
};

/* ===== 出口市场覆盖 ===== */
window.MARKETS = [
  {
    area: { zh: '日本 · 韩国', en: 'Japan · Korea' },
    desc: { zh: '干海参、海胆的主力出口市场，对规格分级与品相要求最为严格。', en: 'Core market for dried sea cucumber and sea urchin, with the strictest grading and appearance requirements.' },
    tone: 'sea'
  },
  {
    area: { zh: '中国香港 · 中国澳门', en: 'Hong Kong, China · Macao, China' },
    desc: { zh: '高端干货、礼盒装与传统滋补渠道，淡干海参认知度高。', en: 'Premium dried goods, gift boxes and traditional nourishment channels with strong awareness of light-dried sea cucumber.' },
    tone: 'sea'
  },
  {
    area: { zh: '东南亚', en: 'Southeast Asia' },
    desc: { zh: '华人餐饮与食品加工渠道，海参、濑尿虾需求稳定。', en: 'Chinese restaurant and food processing channels with steady demand for sea cucumber and mantis shrimp.' },
    tone: 'sea'
  },
  {
    area: { zh: '中东（阿联酋 · 沙特）', en: 'Middle East (UAE · Saudi Arabia)' },
    desc: { zh: '市场拓展中，品类以逐项评估目的国准入要求后推进。', en: 'Under development, with categories advanced item by item after assessing destination-market access requirements.' },
    tone: 'coral'
  },
  {
    area: { zh: '其他海外市场', en: 'Other Overseas Markets' },
    desc: { zh: '按客户需求定制供应，可对接全球 30 多个国家和地区。', en: 'Custom supply by requirement, reachable to 30+ countries and regions worldwide.' },
    tone: 'muted'
  },
];

/* ===== 中东出口拓展（明确标注拓展中） ===== */
window.MIDEAST = {
  label: { zh: 'Market Development', en: 'Market Development' },
  title: { zh: '中东市场：正在推进的出口品类', en: 'Middle East: Categories Now Being Developed' },
  status: { zh: '拓展中', en: 'In Development' },
  desc: {
    zh: '以阿联酋、沙特阿拉伯为主要目标市场，我们已建立当地销售渠道，正围绕以下品类逐项推进。所有品类均以「先确认目的国准入与认证要求，再安排供货」为原则，不作超出现有资质的承诺。',
    en: 'With the UAE and Saudi Arabia as the primary target markets, local sales channels are already in place and the following categories are being advanced item by item. Every category follows one rule: confirm destination-market access and certification requirements first, then arrange supply — no commitments beyond our current qualifications.'
  },
  items: [
    { zh: '乘用车及二手车', en: 'Passenger Vehicles & Used Cars', d: { zh: '整车出口渠道对接，含车源组织与单证配套。', en: 'Whole-vehicle export channel setup, including sourcing and documentation.' } },
    { zh: '摩托车与三轮车', en: 'Motorcycles & Tricycles', d: { zh: '面向当地通勤与货运场景的整车出口。', en: 'Whole-vehicle export for local commuting and cargo use.' } },
    { zh: '冷冻海产', en: 'Frozen Seafood', d: { zh: '直接复用现有海参、虾类供应链与冷链能力。', en: 'Reuses our existing sea cucumber and shrimp supply chain and cold-chain capability.' } },
    { zh: '园林景观与耐旱苗木', en: 'Landscaping & Drought-Tolerant Seedlings', d: { zh: '适配当地气候条件的绿化树种与苗木品类。', en: 'Greening tree species and seedlings suited to local climate conditions.' } },
  ],
  note: {
    zh: '如您的采购品类不在上表中，欢迎邮件说明需求，我们可为您单独评估可行性与所需资质。',
    en: 'If your target category is not listed above, email us your requirements and we will assess feasibility and required qualifications separately.'
  },
};

/* ===== 六大优势 ===== */
window.ADVANTAGES = [
  { icon: 'anchor', title: { zh: '产地直采', en: 'Direct Origin Sourcing' }, desc: { zh: '辽宁大连、渤海湾海域一手货源，减少中间环节与损耗。', en: 'First-hand supply from Dalian and Bohai Bay, cutting middlemen and losses.' } },
  { icon: 'snow', title: { zh: '全程冷链', en: 'End-to-End Cold Chain' }, desc: { zh: '冷冻 -18℃、冰鲜 0-4℃ 双模式，从加工到出运温度可控。', en: 'Dual-mode cold chain at -18℃ frozen and 0-4℃ chilled, temperature-controlled from processing to shipment.' } },
  { icon: 'shield', title: { zh: '品控与认证', en: 'Quality Control & Certification' }, desc: { zh: '合作加工方通过 HACCP / ISO 22000 等食品安全体系认证。', en: 'Partner processing plants certified under HACCP / ISO 22000 food safety systems.' } },
  { icon: 'factory', title: { zh: '品牌运营 + 合作加工', en: 'Brand Owner + Partner Processing' }, desc: { zh: '我们作为品牌运营方与持证加工企业长期合作，资质链条清晰。', en: 'We operate as the brand owner in long-term cooperation with licensed processors, keeping the qualification chain clear.' } },
  { icon: 'doc', title: { zh: '报关与单证', en: 'Customs & Documentation' }, desc: { zh: '商检、原产地证、卫生证等出口单证按目的国要求配套办理。', en: 'Inspection, certificate of origin, health certificate and other export documents handled per destination requirements.' } },
  { icon: 'box', title: { zh: '定制供应', en: 'Custom Supply' }, desc: { zh: '支持规格分级、定制包装、礼盒与贴牌方案。', en: 'Supports grading, custom packaging, gift boxes and private-label solutions.' } },
];

/* ===== 出口流程（客户视角） ===== */
window.EXPORT_STEPS = [
  { n: '01', title: { zh: '需求确认', en: 'Inquiry & Spec' }, desc: { zh: '告知产品、规格、数量与目的市场，我们确认可行性与所需资质。', en: 'Tell us product, specification, quantity and destination market; we confirm feasibility and required qualifications.' } },
  { n: '02', title: { zh: '报价与样品', en: 'Quote & Sample' }, desc: { zh: '1 个工作日内提供方案、单价与交期，可另行安排样品。', en: 'Plan, unit price and lead time within one business day; samples can be arranged separately.' } },
  { n: '03', title: { zh: '合同与生产', en: 'Contract & Production' }, desc: { zh: '确认条款后签约，安排加工、分级与包装。', en: 'Contract signed after terms are confirmed, then processing, grading and packing are arranged.' } },
  { n: '04', title: { zh: '报关与出运', en: 'Customs & Shipping' }, desc: { zh: '办理商检与出口单证，安排订舱与冷链发运。', en: 'Inspection and export documents handled, then booking and cold-chain shipment arranged.' } },
];

/* ===== 资质与认证徽章 ===== */
window.CERT_BADGES = [
  { zh: 'HACCP 体系', en: 'HACCP' },
  { zh: 'ISO 22000', en: 'ISO 22000' },
  { zh: 'MSC 可持续渔业', en: 'MSC' },
  { zh: 'BRC 全球食品安全', en: 'BRC' },
  { zh: '出口食品生产企业备案（合作加工方）', en: 'Export Food Production Filing (partner plants)' },
];

/* ===== 常见问题 ===== */
window.FAQ = [
  {
    q: { zh: '你们是工厂还是贸易商？', en: 'Are you a factory or a trading company?' },
    a: { zh: '海洋牧场是品牌运营方。我们与具备出口食品生产资质的加工企业长期合作，产品由合作工厂按出口标准生产，我们负责产地采购、品质把关、单证与交付。', en: 'Marine Ranch operates as the brand owner. We work with processing enterprises that hold full export food production qualifications; products are made to export standards by partner plants, while we handle origin sourcing, quality control, documentation and delivery.' }
  },
  {
    q: { zh: '最小起订量（MOQ）是多少？', en: 'What is the minimum order quantity (MOQ)?' },
    a: { zh: '不同品类与规格的起订量差异较大。请在询价时说明产品、规格、包装形式与目标市场，我们会在报价单中明确对应起订量与价格阶梯。', en: 'MOQ varies significantly by category and specification. Please state product, specification, packing format and target market in your inquiry, and we will set out the relevant MOQ and price tiers in the quotation.' }
  },
  {
    q: { zh: '可以先看样品吗？', en: 'Can I get a sample first?' },
    a: { zh: '可以。样品安排需结合品类、备货情况与寄送目的地协商，样品与运费的承担方式在报价阶段一并确认。', en: 'Yes. Sample arrangements depend on the category, stock availability and destination; how sample and freight costs are borne is confirmed together at the quotation stage.' }
  },
  {
    q: { zh: '交货周期一般多久？', en: 'What is the usual lead time?' },
    a: { zh: '交货周期取决于品类、数量与是否需要定制加工或包装。常规品类与定制订单的周期不同，均以报价单中约定的交期为准。', en: 'Lead time depends on category, quantity and whether custom processing or packing is required. Standard and custom orders differ, and the delivery date agreed in the quotation prevails.' }
  },
  {
    q: { zh: '能提供哪些出口单证？', en: 'Which export documents can you provide?' },
    a: { zh: '常规可配合办理商业发票、装箱单、原产地证、卫生证与提单等。具体单证种类以目的国清关要求为准，我们会在报价阶段与您确认清单。', en: 'We can normally assist with commercial invoice, packing list, certificate of origin, health certificate and bill of lading. The exact document set follows the destination country customs requirements, and we will confirm the list at the quotation stage.' }
  },
  {
    q: { zh: '付款方式有哪些？', en: 'What payment methods do you accept?' },
    a: { zh: '常规采用电汇（T/T），具体比例与节点在合同条款中约定。正式条款以双方签署的合同与报价单为准。', en: 'We normally use telegraphic transfer (T/T). Specific ratios and milestones are set out in the contract terms; formal terms follow the signed contract and quotation.' }
  },
];

/* ===== 供应链链路（关于页，垂直时间轴） ===== */
window.CHAIN_FLOW = [
  { step: { zh: '产地直采', en: 'Origin Sourcing' }, desc: { zh: '在辽宁大连与渤海湾、黄海北部海域完成原料直采与初加工。', en: 'Raw material sourced and pre-processed directly in Dalian, Bohai Bay and the northern Yellow Sea.' } },
  { step: { zh: '合作工厂加工', en: 'Partner Plant Processing' }, desc: { zh: '由持出口食品生产资质的合作方完成分选、清洗、速冻或淡干加工。', en: 'Certified partner plants carry out grading, cleaning, quick-freezing or light-drying.' } },
  { step: { zh: '分级与包装', en: 'Grading & Packing' }, desc: { zh: '按头数、单只重量或规格分级，真空、盒装或礼盒包装。', en: 'Graded by count, piece weight or size, then packed vacuum, boxed or as gift sets.' } },
  { step: { zh: '冷链仓储与运输', en: 'Cold-Chain Storage & Transport' }, desc: { zh: '冷冻 -18℃ / 冰鲜 0-4℃ 全程温控，衔接出口发运。', en: 'Temperature-controlled at -18℃ frozen or 0-4℃ chilled through to export dispatch.' } },
  { step: { zh: '报关报检与交付', en: 'Customs Clearance & Delivery' }, desc: { zh: '深圳运营中心统一对接商检、单证与订舱，交付至目的港。', en: 'Our Shenzhen operation centre coordinates inspection, documents and booking, delivering to the destination port.' } },
];

/* ===== 合作模式（联系页/关于页） ===== */
window.COOP_MODES = [
  { title: { zh: '采购与分销', en: 'Purchase & Distribution' }, desc: { zh: '适合海外进口商、批发商与连锁餐饮，按箱按柜采购标准品类。', en: 'For overseas importers, wholesalers and chain restaurants buying standard categories by carton or container.' } },
  { title: { zh: '定制与贴牌', en: 'Custom & Private Label' }, desc: { zh: '按客户规格分级、定制包装与礼盒，支持贴牌生产。', en: 'Grading to your specification, custom packing and gift boxes, with private-label production.' } },
  { title: { zh: '长期供应协议', en: 'Long-Term Supply Agreement' }, desc: { zh: '为需求稳定的渠道客户锁定产能与交期，价格与条款按阶段复核。', en: 'Secures capacity and delivery schedules for channel clients with steady demand; pricing and terms reviewed periodically.' } },
];

