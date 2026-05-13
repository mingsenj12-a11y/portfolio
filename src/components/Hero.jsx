import { motion } from 'framer-motion';
import { StatCard } from './Charts';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Glow effects */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#3b82f6] rounded-full blur-[150px] opacity-10 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#8b5cf6] rounded-full blur-[150px] opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse" />
            <span className="text-xs text-[#3b82f6] font-medium">Open to opportunities</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-6">
            <span className="text-[#f5f5f7]">产品运营</span>
            <br />
            <span className="gradient-text">驱动增长</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-lg md:text-xl text-[#888894] max-w-2xl mb-12 leading-relaxed">
            上海建桥学院 · 计算机科学与技术<br />
            用数据驱动决策，用产品思维做运营。<br />
            擅长将复杂数据转化为可执行的增长策略。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
            <StatCard value="5+" label="项目经验" trend={null} icon="🚀" />
            <StatCard value="156%" label="平均增长率" trend={156} icon="📈" />
            <StatCard value="50万+" label="累计触达用户" trend={null} icon="👥" />
            <StatCard value="60%" label="效率提升" trend={60} icon="⚡" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center gap-4"
        >
          <a href="#cases"
            className="px-6 py-3 bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#3b82f6]/25">
            查看案例
          </a>
          <a href="#contact"
            className="px-6 py-3 bg-[#1a1a1e] hover:bg-[#2a2a2e] text-[#f5f5f7] rounded-xl text-sm font-semibold border border-[#2a2a2e] transition-all duration-300">
            联系我
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-[#2a2a2e] flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-[#888894]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
