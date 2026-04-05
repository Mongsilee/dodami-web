"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import GlobalHeader from '@/components/GlobalHeader';
import SubscribeModal from '@/components/SubscribeModal';
import { Quote, Sparkles, ArrowRight, Heart } from 'lucide-react';

export default function TeamPage() {
  // 모달 상태 관리 추가
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  type TeamMember = { name: string; role: string; quote: string; image?: string; details: string[] };
  const teamMembers: TeamMember[] = [
    {
      name: "정연우 (William Chung)",
      role: "CEO",
      image: "/images/Will.jpeg",
      quote: "지식을 넘어, 스스로 생각하는 힘을 설계합니다.",
      details: [
        "학사: Princeton University (Computer Science)",
        "도담이 전체 기술 스택 독자 구축"
      ]
    },
    {
      name: "윤찬혁",
      role: "CTO",
      quote: "차가운 AI 기술에 다정한 선생님의 마음을 담습니다.",
      image: "/images/Chan.jpeg",
      details: [
        "학사: University of Wisconsin-Madison (Computer Science)",
        "석사: 서울대학교 (산업공학과)",
        "박사: 서강대학교 (가상융합테크놀로지) 재학 중",
        "前 PwC AI 컨설턴트",
        "前 아이스크림에듀 AI연구실 데이터 엔지니어",
      ]
    },
    {
      name: "김찬우 교수",
      role: "기술 자문위원",
      quote: "아동 음성 AI 기술의 새로운 지평을 함께 엽니다.",
      details: [
        "現 고려대학교 인공지능학과 교수",
        "前 삼성전자 최연소 부사장 (빅스비 창시자)",
        "Google·Microsoft 출신 음성 AI 권위자"
      ]
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8F0] via-white to-[#F0F4FF] font-sans text-slate-800 pb-20 overflow-x-hidden">
      <GlobalHeader />
      {/* 구독 모달 컴포넌트 추가 */}
      <SubscribeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <main className="max-w-6xl mx-auto px-6 pt-40">

        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <span className="bg-[#5BA4E6]/10 text-[#5BA4E6] font-bold px-5 py-2 rounded-full mb-6 inline-flex items-center gap-2 text-sm tracking-widest uppercase shadow-sm">
            <Sparkles className="w-4 h-4" />
            Our Mission & Team
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-800 leading-[1.3]">
            아이들의 가능성을 믿는 <br className="hidden md:block" />
            전문가들이 만듭니다
          </h1>
        </motion.div>

        {/* Our Mission / Founder's Letter Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="mb-32 max-w-4xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-xl p-10 md:p-16 rounded-[48px] border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF7B7B]/5 rounded-bl-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#5BA4E6]/5 rounded-tr-full pointer-events-none" />

            <div className="relative z-10">
              <Quote className="w-12 h-12 text-[#FF7B7B]/30 mb-6" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-8 leading-tight tracking-tight">
                "AI가 모든 정답을 알려주는 시대, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7B7B] to-[#5BA4E6]">우리 아이의 경쟁력은 어디에서 올까요?</span>"
              </h2>

              <div className="space-y-6 text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                <p>
                  과거의 교육은 <span className="text-slate-800 font-bold">'누가 더 많은 지식을 빠르고 정확하게 외우는가'</span>에 맞춰져 있었습니다.
                  하지만 손끝의 스마트폰이 세상의 모든 지식을 대신 기억해 주고, AI가 1초 만에 정답을 찾아내는 지금, 교육의 패러다임은 완전히 바뀌고 있습니다.
                </p>
                <p>
                  앞으로 사회가 필요로 하는 인재는 단순한 정답을 아는 사람이 아닙니다. <br className="hidden md:block" />
                  당연해 보이는 것에 의문을 품고, <span className="text-[#5BA4E6] font-bold">스스로 논리적으로 생각하며(Critical Thinking)</span>,
                  기계는 할 수 없는 <span className="text-[#FF7B7B] font-bold">올바른 질문을 던질 줄 아는 사람</span>입니다.
                </p>
                <p>
                  저희가 도담이를 만든 이유가 바로 여기에 있습니다. <br />
                  아이들이 단편적인 지식을 주입받는 수동적인 존재가 아니라, 끊임없이 "왜 그럴까?"를 묻고 대화하며 자신만의 단단한 생각 근육을 키워나가기를 진심으로 바랍니다.
                </p>
              </div>

              <div className="mt-12 flex items-center gap-4 border-t border-slate-100 pt-8">
                <div className="flex -space-x-4">
                  {/* sizes="48px" 추가 완료 (성능 최적화 경고 해결) */}
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative shadow-sm">
                    <Image src="/images/Will.jpeg" alt="William" fill sizes="48px" className="object-cover" />
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative shadow-sm">
                    <Image src="/images/Chan.jpeg" alt="Chan" fill sizes="48px" className="object-cover" />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Founders of Dodami</p>
                  <p className="text-slate-800 font-extrabold">William & Chan</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Team Members Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 flex flex-col items-center text-center"
            >
              <div className="relative w-32 h-32 rounded-full bg-slate-50 mb-8 flex items-center justify-center overflow-hidden border-4 border-[#F0F4FF] shadow-sm">
                {member.image ? (
                  <Image src={member.image} alt={member.name} fill className="object-cover" sizes="128px" />
                ) : (
                  <span className="text-slate-300 font-medium text-sm">Image<br />Placeholder</span>
                )}
              </div>
              <h3 className="text-2xl font-extrabold text-slate-800 mb-2 tracking-tight">{member.name}</h3>
              <p className="text-[#5BA4E6] font-extrabold mb-8 text-sm uppercase tracking-wider">{member.role}</p>

              <div className="bg-gradient-to-br from-[#FFF8F0] to-[#FFF0F0] w-full p-6 rounded-3xl mb-8 relative border border-[#FF7B7B]/10">
                <Quote className="absolute top-4 left-4 w-5 h-5 text-[#FF7B7B]/30" />
                <p className="text-slate-800 font-bold leading-relaxed pt-3 relative z-10 text-[15px]">"{member.quote}"</p>
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

        {/* Bottom Call To Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center bg-slate-800 p-12 md:p-16 rounded-[48px] shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#5BA4E6]/20 to-transparent rounded-bl-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#FF7B7B]/20 to-transparent rounded-tr-full pointer-events-none" />

          <Heart className="w-12 h-12 text-[#FF7B7B] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
            도담이와 함께 우리 아이의 <br className="hidden md:block" />
            생각하는 힘을 기를 준비가 되셨나요?
          </h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto font-medium">
            아이의 작은 호기심을 빛나는 생각으로 키워주는 첫걸음, <br className="hidden sm:block" />
            지금 바로 다정한 AI 튜터를 만나보세요.
          </p>

          {/* onClick 속성을 추가하여 Link 대신 모달을 띄우도록 수정 완료 */}
          <button
            onClick={openModal}
            className="group relative overflow-hidden rounded-full bg-white px-10 py-5 text-xl font-bold text-slate-800 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 mx-auto"
          >
            사전 체험하기
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

      </main>
    </div>
  );
}