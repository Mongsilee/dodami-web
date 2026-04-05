"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import GlobalHeader from '@/components/GlobalHeader';
import { Quote } from 'lucide-react';

export default function TeamPage() {

  type TeamMember = { name: string; role: string; quote: string; image?: string; details: string[] };
  const teamMembers: TeamMember[] = [
    {
      name: "정연우 (William Chung)",
      role: "Founder & CEO",
      image: "/images/Will.jpeg", // <--- 윌리엄 대표님 사진 경로 추가 완료!
      quote: "답을 가르치기보다 생각하는 법을 고민합니다.",
      details: [
        "Princeton University Computer Science",
        "전 BCG·Deloitte 컨설턴트",
        "도담이 전체 기술 스택 독자 구축"
      ]
    },
    {
      name: "윤찬혁",
      role: "CTO",
      quote: "기술로 교육의 격차를 해소합니다.",
      image: "/images/Chan.jpeg",
      details: [
        "한국 대표 에드테크 '아이스크림에듀' 3년 개발 경력",
        "서울대 석사 및 서강대 박사과정(SCI 논문 2편)",
        "STT/TTS/LLM 기술 전문가"
      ]
    },
    {
      name: "김찬우 교수",
      role: "기술 자문위원",
      quote: "아동 음성 AI 기술의 새로운 지평을 함께 엽니다.",
      details: [
        "현 고려대학교 인공지능학과 교수",
        "전 삼성전자 최연소 부사장(빅스비 창시자)",
        "Google·Microsoft 출신 음성 AI 권위자"
      ]
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8F0] via-white to-[#F0F4FF] font-sans text-slate-800 pb-32">
      <GlobalHeader />

      <main className="max-w-6xl mx-auto px-6 pt-40">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-24"
        >
          <span className="bg-[#5BA4E6]/10 text-[#5BA4E6] font-bold px-4 py-2 rounded-full mb-6 inline-block text-sm tracking-wide shadow-sm">
            About Team
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-800 leading-[1.3]">
            아이들의 가능성을 믿는 <br className="hidden md:block" />
            전문가들이 만듭니다
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 md:p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col items-center text-center group"
            >
              <div className="relative w-32 h-32 rounded-full bg-slate-50 mb-8 flex items-center justify-center overflow-hidden border-4 border-[#F0F4FF] shadow-sm transform group-hover:scale-105 transition-transform duration-500">
                {member.image ? (
                  <Image src={member.image} alt={member.name} fill className="object-cover" sizes="128px" />
                ) : (
                  <span className="text-slate-300 font-medium text-sm">Image<br />Placeholder</span>
                )}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">{member.name}</h3>
              <p className="text-[#5BA4E6] font-extrabold mb-8 text-sm uppercase tracking-wider">{member.role}</p>

              <div className="bg-gradient-to-br from-[#FFF8F0] to-[#FFF0F0] w-full p-6 rounded-3xl mb-8 relative border border-[#FF7B7B]/10">
                <Quote className="absolute top-4 left-4 w-5 h-5 text-[#FF7B7B]/30" />
                <p className="text-slate-700 font-bold leading-relaxed pt-3 relative z-10 text-[15px]">"{member.quote}"</p>
              </div>

              <ul className="text-left space-y-4 w-full border-t border-slate-100 pt-8">
                {member.details.map((detail, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#5BA4E6] flex-shrink-0" />
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}