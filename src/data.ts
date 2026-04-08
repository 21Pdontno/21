export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  color: string;
  description: string;
  detailImages: string[];
  year: string;
  content1: string;
  content2: string;
}

export const projects: Project[] = [
  { 
    id: '1', 
    title: '时物初见美妆品牌', 
    category: '品牌策划', 
    image: 'https://i.imgs.ovh/2026/04/07/ZnKlx0.png', 
    color: '#E0E0E0', 
    description: 'First encounter with a beauty brand',
    year: '2022',
    content1: '时物初见是我一手带大的“孩子”。在开始的时候就定下了日式美妆的方向，做品牌全案的时候，看了大量的日式设计和文化，以至于那段时间我看日文比中文还多。但看见品牌产品落地后得到消费者的肯定还是充满了幸福感；',
    content2: '出道两年后拿到了好的结果，月销量破5w+，并且还有妆前精华爆款，与30+Kol合作让产品走到了更远的地方。我还带着产品走到了线下，整了展馆和线下直播间，人流量很大。虽然后面因为各种问题品牌还是不做了，但是带给我的经验和眼界是无价的',
    detailImages: [
      'https://i.imgs.ovh/2026/04/07/Znm2J4.png',
      'https://i.imgs.ovh/2026/04/07/ZnmoPH.png',
      'https://i.imgs.ovh/2026/04/08/Z26ond.png'
    ]
  },
  { 
    id: '2', 
    title: '时物文化品牌传播', 
    category: '品牌策划', 
    image: 'https://i.imgs.ovh/2026/04/07/Z2r2LM.png', 
    color: '#D5D5D5', 
    description: 'Cultural brand promotion',
    year: '2023',
    content1: '时物文化是公司转型的契机，在直播电商大行其道的时候，我们一头扎进国货美妆带货里面。在几年内我搭建了不下30个实体直播间，还有更多的直播全套设计，每次都能认识到很多新品牌，',
    content2: '这个设计全案更多的是公司对外展示的窗口，全国各地的品牌方来到我们公司的时候都会夸赞我们的展厅设计和视觉，有时候我会因为做的太像官方直播间被官方投诉， 这应该是一种表扬叭。最好的时候还做了很多大场，在当年用了很多ai工具，做了动态直播间。场均100w+的销售额确实让老板高兴了很久',
    detailImages: [
      'https://i.imgs.ovh/2026/04/08/Z264Bg.png',
      'https://i.imgs.ovh/2026/04/08/Z26l9Y.png',
      'https://i.imgs.ovh/2026/04/08/Z26dF0.png'
    ]
  },
  { 
    id: '3', 
    title: '社长话说IP账号', 
    category: '品牌策划', 
    image: 'https://i.imgs.ovh/2026/04/08/Z26tIb.png', 
    color: '#C0C0C0', 
    description: 'IP New Media Account',
    year: '2024',
    content1: '公司一直想做IP账号，但是思来想去老板决定亲自上场，事实证明纯有瘾。当时老板定角色形象的时候戴上了他最喜欢的周星驰彩虹领带，然后我跟他说彩虹有LGBT的意思，他说他不懂，这样子西装打领带挺帅的。',
    content2: '最开始爆的视频是巴以冲突的视频，上传了好几次都传不上去，不断调整后，结果上了抖音热榜 。后面的视频就起起伏伏到现在稳定2w+点赞一条，到是不用再担心审核的问题了，因为有抖音扶持了。现在全网应该有50多万粉丝叭，拿了抖音精选作者的时候老板感觉比自己赚钱了还开心。',
    detailImages: [
      'https://i.imgs.ovh/2026/04/08/Z26Iqn.png',
      'https://i.imgs.ovh/2026/04/08/Z26hEL.png',
      'https://i.imgs.ovh/2026/04/08/Z26pZ1.png'
    ]
  },
  { 
    id: '4', 
    title: 'Universe海外社媒', 
    category: '品牌策划', 
    image: 'https://i.imgs.ovh/2026/04/07/ZnGB5t.png', 
    color: '#B0B0B0', 
    description: 'Universe Overseas Social Media',
    year: '2022',
    content1: '这是一个海外社媒品牌，其实是个wed3的链游，在元宇宙很火的时候开发的。我还深度参与了海外人员的游戏美术设计和战机模型的设计，整个项目的风格主要还是以星辰大海和飞船为主的，那时候通过自己摸索学会了用figama来做原型，官网和app。',
    content2: '当时还有很神奇的事情，我还和纳斯达克的人对接过，因为品牌想要在纳斯达克的大屏上投广告，我也参与了那只广告的制作，不过我主要是做方案，有外面的三维广告公司制作。最终项目IDO拿到了几家的投资，应该有1000w 美金这样子（wed3，很神奇8）。',
    detailImages: [
      'https://i.imgs.ovh/2026/04/08/Z28DHM.png',
      'https://i.imgs.ovh/2026/04/08/Z28Mwr.png',
      'https://i.imgs.ovh/2026/04/08/Z289zx.png'
    ]
  },
  { 
    id: '5', 
    title: '易格基金', 
    category: '品牌策划', 
    image: 'https://i.imgs.ovh/2026/04/06/ZQN0vx.png', 
    color: '#A0A0A0', 
    description: 'Yige Foundation',
    year: '2024',
    content1: '这个就比较简单，有个同事一直写毛笔字，然后他们老板把这个墨宝挂在了他们办公室，整个品牌是非常稳重内敛的，公司还在深圳呢',
    content2: '后续我还帮他们做了几张基金宣传海报，但是他们要的风格和现在VI的风格相差有点大，我就不放上来了，样机也做的很漂亮。',
    detailImages: [
      'https://i.imgs.ovh/2026/04/08/Z28nGa.png',
      'https://i.imgs.ovh/2026/04/08/Z28YlC.png',
      'https://i.imgs.ovh/2026/04/08/Z28J6q.png'
    ]
  },
  { 
    id: '6', 
    title: '星耀投影仪X1', 
    category: '电商策划', 
    image: 'https://i.imgs.ovh/2026/04/08/Z28EAA.png', 
    color: '#808080', 
    description: 'Projection System Details Page',
    year: '2025',
    content1: '这是个aigc深度参与的详情页，是用blander+即梦做的大部分画面，blander提供精准的构图和结构效果，即梦充当一个高级渲染器的作用，最后效果出来感觉非常好，还原度也挺高。',
    content2: '3C类目的产品这一年做的比较少，但是通过这一个项目我能感受到AIGC的强大，也更确定了自己要深耕这一方面。',
    detailImages: [
      'https://i.imgs.ovh/2026/04/08/Z28lwH.png',
      'https://i.imgs.ovh/2026/04/08/Z28KLU.png',
      'https://img.cdn1.vip/i/69d4a6dccc102_1775544028.webp'
    ]
  },
  { 
    id: '7', 
    title: '蓝铜多肽面膜', 
    category: '电商策划', 
    image: 'https://i.imgs.ovh/2026/04/06/ZQ3Gpd.png', 
    color: '#707070', 
    description: 'Blue Copper Peptide Mask',
    year: '2025',
    content1: '这是我们产品经理的供应商，我帮他们做的一个详情页，探索了很多材质类的表现效果，液态金属风格。',
    content2: '整体定位在强化对于敏感肌人群的定位，用强调化设计来突出对敏感肌人群的温和体验',
    detailImages: [
      'https://i.imgs.ovh/2026/04/07/ZnmM8a.png',
      'https://i.imgs.ovh/2026/04/07/ZnmWCq.png',
      'https://i.imgs.ovh/2026/04/07/ZnmDce.png'
    ]
  },
  { 
    id: '8', 
    title: 'CLEERJANE沐浴油', 
    category: '电商策划', 
    image: 'https://i.imgs.ovh/2026/04/08/Z28BCc.png', 
    color: '#E0E0E0', 
    description: 'CLEERJANE Shower Gel',
    year: '2025',
    content1: '这也是我们产品经理的供应商，我帮他们做的一个详情页，这个更是大量使用了即梦和nanobanana和实拍结合的形式，做出了很多很好看的场景图。',
    content2: '手上有油的图片没办法只能实拍，如果用 ai来做哪怕是用绘图表示流动的液体的效果，也会对丝印和瓶身产生改变，要不就是效果很假。希望后续ai会有更好的效果；',
    detailImages: [
      'https://i.imgs.ovh/2026/04/08/Z28wJ6.png',
      'https://i.imgs.ovh/2026/04/08/Z2811O.png',
      'https://i.imgs.ovh/2026/04/08/Z28XAp.png'
    ]
  },
  { 
    id: '9', 
    title: '时物初见妆前精华', 
    category: '电商策划', 
    image: 'https://i.imgs.ovh/2026/04/06/ZQ3Kxp.png', 
    color: '#D5D5D5', 
    description: 'Pre-makeup serum',
    year: '2022',
    content1: '这款产品针对的方向是化妆前的卡粉情况，所以整体设计就会突出表现滋润和油水混合的双补配比,整体设计还是以品牌的简洁风格为主；',
    content2: '这款产品也是我们的第一个爆品，之前的详情页突出的点是赶时间化妆的时候，在化妆之前滴两滴，能让皮肤滋润不卡粉，第二版的时候就变成现在这样子比较通用的保湿精华，来获得更大的客群体；',
    detailImages: [
      'https://i.imgs.ovh/2026/04/07/ZnmCMU.png',
      'https://i.imgs.ovh/2026/04/07/ZnmZjQ.png',
      'https://i.imgs.ovh/2026/04/07/ZnG17C.png'
    ]
  },
  { 
    id: '10', 
    title: '时物初见卸妆膏', 
    category: '电商策划', 
    image: 'https://i.imgs.ovh/2026/04/06/ZQ3NBL.png', 
    color: '#C0C0C0', 
    description: 'Coconut Oil Makeup Remover Gel',
    year: '2024',
    content1: '这款产品的定位是，一瓶卸全脸的妆，然后椰子油为主基调的香味，所以整个详情页都是围绕着椰子和椰子油的效果进行拍摄设计的；',
    content2: '这款产品是我们当时后期做的一款新品，当时aigc工具没有现在这么发达，现在看来如果能用aigc构建场景效果肯定会更好；',
    detailImages: [
      'https://img.cdn1.vip/i/69d546436f125_1775584835.webp',
      'https://img.cdn1.vip/i/69d5463d3fd1b_1775584829.webp',
      'https://img.cdn1.vip/i/69d54634a2567_1775584820.webp'
    ]
  },
  { 
    id: '11', 
    title: '时物初见棉柔巾', 
    category: '电商策划', 
    image: 'https://i.imgs.ovh/2026/04/06/ZQ3h9O.png', 
    color: '#B0B0B0', 
    description: 'Niacinamide Cotton Soft Towel',
    year: '2022',
    content1: '这款产品的定位是，玻尿酸为主的棉柔巾，在当时算很前卫的做法了（宣传手法），包装设计采用了日式美妆的感觉，和契合品牌调性的探索式风格',
    content2: '所以整个详情页都用了很跳脱的手法去塑造，包括把棉花拟人化，让他作为吉祥物穿插在整个详情页里面，给人一种活泼俏皮的感觉，然后强调了纯棉的卖点',
    detailImages: [
      'https://i.imgs.ovh/2026/04/08/Z2eOl1.png',
      'https://i.imgs.ovh/2026/04/08/Z2eaCn.png',
      'https://i.imgs.ovh/2026/04/08/Z2ey8b.png'
    ]
  },
  { 
    id: '12', 
    title: '纯AI视觉详情页', 
    category: 'AIGC', 
    image: 'https://i.imgs.ovh/2026/04/08/Z2ef1M.png', 
    color: '#A0A0A0', 
    description: 'Pure AI Visual Detail Page',
    year: '2025',
    content1: '这是一个纯ai项目，你所看见的每一张图片都是ai，产品图片是我用手机在摄影棚拍了几个角度，算是给自己的一个挑战，整条详情页从拍摄到落地只用了两天时间',
    content2: '卖点是一按就出来的绵密泡沫，还有洗脸的同时还能护肤，所以整个详情页充斥着大量的泡沫。在做这个的时候抽了很多次卡，也逐渐学会了对aigc工具的掌握，和可控性。',
    detailImages: [
      'https://i.imgs.ovh/2026/04/08/Z2eSme.png',
      'https://i.imgs.ovh/2026/04/08/Z2eTfa.png',
      'https://i.imgs.ovh/2026/04/08/Z2eFPh.png'
    ]
  },
  { 
    id: '13', 
    title: '星淼品牌AI工作流', 
    category: 'AIGC', 
    image: 'https://i.imgs.ovh/2026/04/06/ZQ33nn.png', 
    color: '#909090', 
    description: 'Star Miao Brand AI Workflow',
    year: '2026',
    content1: '这是一家深圳的半导体电子销售公司，找到我的时候只要求做一个logo，我就将淼字的首字母M和星星结合起来，一稿就过了；',
    content2: '然后客户收了之后，我在想给他做点VI，但是如果自己手搓要好久，我就开始自己搭建工作流做全套VI设计，以后也可以复用，结果如下。',
    detailImages: [
      'https://i.imgs.ovh/2026/04/08/Z2eg1N.png',
      'https://i.imgs.ovh/2026/04/08/Z2eqTH.png',
      'https://i.imgs.ovh/2026/04/08/Z2eRYA.png'
    ]
  },
  { 
    id: '14', 
    title: 'TVC短视频AI工作流', 
    category: 'AIGC', 
    image: 'https://img.cdn1.vip/i/69d54888288d8_1775585416.webp', 
    color: '#808080', 
    description: 'TVC Short Video AI Workflow',
    year: '2026',
    content1: '对于大量的营销需要的广告tvc和卖点宣传视频来讲，自己拍费时费力而且很贵，我就尝试去搭建了这个用九宫格分镜图和分镜大师构成的工作流，链接sd2.0出来效果还是不错的；',
    content2: '工作流可以复用，然后效果上我觉得还能优化，但是完成比完美重要，多抽点卡会更好的，下方扫码观看。',
    detailImages: [
      'https://i.imgs.ovh/2026/04/08/Z2eU8t.png',
      'https://i.imgs.ovh/2026/04/08/Z2eVtq.png',
      'https://i.imgs.ovh/2026/04/08/Z2ezyC.png'
    ]
  },
  { 
    id: '15', 
    title: '多动作换装视频工作流', 
    category: 'AIGC', 
    image: 'https://i.imgs.ovh/2026/04/08/ZHeJDh.png', 
    color: '#707070', 
    description: 'Multi-action costume changing video workflow',
    year: '2026',
    content1: '服装行业来说有大量的服装展示需求，自己拍费时费力而且很贵，我就尝试去搭建了这个洗图-溶图-结合产品图片的工作流，并且自己打造了个动作大师；',
    content2: '然后再把动作都链接起来，通过机械臂摇臂镜头，打造出酷炫的环绕式镜头效果，下方扫码观看。',
    detailImages: [
      'https://i.imgs.ovh/2026/04/08/ZHeW2x.png',
      'https://i.imgs.ovh/2026/04/08/ZHenXM.png',
      'https://i.imgs.ovh/2026/04/08/ZHeQzL.png'
    ]
  },
  { 
    id: '16', 
    title: 'B站海外社媒NFT海报', 
    category: 'Other', 
    image: 'https://i.imgs.ovh/2026/04/06/ZQNCIr.png', 
    color: '#C0C0C0', 
    description: 'Bilibili\'s overseas social media NFT poster',
    year: '2022',
    content1: '这是为b站海外版NFT制作的宣传海报，展示的是不同NFT之间的区别和等级；',
    content2: '主要是通过不同的背景和人物元素构成了b站特有的风格，正如nft独一无二一样。',
    detailImages: [
      'https://i.imgs.ovh/2026/04/08/Z2eseF.png',
      'https://i.imgs.ovh/2026/04/08/Z2e9tm.png',
      'https://i.imgs.ovh/2026/04/08/Z2eefQ.png'
    ]
  },
  { 
    id: '17', 
    title: '花知晓直播间搭建', 
    category: 'Other', 
    image: 'https://i.imgs.ovh/2026/04/06/ZQ3Iv6.png', 
    color: '#B0B0B0', 
    description: 'Flower Knows Live Streaming Platform Construction',
    year: '2024',
    content1: '花知晓是公司的深度合作客户，每次花知晓出新品我都会进行直播间搭建的设计，从购买道具到美陈效果；',
    content2: '我通常都是先提取官方的视觉元素，然后画出草图大概，再根据构思的元素去购买摆件和产品，最后再调整灯光呈现出好的效果',
    detailImages: [
      'https://i.imgs.ovh/2026/04/08/Z2eW36.png',
      'https://i.imgs.ovh/2026/04/08/Z2e2UO.png',
      'https://i.imgs.ovh/2026/04/08/Z2eHQd.png'
    ]
  },
];

export const categories = ['All', '品牌策划', '电商策划', 'AIGC', 'Other'];
