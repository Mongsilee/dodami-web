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
  X,
  MessageCircle,
  Bot,
  ChevronDown,
  ChevronUp
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

// NEW: FAQ 데이터
const FAQS = [
  {
    question: "몇 살 아이들에게 가장 추천하나요?",
    answer: "도담이는 4세부터 9세 아이들에게 가장 적합하게 설계되었습니다. 아직 한글을 떼지 못한 아이라도 목소리로 자연스럽게 대화할 수 있어, 언어 발달과 상상력 자극에 큰 도움을 줍니다."
  },
  {
    question: "아이가 낯을 가려서 말을 잘 안 하려고 하면 어쩌죠?",
    answer: "걱정하지 마세요! 도담이는 재촉하지 않고 기다려주는 다정한 친구입니다. 아이가 좋아하는 주제(공룡, 자동차, 우주 등)를 미리 설정해 주시면, 도담이가 먼저 아이의 관심사로 재미있게 말을 건넵니다."
  },
  {
    question: "사전 체험 후 자동으로 결제가 되나요?",
    answer: "아니요, 100% 안심하셔도 됩니다! 사전 체험은 신용카드 등록 없이 이름과 이메일만으로 시작됩니다. 아이의 놀라운 변화를 직접 확인하신 후에, 부모님께서 원하실 때만 정규 학습으로 전환하실 수 있습니다."
  }
];

export default function Home() {
  const [selectedMascot, setSelectedMascot] = useState<typeof MASCOTS[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null); // FAQ 열림 상태 관리

  const openModal = () => setIsModalOpen(true);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
        className="max-w-5xl mx-auto px-6 pt-40 pb-32 flex flex-col items-center text-center relative z-10"
      >
        <span className="bg-[#FFF0F0] text-[#FF7B7B] font-extrabold px-4 py-2 rounded-full mb-6 text-sm tracking-wide shadow-sm border border-[#FF7B7B]/20">
          🌱 스스로 질문하며 생각하는 아이
        </span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-800 leading-[1.2] mb-8">
          정답을 외우는 대신, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5BA4E6] to-[#FF7B7B]">생각하는 힘을 길러주세요.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-3xl leading-relaxed mb-12">
          스마트폰을 쥐여줄 때마다 느꼈던 미안함은 이제 덜어놓으세요. <br className="hidden md:block" />
          일방적인 화면 시청 대신, 다정한 목소리로 대화하며 우리 아이의 생각 근육을 키워주는 <br className="hidden md:block" />
          <span className="font-extrabold text-slate-700">1:1 AI 튜터 도담이</span>입니다.
        </p>

        <button
          onClick={openModal}
          className="group relative overflow-hidden rounded-[32px] bg-[#FF7B7B] px-10 py-5 text-xl font-bold text-white shadow-lg shadow-[#FF7B7B]/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 hover:shadow-xl hover:shadow-[#FF7B7B]/40 focus:outline-none flex items-center gap-3"
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
        className="max-w-6xl mx-auto px-6 pt-12 pb-32"
      >
        <motion.div variants={fadeInUpAny} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            우리 아이 첫 번째 생각 친구, <span className="text-[#5BA4E6]">도담이와 인사할까요?</span>
          </h2>
          <p className="mt-4 text-xl text-slate-600 font-medium">아이와 함께 이야기를 나눌 다정한 튜터를 만나보세요!</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-16">
          {MASCOTS.map((mascot) => (
            <motion.div
              key={mascot.id}
              variants={fadeInUpAny}
              onClick={() => setSelectedMascot(mascot)}
              whileHover={{ scale: 1.03, y: -5 }}
              className={`cursor-pointer overflow-hidden relative flex flex-col items-center p-6 rounded-[32px] transition-all duration-300 border-4 bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${selectedMascot?.id === mascot.id
                ? `${mascot.theme} shadow-lg`
                : `border-white/50 hover:border-slate-200 ${mascot.bgHover}`
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
              <h3 className="text-2xl font-extrabold text-slate-800 mb-2 tracking-tight">{mascot.name}</h3>
              <p className="text-slate-600 font-medium text-center leading-relaxed">
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
              className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[40px] border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col items-center text-center max-w-3xl mx-auto relative overflow-hidden"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#FFF8F0] rounded-full blur-3xl opacity-50" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#F0F4FF] rounded-full blur-3xl opacity-50" />

              <div className="relative mb-10 mt-2 flex flex-col items-center z-10">
                <div className="bg-slate-800 text-white px-8 py-5 rounded-[32px] rounded-br-[8px] font-bold text-lg md:text-xl shadow-xl mb-6 max-w-sm w-fit relative">
                  "안녕! 나는 {selectedMascot.name}야. <br />나랑 같이 생각 놀이 하러 갈까?"
                </div>
                <div className="w-48 h-48 md:w-56 md:h-56 relative mx-auto">
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

              <Link href={`/demo?character=${selectedMascot.name}`} className="z-10">
                <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#5BA4E6] to-[#4589C7] px-10 py-5 text-xl font-bold text-white shadow-lg shadow-[#5BA4E6]/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 hover:shadow-xl focus:outline-none flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  {selectedMascot.name}와 대화 시작하기
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1 ml-2" />
                </button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      {/* 도담 학습법 (Metaphor Cards) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildrenAny}
        className="max-w-6xl mx-auto px-6 py-32 mb-16"
      >
        <motion.div variants={fadeInUpAny} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            자연을 닮은 <span className="text-[#6BCB77]">도담 학습법</span>
          </h2>
          <p className="mt-4 text-xl text-slate-600 font-medium">건강하게 자라나는 우리 아이의 생각 근육</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div variants={fadeInUpAny} className="p-8 rounded-[32px] bg-white/80 backdrop-blur-md border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="w-14 h-14 bg-blue-100 text-blue-500 rounded-2xl flex items-center justify-center mb-6">
              <Droplet className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-800 mb-3 tracking-tight">질문의 힘</h3>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              답을 일방적으로 쏟아내지 않고, 아이가 스스로 깨우칠 수 있도록, <span className="text-blue-600 font-bold">생각을 여는 질문</span>을 던집니다.
            </p>
          </motion.div>

          <motion.div variants={fadeInUpAny} className="p-8 rounded-[32px] bg-white/80 backdrop-blur-md border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="w-14 h-14 bg-yellow-100 text-yellow-500 rounded-2xl flex items-center justify-center mb-6">
              <Sun className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-800 mb-3 tracking-tight">공감의 힘</h3>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              아이의 미세한 목소리와 감정을 읽어내어, 햇살처럼 <span className="text-yellow-600 font-bold">따뜻하고 다정하게</span> 반응합니다.
            </p>
          </motion.div>

          <motion.div variants={fadeInUpAny} className="p-8 rounded-[32px] bg-white/80 backdrop-blur-md border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="w-14 h-14 bg-teal-100 text-teal-500 rounded-2xl flex items-center justify-center mb-6">
              <Wind className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-800 mb-3 tracking-tight">도약의 힘</h3>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              막힘 없이 나아가도록, 바람이 등을 부드럽게 밀어주듯, 아이의 눈높이와 속도에 맞춰 <span className="text-teal-600 font-bold">자연스럽게 난이도를 조절</span>합니다.
            </p>
          </motion.div>

          <motion.div variants={fadeInUpAny} className="p-8 rounded-[32px] bg-white/80 backdrop-blur-md border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-500 rounded-2xl flex items-center justify-center mb-6">
              <Sprout className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-800 mb-3 tracking-tight">기억의 힘</h3>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              새롭게 배운 개념이 단단히 뿌리내릴 수 있도록, 대화 속에서 <span className="text-emerald-600 font-bold">자연스럽게 반복</span>합니다.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* 도담이는 이렇게 다릅니다 (VS Section) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildrenAny}
        className="max-w-4xl mx-auto px-6 mb-16"
      >
        <motion.div variants={fadeInUpAny} className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-800 tracking-tight">
            도담이는 이렇게 다릅니다
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.div variants={fadeInUpAny} className="bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-2 bg-slate-200" />
            <div className="flex-shrink-0 text-left w-full md:w-32">
              <span className="bg-slate-100 text-slate-500 font-bold px-4 py-2 rounded-xl text-lg">학원</span>
            </div>
            <div className="flex-1 flex flex-col md:flex-row items-center md:items-start gap-4">
              <p className="text-xl text-slate-500 font-medium line-through decoration-slate-300">학원은 가르치고,</p>
              <ArrowRight className="w-6 h-6 text-slate-300 hidden md:block" />
              <p className="text-2xl text-slate-800 font-extrabold">도담이는 <span className="text-[#5BA4E6]">생각하게</span> 합니다.</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUpAny} className="bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#FF0000]/10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-2 bg-[#FF0000]/20" />
            <div className="flex-shrink-0 text-left w-full md:w-32">
              <span className="bg-[#FF0000]/10 text-[#FF0000] font-bold px-4 py-2 rounded-xl text-lg">유튜브</span>
            </div>
            <div className="flex-1 flex flex-col md:flex-row items-center md:items-start gap-4">
              <p className="text-xl text-slate-500 font-medium line-through decoration-slate-300">유튜브는 보여주고,</p>
              <ArrowRight className="w-6 h-6 text-slate-300 hidden md:block" />
              <p className="text-2xl text-slate-800 font-extrabold">도담이는 <span className="text-[#FF7B7B]">대화</span>합니다.</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUpAny} className="bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#10A37F]/10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-2 bg-[#10A37F]/20" />
            <div className="flex-shrink-0 text-left w-full md:w-32">
              <span className="bg-[#10A37F]/10 text-[#10A37F] font-bold px-4 py-2 rounded-xl text-lg">ChatGPT</span>
            </div>
            <div className="flex-1 flex flex-col md:flex-row items-center md:items-start gap-4">
              <p className="text-xl text-slate-500 font-medium line-through decoration-slate-300">ChatGPT는 답을 주고,</p>
              <ArrowRight className="w-6 h-6 text-slate-300 hidden md:block" />
              <p className="text-2xl text-slate-800 font-extrabold">도담이는 <span className="text-[#10A37F]">질문</span>합니다.</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* NEW: 대화 예시 (Sneak Peek) Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUpAny}
        className="max-w-4xl mx-auto px-6 mb-32"
      >
        <div className="bg-slate-800 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#5BA4E6]/10 to-transparent rounded-bl-full pointer-events-none" />

          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 text-center tracking-tight">
            단순한 대화가 아닌, <span className="text-[#5BA4E6]">생각이 자라나는 대화</span>
          </h3>
          <p className="text-slate-400 text-center mb-10 font-medium">같은 질문에도 어떻게 대답하느냐가 아이의 사고력을 결정합니다.</p>

          <div className="space-y-8 relative z-10">
            {/* Child's Question */}
            <div className="flex justify-end">
              <div className="bg-white text-slate-800 px-6 py-4 rounded-[24px] rounded-br-none font-bold shadow-sm max-w-[80%] md:max-w-[60%]">
                "하늘은 왜 파래?"
              </div>
            </div>

            {/* ChatGPT Response */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0">
                <Bot className="w-5 h-5 text-slate-400" />
              </div>
              <div className="bg-slate-700 text-slate-300 px-6 py-4 rounded-[24px] rounded-bl-none shadow-sm max-w-[85%] md:max-w-[70%]">
                <p className="text-xs font-bold text-slate-400 mb-1">일반적인 AI (정답 제시)</p>
                <p className="leading-relaxed">하늘이 파란 이유는 빛의 산란 현상 때문입니다. 태양빛이 지구의 대기를 통과할 때, 파장이 짧은 파란색 빛이 공기 분자와 부딪혀...</p>
              </div>
            </div>

            {/* Dodami Response */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#5BA4E6]/20 flex items-center justify-center flex-shrink-0 border border-[#5BA4E6]/30">
                <Smile className="w-6 h-6 text-[#5BA4E6]" />
              </div>
              <div className="bg-gradient-to-br from-[#F0F4FF] to-white text-slate-800 px-6 py-5 rounded-[24px] rounded-bl-none shadow-md border border-[#5BA4E6]/20 max-w-[85%] md:max-w-[70%] relative">
                <p className="text-xs font-extrabold text-[#5BA4E6] mb-1">도담이 (생각 유도)</p>
                <p className="font-bold leading-relaxed">"우와, 진짜 오늘 하늘이 파랗네! 우리 지민이는 하늘에 무슨 색 물감을 푼 것 같아? 같이 상상해 볼까?"</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 이런 부모님께 추천합니다 (Checklist) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUpAny}
        className="max-w-4xl mx-auto px-6 mb-32"
      >
        <div className="bg-white/60 backdrop-blur-xl p-10 md:p-14 rounded-[40px] border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <h2 className="text-3xl font-extrabold text-slate-800 mb-10 text-center tracking-tight">이런 부모님께 강력하게 추천합니다!</h2>
          <ul className="space-y-6">
            <li className="flex items-start gap-4 bg-white/80 backdrop-blur-md border border-white/50 p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="bg-[#6BCB77]/20 p-2 rounded-full mt-1 flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-[#10A37F]" />
              </div>
              <p className="text-xl text-slate-700 font-medium leading-relaxed">
                "학원 보내는데 진짜 이해하고 넘어가는지 모르겠어요"
              </p>
            </li>
            <li className="flex items-start gap-4 bg-white/80 backdrop-blur-md border border-white/50 p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="bg-[#6BCB77]/20 p-2 rounded-full mt-1 flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-[#10A37F]" />
              </div>
              <p className="text-xl text-slate-700 font-medium leading-relaxed">
                "유튜브 시청 시간을 줄이고, 의미 있는 대화 시간을 늘리고 싶어요"
              </p>
            </li>
            <li className="flex items-start gap-4 bg-white/80 backdrop-blur-md border border-white/50 p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
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

      {/* Smart Tutor (Emotion / Voice Recognition ZPD 3.8%) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildrenAny}
        className="max-w-6xl mx-auto px-6 mb-32"
      >
        <motion.div variants={fadeInUpAny} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
            국내 최고 수준의 아동 맞춤형 AI 기술
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div variants={fadeInUpAny} className="bg-white/80 backdrop-blur-md p-10 md:p-14 rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50">
            <div className="w-20 h-20 rounded-[28px] bg-[#FF7B7B]/10 text-[#FF7B7B] flex items-center justify-center mb-8">
              <Smile className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-extrabold text-slate-800 mb-6 tracking-tight">아이의 감정을 읽는 튜터</h3>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              아이의 목소리에서 감정을 읽어요. 아이의 상태를 실시간으로 파악하여, 너무 쉬워 지루해하지도, 너무 어려워 포기하지도 않게 <span className="text-[#FF7B7B] font-bold">‘딱 맞는 난이도(ZPD)’</span>를 찾아가며 완벽한 몰입(Flow) 상태를 유지합니다.
            </p>
          </motion.div>

          <motion.div variants={fadeInUpAny} className="bg-white/80 backdrop-blur-md p-10 md:p-14 rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50">
            <div className="w-20 h-20 rounded-[28px] bg-[#6BCB77]/10 text-[#6BCB77] flex items-center justify-center mb-8">
              <Ear className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-extrabold text-slate-800 mb-6 tracking-tight">아이들의 서툰 발음도 찰떡같이</h3>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              구글, 아마존 등 글로벌 기업보다 <span className="text-[#6BCB77] font-bold">3배 더 정확하게(오류율 3.8%)</span> 아이들의 목소리를 인식하는 국내 유일의 기술입니다. 서툰 마음과 발음도 도담이는 완벽하게 헤아려줍니다.
            </p>
          </motion.div>

        </div>
      </motion.section>

      {/* Report / Audio clip feature */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUpAny}
        className="max-w-6xl mx-auto px-6 mb-32"
      >
        <div className="bg-[#FFF8F0] p-10 md:p-16 rounded-[48px] md:rounded-[64px] border border-[#FF7B7B]/10 shadow-lg shadow-[#FF7B7B]/5">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            <div className="w-full lg:w-1/2 text-left">
              <div className="w-16 h-16 rounded-[24px] bg-white text-[#FF7B7B] flex items-center justify-center mb-8 shadow-sm">
                <FileText className="w-8 h-8" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-800 leading-[1.3] mb-8 tracking-tight">
                학원 영수증은 <br />
                <span className="text-slate-400 line-through decoration-2 decoration-slate-300">'얼마 냈는지'</span>를,<br />
                도담이는 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5BA4E6] to-[#FF7B7B]">'뭘 이해했는지'</span>를<br />
                알려줍니다.
              </h2>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-8">
              <p className="text-xl text-slate-700 font-medium leading-relaxed">
                매일 카카오톡으로 도착하는 우리 아이 성장 일기. <br />
                <span className="font-bold">"민준이가 오늘 분수를 자기 말로 설명했어요!"</span> 같은 실질적인 이해도 분석과 호기심 변화 추이를 확인하세요.
              </p>

              <motion.div
                className="bg-white/80 backdrop-blur-md p-8 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 flex flex-col sm:flex-row gap-6 items-start relative overflow-hidden group cursor-default"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF7B7B]/5 rounded-bl-[60px]" />
                <div className="w-14 h-14 bg-[#FF7B7B]/10 text-[#FF7B7B] rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                  <PlayCircle className="w-8 h-8" />
                </div>
                <div className="relative z-10 w-full text-left">
                  <p className="text-[#FF7B7B] font-extrabold mb-2">아이의 눈부신 성장을 온 가족과 공유하세요!</p>
                  <p className="text-lg text-slate-600 font-medium leading-relaxed">
                    아이의 반짝이는 생각과 기발한 대답이 담긴 <br className="hidden lg:block" />
                    <span className="font-extrabold text-slate-900 bg-[#FFF0F0] px-1 rounded">'30초 하이라이트 음성 클립'</span>을 매 세션마다 <br className="hidden lg:block" />자동으로 생성해 보내드립니다.
                  </p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* Authority Advisor Ribbon */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUpAny}
        className="max-w-6xl mx-auto px-6 mb-32"
      >
        <div className="bg-white/80 backdrop-blur-md rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 border border-[#5BA4E6]/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center md:text-left">
          <div className="w-16 h-16 bg-[#F0F4FF] rounded-full flex items-center justify-center shadow-sm text-[#5BA4E6] flex-shrink-0">
            <Users className="w-8 h-8" />
          </div>
          <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
            <span className="font-extrabold text-[#5BA4E6]">음성 AI 최고 권위자이자 전 삼성전자 최연소 부사장,</span><br className="hidden lg:block" />
            현 고려대학교 인공지능학과 <span className="font-extrabold text-slate-800">김찬우 교수님</span>의 기술 자문을 받으며 <br className="hidden lg:block" />한국 아동에 최적화된 감정 인식(SER) 기술을 공동 연구하고 있습니다.
          </p>
        </div>
      </motion.section>

      {/* NEW: FAQ Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUpAny}
        className="max-w-4xl mx-auto px-6 mb-32"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-800 tracking-tight">자주 묻는 질문</h2>
        </div>
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md border border-white/50 shadow-sm rounded-[24px] overflow-hidden transition-all duration-300 hover:shadow-md cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <div className="p-6 flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-800">{faq.question}</h3>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${openFaq === index ? 'bg-[#5BA4E6] text-white' : 'bg-slate-100 text-slate-400'}`}>
                  {openFaq === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </div>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-lg text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Pricing CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUpAny}
        className="max-w-4xl mx-auto px-6 pb-32 text-center"
      >
        <div className="bg-white/80 backdrop-blur-md p-10 md:p-16 rounded-[48px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50 relative overflow-hidden flex flex-col items-center">
          <div className="absolute top-0 w-full h-2 bg-gradient-to-r from-[#5BA4E6] to-[#FF7B7B]" />

          <Gift className="w-16 h-16 text-[#5BA4E6] mb-8" />
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-8 leading-tight tracking-tight">
            무료로 아이의 변화를 <br className="hidden md:block" />확인하고 결정하세요.
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed mb-12 max-w-2xl">
            학원비의 1/10 수준. <span className="bg-[#F0F4FF] text-[#5BA4E6] font-extrabold px-3 py-1 rounded-xl">주 3회 자유 대화는 영원히 무료</span>입니다. <br className="hidden md:block" />
            결과가 보일 때 월 29,000원으로 더 깊은 학습을 시작하세요.
          </p>

          <button
            onClick={openModal}
            className="group relative overflow-hidden rounded-full bg-slate-800 hover:bg-slate-900 px-10 py-5 text-xl font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 flex items-center gap-3"
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
      <style dangerouslySetInnerHTML={{
        __html: `
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