/* 中英双语字典 —— 站点所有文案集中在这里
 * 用法：
 *   1. HTML 静态文案：<span data-i18n="key">中文</span>
 *   2. JS 动态渲染：i18n('key') 或 i18n.t('key')
 * 切换：nav 右上角「EN / 中」按钮，localStorage 记忆选择
 */
const I18N = {
  zh: {
    // 导航
    'nav.home': '首页',
    'nav.products': '产品业务',
    'nav.pricing': '报价',
    'nav.about': '关于我们',
    'nav.contact': '联系我们',

    // 品牌
    'brand.cn': '海洋牧场',
    'brand.en': 'Marine Ranch',

    // 首页 hero
    'index.title': '海洋牧场 — 水产出口 · 农产品 · 电子物料',
    'index.desc': '海洋牧场 — 水产出口、农产品与电子物料的一体化贸易服务。',
    'index.tagline': '水产出口 · 农产品 · 电子物料 &nbsp;·&nbsp; 一体化贸易服务',
    'index.label.core': '核心业务',
    'index.title.core': '三大业务板块',
    'index.desc.core': '海洋牧场依托全球化供应链与严苛品质标准，为水产出口、农产品与电子物料客户提供一体化贸易服务。',
    'index.card.more': '了解详情',
    'index.label.why': '为什么选择我们',
    'index.title.why': '我们的优势',
    'index.adv.supply': '全球供应链',
    'index.adv.supply.desc': '覆盖 30+ 国家和地区的稳定供货与合规报关能力。',
    'index.adv.quality': '严苛品控',
    'index.adv.quality.desc': '全流程品质标准，支持 HACCP / ISO22000 / MSC / BRC 等认证。',
    'index.adv.one-stop': '一站服务',
    'index.adv.one-stop.desc': '从产品选型、定制包装到物流清关，一体化交付。',
    'index.cta.title': '准备好开启合作？',
    'index.cta.desc': '无论是采购、询价还是定制供应，我们都很乐意沟通。',
    'index.cta.btn': '联系我们',

    // 产品页
    'products.title': '产品业务 — 海洋牧场',
    'products.label': 'Products & Services',
    'products.head': '产品与业务',
    'products.desc': '三大业务板块，覆盖水产出口、农产品与电子物料，支持定制化供应方案。',
    'products.none.title': '没找到需要的产品？',
    'products.none.desc': '告诉我们您的需求，我们提供定制采购与供应方案。',
    'products.none.btn': '获取报价',

    // 报价页
    'pricing.title': '获取报价 — 海洋牧场',
    'pricing.label': 'Get a Quote',
    'pricing.head': '获取报价',
    'pricing.desc': '填写询价表单，我们通常在 1 个工作日内回复。急单请直接邮件或电话联系。',
    'pricing.flow': '询价流程',
    'pricing.step1': '01 · 提交需求',
    'pricing.step1.desc': '在询价表单中填写产品、规格、数量与目标市场。',
    'pricing.step2': '02 · 方案报价',
    'pricing.step2.desc': '1 个工作日内提供产品方案、单价与交期。',
    'pricing.step3': '03 · 确认下单',
    'pricing.step3.desc': '确认样品与条款后签约，安排生产与出运。',
    'pricing.scope': '支持询价的业务范围',
    'pricing.form.title': '填写询价表单',
    'pricing.form.desc': '表单由腾讯问卷托管，提交后我们会通过微信实时收到通知。',
    'pricing.form.btn': '通过邮件询价',
    'pricing.form.note': '（腾讯问卷链接待配置，目前暂用邮件）',
    'pricing.mail.hint': '也可以直接写信给我们：',

    // 关于页
    'about.title': '关于我们 — 海洋牧场',
    'about.label': 'About Us',
    'about.head': '关于海洋牧场',
    'about.desc': '依托全球供应链与严苛品控，为客户提供一体化的贸易服务。',
    'about.story.title': '我们的故事',
    'about.story.p1': '海洋牧场起步于冷冻水产品出口贸易，产品远销全球 30 多个国家和地区。依托完整的冷链供应链与国际认证体系，我们逐步将业务拓展至优质农产品与电子物料领域。',
    'about.story.p2': '如今业务稳步成长，深圳为运营总部所在地。我们相信长期主义：以稳定的品质、透明的报价与靠谱的交付，与客户建立长久的合作关系。',
    'about.cert.label': 'Certifications',
    'about.cert.title': '资质与认证',
    'about.cert.proc': '加工合作',
    'about.cert.proc.desc': '海洋牧场作为品牌运营方，与具备完整出口食品生产资质的企业长期合作（2026-01 审批通过）。',
    'about.cert.haccp': 'HACCP / ISO 22000',
    'about.cert.haccp.desc': '合作加工方通过食品安全管理体系认证，覆盖水产加工全流程。',
    'about.cert.msc': 'MSC / BRC',
    'about.cert.msc.desc': '合作加工方通过可持续渔业与全球食品安全标准认证。',
    'about.company.label': 'Company',
    'about.company.title': '公司信息',
    'about.company.entity': '经营主体',
    'about.company.entity.val': '深圳海洋牧场（个体工商户）',
    'about.company.loc': '经营所在地',
    'about.company.loc.val': '广东省深圳市',
    'about.company.scope': '主营范围',
    'about.company.scope.val': '冷冻水产出口 · 农产品 · 电子物料贸易',
    'about.cta.title': '想进一步了解？',
    'about.cta.btn': '联系我们',

    // 联系页
    'contact.title': '联系我们 — 海洋牧场',
    'contact.label': 'Contact',
    'contact.head': '联系我们',
    'contact.desc': '无论询价、样品还是合作洽谈，欢迎随时联系。',
    'contact.mail': '邮件',
    'contact.mail.reply': '1 个工作日内回复',
    'contact.form': '询价表单',
    'contact.form.desc': '适合正式采购询价，提交后微信实时通知。',
    'contact.form.btn': '前往询价',
    'contact.wechat': '微信',
    'contact.wechat.desc': '暂未提供微信二维码，建议通过邮件或电话联系。',
    'contact.biz.title': '商务合作',
    'contact.biz.p1': '我们重视每一次沟通。如果您是海外采购商、渠道商或工厂，欢迎邮件简述您的需求（产品、规格、数量、目标市场），我们会安排对应的业务同事与您对接。',
    'contact.biz.hours': '办公时间：',
    'contact.biz.hours.val': '周一至周五 10:00 - 17:00（GMT+8）',
    'contact.biz.loc': '所在地：',
    'contact.biz.loc.val': '广东省深圳市宝安区新安四路宝立方创意大厦B座8楼B28',

    // Footer
    'footer.tagline': '海洋牧场 Marine Ranch，提供水产出口、农产品与电子物料的一体化贸易服务，以全球化供应链与严苛品质标准服务客户。',
    'footer.col.products': '产品业务',
    'footer.col.nav': '导航',
    'footer.col.contact': '联系方式',
    'footer.contact.detail': '查看详情',
    'footer.copyright': '海洋牧场 Marine Ranch.',

    // 通用
    'common.quote': '询价',
    'common.more': '了解更多',

    // ===== 2026-09-12 新增板块文案 =====
    'index.scroll': '向下浏览',
    // 首页 · 精选产品
    'index.label.featured': '精选产品',
    'index.title.featured': '四款主力出口单品',
    'index.desc.featured': '覆盖冷冻与淡干两种形态、鲜活与冰鲜两类工艺。点击卡片可查看完整规格与认证。',
    // 首页 · 市场覆盖
    'index.label.market': '全球市场',
    'index.title.market': '出口市场覆盖',
    'index.desc.market': '以下为已供货或正在推进的市场。标注「拓展中」的品类，均以先确认目的国准入与认证要求为前提。',
    'index.market.core': '已供货',
    'index.market.dev': '拓展中',
    // 首页 · 优势
    'index.label.adv': '我们的优势',
    'index.title.adv': '六个理由，让采购更省心',
    'index.desc.adv': '从产地到目的港，我们把最容易出问题的环节都放在自己的控制范围内。',
    // 首页 · 流程
    'index.label.flow': '合作流程',
    'index.title.flow': '出口流程',
    'index.desc.flow': '从询价到出运的四个节点，每个节点都有明确的交付物与响应时间。',
    // 首页 · 资质
    'index.label.cert': '资质与认证',
    'index.title.cert': '资质与合规',
    'index.desc.cert': '海洋牧场作为品牌运营方，与持有出口食品生产资质的合作加工方长期合作。',
    // 首页 · FAQ
    'index.label.faq': '常见问题',
    'index.title.faq': '采购前最常问的几件事',
    'index.desc.faq': '如果以下没有回答您的疑问，欢迎直接邮件联系我们。',

    // 产品页
    'products.cat.all': '全部品类',
    'products.cat.anchor': '快速定位',

    // 关于页 · 供应链链路
    'about.chain.label': '供应链',
    'about.chain.title': '从产地到交付',
    'about.chain.desc': '海参、濑尿虾与海胆的完整链路：产地直采、持证工厂加工、分级包装、全程冷链，最终经由深圳运营中心报关交付。',
    // 关于页 · 经营信息
    'about.info.label': '经营信息',
    'about.info.title': '办公与主体信息',
    'about.info.entity': '经营主体',
    'about.info.entity.val': '深圳海洋牧场（个体工商户）',
    'about.info.addr': '办公地址',
    'about.info.addr.val': '广东省深圳市宝安区新安四路宝立方创意大厦B座8楼B28',
    'about.info.hours': '办公时间',
    'about.info.hours.val': '周一至周五 10:00 - 17:00（GMT+8）',
    'about.info.tel': '联系电话',
    'about.info.tel.val': '刘生 +86 136 4140 0316',
    'about.info.mail': '联系邮箱',
    'about.info.mail.val': 'support@hymc.store',
    'about.info.icp': '备案号',
    'about.info.icp.val': '粤ICP备2026041186号-1',
    // 关于页 · 合作模式
    'about.coop.label': '合作模式',
    'about.coop.title': '三种常见合作方式',
    'about.coop.desc': '按您的渠道角色，选择最合适的一种。',

    // 报价页 · 询价前准备
    'pricing.prep.label': '询价须知',
    'pricing.prep.title': '询价前请准备这几项',
    'pricing.prep.desc': '信息越完整，报价越准确、回复越快。',
    'pricing.prep.1': '产品与规格，例如「冷冻海参，单只 100-150g」',
    'pricing.prep.2': '数量与包装形式，含箱规与是否需要贴牌',
    'pricing.prep.3': '目的国家或地区，以便确认准入与单证要求',
    'pricing.prep.4': '期望交期与贸易条款，例如 FOB / CIF',
    'pricing.faq.label': '常见问题',
    'pricing.faq.title': '报价与订单常见问题',

    // 联系页
    'contact.info.label': '办公信息',
    'contact.info.title': '办公信息',
    'contact.coop.label': '合作模式',
    'contact.coop.title': '我们可以怎么合作',
    'contact.coop.desc': '无论您是进口商、渠道商还是工厂，都可以从这里开始。',
    'contact.tel': '电话',
    'contact.tel.desc': '工作时间可直接致电，非工作时间建议邮件。',
  },

  en: {
    // 导航
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.pricing': 'Get a Quote',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    // 品牌
    'brand.cn': 'Marine Ranch',
    'brand.en': 'Marine Ranch',

    // 首页 hero
    'index.title': 'Marine Ranch — Seafood Export · Agri Products · Electronic Components',
    'index.desc': 'Marine Ranch — one-stop trading services for seafood export, agricultural products and electronic components.',
    'index.tagline': 'Seafood Export · Agri Products · Electronic Components — One-Stop Trading',
    'index.label.core': 'Core Business',
    'index.title.core': 'Three Business Lines',
    'index.desc.core': 'Marine Ranch leverages a global supply chain and strict quality standards to provide integrated trading services for seafood, agricultural products and electronic components.',
    'index.card.more': 'Learn More',
    'index.label.why': 'Why Choose Us',
    'index.title.why': 'Our Advantages',
    'index.adv.supply': 'Global Supply Chain',
    'index.adv.supply.desc': 'Stable sourcing and compliant customs clearance across 30+ countries and regions.',
    'index.adv.quality': 'Strict Quality Control',
    'index.adv.quality.desc': 'Full-process quality standards, supporting HACCP / ISO22000 / MSC / BRC certifications.',
    'index.adv.one-stop': 'One-Stop Service',
    'index.adv.one-stop.desc': 'From product selection and custom packaging to logistics and customs clearance, delivered as one package.',
    'index.cta.title': 'Ready to Start Cooperation?',
    'index.cta.desc': 'Whether it is procurement, inquiry or custom supply, we are happy to talk.',
    'index.cta.btn': 'Contact Us',

    // 产品页
    'products.title': 'Products & Services — Marine Ranch',
    'products.label': 'Products & Services',
    'products.head': 'Products & Services',
    'products.desc': 'Three business lines covering seafood export, agricultural products and electronic components, with custom supply solutions available.',
    'products.none.title': 'Can\'t Find What You Need?',
    'products.none.desc': 'Tell us your requirements and we will provide custom sourcing and supply solutions.',
    'products.none.btn': 'Get a Quote',

    // 报价页
    'pricing.title': 'Get a Quote — Marine Ranch',
    'pricing.label': 'Get a Quote',
    'pricing.head': 'Get a Quote',
    'pricing.desc': 'Submit an inquiry form and we usually reply within 1 business day. For urgent orders, please contact us by email or phone.',
    'pricing.flow': 'How It Works',
    'pricing.step1': '01 · Submit Request',
    'pricing.step1.desc': 'Fill in product, specification, quantity and target market in the inquiry form.',
    'pricing.step2': '02 · Get Quotation',
    'pricing.step2.desc': 'We provide product plan, unit price and lead time within 1 business day.',
    'pricing.step3': '03 · Confirm Order',
    'pricing.step3.desc': 'After sample and terms are confirmed, sign the contract and arrange production and shipment.',
    'pricing.scope': 'Business Lines We Quote',
    'pricing.form.title': 'Submit an Inquiry',
    'pricing.form.desc': 'The form is hosted by Tencent Survey. We receive real-time WeChat notifications on submission.',
    'pricing.form.btn': 'Inquire by Email',
    'pricing.form.note': '(Online form link to be configured; email is used for now)',
    'pricing.mail.hint': 'Or write to us directly at:',

    // 关于页
    'about.title': 'About Us — Marine Ranch',
    'about.label': 'About Us',
    'about.head': 'About Marine Ranch',
    'about.desc': 'Leveraging a global supply chain and strict quality control to provide integrated trading services.',
    'about.story.title': 'Our Story',
    'about.story.p1': 'Marine Ranch started with frozen seafood export, serving 30+ countries and regions. With a complete cold-chain supply chain and international certification system, we have expanded into premium agricultural products and electronic components.',
    'about.story.p2': 'Today our business is growing steadily, with Shenzhen as our operational headquarters. We believe in long-termism: stable quality, transparent pricing and reliable delivery build lasting partnerships.',
    'about.cert.label': 'Certifications',
    'about.cert.title': 'Certifications & Qualifications',
    'about.cert.proc': 'Processing Partnership',
    'about.cert.proc.desc': 'Marine Ranch operates as a brand owner, in long-term cooperation with processing enterprises holding full export food production qualifications (approved 2026-01).',
    'about.cert.haccp': 'HACCP / ISO 22000',
    'about.cert.haccp.desc': 'Our processing partners are certified under food safety management systems covering the full processing workflow.',
    'about.cert.msc': 'MSC / BRC',
    'about.cert.msc.desc': 'Our processing partners hold sustainable fishery and global food safety standards certifications.',
    'about.company.label': 'Company',
    'about.company.title': 'Company Information',
    'about.company.entity': 'Operating Entity',
    'about.company.entity.val': 'Shenzhen Marine Ranch (Sole Proprietorship)',
    'about.company.loc': 'Location',
    'about.company.loc.val': 'Shenzhen, Guangdong, China',
    'about.company.scope': 'Business Scope',
    'about.company.scope.val': 'Frozen Seafood Export · Agri Products · Electronic Components',
    'about.cta.title': 'Want to Know More?',
    'about.cta.btn': 'Contact Us',

    // 联系页
    'contact.title': 'Contact Us — Marine Ranch',
    'contact.label': 'Contact',
    'contact.head': 'Contact Us',
    'contact.desc': 'Whether it is an inquiry, samples or partnership discussion, feel free to reach out.',
    'contact.mail': 'Email',
    'contact.mail.reply': 'Replies within 1 business day',
    'contact.form': 'Inquiry Form',
    'contact.form.desc': 'For formal purchase inquiries. We receive real-time WeChat notifications on submission.',
    'contact.form.btn': 'Go to Inquiry',
    'contact.wechat': 'WeChat',
    'contact.wechat.desc': 'WeChat QR code not available yet. Please contact us by email or phone.',
    'contact.biz.title': 'Business Cooperation',
    'contact.biz.p1': 'We value every conversation. If you are an overseas buyer, distributor or factory, please email us with your needs (product, specification, quantity, target market) and our team will follow up.',
    'contact.biz.hours': 'Office hours: ',
    'contact.biz.hours.val': 'Mon - Fri 10:00 - 17:00 (GMT+8)',
    'contact.biz.loc': 'Location: ',
    'contact.biz.loc.val': 'B28, 8F, Baolifang Creative Building B, Xin\'an 4th Road, Bao\'an District, Shenzhen, Guangdong, China',

    // Footer
    'footer.tagline': 'Marine Ranch provides integrated trading services for seafood export, agricultural products and electronic components, serving customers with a global supply chain and strict quality standards.',
    'footer.col.products': 'Products',
    'footer.col.nav': 'Navigation',
    'footer.col.contact': 'Contact',
    'footer.contact.detail': 'Details',
    'footer.copyright': 'Marine Ranch.',

    // 通用
    'common.quote': 'Inquire',
    'common.more': 'Learn More',

    // ===== Added 2026-09-12 =====
    'index.scroll': 'Scroll',
    // Home · Featured products
    'index.label.featured': 'Featured Products',
    'index.title.featured': 'Four Core Export Items',
    'index.desc.featured': 'Covering both frozen and light-dried formats, with live-frozen and chilled processing. Click a card for full specifications and certifications.',
    // Home · Markets
    'index.label.market': 'Global Reach',
    'index.title.market': 'Export Market Coverage',
    'index.desc.market': 'Markets we already serve, or are actively developing. Categories marked "In Development" are advanced only after confirming destination-market access and certification requirements.',
    'index.market.core': 'Serving',
    'index.market.dev': 'In Development',
    // Home · Advantages
    'index.label.adv': 'Why Choose Us',
    'index.title.adv': 'Six Reasons Procurement Gets Easier',
    'index.desc.adv': 'From origin to destination port, we keep the parts most likely to go wrong inside our own control.',
    // Home · Process
    'index.label.flow': 'How We Work',
    'index.title.flow': 'Export Process',
    'index.desc.flow': 'Four milestones from inquiry to shipment, each with a clear deliverable and response time.',
    // Home · Certifications
    'index.label.cert': 'Certifications',
    'index.title.cert': 'Qualifications & Compliance',
    'index.desc.cert': 'As the brand owner, Marine Ranch works in long-term cooperation with processing partners holding export food production qualifications.',
    // Home · FAQ
    'index.label.faq': 'FAQ',
    'index.title.faq': 'What Buyers Ask Most',
    'index.desc.faq': 'If your question is not answered below, please email us directly.',

    // Products page
    'products.cat.all': 'All Categories',
    'products.cat.anchor': 'Jump To',

    // About · Supply chain
    'about.chain.label': 'Supply Chain',
    'about.chain.title': 'From Origin to Delivery',
    'about.chain.desc': 'The full chain for sea cucumber, mantis shrimp and sea urchin: direct origin sourcing, processing at certified plants, grading and packing, end-to-end cold chain, then customs clearance and delivery through our Shenzhen operation centre.',
    // About · Company details
    'about.info.label': 'Details',
    'about.info.title': 'Office & Entity Information',
    'about.info.entity': 'Operating Entity',
    'about.info.entity.val': 'Shenzhen Marine Ranch (Sole Proprietorship)',
    'about.info.addr': 'Office Address',
    'about.info.addr.val': 'B28, 8F, Baolifang Creative Building B, Xin\'an 4th Road, Bao\'an District, Shenzhen, Guangdong, China',
    'about.info.hours': 'Office Hours',
    'about.info.hours.val': 'Mon - Fri 10:00 - 17:00 (GMT+8)',
    'about.info.tel': 'Telephone',
    'about.info.tel.val': 'Mr. Liu +86 136 4140 0316',
    'about.info.mail': 'Email',
    'about.info.mail.val': 'support@hymc.store',
    'about.info.icp': 'ICP Filing',
    'about.info.icp.val': '粤ICP备2026041186号-1',
    // About · Cooperation
    'about.coop.label': 'How We Cooperate',
    'about.coop.title': 'Three Common Ways to Work Together',
    'about.coop.desc': 'Pick the one that fits your role in the channel.',

    // Pricing · Before you inquire
    'pricing.prep.label': 'Before You Inquire',
    'pricing.prep.title': 'Have These Ready Before Inquiring',
    'pricing.prep.desc': 'The more complete the information, the more accurate and faster the quotation.',
    'pricing.prep.1': 'Product and specification, e.g. "frozen sea cucumber, 100-150g per piece"',
    'pricing.prep.2': 'Quantity and packing format, including carton size and private label needs',
    'pricing.prep.3': 'Destination country or region, so we can confirm access and document requirements',
    'pricing.prep.4': 'Expected delivery date and trade terms, e.g. FOB / CIF',
    'pricing.faq.label': 'FAQ',
    'pricing.faq.title': 'Quotation & Order FAQ',

    // Contact
    'contact.info.label': 'Details',
    'contact.info.title': 'Office Information',
    'contact.coop.label': 'How We Cooperate',
    'contact.coop.title': 'Ways We Can Work Together',
    'contact.coop.desc': 'Whether you are an importer, distributor or factory, start here.',
    'contact.tel': 'Phone',
    'contact.tel.desc': 'Call us during office hours; email is better outside them.',
  },
};

/* ===== 语言切换逻辑 ===== */
(function () {
  const STORAGE_KEY = 'mr-lang';
  let currentLang = localStorage.getItem(STORAGE_KEY) || 'zh';

  function applyLang(lang) {
    currentLang = lang;
    const dict = I18N[lang] || I18N.zh;
    // 1. 静态文案
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    // 2. 页面标题 & meta
    document.querySelectorAll('[data-i18n-title]').forEach((el) => {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key] !== undefined) el.setAttribute('content', dict[key]);
    });
    const titleKey = document.documentElement.getAttribute('data-i18n-doc-title');
    if (titleKey && dict[titleKey]) document.title = dict[titleKey];
    // 3. html lang
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
    // 4. 语言按钮文案
    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      btn.textContent = lang === 'en' ? '中' : 'EN';
    });
    // 5. 触发数据重渲染（产品卡等动态内容）
    document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
    // 6. 记住选择
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  // 语言按钮点击
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-lang-btn]');
    if (btn) applyLang(currentLang === 'en' ? 'zh' : 'en');
  });

  // 供 JS 渲染使用
  window.i18n = function (key) {
    const dict = I18N[currentLang] || I18N.zh;
    return dict[key] !== undefined ? dict[key] : I18N.zh[key] || key;
  };
  window.i18n.current = function () { return currentLang; };
  window.i18n.apply = applyLang;

  // 初始应用（DOM 就绪后）
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => applyLang(currentLang));
  } else {
    applyLang(currentLang);
  }
})();
