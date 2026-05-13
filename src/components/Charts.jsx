import {
  XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, AreaChart, Area, BarChart, Bar,
} from 'recharts';

/* ── Growth Curve (Area Chart) ── */
export function GrowthCurve({ data, title, subtitle, accent = '#3b82f6' }) {
  return (
    <div className="bg-[#141416] rounded-2xl border border-[#2a2a2e] p-6">
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-[#f5f5f7]">{title}</h4>
        {subtitle && <p className="text-xs text-[#888894] mt-1">{subtitle}</p>}
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
          <defs>
            <linearGradient id={`grad-${title}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={accent} stopOpacity={0.3} />
              <stop offset="100%" stopColor={accent} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2e" />
          <XAxis dataKey="name" stroke="#888894" tick={{ fontSize: 12 }} />
          <YAxis stroke="#888894" tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ background: '#1a1a1e', border: '1px solid #2a2a2e', borderRadius: 12 }}
            labelStyle={{ color: '#888894' }}
          />
          <Area type="monotone" dataKey="value" stroke={accent} strokeWidth={2}
            fill={`url(#grad-${title})`} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

/* ── Funnel Chart (custom horizontal bars) ── */
export function FunnelChart({ data, title, subtitle }) {
  const max = Math.max(...data.map(d => d.value));
  const barColors = ['#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#ec4899'];

  return (
    <div className="bg-[#141416] rounded-2xl border border-[#2a2a2e] p-6">
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-[#f5f5f7]">{title}</h4>
        {subtitle && <p className="text-xs text-[#888894] mt-1">{subtitle}</p>}
      </div>
      <div className="space-y-4">
        {data.map((item, i) => (
          <div key={item.name}>
            <div className="flex justify-between text-xs mb-1.5">
              <span className="text-[#888894]">{item.name}</span>
              <span className="text-[#f5f5f7] font-mono font-medium">
                {item.value.toLocaleString()}
                <span className="text-[#888894] ml-1">{item.rate}</span>
              </span>
            </div>
            <div className="h-8 bg-[#0a0a0b] rounded-lg overflow-hidden"
              style={{ width: `${Math.max(20, (item.value / max) * 100)}%` }}>
              <div className="h-full rounded-lg transition-all duration-1000"
                style={{
                  background: `linear-gradient(90deg, ${barColors[i]}, ${barColors[i]}88)`,
                  width: '100%'
                }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── BI Dashboard (KPI cards + mini charts) ── */
export function BIDashboard({ metrics, title }) {
  return (
    <div className="bg-[#141416] rounded-2xl border border-[#2a2a2e] p-6">
      <h4 className="text-sm font-semibold text-[#f5f5f7] mb-4">{title}</h4>
      <div className="grid grid-cols-2 gap-3">
        {metrics.map((m, i) => (
          <div key={i} className="bg-[#0a0a0b] rounded-xl p-4 border border-[#2a2a2e]">
            <p className="text-xs text-[#888894] mb-1">{m.label}</p>
            <p className="text-2xl font-bold text-[#f5f5f7] font-mono tracking-tight">
              {m.value}
            </p>
            <p className={`text-xs mt-1 font-medium ${m.trend > 0 ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
              {m.trend > 0 ? '↑' : '↓'} {Math.abs(m.trend)}% <span className="text-[#888894]">vs 上期</span>
            </p>
            <div className="mt-2 h-1 bg-[#2a2a2e] rounded-full overflow-hidden">
              <div className="h-full bg-[#3b82f6] rounded-full"
                style={{ width: `${m.progress || 65}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── A/B Test Comparison ── */
export function ABTest({ variants, title }) {
  return (
    <div className="bg-[#141416] rounded-2xl border border-[#2a2a2e] p-6">
      <h4 className="text-sm font-semibold text-[#f5f5f7] mb-4">{title}</h4>
      <div className="grid grid-cols-2 gap-4">
        {variants.map((v, i) => (
          <div key={i}
            className={`rounded-xl p-5 border-2 ${v.winner ? 'border-[#10b981] bg-[#10b981]/5' : 'border-[#2a2a2e] bg-[#0a0a0b]'}`}>
            <div className="flex items-center gap-2 mb-3">
              <span className={`w-2.5 h-2.5 rounded-full ${v.color}`} />
              <span className="text-sm font-semibold text-[#f5f5f7]">{v.name}</span>
              {v.winner && (
                <span className="text-[10px] px-2 py-0.5 bg-[#10b981]/20 text-[#10b981] rounded-full font-semibold">
                  WINNER
                </span>
              )}
            </div>
            {v.metrics.map((m, j) => (
              <div key={j} className="flex justify-between py-1.5 border-b border-[#2a2a2e]/50 last:border-0">
                <span className="text-xs text-[#888894]">{m.label}</span>
                <span className="text-xs font-mono font-semibold text-[#f5f5f7]">{m.value}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      {variants[0]?.lift && (
        <div className="mt-4 bg-[#3b82f6]/10 border border-[#3b82f6]/30 rounded-xl p-3">
          <p className="text-xs text-[#3b82f6] font-semibold">
            {variants[0].lift}
          </p>
        </div>
      )}
    </div>
  );
}

/* ── User Persona Cards ── */
export function UserPersona({ personas, title }) {
  return (
    <div className="bg-[#141416] rounded-2xl border border-[#2a2a2e] p-6">
      <h4 className="text-sm font-semibold text-[#f5f5f7] mb-4">{title}</h4>
      <div className="space-y-3">
        {personas.map((p, i) => (
          <div key={i} className="bg-[#0a0a0b] rounded-xl p-4 border border-[#2a2a2e]">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${p.bg}`}>
                {p.avatar}
              </div>
              <div>
                <p className="text-sm font-semibold text-[#f5f5f7]">{p.name}</p>
                <p className="text-xs text-[#888894]">{p.desc}</p>
              </div>
              <div className="ml-auto text-right">
                <span className="text-xs text-[#888894]">占比</span>
                <p className="text-sm font-bold text-[#3b82f6] font-mono">{p.percent}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((t, j) => (
                <span key={j} className="text-[10px] px-2 py-1 rounded-full bg-[#2a2a2e] text-[#888894]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── OKR Display ── */
export function OKRCard({ okrs, title }) {
  const statusColors = {
    'completed': 'text-[#10b981] bg-[#10b981]/10',
    'in_progress': 'text-[#3b82f6] bg-[#3b82f6]/10',
    'exceeded': 'text-[#8b5cf6] bg-[#8b5cf6]/10',
  };

  return (
    <div className="bg-[#141416] rounded-2xl border border-[#2a2a2e] p-6">
      <h4 className="text-sm font-semibold text-[#f5f5f7] mb-4">{title}</h4>
      <div className="space-y-4">
        {okrs.map((o, i) => (
          <div key={i}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-[#888894]">O{i + 1}</span>
              <span className="text-sm font-semibold text-[#f5f5f7]">{o.objective}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ml-auto ${statusColors[o.status] || statusColors.in_progress}`}>
                {o.status === 'completed' ? '已完成' : o.status === 'exceeded' ? '超额完成' : '进行中'}
              </span>
            </div>
            <div className="space-y-2 ml-4">
              {o.keyResults.map((kr, j) => (
                <div key={j} className="flex items-center gap-3">
                  <span className="text-[10px] text-[#888894] font-mono">KR.{j + 1}</span>
                  <div className="flex-1 h-1.5 bg-[#0a0a0b] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${kr.progress}%`,
                        background: kr.progress >= 100
                          ? 'linear-gradient(90deg, #10b981, #34d399)'
                          : 'linear-gradient(90deg, #3b82f6, #8b5cf6)'
                      }}
                    />
                  </div>
                  <span className="text-xs text-[#888894] font-mono w-8 text-right">{kr.progress}%</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Stat Card ── */
export function StatCard({ value, label, trend, icon }) {
  return (
    <div className="bg-[#141416] rounded-2xl border border-[#2a2a2e] p-5">
      <div className="flex items-center gap-2 mb-2">
        {icon && <span className="text-lg">{icon}</span>}
        <span className="text-xs text-[#888894]">{label}</span>
      </div>
      <p className="text-3xl font-bold text-[#f5f5f7] font-mono tracking-tight">{value}</p>
      {trend && (
        <p className={`text-xs mt-1 font-medium ${trend > 0 ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
          {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
        </p>
      )}
    </div>
  );
}

/* ── Bar Chart ── */
export function BarChartViz({ data, title, subtitle, accent = '#3b82f6' }) {
  return (
    <div className="bg-[#141416] rounded-2xl border border-[#2a2a2e] p-6">
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-[#f5f5f7]">{title}</h4>
        {subtitle && <p className="text-xs text-[#888894] mt-1">{subtitle}</p>}
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2e" />
          <XAxis dataKey="name" stroke="#888894" tick={{ fontSize: 12 }} />
          <YAxis stroke="#888894" tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ background: '#1a1a1e', border: '1px solid #2a2a2e', borderRadius: 12 }}
            labelStyle={{ color: '#888894' }}
          />
          <Bar dataKey="value" fill={accent} radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

/* ── Timeline ── */
export function Timeline({ events, title }) {
  return (
    <div className="bg-[#141416] rounded-2xl border border-[#2a2a2e] p-6">
      <h4 className="text-sm font-semibold text-[#f5f5f7] mb-4">{title}</h4>
      <div className="relative">
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-[#2a2a2e]" />
        <div className="space-y-4">
          {events.map((e, i) => (
            <div key={i} className="flex gap-4 relative">
              <div className={`w-[30px] h-[30px] rounded-full flex items-center justify-center shrink-0 mt-0.5 ${e.dotBg || 'bg-[#3b82f6]/20'}`}>
                <div className={`w-2.5 h-2.5 rounded-full ${e.dotColor || 'bg-[#3b82f6]'}`} />
              </div>
              <div>
                <p className="text-xs text-[#888894] font-mono">{e.date}</p>
                <p className="text-sm text-[#f5f5f7] font-medium mt-0.5">{e.title}</p>
                {e.desc && <p className="text-xs text-[#888894] mt-1">{e.desc}</p>}
                {e.metric && (
                  <p className="text-xs font-bold text-[#10b981] mt-1 font-mono">{e.metric}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Cost Savings Comparison ── */
export function CostCompare({ before, after, title }) {
  return (
    <div className="bg-[#141416] rounded-2xl border border-[#2a2a2e] p-6">
      <h4 className="text-sm font-semibold text-[#f5f5f7] mb-4">{title}</h4>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#0a0a0b] rounded-xl p-4 border border-[#ef4444]/30">
          <span className="text-xs text-[#888894]">优化前</span>
          <div className="space-y-2 mt-3">
            {before.map((b, i) => (
              <div key={i} className="flex justify-between">
                <span className="text-xs text-[#888894]">{b.label}</span>
                <span className="text-xs font-mono text-[#ef4444]">{b.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#0a0a0b] rounded-xl p-4 border border-[#10b981]/30">
          <span className="text-xs text-[#888894]">优化后</span>
          <div className="space-y-2 mt-3">
            {after.map((a, i) => (
              <div key={i} className="flex justify-between">
                <span className="text-xs text-[#888894]">{a.label}</span>
                <span className="text-xs font-mono text-[#10b981]">{a.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
