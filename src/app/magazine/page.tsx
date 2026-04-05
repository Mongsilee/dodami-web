"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GlobalHeader from '@/components/GlobalHeader';
import SubscribeModal from '@/components/SubscribeModal';
import {
  Sparkles,
  ArrowRight,
  Quote,
  BookOpen,
  Brain,
  MessageCircle,
  Lightbulb,
  Globe,
  GraduationCap,
  Bot,
  BrainCircuit,
  Dumbbell,
  Activity
} from 'lucide-react';

export default function MagazinePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 as any }
    }
  };

  const fadeInUpAny = fadeInUp as any;
  const staggerChildrenAny = staggerContainer as any;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8F0] via-white to-[#F0F4FF] font-sans text-slate-800 selection:bg-[#5BA4E6] selection:text-white pb-16 overflow-hidden">
      <GlobalHeader />
      <SubscribeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpAny}
        className="max-w-4xl mx-auto px-6 pt-40 pb-20 flex flex-col items-center text-center relative z-10"
      >
        {/* Decorative background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#FF7B7B]/10 rounded-full blur-3xl -z-10" />
        <div className="absolute top-40 right-10 w-40 h-40 bg-[#5BA4E6]/10 rounded-full blur-3xl -z-10" />
        <Lightbulb className="absolute top-24 right-24 w-12 h-12 text-yellow-500/10 -z-10 transform rotate-12" />
        <BookOpen className="absolute top-48 left-16 w-16 h-16 text-[#5BA4E6]/10 -z-10 transform -rotate-12" />

        <div className="w-16 h-16 bg-white/80 backdrop-blur-md text-[#FF7B7B] rounded-2xl flex items-center justify-center mb-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50">
          <BookOpen className="w-8 h-8" />
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-800 mb-6 drop-shadow-sm">
          도담 매거진
        </h1>
        <p className="text-2xl md:text-3xl text-slate-600 font-medium leading-relaxed mb-8 tracking-wide">
          아이의 미래를 준비하는 부모님을 위한 <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5BA4E6] to-[#4589C7] font-extrabold">교육 인사이트</span>
        </p>
        <div className="flex gap-3 mt-2">
          <span className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-md border border-white/50 text-[#5BA4E6] px-5 py-2.5 rounded-full text-sm font-bold tracking-wider shadow-sm">
            <Globe className="w-4 h-4" /> #글로벌교육
          </span>
          <span className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-md border border-white/50 text-[#FF7B7B] px-5 py-2.5 rounded-full text-sm font-bold tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4" /> #트렌드
          </span>
        </div>
      </motion.section>

      {/* Main Content Section */}
      <motion.article
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerChildrenAny}
        className="max-w-4xl mx-auto px-6 mb-32 space-y-12"
      >
        {/* Card 1: Harvard explicitly mentioned in title and body */}
        <motion.div variants={fadeInUpAny} className="bg-white/80 backdrop-blur-xl rounded-[40px] border border-white/50 shadow-[0_12px_40px_rgb(0,0,0,0.06)] p-8 md:p-12 relative overflow-hidden group">
          <div className="absolute -right-10 -top-10 w-48 h-48 bg-[#5BA4E6]/10 rounded-full blur-3xl transition-all duration-500 group-hover:bg-[#5BA4E6]/20" />

          <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-[#F0F4FF] to-white rounded-[24px] flex items-center justify-center flex-shrink-0 shadow-sm border border-[#5BA4E6]/20 relative">
              <Globe className="w-8 h-8 text-[#5BA4E6] absolute top-4 left-4" />
              <GraduationCap className="w-10 h-10 text-slate-800 absolute bottom-4 right-4" />
            </div>
            <div>
              <h3 className="text-3xl font-extrabold text-slate-800 mb-6 tracking-tight">1. 하버드와 글로벌 명문대가 주목하는 핵심 역량</h3>
              <p className="text-xl text-slate-600 leading-[1.8] font-medium">
                미국 대입 시험인 SAT가 오랜 시간 동안 'Critical Reading(비판적 읽기)'을 핵심 영역으로 평가해온 것은 주지의 사실입니다. 여기서 한 걸음 더 나아가, <span className="font-extrabold text-[#5BA4E6] bg-[#F0F4FF] px-2 py-0.5 rounded-md">하버드(Harvard)</span>대학교는 150년 넘게 비판적 사고력을 핵심 역량으로 교육해 왔으며, 세계 최상위 대학들은 신입생 선발 과정에서 단순 지식 총량보다 <span className="font-extrabold text-[#5BA4E6] border-b-2 border-[#5BA4E6]/30 pb-0.5">'비판적 사고력(Critical Thinking)'</span>을 가장 핵심적인 자질로 요구하고 있습니다. 정보의 단순 습득을 넘어 문맥을 읽고 논리적으로 사유하는 능력이야말로 변하지 않는 글로벌 인재의 표준입니다.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quote Block */}
        <motion.blockquote variants={fadeInUpAny} className="relative p-10 md:p-14 my-16 bg-gradient-to-r from-[#FFF8F0] to-white border-l-8 border-[#FF7B7B] rounded-r-[40px] rounded-l-md shadow-lg overflow-hidden group">
          <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#FF7B7B 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          <Quote className="absolute top-6 right-8 w-24 h-24 text-[#FF7B7B]/10 transform -rotate-12 transition-transform duration-500 group-hover:scale-110" />
          <p className="text-2xl md:text-3xl font-bold text-slate-800 leading-[1.6] italic relative z-10">
            "아이비리그가 찾는 인재는 <span className="underline decoration-[#FF7B7B]/30 decoration-4 underline-offset-4">정답을 많이 아는 아이</span>가 아닙니다. 당연한 것에 <span className="text-[#FF7B7B] font-extrabold">'왜?'</span>라고 질문을 던지고, <span className="bg-[#FFF0F0] px-2 py-1 rounded-lg">자신만의 논리를 만들어갈 줄 아는 아이</span>입니다."
          </p>
        </motion.blockquote>

        {/* Card 2 */}
        <motion.div variants={fadeInUpAny} className="bg-white/80 backdrop-blur-xl rounded-[40px] border border-white/50 shadow-[0_12px_40px_rgb(0,0,0,0.06)] p-8 md:p-12 relative overflow-hidden group">
          <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-[#FF7B7B]/10 rounded-full blur-3xl transition-all duration-500 group-hover:bg-[#FF7B7B]/20" />

          <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-[#FFF0F0] to-white rounded-[24px] flex items-center justify-center flex-shrink-0 shadow-sm border border-[#FF7B7B]/20 relative">
              <Bot className="w-8 h-8 text-slate-400 absolute top-4 left-4" />
              <BrainCircuit className="w-10 h-10 text-[#FF7B7B] absolute bottom-4 right-4" />
            </div>
            <div>
              <h3 className="text-3xl font-extrabold text-slate-800 mb-6 tracking-tight">2. AI 시대, 핵심 경쟁력의 변화</h3>
              <p className="text-xl text-slate-600 leading-[1.8] font-medium">
                단순한 암기와 연산은 이미 AI가 인간을 뛰어넘었습니다. 미래 사회에서는 기계가 하지 못하는 <span className="font-extrabold text-[#FF7B7B] bg-[#FFF0F0] px-2 py-0.5 rounded-md">'현상의 본질을 꿰뚫고 올바른 질문을 던지는 능력'</span>이 곧 우리 아이의 <span className="font-extrabold text-[#FF7B7B] border-b-2 border-[#FF7B7B]/30 pb-0.5">대체 불가능한 핵심 경쟁력</span>이 됩니다.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div variants={fadeInUpAny} className="bg-white/80 backdrop-blur-xl rounded-[40px] border border-white/50 shadow-[0_12px_40px_rgb(0,0,0,0.06)] p-8 md:p-12 relative overflow-hidden group">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#6BCB77]/10 rounded-full blur-3xl transition-all duration-500 group-hover:bg-[#6BCB77]/20" />

          <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-[#E8F8EE] to-white rounded-[24px] flex items-center justify-center flex-shrink-0 shadow-sm border border-[#6BCB77]/20 relative">
              <Activity className="w-8 h-8 text-[#6BCB77] absolute top-4 left-4" />
              <Dumbbell className="w-10 h-10 text-slate-700 absolute bottom-4 right-4" />
            </div>
            <div>
              <h3 className="text-3xl font-extrabold text-slate-800 mb-6 tracking-tight">3. 생각 근육은 오직 '질문과 대화'로만 자랍니다</h3>
              <p className="text-xl text-slate-600 leading-[1.8] font-medium">
                아이의 뇌는 스펀지 같아서, 일방적인 주입식 학원 교육보다는 일상 속에서 꼬리에 꼬리를 무는 대화를 할 때 <span className="font-extrabold text-[#6BCB77] bg-[#E8F8EE] px-2 py-0.5 rounded-md">비판적 사고력이 폭발적으로 성장</span>합니다. 하지만 바쁜 부모님이 매번 아이의 모든 질문에 완벽하게 대답하고 논리를 이끌어주기는 현실적으로 어렵습니다. 도담이는 바로 그 고민에서 출발했습니다.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.article>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUpAny}
        className="max-w-4xl mx-auto px-6 mb-32 text-center"
      >
        <div className="bg-slate-900 p-10 md:p-16 rounded-[48px] shadow-2xl relative overflow-hidden flex flex-col items-center group">
          {/* Dynamic gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#5BA4E6]/30 to-transparent rounded-full blur-[80px] transition-transform duration-1000 group-hover:scale-110 group-hover:translate-x-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#FF7B7B]/30 to-transparent rounded-full blur-[80px] transition-transform duration-1000 group-hover:scale-110 group-hover:-translate-x-10 pointer-events-none" />

          <Sparkles className="w-14 h-14 text-[#FF7B7B] mb-8 relative z-10 animate-pulse" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight tracking-tight relative z-10 drop-shadow-md">
            도담이와 함께 우리 아이의 <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5BA4E6] to-[#6BCB77]">생각하는 힘</span>을 기를 준비가 되셨나요?
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed mb-12 max-w-2xl relative z-10">
            지금 바로 다정한 AI 튜터와 함께하는 생각 대화를 시작해 보세요.
          </p>

          <button
            onClick={openModal}
            className="group/btn relative overflow-hidden rounded-full bg-gradient-to-r from-[#5BA4E6] to-[#4589C7] px-12 py-6 text-2xl font-bold text-white shadow-[0_0_30px_rgba(91,164,230,0.5)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(91,164,230,0.8)] hover:scale-105 active:scale-95 flex items-center gap-4 z-10 border border-white/20"
          >
            <span className="relative z-10 flex items-center gap-3">
              사전 체험하기
              <ArrowRight className="w-7 h-7 transition-transform group-hover/btn:translate-x-2" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#4589C7] to-[#5BA4E6] opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
          </button>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="w-full max-w-6xl mx-auto px-6 border-t border-slate-200/60 pt-10 pb-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-2xl font-bold text-slate-300 tracking-tight flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            도담이
          </div>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-slate-600 transition-colors">회사소개</a>
            <a href="#" className="hover:text-slate-600 transition-colors">이용약관</a>
            <a href="#" className="hover:text-slate-600 font-bold transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-slate-600 transition-colors">고객센터</a>
          </div>
          <div className="text-sm text-slate-400 font-medium">
            &copy; {new Date().getFullYear()} Dodami Inc.
          </div>
        </div>
      </footer>
    </div>
  );
}