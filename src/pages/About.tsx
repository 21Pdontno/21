import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function About() {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => setIsLoaded(true), 800);
    return () => {
      document.body.style.overflow = 'auto';
      clearTimeout(timer);
    };
  }, []);

  return (
    <motion.div
      initial={{ backgroundColor: 'transparent' }}
      animate={{ backgroundColor: '#1A1A1A' }}
      exit={{ backgroundColor: 'transparent', transition: { duration: 0.8 } }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      className="fixed inset-0 w-full h-full overflow-y-auto z-50"
    >
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        onClick={() => navigate('/')}
        className="fixed top-8 left-8 z-50 text-white font-sans text-sm tracking-widest uppercase hover:opacity-50 transition-opacity"
      >
        Close
      </motion.button>

      <div className="relative w-full h-[80vh] md:h-screen overflow-hidden">
        <motion.div
          layoutId="about-image-container"
          className="absolute inset-0 w-full h-full"
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
          <img
            src="https://i.imgs.ovh/2026/04/08/ZHuKpd.jpeg"
            alt="Designer Profile"
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-24 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
          <motion.h1
            layoutId="about-title"
            className="text-5xl md:text-8xl font-sans text-white mb-4"
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          >
            周仕熙 ZHOU
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-white/80 font-sans text-lg md:text-2xl max-w-2xl"
          >
            全链路多模态AIGC设计师 | 视觉设计师
          </motion.p>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="max-w-7xl mx-auto px-8 py-24 md:py-32 text-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Philosophy & Bio */}
          <div className="lg:col-span-7 space-y-16">
            <section>
              <h3 className="text-sm font-sans uppercase tracking-widest text-white/50 mb-8">Biography</h3>
              <p className="font-sans text-2xl md:text-4xl leading-relaxed mb-8">
                七年设计经验，具备从创意到落地的完整视觉能力。
              </p>
              <p className="font-sans text-xl md:text-2xl leading-relaxed text-white/70 mb-8">
                拥有创立美妆品牌全案和从产品设计-电商-新媒体营销等全链路设计能力，不止懂设计更懂运营文案，有多个成功持续运营项目。
              </p>
              <p className="font-sans text-xl md:text-2xl leading-relaxed text-white/70">
                并且积极拥抱新技术，对于前沿AI工具有自己的见解，并且立下了AI first的设计信条，对于工作流和AI视觉手到擒来。
              </p>
            </section>

            <section>
              <h3 className="text-sm font-sans uppercase tracking-widest text-white/50 mb-8">Project Experience</h3>
              <div className="space-y-8 font-sans text-xl md:text-2xl text-white/80">
                <div className="border-b border-white/10 pb-8">
                  <h4 className="text-white mb-2">时物初见日式美妆品牌</h4>
                  <p className="text-white/60 text-lg">从品牌创立到产品设计到电商全流程设计。上线一年实现单月销量累计超 50,000+，直播间场均销售额 15w+。</p>
                </div>
                <div className="border-b border-white/10 pb-8">
                  <h4 className="text-white mb-2">社长话说IP设计</h4>
                  <p className="text-white/60 text-lg">从账号定位到视觉风格锚点到持续运营的设计。全网粉丝50W+，获得抖音精选创作者奖项，视频号年度创作者。</p>
                </div>
                <div className="border-b border-white/10 pb-8">
                  <h4 className="text-white mb-2">大场AIGC动态背景直播间和整体视觉设计</h4>
                  <p className="text-white/60 text-lg">服务毛戈平/彩棠/珀莱雅等品牌。场均销售额超100W+，ROI远超官方直播间，点击进入率超14%+。</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-sm font-sans uppercase tracking-widest text-white/50 mb-8">Skills & Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 font-sans text-xl md:text-2xl">
                <div>
                  <h4 className="text-white mb-4">Software Tools</h4>
                  <ul className="text-white/60 space-y-2 text-lg">
                    <li>Photoshop / Illustrator</li>
                    <li>Blender / C4D</li>
                    <li>ComfyUI / Midjourney</li>
                    <li>即梦 / nano-banana / 剪映</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white mb-4">Professional Skills</h4>
                  <ul className="text-white/60 space-y-2 text-lg">
                    <li>品牌策略与定位</li>
                    <li>视觉识别系统设计</li>
                    <li>电商设计 / 产品设计</li>
                    <li>视频剪辑生成 / AIGC视觉工作流</li>
                    <li>文案撰写营销方案</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Experience & Awards */}
          <div className="lg:col-span-5 space-y-16">
            <section>
              <h3 className="text-sm font-sans uppercase tracking-widest text-white/50 mb-8">Experience</h3>
              <ul className="space-y-8 font-sans text-xl md:text-2xl">
                <li className="border-b border-white/10 pb-8">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-white">设计总监</span>
                    <span className="text-sm font-sans text-white/50">2022/06 – 2026/01</span>
                  </div>
                  <div className="text-white/60 text-lg mb-4">时物文化传播 / 时物初见</div>
                  <p className="text-white/50 text-base leading-relaxed">
                    IP“社长话说”孵化与运营：主导IP账号及子账号的整体搭建与深度运营。账号上线两年全网粉丝超 50w+。<br/><br/>
                    品牌视觉全案与持续运营：完成“时物初见”日式美妆品牌从 0 到 1 的视觉体系。主导产品电商全案，品牌上线一年实现单月销量累计超 50,000+。<br/><br/>
                    直播电商全案设计：独立完成“社长话说”带货直播间全案，开创性使用 AIGC 工具打造动态直播间。与毛戈平、彩棠、珀莱雅等 30+ 头部美妆品牌深度合作。
                  </p>
                </li>
                <li className="border-b border-white/10 pb-8">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-white">联合创始人</span>
                    <span className="text-sm font-sans text-white/50">2020/06 – 2022/06</span>
                  </div>
                  <div className="text-white/60 text-lg mb-4">阁兰影视传媒</div>
                  <p className="text-white/50 text-base leading-relaxed">
                    主导设计团队与全案设计：全面负责公司人员管理、项目进度把控及整体美术风格制定。期间深度参与客户对接、各类目的差异化设计，积累了丰富的管理经验与营销能力。
                  </p>
                </li>
                <li className="border-b border-white/10 pb-8">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-white">电商设计师</span>
                    <span className="text-sm font-sans text-white/50">2019/12 – 2020/05</span>
                  </div>
                  <div className="text-white/60 text-lg mb-4">亿用文化传播有限公司</div>
                  <p className="text-white/50 text-base leading-relaxed">
                    电商全案设计：负责志高的官方店铺视觉美化，活动直通车，新品详情页设计。同时完成公司对外的三方客户电商视觉全案，90%+一稿过，用户复购率高达80%。
                  </p>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-sm font-sans uppercase tracking-widest text-white/50 mb-8">Education</h3>
              <ul className="space-y-6 font-sans text-lg md:text-xl text-white/80">
                <li className="flex justify-between items-center border-b border-white/10 pb-6">
                  <span>顺德职业大学</span>
                  <span className="font-sans text-sm text-white/50">电商设计专业</span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-sm font-sans uppercase tracking-widest text-white/50 mb-8">Contact</h3>
              <div className="space-y-4 font-sans text-xl md:text-2xl">
                <p className="text-white/80 text-lg">1999年9月7日</p>
                <a href="mailto:2657966341@qq.com" className="block hover:text-white/50 transition-colors">2657966341@qq.com</a>
                <a href="tel:13129038520" className="block hover:text-white/50 transition-colors">Tel: 131-2903-8520</a>
              </div>
            </section>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
}
