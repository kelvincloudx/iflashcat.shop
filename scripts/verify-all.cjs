const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'dist');
const TARGET_AFF_URL = 'https://varnexa.lingdongaff.com/#/?code=HHoxxHGa';
const EXPECTED_DOMAIN = 'https://iflashcat.lol';

console.log('====================================================');
console.log('⚡ 开始全面自动化验收测试 (SpeedCAT iflashcat.lol) ⚡');
console.log('====================================================\n');

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;

function check(title, condition, extraInfo = '') {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`[PASS] ${title} ${extraInfo}`);
  } else {
    failedChecks++;
    console.error(`[FAIL] ${title} ${extraInfo}`);
  }
}

// 1. Check Dist directory and generated files
check('dist 目录存在', fs.existsSync(DIST_DIR));
const expectedHtmlFiles = [
  'index.html',
  'pricing/index.html',
  'faq/index.html',
  'guides/index.html',
  'guides/speedcat-first-purchase/index.html',
  'guides/speedcat-plan-cycles/index.html',
  'guides/speedcat-subscription-management/index.html',
  'guides/speedcat-devices/index.html',
  'guides/speedcat-rule-mode/index.html',
  'guides/speedcat-traffic-planning/index.html',
  'guides/speedcat-connection-checklist/index.html'
];

expectedHtmlFiles.forEach(relPath => {
  const fullPath = path.join(DIST_DIR, relPath);
  check(`静态文件生成: /${relPath}`, fs.existsSync(fullPath));
});

// 2. Check Robots.txt and Sitemap.xml
const robotsPath = path.join(DIST_DIR, 'robots.txt');
check('robots.txt 存在', fs.existsSync(robotsPath));
if (fs.existsSync(robotsPath)) {
  const robotsTxt = fs.readFileSync(robotsPath, 'utf8');
  check('robots.txt 允许抓取且引用 sitemap', robotsTxt.includes('Allow: /') && robotsTxt.includes('sitemap.xml'));
}

const sitemapPath = path.join(DIST_DIR, 'sitemap.xml');
check('sitemap.xml 存在', fs.existsSync(sitemapPath));
if (fs.existsSync(sitemapPath)) {
  const sitemapXml = fs.readFileSync(sitemapPath, 'utf8');
  check('sitemap 包含首页', sitemapXml.includes('https://iflashcat.lol/'));
  check('sitemap 包含套餐页', sitemapXml.includes('https://iflashcat.lol/pricing/'));
  check('sitemap 包含教程页', sitemapXml.includes('https://iflashcat.lol/guides/'));
  check('sitemap 包含FAQ页', sitemapXml.includes('https://iflashcat.lol/faq/'));
  const articleSlugs = [
    'speedcat-first-purchase',
    'speedcat-plan-cycles',
    'speedcat-subscription-management',
    'speedcat-devices',
    'speedcat-rule-mode',
    'speedcat-traffic-planning',
    'speedcat-connection-checklist'
  ];
  articleSlugs.forEach(slug => {
    check(`sitemap 包含文章 /guides/${slug}/`, sitemapXml.includes(`https://iflashcat.lol/guides/${slug}/`));
  });
}

// 3. Check All HTML Files for SEO, Canonical, Brand, Footer, Header, AFF Links
const allHtmlPaths = [];
function collectHtml(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      collectHtml(full);
    } else if (item.endsWith('.html')) {
      allHtmlPaths.push(full);
    }
  }
}
collectHtml(DIST_DIR);

console.log(`\n检查 ${allHtmlPaths.length} 个 HTML 页面质量规范:`);

const prohibitedTerms = [
  '十大机场', '机场排行榜', '机场推荐排名', '其他机场',
  '魔戒', '魅影', '速鹰', '云翼', '悠兔', 'TAG VPN',
  'iflashcat.mom' // Must NOT contain old domain!
];

allHtmlPaths.forEach(htmlPath => {
  const relPath = path.relative(DIST_DIR, htmlPath);
  const content = fs.readFileSync(htmlPath, 'utf8');

  // Check Single Header & Footer
  const headerCount = (content.match(/<header\b/g) || []).length;
  check(`${relPath}: 仅包含一个 Header`, headerCount === 1, `(count: ${headerCount})`);

  const footerCount = (content.match(/<footer\b/g) || []).length;
  // Note: in article page there may be <footer class="article-end-section"> inside article and <footer class="site-footer">
  const siteFooterCount = (content.match(/class="site-footer"/g) || []).length;
  check(`${relPath}: 仅包含一个全站 Footer`, siteFooterCount === 1, `(count: ${siteFooterCount})`);

  // Canonical tag check
  check(`${relPath}: 包含正确的 iflashcat.lol canonical`, content.includes('<link rel="canonical" href="https://iflashcat.lol'));
  check(`${relPath}: 绝无旧域名 iflashcat.mom`, !content.includes('iflashcat.mom'));

  // No prohibited competitor terms
  prohibitedTerms.forEach(term => {
    check(`${relPath}: 无违禁竞品/旧域名词汇 [${term}]`, !content.includes(term));
  });

  // Check CSS linked
  check(`${relPath}: 正确引入样式表 link[rel=stylesheet]`, content.includes('rel="stylesheet"'));

  // Verify 友情链接, 机场测评, and 机场教程 are completely deleted
  check(`${relPath}: 已删除友情链接模块及文字`, !content.includes('友情链接'));
  check(`${relPath}: 已删除机场测评外链`, !content.includes('https://jichangreview.net') && !content.includes('机场测评'));
  check(`${relPath}: 已删除机场教程外链`, !content.includes('https://jichangguide.net') && !content.includes('机场教程'));
});

// 4. Verify External Purchase Buttons
console.log('\n检查所有外部商业推广链接属性:');
let totalAffButtonsFound = 0;
allHtmlPaths.forEach(htmlPath => {
  const relPath = path.relative(DIST_DIR, htmlPath);
  const content = fs.readFileSync(htmlPath, 'utf8');
  
  // Find all links to varnexa or external aff
  const affRegex = /<a\s+[^>]*href="https:\/\/varnexa\.lingdongaff\.com\/#\/\?code=HHoxxHGa"[^>]*>/g;
  const matches = content.match(affRegex) || [];
  totalAffButtonsFound += matches.length;

  matches.forEach(match => {
    check(`${relPath} AFF 按钮包含 target="_blank"`, match.includes('target="_blank"'));
    check(`${relPath} AFF 按钮包含 sponsored nofollow noopener`, match.includes('sponsored') && match.includes('nofollow') && match.includes('noopener'));
  });
});
check('全站发现并核验外部商业推广按钮', totalAffButtonsFound > 0, `(共发现 ${totalAffButtonsFound} 处按钮)`);

// 5. Verify 7 Plans and 19 Price Options in Pricing & Home
console.log('\n检查 7 种套餐与 19 个价格选项完整性:');
const homeContent = fs.readFileSync(path.join(DIST_DIR, 'index.html'), 'utf8');
const pricingContent = fs.readFileSync(path.join(DIST_DIR, 'pricing', 'index.html'), 'utf8');

const expectedPlans = [
  '迷你猫', '闪电猫', '霹雳猫', '雷神猫',
  '特惠年付小包',
  '流星猫', '飞天猫'
];

expectedPlans.forEach(planName => {
  check(`首页包含套餐 [${planName}]`, homeContent.includes(planName));
  check(`定价页包含套餐 [${planName}]`, pricingContent.includes(planName));
});

// Check 19 prices:
// 4 regular * 4 cycles = 16:
// 迷你猫: 20, 57, 108, 192
// 闪电猫: 40, 114, 216, 384
// 霹雳猫: 100, 285, 540, 960
// 雷神猫: 200, 570, 1080, 1920
// 特惠年付小包: 98
// 流星猫: 260
// 飞天猫: 1800
const expectedPrices = [
  { name: '迷你猫月付', price: '¥20' },
  { name: '迷你猫季付', price: '¥57' },
  { name: '迷你猫半年付', price: '¥108' },
  { name: '迷你猫年付', price: '¥192' },
  { name: '闪电猫月付', price: '¥40' },
  { name: '闪电猫季付', price: '¥114' },
  { name: '闪电猫半年付', price: '¥216' },
  { name: '闪电猫年付', price: '¥384' },
  { name: '霹雳猫月付', price: '¥100' },
  { name: '霹雳猫季付', price: '¥285' },
  { name: '霹雳猫半年付', price: '¥540' },
  { name: '霹雳猫年付', price: '¥960' },
  { name: '雷神猫月付', price: '¥200' },
  { name: '雷神猫季付', price: '¥570' },
  { name: '雷神猫半年付', price: '¥1080' },
  { name: '雷神猫年付', price: '¥1920' },
  { name: '特惠年付小包年付', price: '¥98' },
  { name: '流星猫年付(600G)', price: '¥260' },
  { name: '飞天猫年付(5000G)', price: '¥1800' }
];

check('19个价格选项定义总数核验', expectedPrices.length === 19);
expectedPrices.forEach(item => {
  check(`价格选项呈现 [${item.name}: ${item.price}]`, pricingContent.includes(item.price));
});

// Check specific plan quotas & rules:
check('特惠年付小包 50GB/每30天 正确呈现', pricingContent.includes('50GB') && pricingContent.includes('每30天'));
check('流星猫 600GB 全年总流量 正确呈现', pricingContent.includes('600GB') && pricingContent.includes('用完为止'));
check('飞天猫 5000GB 全年总流量 正确呈现', pricingContent.includes('5000GB') && pricingContent.includes('用完为止'));
check('价格免责声明存在', pricingContent.includes('本页面展示的是 SpeedCAT 公开参考套餐信息'));

// 6. Check 7 Articles Character Count & Distinctiveness
console.log('\n检查 7 篇原创文章字数 (800-1500) 与唯一性:');
const articlesTs = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'articles.ts'), 'utf8');
const articleMatches = [...articlesTs.matchAll(/slug:\s*'([^']+)'[\s\S]*?content:\s*`([\s\S]*?)`/g)];

check('7 篇原创文章数据完整', articleMatches.length === 7);

const articleTexts = [];
articleMatches.forEach(m => {
  const slug = m[1];
  const text = m[2];
  articleTexts.push(text);
  const cjkChars = (text.match(/[\u4e00-\u9fa5]/g) || []).length;
  check(`文章 ${slug} 正文字数合规 (${cjkChars} 字)`, cjkChars >= 800 && cjkChars <= 1500, `[${cjkChars} 字符]`);
});

// Distinctiveness test
let allUnique = true;
for (let i = 0; i < articleTexts.length; i++) {
  for (let j = i + 1; j < articleTexts.length; j++) {
    if (articleTexts[i] === articleTexts[j]) allUnique = false;
  }
}
check('7 篇文章正文互不相同', allUnique);

// 7. Check FAQs (At least 10)
console.log('\n检查 FAQ 数量与展开状态:');
const faqTs = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'faqs.ts'), 'utf8');
const faqCount = (faqTs.match(/id:\s*\d+/g) || []).length;
check('FAQ 数量至少 10 条', faqCount >= 10, `(实际 ${faqCount} 条)`);
check('首页展示完整 FAQ 内容', homeContent.includes('闪电猫 SpeedCAT 有哪些公开参考套餐？'));
check('FAQ 页面展示完整 FAQ 内容', fs.readFileSync(path.join(DIST_DIR, 'faq', 'index.html'), 'utf8').includes('闪电猫 SpeedCAT 有哪些公开参考套餐？'));

console.log('\n====================================================');
console.log(`验收结果汇总: 总计检查项 ${totalChecks} | 通过 ${passedChecks} | 失败 ${failedChecks}`);
console.log('====================================================');

if (failedChecks > 0) {
  process.exit(1);
} else {
  console.log('🎉 所有自动化验收测试均已通过！');
}
