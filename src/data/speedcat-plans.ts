export interface SpeedcatPlan {
  id: string;
  name: string;
  badge?: string;
  price: number | string; // e.g. "以官网后台为准" or numeric price
  billingCycle: string;
  trafficLimit: string;
  validity: string;
  resetRule: string;
  deviceLimit: string;
  notes: string;
  verificationDate: string;
  verificationStatus: '待核实' | '公开参考' | '需后台确认';
}

// 独有的闪电猫套餐统一数据源
export const speedcatPlans: SpeedcatPlan[] = [
  {
    id: 'plan-mini',
    name: '迷你猫（基础版）',
    badge: '入门轻量',
    price: '待后台核实',
    billingCycle: '月付 / 季付 / 年付（待确认）',
    trafficLimit: '轻量流量配额（待确认）',
    validity: '根据所选周期生效',
    resetRule: '流量重置规则以闪电猫后台显示为准',
    deviceLimit: '支持个人常用多终端连接',
    notes: '适用于日常轻度网页浏览、邮件收发及基础通讯助手。具体在售状态与实时价格请登录官网收银台核实。',
    verificationDate: '2026-10-08',
    verificationStatus: '待核实'
  },
  {
    id: 'plan-speed',
    name: '闪电猫（标准版）',
    badge: '推荐备选',
    price: '待后台核实',
    billingCycle: '月付 / 季付 / 年付（待确认）',
    trafficLimit: '标准流量配额（待确认）',
    validity: '根据所选周期生效',
    resetRule: '流量重置规则以闪电猫后台显示为准',
    deviceLimit: '支持个人多设备协同使用',
    notes: '适用于标准办公、中高清视频观赏与多终端协同使用。请以闪电猫实时购买页面为准。',
    verificationDate: '2026-10-08',
    verificationStatus: '待核实'
  },
  {
    id: 'plan-thunder',
    name: '霹雳猫（进阶版）',
    badge: '大流量配额',
    price: '待后台核实',
    billingCycle: '月付 / 季付 / 年付（待确认）',
    trafficLimit: '高阶流量配额（待确认）',
    validity: '根据所选周期生效',
    resetRule: '流量重置规则以闪电猫后台显示为准',
    deviceLimit: '支持多终端并发连接',
    notes: '适用于大流量下载、远程开发协作与家庭多端共享等重度场景。',
    verificationDate: '2026-10-08',
    verificationStatus: '待核实'
  },
  {
    id: 'plan-annual-special',
    name: '特惠年付套餐',
    badge: '限时活动',
    price: '待后台核实',
    billingCycle: '按年结算',
    trafficLimit: '年度配额（待确认）',
    validity: '365天（待确认）',
    resetRule: '请以买前官方提示为准',
    deviceLimit: '个人多终端',
    notes: '历史活动保留档位，当期是否继续开放购买需登录平台管理中心确认。',
    verificationDate: '2026-10-08',
    verificationStatus: '需后台确认'
  }
];

export const planNotices = [
  '本页面呈现的闪电猫 SpeedCAT 套餐信息属于结构化待补充状态，不包含任何自行虚构的价格与算力推导。',
  '实际价格、币种结算、流量包大小及重置生效日期均以闪电猫官方订阅收银台公布的实时数据为准。',
  '建议用户在初次使用时，通过官方后台查看最新开放的套餐门槛与使用条款。'
];
