"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlobalHeader from '@/components/GlobalHeader';
import { CheckCircle2, Send } from 'lucide-react';

export default function ContactPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8F0] to-[#F0F4FF] font-sans text-slate-800 flex flex-col pt-32">
      <GlobalHeader />

      <main className="flex-1 flex items-center justify-center px-6 py-12 pb-24">
        <div className="w-full max-w-2xl relative">
          
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-slate-800 mb-6 tracking-tight">Contact Us</h1>
            <p className="text-lg text-slate-600 font-medium leading-relaxed mb-6">
              도담이에 대해 궁금한 점이 있으시거나, 도움이 필요하시거나,<br className="hidden md:block"/> 소중한 피드백을 나누고 싶으시다면 언제든 남겨주세요.<br className="hidden md:block"/> 최대한 빠르게 답변해 드리겠습니다.
            </p>
            <p className="text-base text-slate-500 font-medium bg-white/50 inline-block px-6 py-3 rounded-full border border-slate-200/60 shadow-sm backdrop-blur-sm">
              직접 이메일을 보내시려면 <a href="mailto:hello@dodami.ai" className="text-[#5BA4E6] font-bold hover:underline mx-1">hello@dodami.ai</a>로 연락해 주세요.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
                variants={fadeInUp}
                className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl shadow-[#5BA4E6]/5 border border-[#5BA4E6]/10"
              >
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2 ml-2">이메일 주소</label>
                    <input 
                      id="email"
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="답변 받으실 이메일 주소"
                      className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-3xl outline-none focus:bg-white focus:border-[#5BA4E6] focus:ring-4 focus:ring-[#5BA4E6]/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 ml-2">문의 내용</label>
                    <div className="relative">
                      <textarea 
                        id="message"
                        required
                        maxLength={500}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="문의하실 내용을 적어주세요."
                        rows={6}
                        className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-3xl outline-none focus:bg-white focus:border-[#5BA4E6] focus:ring-4 focus:ring-[#5BA4E6]/10 transition-all font-medium text-slate-800 placeholder:text-slate-400 resize-none pb-12"
                      />
                      <div className="absolute bottom-4 right-6 text-sm font-bold text-slate-400">
                        <span className={message.length >= 500 ? "text-[#FF7B7B]" : ""}>{message.length}</span> <span className="text-slate-300">/ 500자</span>
                      </div>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-5 mt-4 bg-[#FF7B7B] hover:bg-[#ff6b6b] text-white rounded-3xl font-bold text-xl shadow-lg shadow-[#FF7B7B]/20 transition-all hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 group"
                  >
                    문의 남기기
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>

                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-12 md:p-16 rounded-[40px] shadow-xl shadow-[#6BCB77]/10 border border-[#6BCB77]/20 flex flex-col items-center text-center"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                  className="w-24 h-24 bg-[#F0FDF4] text-[#10A37F] rounded-full flex items-center justify-center mb-8 shadow-inner"
                >
                  <CheckCircle2 className="w-12 h-12" />
                </motion.div>
                <h3 className="text-3xl font-extrabold text-slate-800 mb-4 tracking-tight">메시지가 성공적으로 <br className="md:hidden"/>전송되었습니다!</h3>
                <p className="text-xl text-slate-600 font-medium leading-relaxed">
                  소중한 의견 감사드립니다.<br/>
                  도담이 팀이 곧 연락드릴게요 🌱
                </p>
                <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setMessage('');
                    setEmail('');
                  }}
                  className="mt-10 px-8 py-3 bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-600 rounded-full font-bold transition-all hover:shadow-sm"
                >
                  다른 문의 남기기
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
