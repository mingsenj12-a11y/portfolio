import ScrollReveal from './ScrollReveal';

const skillCategories = [
  {
    title: '数据分析',
    skills: [
      { name: 'Excel', level: 90, color: '#10b981', icon: '📊' },
      { name: 'Python', level: 75, color: '#3b82f6', icon: '🐍' },
      { name: 'Power BI', level: 80, color: '#f59e0b', icon: '📈' },
    ],
  },
  {
    title: '运营工具',
    skills: [
      { name: '飞书', level: 85, color: '#3b82f6', icon: '🕊️' },
      { name: 'Canva', level: 88, color: '#8b5cf6', icon: '🎨' },
      { name: '剪映', level: 82, color: '#ec4899', icon: '✂️' },
    ],
  },
  {
    title: '创意设计',
    skills: [
      { name: 'Photoshop', level: 70, color: '#3b82f6', icon: '🖼️' },
      { name: '内容策划', level: 85, color: '#f59e0b', icon: '✍️' },
      { name: '增长策略', level: 80, color: '#10b981', icon: '🚀' },
    ],
  },
];

function SkillBar({ name, level, color, icon }) {
  return (
    <div className="group">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm">{icon}</span>
        <span className="text-xs font-medium text-[#f5f5f7]">{name}</span>
        <span className="ml-auto text-xs text-[#888894] font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-[#0a0a0b] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{
            width: `${level}%`,
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">技能矩阵</h2>
          <p className="text-[#888894] text-lg mb-12">产品运营核心能力图谱</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-[#141416] rounded-2xl border border-[#2a2a2e] p-6">
                <h3 className="text-sm font-semibold text-[#f5f5f7] mb-6">{cat.title}</h3>
                <div className="space-y-5">
                  {cat.skills.map((skill, j) => (
                    <SkillBar key={j} {...skill} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tool stack */}
        <ScrollReveal>
          <div className="bg-[#141416] rounded-2xl border border-[#2a2a2e] p-8">
            <h3 className="text-sm font-semibold text-[#f5f5f7] mb-6 text-center">工具生态</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Excel', 'Python', 'Power BI', '飞书', 'Canva',
                '剪映', 'Photoshop', 'Figma', 'Notion', 'SQL',
                'ChatGPT', 'Claude', 'Midjourney',
              ].map((tool) => (
                <span key={tool}
                  className="px-4 py-2 bg-[#0a0a0b] border border-[#2a2a2e] rounded-xl text-xs font-medium text-[#888894] hover:text-[#f5f5f7] hover:border-[#3b82f6]/40 transition-all duration-300 cursor-default">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
