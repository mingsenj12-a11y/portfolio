import ScrollReveal, { StaggerChildren, StaggerItem } from './ScrollReveal';
import {
  GrowthCurve, FunnelChart, BIDashboard, ABTest,
  UserPersona, OKRCard, StatCard, BarChartViz,
  Timeline, CostCompare
} from './Charts';

/* ── Helper: section wrapper ── */
function Section({ id, label, accent, title, subtitle, children }) {
  return (
    <section id={id} className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
              style={{ background: `${accent}15`, color: accent }}>
              {label}
            </div>
            <span className="text-xs text-[#888894] font-mono tracking-wider uppercase">Case Study</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">{title}</h2>
          <p className="text-[#888894] text-lg mb-12 max-w-2xl">{subtitle}</p>
        </ScrollReveal>
        {children}
      </div>
    </section>
  );
}

/* ── Case 1: 校园活动增长项目 ── */
function CampusGrowth() {
  const growthData = [
    { name: 'W1', value: 120 }, { name: 'W2', value: 280 }, { name: 'W3', value: 450 },
    { name: 'W4', value: 820 }, { name: 'W5', value: 1300 }, { name: 'W6', value: 2100 },
    { name: 'W7', value: 3500 }, { name: 'W8', value: 5200 },
  ];

  const funnelData = [
    { name: '活动曝光', value: 52000, rate: '100%' },
    { name: '点击参与', value: 18400, rate: '35.4%' },
    { name: '完成报名', value: 8200, rate: '44.6%' },
    { name: '现场签到', value: 5100, rate: '62.2%' },
    { name: '社群沉淀', value: 2300, rate: '45.1%' },
  ];

  const okrs = [
    {
      objective: '打造校园现象级活动 IP，单场触达 5000+',
      status: 'exceeded',
      keyResults: [
        { label: '活动曝光量 ≥ 50000', progress: 104 },
        { label: '到场率 ≥ 40%', progress: 112 },
        { label: '社群转化率 ≥ 20%', progress: 95 },
      ],
    },
    {
      objective: '建立可复用的活动运营 SOP',
      status: 'completed',
      keyResults: [
        { label: '输出标准化执行手册', progress: 100 },
        { label: '跨部门协作响应 < 2h', progress: 100 },
      ],
    },
  ];

  const timeline = [
    { date: 'Week 1-2', title: '用户调研 + 竞品分析', desc: '发放问卷 500 份，输出用户画像报告', dotColor: 'bg-[#3b82f6]', dotBg: 'bg-[#3b82f6]/20' },
    { date: 'Week 3', title: '种子用户冷启动', desc: '招募 50 位校园 KOC，人均邀请 12 人', metric: '↑ 首周 600+ 种子用户', dotColor: 'bg-[#8b5cf6]', dotBg: 'bg-[#8b5cf6]/20' },
    { date: 'Week 4-5', title: '裂变增长期', desc: '阶梯奖励 + 限时任务体系上线', metric: '↑ 裂变系数 K=2.4', dotColor: 'bg-[#3b82f6]', dotBg: 'bg-[#3b82f6]/20' },
    { date: 'Week 6', title: '活动爆发期', desc: '线下活动日，实时数据大屏 + 社群直播', metric: '↑ 单日新增 1800+', dotColor: 'bg-[#ec4899]', dotBg: 'bg-[#ec4899]/20' },
    { date: 'Week 7-8', title: '长尾运营', desc: '社群每日话题 + UGC 激励', metric: '✓ 社群活跃度 68%', dotColor: 'bg-[#10b981]', dotBg: 'bg-[#10b981]/20' },
  ];

  return (
    <Section id="case-1" label="01" accent="#3b82f6"
      title="校园活动增长项目"
      subtitle="从 0 到 1 搭建校园增长引擎，8 周触达 5 万+，沉淀可复用 SOP">

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <StaggerChildren>
          <StaggerItem><GrowthCurve data={growthData} title="用户增长曲线" subtitle="周活跃用户 · 8周增长 43x" accent="#3b82f6" /></StaggerItem>
        </StaggerChildren>
        <StaggerChildren>
          <StaggerItem><FunnelChart data={funnelData} title="活动转化漏斗" subtitle="曝光 → 沉淀 全链路追踪" /></StaggerItem>
        </StaggerChildren>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <ScrollReveal><OKRCard okrs={okrs} title="OKR 追踪" /></ScrollReveal>
        <ScrollReveal><Timeline events={timeline} title="项目时间线" /></ScrollReveal>
      </div>

      <ScrollReveal>
        <div className="bg-[#141416] rounded-2xl border border-[#2a2a2e] p-6">
          <h4 className="text-sm font-semibold text-[#f5f5f7] mb-4">核心策略</h4>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: '种子用户策略', desc: '筛选 50 位校园 KOC，利用社交关系链冷启动。人均邀请 12 人，首周积累 600+ 种子用户。', icon: '🌱' },
              { title: '阶梯奖励机制', desc: '设计 3 级奖励梯度，裂变系数 K=2.4。人均分享 3.7 次，获客成本降低 60%。', icon: '🎯' },
              { title: '实时数据驱动', desc: '搭建活动数据看板，实时监控各渠道转化率。根据数据动态调整资源分配，ROI 提升 2.8x。', icon: '📊' },
            ].map((s, i) => (
              <div key={i} className="bg-[#0a0a0b] rounded-xl p-5 border border-[#2a2a2e]">
                <span className="text-2xl mb-3 block">{s.icon}</span>
                <h5 className="text-sm font-semibold text-[#f5f5f7] mb-2">{s.title}</h5>
                <p className="text-xs text-[#888894] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}

/* ── Case 2: 短视频账号运营 ── */
function VideoOps() {
  const growth = [
    { name: '1月', value: 1200 }, { name: '2月', value: 3400 }, { name: '3月', value: 8900 },
    { name: '4月', value: 21000 }, { name: '5月', value: 45000 }, { name: '6月', value: 82000 },
  ];

  const content = [
    { name: '教程类', value: 42 },
    { name: 'Vlog', value: 28 },
    { name: '测评', value: 18 },
    { name: '挑战', value: 12 },
  ];

  const metrics = [
    { label: '总播放量', value: '820K', trend: 234, progress: 82 },
    { label: '互动率', value: '8.7%', trend: 45, progress: 87 },
    { label: '完播率', value: '62%', trend: 18, progress: 62 },
    { label: '涨粉数', value: '12.6K', trend: 156, progress: 76 },
  ];

  const timeline = [
    { date: 'Month 1', title: '账号定位 + 内容矩阵搭建', desc: '确定「科技生活」垂类，产出 15 条测试内容', dotColor: 'bg-[#ec4899]', dotBg: 'bg-[#ec4899]/20' },
    { date: 'Month 2-3', title: '爆款内容复制', desc: '基于数据筛选高互动内容公式，批量复制', metric: '↑ 3条10万+播放视频', dotColor: 'bg-[#f59e0b]', dotBg: 'bg-[#f59e0b]/20' },
    { date: 'Month 4', title: '算法优化期', desc: '调整发布时间、标签策略、封面设计', metric: '↑ 推荐流量占比从 23% → 58%', dotColor: 'bg-[#3b82f6]', dotBg: 'bg-[#3b82f6]/20' },
    { date: 'Month 5', title: '商业变现启动', desc: '品牌合作 3 单，单条报价 ¥2,000-5,000', dotColor: 'bg-[#10b981]', dotBg: 'bg-[#10b981]/20' },
    { date: 'Month 6', title: '矩阵化运营', desc: '复制成功模式至 2 个新账号', metric: '✓ 矩阵总粉丝 2.8 万', dotColor: 'bg-[#8b5cf6]', dotBg: 'bg-[#8b5cf6]/20' },
  ];

  return (
    <Section id="case-2" label="02" accent="#ec4899"
      title="短视频账号运营"
      subtitle="6 个月从 0 到 8.2 万粉丝，累计播放 82 万，跑通内容-增长-变现闭环">

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <StaggerChildren>
          <StaggerItem><GrowthCurve data={growth} title="粉丝增长曲线" subtitle="月度累计粉丝 · 6个月增长 68x" accent="#ec4899" /></StaggerItem>
        </StaggerChildren>
        <StaggerChildren>
          <StaggerItem><BIDashboard metrics={metrics} title="关键指标看板" /></StaggerItem>
        </StaggerChildren>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <ScrollReveal><BarChartViz data={content} title="内容类型分布" subtitle="按播放量加权 (%)" accent="#ec4899" /></ScrollReveal>
        <ScrollReveal><Timeline events={timeline} title="运营里程碑" /></ScrollReveal>
      </div>

      <ScrollReveal>
        <div className="bg-[#141416] rounded-2xl border border-[#2a2a2e] p-6">
          <h4 className="text-sm font-semibold text-[#f5f5f7] mb-4">爆款内容公式</h4>
          <div className="grid md:grid-cols-4 gap-3">
            {[
              { label: '黄金 3 秒', value: '开头悬念 / 反常识提问', rate: '+35%' },
              { label: '节奏控制', value: '每 3-5s 信息/画面变化', rate: '+28%' },
              { label: '互动引导', value: '评论区投票 / 话题讨论', rate: '+42%' },
              { label: '发布时间', value: '工作日 18:30-19:30', rate: '+22%' },
            ].map((h, i) => (
              <div key={i} className="bg-[#0a0a0b] rounded-xl p-4 border border-[#2a2a2e] text-center">
                <p className="text-xs text-[#888894] mb-2">{h.label}</p>
                <p className="text-xs text-[#f5f5f7] font-medium mb-2">{h.value}</p>
                <span className="text-xs font-bold text-[#10b981] font-mono">{h.rate}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}

/* ── Case 3: 用户行为数据分析 ── */
function UserAnalytics() {
  const cohort = [
    { name: 'Week 1', value: 100 },
    { name: 'Week 2', value: 72 },
    { name: 'Week 3', value: 56 },
    { name: 'Week 4', value: 44 },
    { name: 'Week 5', value: 36 },
    { name: 'Week 6', value: 31 },
  ];

  const metrics = [
    { label: 'DAU', value: '3,847', trend: 28, progress: 77 },
    { label: '留存率 D7', value: '52%', trend: 12, progress: 52 },
    { label: '人均时长', value: '18min', trend: 8, progress: 60 },
    { label: '分享率', value: '23%', trend: 34, progress: 46 },
  ];

  const personas = [
    {
      name: '效率追求者', desc: '大三/大四 · 准备求职', avatar: '💼',
      bg: 'bg-[#3b82f6]/10', percent: '38%',
      tags: ['高频使用', '付费意愿强', '功能导向', '留存率 65%'],
    },
    {
      name: '社交探索者', desc: '大一/大二 · 拓展人脉', avatar: '🎉',
      bg: 'bg-[#ec4899]/10', percent: '32%',
      tags: ['分享活跃', 'UGC 贡献者', '裂变节点', '留存率 48%'],
    },
    {
      name: '内容消费者', desc: '全年级 · 信息获取', avatar: '📱',
      bg: 'bg-[#8b5cf6]/10', percent: '22%',
      tags: ['浏览为主', '低互动', '价格敏感', '留存率 35%'],
    },
    {
      name: '沉默大多数', desc: '被动参与 · 低频', avatar: '👤',
      bg: 'bg-[#10b981]/10', percent: '8%',
      tags: ['被动触达', '需激活', '流失风险', '留存率 15%'],
    },
  ];

  return (
    <Section id="case-3" label="03" accent="#8b5cf6"
      title="用户行为数据分析"
      subtitle="基于真实行为数据构建用户画像与留存模型，驱动精细化运营决策">

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <StaggerChildren>
          <StaggerItem><GrowthCurve data={cohort} title="用户留存曲线" subtitle="周留存率 · 6 周追踪" accent="#8b5cf6" /></StaggerItem>
        </StaggerChildren>
        <StaggerChildren>
          <StaggerItem><UserPersona personas={personas} title="用户画像分层" /></StaggerItem>
        </StaggerChildren>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <ScrollReveal><BIDashboard metrics={metrics} title="核心数据仪表盘" /></ScrollReveal>
        <ScrollReveal>
          <div className="bg-[#141416] rounded-2xl border border-[#2a2a2e] p-6">
            <h4 className="text-sm font-semibold text-[#f5f5f7] mb-4">关键洞察</h4>
            <div className="space-y-4">
              {[
                { title: '留存拐点', desc: '用户在 Day 3 后留存骤降 40% → 在第 3 天触发个性化推送，D7 留存提升至 52%', color: '#3b82f6' },
                { title: '内容消费偏好', desc: '短视频内容完播率 62%，图文仅 35% → 调整内容策略，视频占比从 30% 提升至 65%', color: '#8b5cf6' },
                { title: '分享动机分析', desc: '「实用价值」是分享的首要动机 (48%) → 在内容中强化干货属性，分享率提升 34%', color: '#ec4899' },
              ].map((insight, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-1 rounded-full shrink-0" style={{ background: insight.color }} />
                  <div>
                    <p className="text-sm font-medium text-[#f5f5f7]">{insight.title}</p>
                    <p className="text-xs text-[#888894] mt-1 leading-relaxed">{insight.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}

/* ── Case 4: AI 提效项目 ── */
function AITools() {
  const abVariants = [
    {
      name: '对照组 (人工)',
      color: 'bg-[#888894]',
      winner: false,
      metrics: [
        { label: '内容产出 / 周', value: '12 篇' },
        { label: '平均耗时 / 篇', value: '4.2h' },
        { label: '互动率均值', value: '3.8%' },
        { label: '人工成本 / 月', value: '¥12,000' },
      ],
    },
    {
      name: '实验组 (AI 辅助)',
      color: 'bg-[#3b82f6]',
      winner: true,
      metrics: [
        { label: '内容产出 / 周', value: '45 篇' },
        { label: '平均耗时 / 篇', value: '1.1h' },
        { label: '互动率均值', value: '5.2%' },
        { label: 'AI 成本 / 月', value: '¥800' },
      ],
      lift: '核心结论: AI 辅助将内容产出效率提升 275%，互动率提升 37%，成本降低 93%。p < 0.01 统计显著。',
    },
  ];

  const beforeData = [
    { label: '周内容产出', value: '12 篇' },
    { label: '数据分析周期', value: '3 天' },
    { label: '周报制作', value: '4 小时' },
    { label: '用户回复延迟', value: '4h+' },
  ];
  const afterData = [
    { label: '周内容产出', value: '45 篇' },
    { label: '数据分析周期', value: '2 小时' },
    { label: '周报制作', value: '15 分钟' },
    { label: '用户回复延迟', value: '<30min' },
  ];

  const timeline = [
    { date: 'Week 1-2', title: '需求梳理 + 工具选型', desc: '评估 ChatGPT / Claude / Copilot，确定 AI 辅助流程', dotColor: 'bg-[#8b5cf6]', dotBg: 'bg-[#8b5cf6]/20' },
    { date: 'Week 3', title: 'Prompt 工程化', desc: '建立 20+ 标准化 prompt 模板库', metric: '✓ 覆盖 5 大运营场景', dotColor: 'bg-[#3b82f6]', dotBg: 'bg-[#3b82f6]/20' },
    { date: 'Week 4-5', title: '数据自动化', desc: 'Python 脚本 + AI 实现数据采集→清洗→可视化自动化', metric: '↑ 效率提升 360%', dotColor: 'bg-[#10b981]', dotBg: 'bg-[#10b981]/20' },
    { date: 'Week 6-8', title: '全流程 AI 化', desc: '内容策划→生产→分发→复盘全链路 AI 辅助', metric: '✓ ROI 提升 15x', dotColor: 'bg-[#ec4899]', dotBg: 'bg-[#ec4899]/20' },
  ];

  return (
    <Section id="case-4" label="04" accent="#10b981"
      title="AI 提效项目"
      subtitle="引入 AI 工具链重构运营工作流，效率提升 275%，月成本降低 93%">

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <StaggerChildren>
          <StaggerItem><CostCompare before={beforeData} after={afterData} title="优化前后对比" /></StaggerItem>
        </StaggerChildren>
        <StaggerChildren>
          <StaggerItem><ABTest variants={abVariants} title="A/B 对照实验" /></StaggerItem>
        </StaggerChildren>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <ScrollReveal><Timeline events={timeline} title="项目实施路线" /></ScrollReveal>
        <ScrollReveal>
          <div className="bg-[#141416] rounded-2xl border border-[#2a2a2e] p-6">
            <h4 className="text-sm font-semibold text-[#f5f5f7] mb-4">AI 工具栈</h4>
            <div className="space-y-3">
              {[
                { name: 'ChatGPT / Claude', use: '内容创作 · 数据分析 · 用户洞察', impact: '效率 +300%' },
                { name: 'Python 自动化脚本', use: '数据采集 · 报表生成 · 异常监控', impact: '效率 +360%' },
                { name: '飞书多维表格 + AI', use: '项目管理 · 自动化周报 · 智能提醒', impact: '协作效率 +200%' },
                { name: 'AI 图片 / 视频工具', use: '封面设计 · 视频剪辑 · 素材生成', impact: '产出速度 +400%' },
              ].map((tool, i) => (
                <div key={i} className="bg-[#0a0a0b] rounded-xl p-4 border border-[#2a2a2e]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-[#f5f5f7]">{tool.name}</span>
                    <span className="text-[10px] font-bold text-[#10b981] font-mono">{tool.impact}</span>
                  </div>
                  <p className="text-xs text-[#888894]">{tool.use}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}

/* ── Case 5: 小红书内容运营 ── */
function RedBookContent() {
  const growth = [
    { name: '1月', value: 340 }, { name: '2月', value: 1200 }, { name: '3月', value: 2800 },
    { name: '4月', value: 5600 }, { name: '5月', value: 9400 }, { name: '6月', value: 14300 },
  ];

  const funnel = [
    { name: '笔记曝光', value: 380000, rate: '100%' },
    { name: '阅读', value: 142000, rate: '37.4%' },
    { name: '互动 (赞藏评)', value: 32000, rate: '22.5%' },
    { name: '主页访问', value: 18000, rate: '56.3%' },
    { name: '关注转化', value: 14300, rate: '79.4%' },
  ];

  const metrics = [
    { label: '粉丝总量', value: '14.3K', trend: 210, progress: 72 },
    { label: '笔记互动率', value: '8.4%', trend: 32, progress: 84 },
    { label: '搜索占比', value: '47%', trend: 18, progress: 47 },
    { label: '商单收入', value: '¥18K', trend: 85, progress: 60 },
  ];

  const contentMix = [
    { name: '干货教程', value: 35 },
    { name: '好物测评', value: 25 },
    { name: '生活方式', value: 20 },
    { name: '经验分享', value: 15 },
    { name: '热点话题', value: 5 },
  ];

  return (
    <Section id="case-5" label="05" accent="#f59e0b"
      title="小红书内容运营"
      subtitle="6 个月积累 1.4 万精准粉丝，单月商单收入 ¥5K+，沉淀爆款内容方法论">

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <StaggerChildren>
          <StaggerItem><GrowthCurve data={growth} title="粉丝增长曲线" subtitle="月度累计粉丝 · 6 个月" accent="#f59e0b" /></StaggerItem>
        </StaggerChildren>
        <StaggerChildren>
          <StaggerItem><FunnelChart data={funnel} title="内容转化漏斗" subtitle="曝光 → 关注 全链路" /></StaggerItem>
        </StaggerChildren>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <ScrollReveal><BIDashboard metrics={metrics} title="账号数据看板" /></ScrollReveal>
        <ScrollReveal><BarChartViz data={contentMix} title="内容类型占比" subtitle="按互动量加权 (%)" accent="#f59e0b" /></ScrollReveal>
      </div>

      <ScrollReveal>
        <div className="bg-[#141416] rounded-2xl border border-[#2a2a2e] p-6">
          <h4 className="text-sm font-semibold text-[#f5f5f7] mb-4">爆款笔记方法论</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              {[
                { title: '标题公式', desc: '数字 + 痛点 + 解决方案。例: 「3 个方法让简历通过率翻倍｜亲测有效」', metric: '+65% CTR' },
                { title: '封面设计', desc: '高对比度 + 文字标题 + 人物/结果图。测试 12 版封面，选出最佳模板。', metric: '+43% 点击' },
              ].map((h, i) => (
                <div key={i} className="bg-[#0a0a0b] rounded-xl p-4 border border-[#2a2a2e]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-[#f5f5f7]">{h.title}</span>
                    <span className="text-[10px] font-bold text-[#10b981] font-mono">{h.metric}</span>
                  </div>
                  <p className="text-xs text-[#888894] leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {[
                { title: '发布时间', desc: '工作日 12:00-13:00、18:00-19:00、周末 10:00-11:00。基于 200+ 篇笔记数据回归分析。', metric: '+28% 曝光' },
                { title: 'SEO 优化', desc: '标题+正文+标签关键词布局。搜索流量占比从 12% → 47%。', metric: '+292% 搜索' },
              ].map((h, i) => (
                <div key={i} className="bg-[#0a0a0b] rounded-xl p-4 border border-[#2a2a2e]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-[#f5f5f7]">{h.title}</span>
                    <span className="text-[10px] font-bold text-[#10b981] font-mono">{h.metric}</span>
                  </div>
                  <p className="text-xs text-[#888894] leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}

/* ── Export all ── */
export default function CaseStudies() {
  return (
    <div id="cases">
      <CampusGrowth />
      <VideoOps />
      <UserAnalytics />
      <AITools />
      <RedBookContent />
    </div>
  );
}
