"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Mic, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

function DemoContent() {
  const searchParams = useSearchParams();
  const characterName = searchParams.get('character') || '도담이';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#FFF8F0] to-[#F0F4FF] font-sans selection:bg-[#5BA4E6] selection:text-white relative overflow-hidden">
      
      {/* Back to Home Navigation */}
      <div className="absolute top-8 left-8">
        <Link href="/">
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-slate-500 font-medium hover:text-[#5BA4E6] hover:shadow-md transition-all duration-300">
            <ArrowLeft className="w-5 h-5" />
            랜딩 페이지로 돌아가기
          </button>
        </Link>
      </div>

      <motion.div 
        initial={{ scale: 0.8, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white p-10 md:p-14 rounded-[40px] shadow-xl shadow-[#5BA4E6]/5 border border-slate-100 flex flex-col items-center text-center max-w-lg w-full mx-6 relative z-10"
      >
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-24 h-24 bg-gradient-to-br from-[#5BA4E6]/20 to-[#4589C7]/20 rounded-[28px] flex items-center justify-center mb-8 shadow-inner"
        >
          <Mic className="w-12 h-12 text-[#5BA4E6]" />
        </motion.div>
        
        <h1 className="text-3xl font-extrabold text-slate-800 mb-4 tracking-tight">
          <span className="text-[#5BA4E6]">{characterName}</span>와(과) 연결 중...
        </h1>
        <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
          마이크 권한을 허용하시면<br/> {characterName}가 첫 인사를 건넬 거예요!
        </p>

        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-[#5BA4E6] to-[#FF7B7B]"
          />
        </div>
      </motion.div>
      
      {/* Background Decor */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#FF7B7B]/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#5BA4E6]/10 rounded-full blur-3xl opacity-50" />
    </div>
  );
}

export default function DemoPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-b from-[#FFF8F0] to-[#F0F4FF] flex items-center justify-center font-bold text-slate-400">도담이 튜터 불러오는 중...</div>}>
      <DemoContent />
    </Suspense>
  );
}
