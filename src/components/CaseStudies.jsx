import ScrollReveal, { StaggerChildren, StaggerItem } from './ScrollReveal';
import {
  GrowthCurve, FunnelChart, BIDashboard, ABTest,
  StatCard, BarChartViz, Timeline, CostCompare
} from './Charts';

function Section({ id, label, accent, title, subtitle, children }) {
  return (
    <section id={id} className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
              style={{ background: `${accent}15`, color: accent }}>{label}</div>
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

/* ── Case 1: 玛氏促销活动运营 ── */
function MarsSales() {
  const execData = [
    { name: '活动前', value: 72 }, { name: 'Month 1', value: 78 },
    { name: 'Month 2', value: 83 }, { name: 'Month 3', value: 87 },
  ];

  const funnelData = [
    { name: '物料配送', value: 30, rate: '100%' },
    { name: '门店签收', value: 28, rate: '93%' },
    { name: '陈列执行', value: 26, rate: '87%' },
    { name: '促销员到位', value: 26, rate: '87%' },
    { name: '销售达成', value: 33, rate: '110%' },
  ];

  const metrics = [
    { label: '门店执行率', value: '87%', trend: 15, progress: 87 },
    { label: '销售达成率', value: '110%', trend: 10, progress: 100 },
    { label: '数据报表时效', value: '2天', trend: 60, progress: 80 },
    { label: '物料到位率', value: '92%', trend: 24, progress: 92 },
  ];

  const timeline = [
    { date: 'Week 1-2', title: '数据盘点 + 门店分级', desc: '用数据透视表对 30+ 门店做销售额 × 增长率四象限分级', dotColor: 'bg-[#3b82f6]', dotBg: 'bg-[#3b82f6]/20' },
    { date: 'Week 3-4', title: '活动落地执行', desc: '物料配送跟进、促销员培训、陈列标准落地', metric: '↑ 物料到位率 68% → 92%', dotColor: 'bg-[#8b5cf6]', dotBg: 'bg-[#8b5cf6]/20' },
    { date: 'Week 5-6', title: '日报 + 异常预警', desc: '建立每日数据追踪表，发现 3 处物料滞留仓库', metric: '↑ 数据时效 5天 → 2天', dotColor: 'bg-[#ec4899]', dotBg: 'bg-[#ec4899]/20' },
    { date: 'Week 7-8', title: '效果复盘', desc: '输出活动数据报告，交叉分析执行质量 vs 销售达成', metric: '✓ 销售目标达成 110%', dotColor: 'bg-[#10b981]', dotBg: 'bg-[#10b981]/20' },
  ];

  return (
    <Section id="case-1" label="01" accent="#3b82f6"
      title="玛氏促销活动运营"
      subtitle="上海玛氏食品 · 销售运营实习生 · 2025.07-2025.10">
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <StaggerChildren>
          <StaggerItem><GrowthCurve data={execData} title="门店活动执行率提升" subtitle="月度追踪 · 72% → 87%" accent="#3b82f6" /></StaggerItem>
        </StaggerChildren>
        <StaggerChildren>
          <StaggerItem><FunnelChart data={funnelData} title="活动执行漏斗" subtitle="配送 → 签收 → 陈列 → 销售 · 30 家门店" /></StaggerItem>
        </StaggerChildren>
      </div>
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <ScrollReveal><BIDashboard metrics={metrics} title="核心指标看板" /></ScrollReveal>
        <ScrollReveal><Timeline events={timeline} title="项目执行时间线" /></ScrollReveal>
      </div>
      <ScrollReveal>
        <div className="bg-[#141416] rounded-2xl border border-[#2a2a2e] p-6">
          <h4 className="text-sm font-semibold text-[#f5f5f7] mb-4">关键动作与数据归因</h4>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: '门店四象限分级', desc: '用数据透视表按销售额+增长率交叉分析 30+ 门店，S级门店资源倾斜，C级评估替代。', icon: '📊' },
              { title: '物料追踪表', desc: '建 Excel 追踪表覆盖配送→签收→上架全流程，发现 3 处物料滞留仓库，到位率从 68% 提升至 92%。', icon: '📦' },
              { title: '执行 × 销售归因', desc: 'VLOOKUP 关联执行数据与销售数据，发现执行合格门店达成率 108%，不合格仅 76%。结论：执行一致性是增长杠杆。', icon: '🎯' },
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

/* ── Case 2: 波妞电商大促运营 ── */
function BoniuEcommerce() {
  const salesData = [
    { name: 'Week 1', value: 12000 }, { name: 'Week 2', value: 18500 },
    { name: 'Week 3', value: 24800 }, { name: 'Week 4', value: 32000 },
    { name: '大促周', value: 41000 },
  ];

  const channelData = [
    { name: '手淘搜索', value: 38 }, { name: '直通车', value: 25 },
    { name: '手淘推荐', value: 18 }, { name: '购物车', value: 12 },
    { name: '其他', value: 7 },
  ];

  const abVariants = [
    {
      name: '旧版详情页', color: 'bg-[#888894]', winner: false,
      metrics: [
        { label: '婴儿湿巾转化率', value: '3.0%' }, { label: '儿童水杯转化率', value: '3.5%' },
        { label: '辅食碗转化率', value: '2.8%' }, { label: '平均跳出率', value: '62%' },
      ],
    },
    {
      name: '新版详情页', color: 'bg-[#10b981]', winner: true,
      metrics: [
        { label: '婴儿湿巾转化率', value: '3.8% (+27%)' }, { label: '儿童水杯转化率', value: '4.1% (+17%)' },
        { label: '辅食碗转化率', value: '3.3% (+18%)' }, { label: '平均跳出率', value: '48% (-23%)' },
      ],
      lift: '结论：用「用户痛点→解决方案→产品参数」结构替换「卖点罗列」，3 款商品转化率平均提升 18%，p < 0.05。',
    },
  ];

  const metrics = [
    { label: '大促销售额提升', value: '+28%', trend: 28, progress: 100 },
    { label: '详情页转化率', value: '3.8%', trend: 18, progress: 76 },
    { label: '店铺粉丝增长', value: '+20%', trend: 20, progress: 100 },
    { label: '直通车 ROI', value: '1:3.8', trend: 81, progress: 76 },
  ];

  return (
    <Section id="case-2" label="02" accent="#ec4899"
      title="波妞电商大促运营"
      subtitle="波妞网络科技 · 国内电商运营实习生 · 2025.03-2025.06">
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <StaggerChildren>
          <StaggerItem><GrowthCurve data={salesData} title="店铺周销售额趋势" subtitle="预热 → 爆发 → 返场 · 5 周" accent="#ec4899" /></StaggerItem>
        </StaggerChildren>
        <StaggerChildren>
          <StaggerItem><BIDashboard metrics={metrics} title="核心指标看板" /></StaggerItem>
        </StaggerChildren>
      </div>
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <ScrollReveal><BarChartViz data={channelData} title="流量渠道占比 (%)" subtitle="生意参谋导出 · 数据透视表汇总" accent="#ec4899" /></ScrollReveal>
        <ScrollReveal><ABTest variants={abVariants} title="详情页 A/B 对比" /></ScrollReveal>
      </div>
      <ScrollReveal>
        <div className="bg-[#141416] rounded-2xl border border-[#2a2a2e] p-6">
          <h4 className="text-sm font-semibold text-[#f5f5f7] mb-4">执行细节</h4>
          <div className="space-y-3">
            {[
              { title: '为什么转移直通车预算', desc: '直通车占 40% 预算仅带来 25% 流量、转化率 2.1%。暂停低转化词，预算集中到品牌词+品类词，ROI 从 1:2.1 → 1:3.8。' },
              { title: '为什么详情页改「痛点结构」', desc: '生意参谋显示跳出率最高位置是首屏卖点罗列区。旧版「我们有什么」→ 新版「你的问题怎么解决」。婴儿湿巾关联「红屁股」痛点后转化率+27%。' },
              { title: '为什么活动周期拉长到 10 天', desc: '分析历史订单，母婴类决策周期 5-7 天（比标品长）。预热 7 天蓄水 + 爆发 3 天收割，收藏加购转化率比 1 天秒杀高 41%。' },
            ].map((insight, i) => (
              <div key={i} className="flex gap-3 bg-[#0a0a0b] rounded-xl p-4 border border-[#2a2a2e]">
                <div className="w-1 rounded-full shrink-0" style={{ background: ['#3b82f6', '#ec4899', '#8b5cf6'][i] }} />
                <div>
                  <p className="text-sm font-medium text-[#f5f5f7]">{insight.title}</p>
                  <p className="text-xs text-[#888894] mt-1 leading-relaxed">{insight.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}

/* ── Case 3: 迎新嘉年华活动策划 ── */
function CampusEvent() {
  const attendData = [
    { name: '往年', value: 570 }, { name: '目标', value: 600 }, { name: '实际', value: 800 },
  ];

  const timeline = [
    { date: '前 4 周', title: '方案策划 + 社团招募', desc: '设计「嘉年华」主题 + 4 个互动区 + 集章机制。挨个联系社团，降低参展门槛（统一提供物料），报名从 6 → 18 个', dotColor: 'bg-[#8b5cf6]', dotBg: 'bg-[#8b5cf6]/20' },
    { date: '前 2 周', title: '多渠道宣传推广', desc: '公众号推文 3 篇（倒计时 7/3/1 天）+ 班级群海报 + 食堂线下摆摊', metric: '↑ 累计阅读 2,400+ · 覆盖 2,000+ 人', dotColor: 'bg-[#3b82f6]', dotBg: 'bg-[#3b82f6]/20' },
    { date: '活动当天', title: '现场执行 + 应急预案', desc: '活动前 2 天预报有雨，启动 B 方案（室外→室内），20 分钟完成切换。集章护照引导动线，人均停留 45min', metric: '↑ 人均停留 15min → 45min', dotColor: 'bg-[#ec4899]', dotBg: 'bg-[#ec4899]/20' },
    { date: '后 1 周', title: '满意度调研 + SOP 沉淀', desc: '问卷星回收 200+ 份反馈，好评率 95%。输出活动执行 SOP 文档供下一届复用', metric: '✓ 好评率 95% · 预算节余 ¥400', dotColor: 'bg-[#10b981]', dotBg: 'bg-[#10b981]/20' },
  ];

  const metrics = [
    { label: '参与人数', value: '800+', trend: 40, progress: 100 },
    { label: '社团参与', value: '18 个', trend: 80, progress: 100 },
    { label: '满意度', value: '95%', trend: null, progress: 95 },
    { label: '预算控制', value: '¥2,600', trend: null, progress: 87 },
  ];

  return (
    <Section id="case-3" label="03" accent="#8b5cf6"
      title="迎新嘉年华活动策划"
      subtitle="校学生会 · 活动策划负责人 · 2025.03-2025.06">
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <StaggerChildren>
          <StaggerItem><BarChartViz data={attendData} title="参与人数对比" subtitle="往年 570 → 今年 800+" accent="#8b5cf6" /></StaggerItem>
        </StaggerChildren>
        <StaggerChildren>
          <StaggerItem><BIDashboard metrics={metrics} title="活动效果看板" /></StaggerItem>
        </StaggerChildren>
      </div>
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <ScrollReveal><Timeline events={timeline} title="活动执行时间线" /></ScrollReveal>
        <ScrollReveal>
          <div className="bg-[#141416] rounded-2xl border border-[#2a2a2e] p-6">
            <h4 className="text-sm font-semibold text-[#f5f5f7] mb-4">活动设计思路</h4>
            <div className="space-y-4">
              {[
                { title: '集章机制', desc: '入场领打卡护照，完成 4 区互动盖 4 章参与抽奖。本质是电商「满减凑单」逻辑迁移到线下活动。人均停留从 15min → 45min。', color: '#8b5cf6' },
                { title: '降低参展门槛', desc: '社团嫌准备成本高不愿报名。统一提供摊位物料，社团只出人+展示内容。报名 1 周内从 6 个涨到 18 个。典型的「降低参与成本=提高参与率」。', color: '#3b82f6' },
                { title: '传播点设计', desc: '抽奖墙前设拍照打卡点，主题背景板+学校 logo。自然引导拍照发朋友圈，二次传播覆盖量无法精确统计但远超付费推广。', color: '#ec4899' },
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

/* ── Case 4: 学生会公众号用户增长 ── */
function WechatGrowth() {
  const fanData = [
    { name: 'Month 1', value: 1200 }, { name: 'Month 2', value: 1450 },
    { name: 'Month 3', value: 1700 }, { name: 'Month 4', value: 2000 },
  ];

  const readData = [
    { name: '通知', value: 420 }, { name: '回顾', value: 380 },
    { name: '攻略', value: 620 }, { name: '专访', value: 510 },
    { name: '其他', value: 180 },
  ];

  const metrics = [
    { label: '粉丝增长', value: '+800', trend: 67, progress: 80 },
    { label: '推文阅读提升', value: '+50%', trend: 50, progress: 75 },
    { label: '互动率', value: '3.5%', trend: null, progress: 70 },
    { label: '单篇最高', value: '1,800+', trend: null, progress: 90 },
  ];

  return (
    <Section id="case-4" label="04" accent="#10b981"
      title="学生会公众号用户增长"
      subtitle="校学生会新媒体部 · 新媒体干事 · 2025.01-2025.05">
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <StaggerChildren>
          <StaggerItem><GrowthCurve data={fanData} title="粉丝增长曲线" subtitle="月度累计 · 1,200 → 2,000+" accent="#10b981" /></StaggerItem>
        </StaggerChildren>
        <StaggerChildren>
          <StaggerItem><BIDashboard metrics={metrics} title="核心指标看板" /></StaggerItem>
        </StaggerChildren>
      </div>
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <ScrollReveal><BarChartViz data={readData} title="内容类型平均阅读量" subtitle="历史 24 篇推文分析" accent="#10b981" /></ScrollReveal>
        <ScrollReveal>
          <div className="bg-[#141416] rounded-2xl border border-[#2a2a2e] p-6">
            <h4 className="text-sm font-semibold text-[#f5f5f7] mb-4">增长策略拆解</h4>
            <div className="space-y-3">
              {[
                { title: '内容供给调整', desc: '历史分析发现攻略类阅读量 620 vs 通知类 420，但 70% 内容是通知。调整比例：80% 内容 + 20% 通知，阅读量+50%。' },
                { title: '标题 A/B 测试', desc: '《校园歌手大赛落幕》280 阅读 vs《这 3 个瞬间让全场安静了》560 阅读。结论：数字+悬念+画面感 → CTR ×2。' },
                { title: 'AARRR 增长体系', desc: '获取：线下活动扫码关注；激活：新关注回复「本周热门+回复关键词领资料」；留存：固定栏目「周三攻略」；推荐：在看+分享引导。' },
              ].map((insight, i) => (
                <div key={i} className="flex gap-3 bg-[#0a0a0b] rounded-xl p-4 border border-[#2a2a2e]">
                  <div className="w-1 rounded-full shrink-0" style={{ background: ['#10b981', '#3b82f6', '#8b5cf6'][i] }} />
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

/* ── Case 5: 运营方法论 ── */
function Methodology() {
  const beforeData = [
    { label: '数据报表输出', value: '滞后 5 天' }, { label: '物料到位率', value: '68%' },
    { label: '详情页跳出率', value: '62%' }, { label: '直通车 ROI', value: '1:2.1' },
  ];
  const afterData = [
    { label: '数据报表输出', value: '2 天内' }, { label: '物料到位率', value: '92%' },
    { label: '详情页跳出率', value: '48%' }, { label: '直通车 ROI', value: '1:3.8' },
  ];

  return (
    <Section id="case-5" label="05" accent="#f59e0b"
      title="运营方法论与工具链"
      subtitle="跨项目沉淀 · 数据分析 SOP · 活动策划 SOP · 用户增长模型">
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <ScrollReveal><CostCompare before={beforeData} after={afterData} title="跨项目优化汇总" /></ScrollReveal>
        <ScrollReveal>
          <div className="bg-[#141416] rounded-2xl border border-[#2a2a2e] p-6">
            <h4 className="text-sm font-semibold text-[#f5f5f7] mb-4">我的数据分析 SOP</h4>
            <div className="space-y-2">
              {['Step 1: 明确问题 → 我想知道什么？', 'Step 2: 数据收集 → 从后台导出原始数据', 'Step 3: 数据清洗 → 统一口径、去重、补缺', 'Step 4: 分析归因 → 透视表拆解、找异常/趋势', 'Step 5: 输出建议 → 1 页纸结论 + 可执行动作'].map((step, i) => (
                <div key={i} className="flex items-center gap-3 bg-[#0a0a0b] rounded-lg p-3 border border-[#2a2a2e]">
                  <span className="w-6 h-6 rounded-full bg-[#f59e0b]/20 text-[#f59e0b] flex items-center justify-center text-[10px] font-bold">{i + 1}</span>
                  <span className="text-xs text-[#f5f5f7]">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
      <ScrollReveal>
        <div className="bg-[#141416] rounded-2xl border border-[#2a2a2e] p-6">
          <h4 className="text-sm font-semibold text-[#f5f5f7] mb-4">核心能力矩阵</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { title: '数据分析', items: 'Excel 数据透视表\nVLOOKUP\nIF/SUMIFS 函数\n生意参谋' },
              { title: '活动策划', items: '全案方案设计\n资源统筹协调\n现场执行管控\n数据复盘闭环' },
              { title: '内容运营', items: '公众号/秀米排版\nCanva 海报设计\n剪映短视频\n选题矩阵规划' },
              { title: '电商运营', items: '天猫/京东后台\n流量渠道分析\n详情页优化\n竞品调研' },
            ].map((c, i) => (
              <div key={i} className="bg-[#0a0a0b] rounded-xl p-5 border border-[#2a2a2e]">
                <h5 className="text-sm font-semibold text-[#f5f5f7] mb-3">{c.title}</h5>
                <p className="text-xs text-[#888894] leading-relaxed whitespace-pre-line">{c.items}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}

/* ── Export ── */
export default function CaseStudies() {
  return (
    <div id="cases">
      <MarsSales />
      <BoniuEcommerce />
      <CampusEvent />
      <WechatGrowth />
      <Methodology />
    </div>
  );
}
