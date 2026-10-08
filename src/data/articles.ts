export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  keywords: string[];
  summary: string;
  toc: { id: string; text: string }[];
  relatedSlugs: string[];
  content: string;
}

export const articles: Article[] = [
  {
    slug: 'speedcat-beginner-guide',
    title: '闪电猫新手入门：如何理解订阅套餐与流量额度',
    description: '闪电猫 SpeedCAT 新手注册与选购指南，详细解析订阅机制、流量重置逻辑、结算周期及控制台使用基础。',
    date: '2026-10-08',
    readTime: '8 分钟',
    category: '新手指南',
    keywords: ['闪电猫', 'SpeedCAT', '闪电猫订阅', '流量额度', '套餐选择'],
    summary: '本文为第一次接触闪电猫 SpeedCAT 的用户提供全面入门指导，从平台账号注册、控制台功能分布，到套餐计费逻辑与流量计算规则进行系统化梳理。',
    toc: [
      { id: 'section-1', text: '一、闪电猫 SpeedCAT 平台概述' },
      { id: 'section-2', text: '二、控制台核心功能板块解析' },
      { id: 'section-3', text: '三、如何理解订阅套餐的周期与计费' },
      { id: 'section-4', text: '四、流量额度与重置计算逻辑' },
      { id: 'section-5', text: '五、新手首单选购与注意事项' }
    ],
    relatedSlugs: ['speedcat-windows-tutorial', 'speedcat-traffic-usage', 'speedcat-connection-troubleshooting'],
    content: `
<div class="article-toc">
  <div class="toc-title">本文目录</div>
  <ul>
    <li><a href="#section-1">一、闪电猫 SpeedCAT 平台概述</a></li>
    <li><a href="#section-2">二、控制台核心功能板块解析</a></li>
    <li><a href="#section-3">三、如何理解订阅套餐的周期与计费</a></li>
    <li><a href="#section-4">四、流量额度与重置计算逻辑</a></li>
    <li><a href="#section-5">五、新手首单选购与注意事项</a></li>
  </ul>
</div>

<h2 id="section-1">一、闪电猫 SpeedCAT 平台概述</h2>

闪电猫（SpeedCAT）是一家专注于提供标准化网络代理与节点订阅服务的数字资源平台。用户在注册并登录闪电猫系统后，可以通过购买特定级别的订阅套餐，获取包含加密服务器信息、接入域名与传输密匙的专属订阅链接。

对于初次接触闪电猫的新用户，建立正确的服务认知是顺畅使用的前提：<strong>闪电猫网页后台主要负责账户财务结算、套餐选购、订阅密匙生成与工单技术支持，而具体的网络连接与流量转发动作则需要在本地设备安装的通用客户端中执行</strong>。

<h2 id="section-2">二、控制台核心功能板块解析</h2>

当您完成注册并进入闪电猫控制台后，主界面通常划分为以下几个关键功能区域：

1. <strong>仪表盘（Dashboard）</strong>：显示您当前生效的套餐状态、当期已用流量与剩余可用额度、账户到期时间，以及最重要的客户端订阅链接提取按钮。
2. <strong>商店 / 套餐列表（Store）</strong>：展示所有当前在售的订阅方案，包含月付、季付、半年付与年付等多种周期选项。
3. <strong>我的订阅 / 服务管理（Services）</strong>：管理您已购买的订单，支持重置订阅 Token、查看消费记录或发起续费。
4. <strong>工单支持中心（Tickets）</strong>：当遇到连接故障、账单争议或账户异常时，可以通过提交技术工单获取官方客服协助。

您可以随时通过 <a href="https://varnexa.lingdongaff.com/#/?code=HHoxxHGa" target="_blank" rel="sponsored nofollow noopener">闪电猫官方控制台入口</a> 登录个人账号查看最新的后台界面。

<h2 id="section-3">三、如何理解订阅套餐的周期与计费</h2>

在选购闪电猫套餐时，理解计费周期的结算规则非常关键。闪电猫的计费模式通常遵循以下原则：

- <strong>单次全额结算</strong>：无论是月付、季付还是年付方案，在结算收银台展示的金额均为该周期内用户需要一次性支付的总额，而非每月分期扣款。
- <strong>周期折扣机制</strong>：通常情况下，较长周期的套餐（如半年付或年付）在折算为平均单月成本时会给予一定比例的价格优惠，但用户需要承担更长周期的资金预付。
- <strong>在售状态核实</strong>：服务商会根据服务器容量与网络带宽采购成本动态调整上架商品。如果在页面中看到低门槛的特惠档位，需以最终收银台的实时呈现为准。

具体套餐参数与结构说明可参考 <a href="/pricing/">闪电猫套餐价格与规格页</a>。

<h2 id="section-4">四、流量额度与重置计算逻辑</h2>

流量配额是订阅服务中最核心的资产指标。在闪电猫系统中，流量的使用与重置遵循严格的规则：

- <strong>周期重置型套餐</strong>：此类套餐设定了固定的重置窗口（例如每 30 天为一个计算周期）。在周期开始时账户获得全额流量配额；若在周期结束前耗尽，节点服务将暂停，直到下一个周期到来或手动购买临时扩展包；周期结束时未用完的残余流量将自动清零，不滚存至下一周期。
- <strong>总额度一次性扣减型套餐</strong>：部分特定套餐设定了整体有效期（如 365 天），流量总额一次性注入账户，用完即止，不执行按月清零。
- <strong>流量消耗统计</strong>：仅有通过代理客户端发出的海外网络请求才会扣减配额。通过规则模式分流的国内本地流量不会消耗闪电猫的套餐额度。

<h2 id="section-5">五、新手首单选购与注意事项</h2>

对于第一次购买闪电猫 SpeedCAT 的用户，我们提供以下三点实操建议：

1. <strong>优先试用短周期</strong>：在未亲自在家庭宽带、移动热点与公司网络中验证稳定性前，建议优先选购月付基础套餐进行性能测试。
2. <strong>保护个人订阅 URL</strong>：订阅链接中集成了授权 Token，切勿在公共论坛或开源代码库中泄露该链接。
3. <strong>查阅连接排查指南</strong>：若遇到节点下载失败，可查阅 <a href="/guides/speedcat-connection-troubleshooting/">闪电猫常见连接问题排查步骤</a>。
`
  },
  {
    slug: 'speedcat-windows-tutorial',
    title: '闪电猫Windows使用教程：客户端安装与配置',
    description: '闪电猫 SpeedCAT 在 Windows 操作系统下的完整配置指南，包含通用客户端下载、订阅导入、分流规则设置与开机自启配置。',
    date: '2026-10-08',
    readTime: '9 分钟',
    category: '客户端教程',
    keywords: ['闪电猫', 'Windows配置', 'Clash Windows', '订阅导入', 'TUN模式'],
    summary: '本文详细讲解如何在 Windows 10/11 系统中安装支持 Clash 内核的客户端软件，并将闪电猫 SpeedCAT 订阅导入客户端，实现高效稳定的网络代理。',
    toc: [
      { id: 'step-1', text: '一、准备工作与客户端下载' },
      { id: 'step-2', text: '二、从闪电猫后台获取订阅链接' },
      { id: 'step-3', text: '三、导入订阅至 Windows 客户端' },
      { id: 'step-4', text: '四、选择运行模式与节点代理' },
      { id: 'step-5', text: '五、Windows 平台常见配置问题排查' }
    ],
    relatedSlugs: ['speedcat-beginner-guide', 'speedcat-traffic-usage', 'speedcat-connection-troubleshooting'],
    content: `
<div class="article-toc">
  <div class="toc-title">本文目录</div>
  <ul>
    <li><a href="#step-1">一、准备工作与客户端下载</a></li>
    <li><a href="#step-2">二、从闪电猫后台获取订阅链接</a></li>
    <li><a href="#step-3">三、导入订阅至 Windows 客户端</a></li>
    <li><a href="#step-4">四、选择运行模式与节点代理</a></li>
    <li><a href="#step-5">五、Windows 平台常见配置问题排查</a></li>
  </ul>
</div>

<h2 id="step-1">一、准备工作与客户端下载</h2>

在 Windows 操作系统中，使用闪电猫 SpeedCAT 节点需要借助支持通用代理内核的第三方客户端软件。常用的客户端包括 Clash for Windows、Clash Party 以及基于 Clash Meta (Mihomo) 内核的图形化工具。

在开始配置前，请确保您的系统满足以下条件：
- 操作系统为 Windows 10（64位）或 Windows 11；
- 拥有系统管理员权限；
- 已完成闪电猫账户注册并拥有有效的订阅服务。可以登录 <a href="https://varnexa.lingdongaff.com/#/?code=HHoxxHGa" target="_blank" rel="sponsored nofollow noopener">闪电猫平台控制台</a> 检查订单状态。

<h2 id="step-2">二、从闪电猫后台获取订阅链接</h2>

1. 打开浏览器，登录闪电猫管理后台。
2. 在控制台“仪表盘”或“订阅管理”板块，找到名为 <strong>Clash 订阅</strong> 或 <strong>通用订阅链接</strong> 的复制按钮。
3. 点击“复制订阅地址”，此时您的剪贴板中将保存一串包含个人加密 Token 的网络 URL 地址。

<em>注意：请妥善保存此链接，切勿将其公开发布至互联网，防止他人非法占用您的套餐流量。</em>

<h2 id="step-3">三、导入订阅至 Windows 客户端</h2>

以常见的通用图形客户端为例，导入步骤如下：

1. <strong>启动客户端</strong>：双击桌面图标打开代理软件。
2. <strong>进入配置页面</strong>：在软件左侧导航栏中点击 <code>Profiles</code>（配置）选项。
3. <strong>粘贴订阅 URL</strong>：在顶部的 <code>Download from a URL</code>（从URL下载）输入框中，右键粘贴刚才从闪电猫后台复制的订阅链接。
4. <strong>执行下载</strong>：点击右侧的 <code>Download</code>（下载）按钮。软件将自动向闪电猫托管服务器发起请求并解析节点配置文件。
5. <strong>激活配置文件</strong>：下载成功后，列表中会出现名为 <code>SpeedCAT</code> 或包含闪电猫标识的配置卡片，左键点击该卡片使其变为选中的高亮状态（通常显示蓝色或绿色的侧边指示条）。

<h2 id="step-4">四、选择运行模式与节点代理</h2>

配置文件激活后，需要开启代理服务：

1. <strong>进入代理节点列表</strong>：在客户端左侧菜单中点击 <code>Proxies</code>（代理）选项。
2. <strong>切换路由模式</strong>：在顶部的模式切换栏中，选择 <strong>Rule（规则模式）</strong>。规则模式能够智能识别国内与海外流量，国内访问保持直连，海外请求才通过闪电猫节点中继。
3. <strong>选择服务器节点</strong>：展开 <code>Rule</code> 节点组，挑选一个延时低、响应快的节点（如香港、日本或新加坡节点）。
4. <strong>开启系统代理</strong>：回到客户端 <code>General</code>（基础设置）选项，将 <code>System Proxy</code>（系统代理）开关切换为 ON。此时系统任务栏右下角图标变亮，代表代理已正常接管浏览器流量。

<h2 id="step-5">五、Windows 平台常见配置问题排查</h2>

- <strong>端口被占用报错</strong>：若软件提示 <code>Port 7890 in use</code>，说明本地有其它代理软件或安全软件占用了该端口。可在基础设置中将混合端口（Mixed Port）修改为 7893 或其它未占用端口。
- <strong>系统防火墙拦截</strong>：第一次启动时 Windows 防火墙若弹出网络授权提示，请勾选“允许在专用和公用网络上通信”。
- <strong>TUN 虚拟网卡模式</strong>：对于部分不遵循系统代理设置的软件，可以在客户端中开启 <code>TUN Mode</code>（虚拟网卡接管），开启前需安装 Service Mode 驱动。

了解更多排查细节，请参阅 <a href="/guides/speedcat-connection-troubleshooting/">闪电猫连接故障排查步骤</a>。
`
  },
  {
    slug: 'speedcat-android-tutorial',
    title: '闪电猫Android使用教程：订阅添加与连接排查',
    description: '闪电猫 SpeedCAT 在 Android 智能手机与平板设备上的安装配置教程，解决后台被杀、电池优化与订阅刷新异常。',
    date: '2026-10-08',
    readTime: '8 分钟',
    category: '客户端教程',
    keywords: ['闪电猫', 'Android配置', 'Clash Android', '安卓订阅', '后台保活'],
    summary: '本文为 Android 手机与平板用户提供闪电猫 SpeedCAT 节点的详细配置步骤，涵盖主流安卓客户端的配置导入、应用分流设置以及防止后台进程被杀的系统保活技巧。',
    toc: [
      { id: 'android-1', text: '一、Android 客户端选型与准备' },
      { id: 'android-2', text: '二、获取并导入闪电猫订阅' },
      { id: 'android-3', text: '三、分应用代理与分流模式配置' },
      { id: 'android-4', text: '四、关键步骤：Android 系统后台保活设置' },
      { id: 'android-5', text: '五、安卓端常见连接故障排查' }
    ],
    relatedSlugs: ['speedcat-beginner-guide', 'speedcat-iphone-guide', 'speedcat-connection-troubleshooting'],
    content: `
<div class="article-toc">
  <div class="toc-title">本文目录</div>
  <ul>
    <li><a href="#android-1">一、Android 客户端选型与准备</a></li>
    <li><a href="#android-2">二、获取并导入闪电猫订阅</a></li>
    <li><a href="#android-3">三、分应用代理与分流模式配置</a></li>
    <li><a href="#android-4">四、关键步骤：Android 系统后台保活设置</a></li>
    <li><a href="#android-5">五、安卓端常见连接故障排查</a></li>
  </ul>
</div>

<h2 id="android-1">一、Android 客户端选型与准备</h2>

在 Android 移动平台上，推荐使用支持 Clash 内核的通用代理客户端（如 Clash for Android 或 Surfboard）。

使用前的准备要求：
- 运行 Android 7.0 及以上版本的手机或平板；
- 已成功注册闪电猫账号并拥有在售的有效订阅（可随时通过 <a href="https://varnexa.lingdongaff.com/#/?code=HHoxxHGa" target="_blank" rel="sponsored nofollow noopener">闪电猫后台入口</a> 查询）；
- 手机中已下载安装好对应的代理应用 APK。

<h2 id="android-2">二、获取并导入闪电猫订阅</h2>

1. 使用手机浏览器登录闪电猫管理控制台。
2. 在仪表盘页面找到 <strong>一键导入 / 复制订阅</strong> 按钮，点击“复制 Clash 订阅地址”。
3. 打开手机上的 Clash 客户端，点击主界面的 <code>配置</code>（Profiles）管理。
4. 点击右上角 <code>+</code> 加号，选择 <code>URL</code>（从 URL 导入）。
5. 在“名称”栏中输入 <code>闪电猫</code>，在“URL”栏中粘贴刚才复制的订阅链接。
6. 设置自动更新间隔（建议设为 1440 分钟，即 24 小时自动刷新一次），然后点击右上角保存并下载。
7. 在配置列表中选中刚刚下载成功的闪电猫配置文件。

<h2 id="android-3">三、分应用代理与分流模式配置</h2>

为了避免国内应用（如微信、淘宝、美团）走代理导致定位异常或消耗闪电猫套餐流量，建议配置分应用代理：

1. 打开客户端 <code>设置</code> -> <code>网络</code> -> <code>分应用代理</code>（Bypass APPs）。
2. 开启分应用代理开关，选择 <code>仅代理选中应用</code> 或 <code>绕过选中应用</code>。
3. 若选择“仅代理选中应用”，只需勾选海外办公、浏览器及流媒体软件即可。
4. 在主界面将路由模式设置为 <strong>规则模式（Rule）</strong>，然后点击开关启动 VPN 服务。首次启动时系统会弹出 VpnService 申请窗口，请点击“允许”。

<h2 id="android-4">四、关键步骤：Android 系统后台保活设置</h2>

很多安卓用户遇到锁屏后断连的情况，绝大多数是因为系统激进的省电策略杀掉了代理进程。解决步骤如下：

- <strong>关闭电池优化</strong>：进入系统 <code>设置</code> -> <code>应用管理</code> -> 选择代理客户端 -> <code>电池使用</code> -> 修改为 <code>无限制</code> 或 <code>允许后台运行</code>。
- <strong>允许自启动与关联启动</strong>：在应用权限中开启“允许后台自启动”。
- <strong>多任务卡片加锁</strong>：划出安卓近期任务后台卡片，长按代理软件卡片，点击“锁定”小锁图标。

<h2 id="android-5">五、安卓端常见连接故障排查</h2>

- <strong>流量不扣减但网页打不开</strong>：检查手机系统时间是否与北京时间一致，相差 1 分钟以上会导致 SSL 加密握手失败。
- <strong>切换 Wi-Fi 与移动网络后无网</strong>：先在客户端中停止服务，重新开启开关触发重新握手。
- 更详细排查可查看 <a href="/guides/speedcat-traffic-usage/">闪电猫流量查看与异常消耗说明</a>。
`
  },
  {
    slug: 'speedcat-iphone-guide',
    title: '闪电猫iPhone使用指南：客户端兼容与订阅注意事项',
    description: '闪电猫 SpeedCAT 在 iOS / iPadOS 系统下的安装配置教程，解析客户端下载、VPN描述文件安装及苹果生态使用规范。',
    date: '2026-10-08',
    readTime: '8 分钟',
    category: '客户端教程',
    keywords: ['闪电猫', 'iPhone配置', 'iOS订阅', 'Shadowrocket', 'VPN描述文件'],
    summary: '本文专为 iPhone 与 iPad 用户撰写，详细说明如何在 iOS 生态下获取兼容客户端、导入闪电猫 SpeedCAT 订阅链接、安装系统网络扩展描述文件及日常维护要点。',
    toc: [
      { id: 'ios-1', text: '一、iOS 客户端环境与获取规范' },
      { id: 'ios-2', text: '二、从闪电猫控制台复制订阅' },
      { id: 'ios-3', text: '三、一键导入或手动添加配置' },
      { id: 'ios-4', text: '四、授信系统网络扩展 (VPN Profile)' },
      { id: 'ios-5', text: '五、iOS 平台安全与订阅注意事项' }
    ],
    relatedSlugs: ['speedcat-beginner-guide', 'speedcat-android-tutorial', 'speedcat-connection-troubleshooting'],
    content: `
<div class="article-toc">
  <div class="toc-title">本文目录</div>
  <ul>
    <li><a href="#ios-1">一、iOS 客户端环境与获取规范</a></li>
    <li><a href="#ios-2">二、从闪电猫控制台复制订阅</a></li>
    <li><a href="#ios-3">三、一键导入或手动添加配置</a></li>
    <li><a href="#ios-4">四、授信系统网络扩展 (VPN Profile)</a></li>
    <li><a href="#ios-5">五、iOS 平台安全与订阅注意事项</a></li>
  </ul>
</div>

<h2 id="ios-1">一、iOS 客户端环境与获取规范</h2>

由于苹果公司针对不同国家和地区的 App Store 实行区域化的软件上下架政策，支持标准代理内核的客户端软件（例如 Shadowrocket、Stash、Quantumult X 或 Loon）通常需要在非中国大陆区的 Apple ID 下搜索下载。

在开始配置前，请准备好：
- 运行 iOS 14.0 或更高版本的 iPhone / iPad 设备；
- 已获取支持的代理客户端软件；
- 已完成闪电猫账号注册。如需选购或核实套餐，可随时通过 <a href="https://varnexa.lingdongaff.com/#/?code=HHoxxHGa" target="_blank" rel="sponsored nofollow noopener">闪电猫官方控制台入口</a> 登录管理。

<h2 id="ios-2">二、从闪电猫控制台复制订阅</h2>

1. 使用 iPhone 上的 Safari 浏览器登录闪电猫用户后台。
2. 进入“订阅管理”或仪表盘。
3. 找到适合您客户端的订阅类型按钮（如点击 <strong>一键导入小火箭</strong>，或者点击 <strong>复制通用订阅/Shadowrocket订阅</strong>）。

<h2 id="ios-3">三、一键导入或手动添加配置</h2>

### 方法 A：一键唤起导入（推荐）
在 Safari 浏览器中点击“一键导入到 Shadowrocket”，系统会自动弹窗提示“在‘Shadowrocket’中打开吗？”，点击 <code>打开</code>。客户端将自动启动并完成订阅下载。

### 方法 B：手动剪贴板导入
1. 若选择手理复制，在控制台点击“复制订阅地址”。
2. 打开客户端软件，点击右上角 <code>+</code> 加号。
3. 类型（Type）选择 <code>Subscribe</code>（订阅）。
4. 在 <code>URL</code> 输入框中粘贴刚刚复制的闪电猫订阅地址，备注命名为 <code>闪电猫</code>。
5. 点击右上角 <code>保存</code>（Save），客户端将自动拉取全部节点服务器列表。

<h2 id="ios-4">四、授信系统网络扩展 (VPN Profile)</h2>

当您完成节点拉取后，开启连接需要获得 iOS 系统的安全授权：

1. 在客户端主界面勾选一个延迟较低的闪电猫节点。
2. 将顶部的未连接开关切换为 <strong>开启</strong>。
3. 首次开启时，iOS 系统将弹出一个标准安全提示：“‘Shadowrocket’想添加 VPN 配置”。
4. 点击 <code>允许</code>（Allow），在随后弹出的系统界面中输入您的 iPhone 锁屏密码或通过 Face ID 完成身份验证。
5. 验证完成后，状态栏顶部将显示 <code>VPN</code> 图标，代表代理服务开始生效。

<h2 id="ios-5">五、iOS 平台安全与订阅注意事项</h2>

- <strong>选择配置分流模式</strong>：在客户端全局路由菜单中，请保持选择 <code>配置</code>（Config）模式，避免选为 <code>代理</code>（Proxy/Global）导致国内应用走代理。
- <strong>iCloud 隐私保留与杀毒冲突</strong>：无需开启 iCloud 私密转网功能，避免与代理内核产生路由冲突。
- 更多疑难解决可查阅 <a href="/faq/">闪电猫订阅常见问题 FAQ</a>。
`
  },
  {
    slug: 'speedcat-traffic-usage',
    title: '闪电猫流量使用说明：如何查看余额及避免异常消耗',
    description: '闪电猫 SpeedCAT 流量资产管理指南，详细讲解后台剩余流量查看、流量扣减规则以及防止后台静默跑流量的技巧。',
    date: '2026-10-08',
    readTime: '8 分钟',
    category: '使用说明',
    keywords: ['闪电猫', '流量查看', '流量异常', '余额查询', '防跑流量'],
    summary: '本文帮助闪电猫 SpeedCAT 用户掌握精确查看账户流量余额的方法，剖析各类网络应用对带宽的真实消耗量，并提供防止系统后台静默跑流量的实用技巧。',
    toc: [
      { id: 'traffic-1', text: '一、如何在闪电猫后台精准查询流量余额' },
      { id: 'traffic-2', text: '二、网络应用的真实流量消耗模型' },
      { id: 'traffic-3', text: '三、造成流量异常快速消耗的四大隐形元凶' },
      { id: 'traffic-4', text: '四、防止后台静默偷跑流量的实操策略' },
      { id: 'traffic-5', text: '五、流量用尽后的处理机制说明' }
    ],
    relatedSlugs: ['speedcat-beginner-guide', 'speedcat-windows-tutorial', 'speedcat-connection-troubleshooting'],
    content: `
<div class="article-toc">
  <div class="toc-title">本文目录</div>
  <ul>
    <li><a href="#traffic-1">一、如何在闪电猫后台精准查询流量余额</a></li>
    <li><a href="#traffic-2">二、网络应用的真实流量消耗模型</a></li>
    <li><a href="#traffic-3">三、造成流量异常快速消耗的四大隐形元凶</a></li>
    <li><a href="#traffic-4">四、防止后台静默偷跑流量的实操策略</a></li>
    <li><a href="#traffic-5">五、流量用尽后的处理机制说明</a></li>
  </ul>
</div>

<h2 id="traffic-1">一、如何在闪电猫后台精准查询流量余额</h2>

在使用闪电猫 SpeedCAT 订阅服务时，实时掌握自己的流量资产使用进度可以有效避免月中断网。

查看流量的官方正规途径：
1. 打开浏览器访问 <a href="https://varnexa.lingdongaff.com/#/?code=HHoxxHGa" target="_blank" rel="sponsored nofollow noopener">闪电猫官方平台管理页面</a>。
2. 登录您的个人账户，直接查看控制台首屏的“流量统计卡片”。
3. 界面会直观展示：<strong>本期已用流量</strong>、<strong>总配额</strong>、<strong>百分比进度条</strong>，以及下一次流量重置的预计时间。
4. 部分先进客户端（如支持配置返回 Header 的软件）也可以在配置名称下方直接显示当前剩余 GB 数量。

<h2 id="traffic-2">二、网络应用的真实流量消耗模型</h2>

许多用户对不同网络行为消耗的流量缺乏直观概念。以下是常见场景的典型流量消耗标准：

- <strong>纯文字聊天与代码编辑</strong>：与 ChatGPT/Claude 文本对话、查阅 GitHub 代码或收发纯文本邮件，每小时消耗约 <strong>5MB ~ 20MB</strong>。
- <strong>社交媒体与高清图文</strong>：浏览含有大量原图的网页、社交圈或设计素材库，每小时消耗约 <strong>200MB ~ 500MB</strong>。
- <strong>1080P 高清视频播放</strong>：观看 YouTube、Netflix 或 Twitch 的 1080P 视频，每小时消耗约 <strong>1.5GB ~ 2.5GB</strong>。
- <strong>4K 超高清视频播放</strong>：4K 画质流媒体每小时消耗高达 <strong>6GB ~ 12GB</strong>。

<h2 id="traffic-3">三、造成流量异常快速消耗的四大隐形元凶</h2>

如果您发现“没怎么看视频，流量却几小时少了十几GB”，通常由以下原因引起：

1. <strong>误开启全局代理模式（Global）</strong>：在全局模式下，系统后台下载 Windows 系统更新、网盘同步国内文件、Steam 游戏更新全走代理，迅速刷掉大量额度。
2. <strong>云端自动备份</strong>：手机或电脑端的 OneDrive、Google Photos、iCloud 开启了后台自动同步，将本地大文件静默上传至海外云端。
3. <strong>客户端频繁全节点测速</strong>：在代理软件中连续点击“批量测速/一键测速”。每一次测速相当于向所有节点发起满速下载测试，几十个节点测一次可能瞬间消耗 1GB~3GB 流量。
4. <strong>P2P 下载与 BT 种子</strong>：在开启代理状态下使用迅雷、BitComet 等工具下载 BT 种子，导致极高的多线程并发上传下载。

<h2 id="traffic-4">四、防止后台静默偷跑流量的实操策略</h2>

- <strong>坚决常驻规则模式</strong>：确保客户端工作在 <code>Rule</code> 智能分流模式下。
- <strong>禁止 P2P 走代理</strong>：在客户端配置中把 BT 协议或常见下载软件设为 <code>Direct</code>（直连）。
- <strong>控制测速频率</strong>：仅在节点连接异常时对单个节点进行延迟测试，切勿频繁进行全量满速测速。

<h2 id="traffic-5">五、流量用尽后的处理机制说明</h2>

若当期流量在重置日到来前提前耗尽：
- 闪电猫节点服务将暂时不可用（客户端提示 403 或 Connection Refused）。
- 您可以登录后台查看是否提供“重置流量包”扩展服务，或等待下一个重置周期的到来。
- 关于具体重置规则与到期时间计算，请参考 <a href="/pricing/">闪电猫套餐说明页</a>。
`
  },
  {
    slug: 'speedcat-connection-troubleshooting',
    title: '闪电猫常见连接问题：网络、订阅和节点检查步骤',
    description: '闪电猫 SpeedCAT 节点连接故障排查标准化闭环指南，涵盖节点超时、订阅拉取失败、DNS污染及系统时间同步问题。',
    date: '2026-10-08',
    readTime: '9 分钟',
    category: '故障排查',
    keywords: ['闪电猫', '连接失败', '节点超时', '订阅刷新报错', '故障排查'],
    summary: '本文提供一套结构化的闪电猫 SpeedCAT 连接故障八步闭环排查法，帮助用户在遇到节点全部超时、网页无法打开或订阅更新报错时，迅速定位并自行解决问题。',
    toc: [
      { id: 'trouble-1', text: '一、诊断前置准备与基本原则' },
      { id: 'trouble-2', text: '二、标准化闭环排查八步清单' },
      { id: 'trouble-3', text: '三、核心高频隐患：系统时钟偏差排查' },
      { id: 'trouble-4', text: '四、订阅更新失败的四种常见报错与应对' },
      { id: 'trouble-5', text: '五、如何提交有效的技术工单求助' }
    ],
    relatedSlugs: ['speedcat-beginner-guide', 'speedcat-windows-tutorial', 'speedcat-traffic-usage'],
    content: `
<div class="article-toc">
  <div class="toc-title">本文目录</div>
  <ul>
    <li><a href="#trouble-1">一、诊断前置准备与基本原则</a></li>
    <li><a href="#trouble-2">二、标准化闭环排查八步清单</a></li>
    <li><a href="#trouble-3">三、核心高频隐患：系统时钟偏差排查</a></li>
    <li><a href="#trouble-4">四、订阅更新失败的四种常见报错与应对</a></li>
    <li><a href="#trouble-5">五、如何提交有效的技术工单求助</a></li>
  </ul>
</div>

<h2 id="trouble-1">一、诊断前置准备与基本原则</h2>

当遇到闪电猫节点无法正常建立代理连接时，请切忌盲目乱改客户端配置或频繁卸载软件。按照由简入繁的顺序逐步诊断，通常 90% 以上的问题都可以在几分钟内恢复。

<h2 id="trouble-2">二、标准化闭环排查八步清单</h2>

遇到断连时，请按顺序检查以下 8 个关键节点：

1. <strong>测试本地网络</strong>：关闭代理软件，直接用浏览器打开国内网站。若国内网页亦无法打开，请先修复本地路由器或移动数据网络。
2. <strong>检查账户服务状态</strong>：登录 <a href="https://varnexa.lingdongaff.com/#/?code=HHoxxHGa" target="_blank" rel="sponsored nofollow noopener">闪电猫后台管理中心</a>，确认套餐是否因逾期未续费而停机，或者当期流量配额是否已用尽。
3. <strong>刷新订阅节点列表</strong>：在客户端配置界面点击“更新订阅”，拉取服务商最新的服务器 IP 地址与端口映射。
4. <strong>校验系统北京时间</strong>：检查电脑或手机的时间是否精确到秒（详见第三章）。
5. <strong>核查系统代理开关</strong>：确认客户端的 <code>System Proxy</code> 开关已正常打开，且端口未被其它安全软件拦截。
6. <strong>核实运行模式</strong>：确认软件运行在 <code>Rule</code>（规则模式）或 <code>Global</code>（全局模式），而不是误切成了 <code>Direct</code>（直连模式）。
7. <strong>手动切换节点</strong>：在节点列表中尝试手动选择另一个地区的节点（如从香港节点切至日本节点）。
8. <strong>清理 DNS 缓存</strong>：在 Windows 命令行中运行 <code>ipconfig /flushdns</code> 清理本地旧缓存。

<h2 id="trouble-3">三、核心高频隐患：系统时钟偏差排查</h2>

<strong>系统时间与真实标准北京时间偏差超过 60 秒，是引发“所有节点全红超时”最高频的罪魁祸首！</strong>

因为现代代理加密协议（如 TLS 握手、Shadowsocks 密匙）强制要求数据包时间戳验证。如果设备时间不准，服务端安全策略会直接拒绝连接。

- <strong>Windows 修复</strong>：进入系统 <code>日期和时间设置</code> -> 开启“自动设置时间” -> 点击“立即同步”按钮。
- <strong>Android / iOS 修复</strong>：进入系统时间设置，开启“自动提供时间/通过网络同步时间”。

<h2 id="trouble-4">四、订阅更新失败的四种常见报错与应对</h2>

- <strong>HTTP 401 / 403 Unauthorized</strong>：订阅 Token 已失效或账户已被后台暂停。请前往后台重新重置并复制最新订阅 URL。
- <strong>Network Timeout / Request Failed</strong>：本地网络运营商 DNS 干扰了订阅域名。可尝试开启手机移动热点再次拉取。
- <strong>Invalid YAML / Format Error</strong>：复制订阅 URL 时前后混入了空格、中文字符，或者误把网页注册地址当成了订阅填入。
- <strong>Empty Profile / 节点数为0</strong>：服务商后台正在维护节点池。

<h2 id="trouble-5">五、如何提交有效的技术工单求助</h2>

若执行上述排查后依然无法解决，请登录闪电猫后台提交工单。为了帮助技术人员快速定位问题，请在工单中附带以下信息：
1. 您的操作系统版本（如 Win11, iOS 17）；
2. 使用的客户端软件及版本号；
3. 出现的报错截图或日志（Log）提示。

更多参考信息可查阅 <a href="/faq/">闪电猫常见问题 FAQ</a>。
`
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}
