import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#3b82f6] rounded-full blur-[150px] opacity-5 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              联系<span className="gradient-text">我</span>
            </h2>
            <p className="text-[#888894] text-lg">期待与你交流商业运营、活动运营、电商运营相关话题</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-xl mx-auto">
            <div className="bg-[#141416] rounded-2xl border border-[#2a2a2e] overflow-hidden">
              <div className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-[#0a0a0b] rounded-xl border border-[#2a2a2e]">
                    <span className="text-2xl">📧</span>
                    <div>
                      <p className="text-xs text-[#888894]">邮箱</p>
                      <p className="text-sm font-medium text-[#f5f5f7]">3457885146@qq.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-[#0a0a0b] rounded-xl border border-[#2a2a2e]">
                    <span className="text-2xl">📱</span>
                    <div>
                      <p className="text-xs text-[#888894]">电话</p>
                      <p className="text-sm font-medium text-[#f5f5f7]">130-5203-9362</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-[#0a0a0b] rounded-xl border border-[#2a2a2e]">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="text-xs text-[#888894]">所在地</p>
                      <p className="text-sm font-medium text-[#f5f5f7]">上海</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#2a2a2e] px-8 py-4 flex items-center justify-between">
                <span className="text-xs text-[#888894]">© 2026 产品运营作品集</span>
                <div className="flex gap-4">
                  <a href="#" className="text-xs text-[#888894] hover:text-[#f5f5f7] transition-colors">飞书</a>
                  <a href="#" className="text-xs text-[#888894] hover:text-[#f5f5f7] transition-colors">GitHub</a>
                  <a href="#" className="text-xs text-[#888894] hover:text-[#f5f5f7] transition-colors">小红书</a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
