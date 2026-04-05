"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import GlobalHeader from '@/components/GlobalHeader';
import SubscribeModal from '@/components/SubscribeModal';
import { 
  Sparkles, 
  Smile, 
  Ear, 
  FileText, 
  Gift,
  ArrowRight,
  PlayCircle,
  Users,
  Droplet,
  Sun,
  Wind,
  Sprout,
  CheckCircle,
  X
} from 'lucide-react';

const MASCOTS = [
  {
    id: 'green',
    name: '지구',
    trait: '호기심 많은 자연주의자',
    image: '/images/mascot-green.png',
    theme: 'border-[#6BCB77]',
    bgHover: 'hover:bg-[#6BCB77]/5'
  },
  {
    id: 'yellow',
    name: '반짝이',
    trait: '상큼하고 에너지 넘치는 응원대장',
    image: '/images/mascot-yellow.png',
    theme: 'border-[#F4C430]',
    bgHover: 'hover:bg-[#F4C430]/5'
  },
  {
    id: 'blue',
    name: '퐁당이',
    trait: '차분하고 상냥한 듣기대장',
    image: '/images/mascot-blue.png',
    theme: 'border-[#5BA4E6]',
    bgHover: 'hover:bg-[#5BA4E6]/5'
  },
  {
    id: 'red',
    name: '사랑이',
    trait: '다정하고 따뜻한 공감대장',
    image: '/images/mascot-red.png',
    theme: 'border-[#FF7B7B]',
    bgHover: 'hover:bg-[#FF7B7B]/5'
  }
];

export default function Home() {
  const [selectedMascot, setSelectedMascot] = useState<typeof MASCOTS[0] | null>(null);
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

  const staggerChildrenAny = staggerContainer as any;
  const fadeInUpAny = fadeInUp as any;

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
        className="max-w-5xl mx-auto px-6 pt-40 pb-24 flex flex-col items-center text-center relative z-10"
      >
        <span className="bg-[#FFF0F0] text-[#FF7B7B] font-bold px-4 py-2 rounded-full mb-6 text-sm tracking-wide shadow-sm border border-[#FF7B7B]/20">
          🌱 질문하는 아이가 생각하는 아이
        </span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-800 leading-[1.2] mb-8">
          외우게 하는 교육 대신, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5BA4E6] to-[#FF7B7B]">생각하는 힘을 길러주세요.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-3xl leading-relaxed mb-12">
          스마트폰만 쥐여주면 생기던 죄책감, 이제 내려놓으세요. <br className="hidden md:block" />
          화면 대신 다정한 목소리로 대화하며 생각 근육을 키워주는 <br className="hidden md:block" />
          <span className="font-bold text-slate-700">1:1 AI 튜터 도담이</span>입니다.
        </p>
        
        <button 
          onClick={openModal}
          className="group relative overflow-hidden rounded-[32px] bg-[#FF7B7B] px-10 py-5 text-xl font-bold text-white shadow-lg shadow-[#FF7B7B]/30 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl hover:shadow-[#FF7B7B]/40 focus:outline-none flex items-center gap-3"
        >
          사전 체험하기
          <Sparkles className="w-6 h-6 transition-transform group-hover:rotate-12" />
        </button>
      </motion.section>

      {/* Mascot Selection Section */}
      <motion.section 
        id="mascot-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildrenAny}
        className="max-w-6xl mx-auto px-6 pt-12 pb-24"
      >
        <motion.div variants={fadeInUpAny} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            내 첫 번째 생각 친구, <span className="text-[#5BA4E6]">도담이 고르기</span>
          </h2>
          <p className="mt-4 text-xl text-slate-600 font-medium">아이와 함께 이야기를 나눌 다정한 튜터를 만나보세요!</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12">
          {MASCOTS.map((mascot) => (
            <motion.div
              key={mascot.id}
              variants={fadeInUpAny}
              onClick={() => setSelectedMascot(mascot)}
              whileHover={{ scale: 1.03 }}
              className={`cursor-pointer overflow-hidden relative flex flex-col items-center bg-white p-6 rounded-[32px] shadow-sm transition-all duration-300 border-4 ${
                selectedMascot?.id === mascot.id 
                  ? `${mascot.theme} shadow-md` 
                  : `border-transparent hover:border-slate-100 ${mascot.bgHover}`
              }`}
            >
              {selectedMascot?.id === mascot.id && (
                <div className="absolute top-4 right-4 text-[#5BA4E6]">
                  <CheckCircle className="w-6 h-6 text-[#5BA4E6]" />
                </div>
              )}
              <div className="w-32 h-32 relative mb-6">
                <Image 
                  src={mascot.image} 
                  alt={mascot.name} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-contain drop-shadow-sm"
                />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-800 mb-2">{mascot.name}</h3>
              <p className="text-slate-500 font-medium text-center leading-relaxed">
                {mascot.trait}
              </p>
            </motion.div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {selectedMascot && (
            <motion.div
              key={selectedMascot.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              className="bg-white p-8 md:p-12 rounded-[40px] border border-slate-100 shadow-xl shadow-[#5BA4E6]/5 flex flex-col items-center text-center max-w-3xl mx-auto relative overflow-hidden"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#FFF8F0] rounded-full blur-3xl opacity-50" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#F0F4FF] rounded-full blur-3xl opacity-50" />
              
              <div className="relative mb-8 mt-4">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-64 bg-slate-800 text-white p-4 rounded-2xl rounded-bl-none font-bold text-lg shadow-lg">
                  "안녕! 나는 {selectedMascot.name}야. <br/>나랑 같이 생각 놀이 하러 갈까?"
                </div>
                <div className="w-48 h-48 relative mt-12 mx-auto">
                  <Image 
                    src={selectedMascot.image} 
                    alt={selectedMascot.name} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain drop-shadow-md animate-bounce-slow"
                    style={{ animationDuration: '3s' }}
                  />
                </div>
              </div>
              
              <Link href={`/demo?character=${selectedMascot.name}`}>
                <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#5BA4E6] to-[#4589C7] px-10 py-5 text-xl font-bold text-white shadow-lg shadow-[#5BA4E6]/30 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl focus:outline-none flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  {selectedMascot.name}와 대화 시작하기
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1 ml-2" />
                </button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      {/* NEW: 도담 학습법 (Metaphor Cards) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildrenAny}
        className="max-w-6xl mx-auto px-6 py-24 mb-16"
      >
        <motion.div variants={fadeInUpAny} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            자연을 닮은 <span className="text-[#6BCB77]">도담 학습법</span>
          </h2>
          <p className="mt-4 text-xl text-slate-600 font-medium">건강하게 자라나는 우리 아이의 생각 근육</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <motion.div variants={fadeInUpAny} className="bg-gradient-to-b from-blue-50 to-white p-8 rounded-[32px] border border-blue-100 shadow-sm hover:shadow-md transition-all">
            <div className="w-14 h-14 bg-blue-100 text-blue-500 rounded-2xl flex items-center justify-center mb-6">
              <Droplet className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3 tracking-tight">질문의 힘</h3>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              답을 일방적으로 쏟아내지 않고, 아이가 스스로 깨치도록 <span className="text-blue-600 font-bold">촉촉한 질문</span>으로 이끕니다.
            </p>
          </motion.div>

          <motion.div variants={fadeInUpAny} className="bg-gradient-to-b from-yellow-50 to-white p-8 rounded-[32px] border border-yellow-100 shadow-sm hover:shadow-md transition-all">
            <div className="w-14 h-14 bg-yellow-100 text-yellow-500 rounded-2xl flex items-center justify-center mb-6">
              <Sun className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3 tracking-tight">공감의 힘</h3>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              아이의 미세한 목소리와 감정을 읽어내어, 햇살처럼 <span className="text-yellow-600 font-bold">따뜻하고 다정하게</span> 반응합니다.
            </p>
          </motion.div>

          <motion.div variants={fadeInUpAny} className="bg-gradient-to-b from-teal-50 to-white p-8 rounded-[32px] border border-teal-100 shadow-sm hover:shadow-md transition-all">
            <div className="w-14 h-14 bg-teal-100 text-teal-500 rounded-2xl flex items-center justify-center mb-6">
              <Wind className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3 tracking-tight">도약의 힘</h3>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              막힘 없이 나아가도록, 바람이 등을 밀어주듯 아이 수준에 맞게 <span className="text-teal-600 font-bold">난이도를 유연하게 조절</span>합니다.
            </p>
          </motion.div>

          <motion.div variants={fadeInUpAny} className="bg-gradient-to-b from-emerald-50 to-white p-8 rounded-[32px] border border-emerald-100 shadow-sm hover:shadow-md transition-all">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-500 rounded-2xl flex items-center justify-center mb-6">
              <Sprout className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3 tracking-tight">기억의 힘</h3>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              새롭게 배운 개념이 단단히 뿌리내릴 수 있도록, 대화 속에서 <span className="text-emerald-600 font-bold">자연스럽게 반복</span>합니다.
            </p>
          </motion.div>

        </div>
      </motion.section>

      {/* NEW: 도담이는 이렇게 다릅니다 (VS Section) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildrenAny}
        className="max-w-4xl mx-auto px-6 mb-24"
      >
        <motion.div variants={fadeInUpAny} className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-800 tracking-tight">
            도담이는 이렇게 다릅니다
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.div variants={fadeInUpAny} className="bg-white p-6 md:p-8 rounded-[32px] shadow-sm border border-slate-100 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-2 bg-slate-200" />
            <div className="flex-shrink-0 text-left w-full md:w-32">
              <span className="bg-slate-100 text-slate-500 font-bold px-4 py-2 rounded-xl text-lg">학원</span>
            </div>
            <div className="flex-1 flex flex-col md:flex-row items-center md:items-start gap-4">
              <p className="text-xl text-slate-500 font-medium line-through decoration-slate-300">학원은 가르치고,</p>
              <ArrowRight className="w-6 h-6 text-slate-300 hidden md:block" />
              <p className="text-2xl text-slate-800 font-bold">도담이는 <span className="text-[#5BA4E6]">생각하게</span> 합니다.</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUpAny} className="bg-white p-6 md:p-8 rounded-[32px] shadow-sm border border-[#FF0000]/10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-2 bg-[#FF0000]/20" />
            <div className="flex-shrink-0 text-left w-full md:w-32">
              <span className="bg-[#FF0000]/10 text-[#FF0000] font-bold px-4 py-2 rounded-xl text-lg">유튜브</span>
            </div>
            <div className="flex-1 flex flex-col md:flex-row items-center md:items-start gap-4">
              <p className="text-xl text-slate-500 font-medium line-through decoration-slate-300">유튜브는 보여주고,</p>
              <ArrowRight className="w-6 h-6 text-slate-300 hidden md:block" />
              <p className="text-2xl text-slate-800 font-bold">도담이는 <span className="text-[#FF7B7B]">대화</span>합니다.</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUpAny} className="bg-white p-6 md:p-8 rounded-[32px] shadow-sm border border-[#10A37F]/10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-2 bg-[#10A37F]/20" />
            <div className="flex-shrink-0 text-left w-full md:w-32">
              <span className="bg-[#10A37F]/10 text-[#10A37F] font-bold px-4 py-2 rounded-xl text-lg">ChatGPT</span>
            </div>
            <div className="flex-1 flex flex-col md:flex-row items-center md:items-start gap-4">
              <p className="text-xl text-slate-500 font-medium line-through decoration-slate-300">ChatGPT는 답을 주고,</p>
              <ArrowRight className="w-6 h-6 text-slate-300 hidden md:block" />
              <p className="text-2xl text-slate-800 font-bold">도담이는 <span className="text-[#10A37F]">질문</span>합니다.</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* NEW: 이런 부모님께 추천합니다 (Checklist) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUpAny}
        className="max-w-4xl mx-auto px-6 mb-32"
      >
        <div className="bg-[#FFF8F0] p-10 md:p-14 rounded-[40px] border border-[#FF7B7B]/20 shadow-md shadow-[#FF7B7B]/5">
          <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center tracking-tight">이런 부모님께 강력하게 추천합니다!</h2>
          <ul className="space-y-6">
            <li className="flex items-start gap-4 bg-white p-6 rounded-3xl shadow-sm">
              <div className="bg-[#6BCB77]/20 p-2 rounded-full mt-1 flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-[#10A37F]" />
              </div>
              <p className="text-xl text-slate-700 font-medium leading-relaxed">
                "학원 보내는데 진짜 이해하고 넘어가는지 모르겠어요"
              </p>
            </li>
            <li className="flex items-start gap-4 bg-white p-6 rounded-3xl shadow-sm">
              <div className="bg-[#6BCB77]/20 p-2 rounded-full mt-1 flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-[#10A37F]" />
              </div>
              <p className="text-xl text-slate-700 font-medium leading-relaxed">
                "유튜브 대신 의미 있는 걸 시키고 싶은데, 아이가 화면만 보려 해요"
              </p>
            </li>
            <li className="flex items-start gap-4 bg-white p-6 rounded-3xl shadow-sm">
              <div className="bg-[#6BCB77]/20 p-2 rounded-full mt-1 flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-[#10A37F]" />
              </div>
              <p className="text-xl text-slate-700 font-medium leading-relaxed">
                "아이가 스스로 생각하고 논리적으로 말하는 힘을 길렀으면 좋겠어요"
              </p>
            </li>
          </ul>
        </div>
      </motion.section>

      {/* RETAINED: Smart Tutor (Emotion / Voice Recognition ZPD 3.8%) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildrenAny}
        className="max-w-6xl mx-auto px-6 mb-24"
      >
        <motion.div variants={fadeInUpAny} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
            압도적인 AI 튜터링 기술력
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          <motion.div variants={fadeInUpAny} className="bg-white p-10 md:p-14 rounded-[40px] shadow-sm shadow-[#FF7B7B]/5 border border-[#FF7B7B]/10 hover:shadow-[#FF7B7B]/10 transition-shadow duration-300">
            <div className="w-20 h-20 rounded-[28px] bg-[#FF7B7B]/10 text-[#FF7B7B] flex items-center justify-center mb-8">
              <Smile className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-bold text-slate-800 mb-6 tracking-tight">아이의 감정을 읽는 튜터</h3>
            <p className="text-xl text-slate-600 leading-loose font-medium">
              아이의 목소리에서 감정을 읽어요. 아이의 상태를 실시간으로 파악하여, 너무 쉬워 지루해하지도, 너무 어려워 포기하지도 않게 <span className="text-[#FF7B7B] font-bold">‘딱 맞는 난이도(ZPD)’</span>를 찾아가며 완벽한 몰입(Flow) 상태를 유지합니다.
            </p>
          </motion.div>

          <motion.div variants={fadeInUpAny} className="bg-white p-10 md:p-14 rounded-[40px] shadow-sm shadow-[#6BCB77]/5 border border-[#6BCB77]/10 hover:shadow-[#6BCB77]/10 transition-shadow duration-300">
            <div className="w-20 h-20 rounded-[28px] bg-[#6BCB77]/10 text-[#6BCB77] flex items-center justify-center mb-8">
              <Ear className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-bold text-slate-800 mb-6 tracking-tight">서툰 아이 발음도 찰떡같이</h3>
            <p className="text-xl text-slate-600 leading-loose font-medium">
              구글, 아마존 등 글로벌 기업보다 <span className="text-[#6BCB77] font-bold">3배 더 정확하게(오류율 3.8%)</span> 아이들의 목소리를 인식하는 국내 유일의 기술입니다. 서툰 마음과 발음도 도담이는 완벽하게 헤아려줍니다.
            </p>
          </motion.div>

        </div>
      </motion.section>

      {/* RETAINED: Report / Audio clip feature */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUpAny}
        className="max-w-6xl mx-auto px-6 mb-24"
      >
        <div className="bg-[#FFF8F0] p-10 md:p-16 rounded-[48px] md:rounded-[64px] border border-[#FF7B7B]/10 shadow-lg shadow-[#FF7B7B]/5">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <div className="w-full lg:w-1/2 text-left">
              <div className="w-16 h-16 rounded-[24px] bg-white text-[#FF7B7B] flex items-center justify-center mb-8 shadow-sm">
                <FileText className="w-8 h-8" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-800 leading-[1.3] mb-8">
                학원 영수증은 <br />
                <span className="text-slate-400 line-through decoration-2 decoration-slate-300">'얼마 냈는지'</span>를,<br />
                도담이는 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5BA4E6] to-[#FF7B7B]">'뭘 이해했는지'</span>를<br />
                알려줍니다.
              </h2>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-8">
              <p className="text-xl text-slate-700 font-medium leading-loose">
                매일 카카오톡으로 도착하는 우리 아이 성장 일기. <br />
                <span className="font-bold">"민준이가 오늘 분수를 자기 말로 설명했어요!"</span> 같은 실질적인 이해도 분석과 호기심 변화 추이를 확인하세요.
              </p>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-[32px] shadow-sm border border-[#FF7B7B]/20 flex flex-col sm:flex-row gap-6 items-start relative overflow-hidden group cursor-default"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF7B7B]/5 rounded-bl-[60px] transition-transform group-hover:scale-125" />
                <div className="w-14 h-14 bg-[#FF7B7B]/10 text-[#FF7B7B] rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                  <PlayCircle className="w-8 h-8" />
                </div>
                <div className="relative z-10 w-full text-left">
                  <p className="text-[#FF7B7B] font-bold mb-2">가족 단톡방에 자랑하세요!</p>
                  <p className="text-lg text-slate-700 font-medium leading-relaxed">
                    아이의 빛나는 생각과 기발한 대답이 담긴 <br className="hidden lg:block"/>
                    <span className="font-bold text-slate-900 bg-[#FFF0F0] px-1 rounded">'30초 하이라이트 음성 클립'</span>을 매 세션마다 <br className="hidden lg:block"/>자동으로 생성해 보내드립니다.
                  </p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* RETAINED: Authority Advisor Ribbon */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUpAny}
        className="max-w-6xl mx-auto px-6 mb-24"
      >
        <div className="bg-[#F0F4FF] rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 border border-[#5BA4E6]/20 shadow-sm text-center md:text-left">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-[#5BA4E6] flex-shrink-0">
            <Users className="w-8 h-8" />
          </div>
          <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
            <span className="font-bold text-[#5BA4E6]">음성 AI 최고 권위자이자 전 삼성전자 최연소 부사장,</span><br className="hidden lg:block"/>
            현 고려대학교 인공지능학과 <span className="font-bold text-slate-800">김찬우 교수님</span>의 기술 자문을 받으며 <br className="hidden lg:block"/>한국 아동에 최적화된 감정 인식(SER) 기술을 공동 연구하고 있습니다.
          </p>
        </div>
      </motion.section>

      {/* RETAINED: Pricing CTA */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUpAny}
        className="max-w-4xl mx-auto px-6 pb-20 text-center"
      >
        <div className="bg-white p-10 md:p-16 rounded-[48px] shadow-lg shadow-[#5BA4E6]/10 border border-[#5BA4E6]/20 relative overflow-hidden flex flex-col items-center">
          <div className="absolute top-0 w-full h-2 bg-gradient-to-r from-[#5BA4E6] to-[#FF7B7B]" />
          
          <Gift className="w-16 h-16 text-[#5BA4E6] mb-8" />
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-8 leading-tight">
            무료로 아이의 변화를 <br className="hidden md:block" />확인하고 결정하세요.
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed mb-12 max-w-2xl">
            학원비의 1/10 수준. <span className="bg-[#F0F4FF] text-[#5BA4E6] font-bold px-3 py-1 rounded-xl">주 3회 자유 대화는 영원히 무료</span>입니다. <br className="hidden md:block" />
            결과가 보일 때 월 29,000원으로 더 깊은 학습을 시작하세요.
          </p>

          <button 
            onClick={openModal}
            className="group relative overflow-hidden rounded-full bg-slate-800 hover:bg-slate-900 px-10 py-5 text-xl font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-3"
          >
            사전 체험하기
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
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

      {/* Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5%); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}} />
    </div>
  );
}
