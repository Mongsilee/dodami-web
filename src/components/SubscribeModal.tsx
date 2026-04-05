"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sprout, X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function SubscribeModal({ isOpen, onClose }: Props) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Reset submit state when opened
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
    }
  }, [isOpen]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl relative z-[101] w-full max-w-md flex flex-col items-center text-center overflow-hidden border border-[#5BA4E6]/20"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors bg-slate-50 hover:bg-slate-100 p-2 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>

            {!isSubmitted ? (
              <>
                <div className="w-20 h-20 bg-[#F0F4FF] text-[#5BA4E6] rounded-full flex items-center justify-center mb-6 shadow-inner">
                  <Sprout className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-extrabold text-slate-800 mb-3 tracking-tight">도담이 얼리 액세스 신청</h3>
                <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
                  이메일을 남겨주시면, 도담이 베타 서비스 오픈 시 가장 먼저 초대장을 보내드릴게요!
                </p>
                
                <form onSubmit={handleFormSubmit} className="w-full flex flex-col gap-4">
                  <input 
                    type="email" 
                    required
                    placeholder="이메일 주소를 입력해주세요"
                    className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-3xl outline-none focus:bg-white focus:border-[#5BA4E6] focus:ring-4 focus:ring-[#5BA4E6]/10 transition-all font-medium text-slate-700 placeholder:text-slate-400 text-lg"
                  />
                  <button 
                    type="submit"
                    className="w-full py-5 bg-[#FF7B7B] hover:bg-[#ff6b6b] text-white rounded-3xl font-bold text-xl shadow-lg shadow-[#FF7B7B]/20 transition-all hover:shadow-xl active:scale-95"
                  >
                    가장 먼저 소식 받기
                  </button>
                </form>
              </>
            ) : (
              <>
                <div className="text-6xl mb-8 animate-bounce-slow">🎉</div>
                <h3 className="text-3xl font-extrabold text-slate-800 mb-4 tracking-tight">신청이 완료되었습니다!</h3>
                <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
                  도담이가 곧 따뜻한 소식으로 찾아갈게요.<br/>조금만 기다려주세요.
                </p>
                <button 
                  onClick={onClose}
                  className="w-full py-5 bg-slate-800 hover:bg-slate-900 text-white rounded-3xl font-bold text-xl shadow-lg transition-all hover:shadow-xl active:scale-95"
                >
                  확인
                </button>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
