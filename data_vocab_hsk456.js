// =============================================
//  EXPANDED VOCABULARY — HSK 4, 5, 6
//  Based on official HSK 2021 standard word list.
//  Adds `emoji` field for visual learning.
//  Must load AFTER data.js, data_extended.js
// =============================================

// ---- HSK 4 ADDITIONS (~120 words) ----
const HSK4_NEW = [

  // ===== SOCIETY & LIFE =====
  { char:"社会",     pinyin:"shèhuì",         tone:4, meaning:"society",                              pos:"noun",    emoji:"🌐", example:"社会在不断发展变化。",       exampleMeaning:"Society is constantly developing and changing." },
  { char:"政府",     pinyin:"zhèngfǔ",        tone:4, meaning:"government",                           pos:"noun",    emoji:"🏛️", example:"政府出台了新政策。",         exampleMeaning:"The government introduced new policies." },
  { char:"经济",     pinyin:"jīngjì",         tone:1, meaning:"economy / economics",                  pos:"noun",    emoji:"📈", example:"中国经济增长很快。",         exampleMeaning:"China's economy is growing very fast." },
  { char:"政治",     pinyin:"zhèngzhì",       tone:4, meaning:"politics / political",                 pos:"noun",    emoji:"🗳️", example:"他对政治很感兴趣。",         exampleMeaning:"He is very interested in politics." },
  { char:"法律",     pinyin:"fǎlǜ",           tone:3, meaning:"law / legal",                          pos:"noun",    emoji:"⚖️", example:"每个人都要遵守法律。",       exampleMeaning:"Everyone must abide by the law." },
  { char:"权利",     pinyin:"quánlì",         tone:2, meaning:"right / entitlement",                   pos:"noun",    emoji:"✊", example:"我们有受教育的权利。",       exampleMeaning:"We have the right to education." },
  { char:"责任",     pinyin:"zérèn",          tone:2, meaning:"responsibility / duty",                pos:"noun",    emoji:"💪", example:"这是你的责任。",             exampleMeaning:"This is your responsibility." },
  { char:"公民",     pinyin:"gōngmín",        tone:1, meaning:"citizen",                              pos:"noun",    emoji:"🪪", example:"每个公民都有投票权。",       exampleMeaning:"Every citizen has the right to vote." },
  { char:"民主",     pinyin:"mínzhǔ",         tone:2, meaning:"democracy",                            pos:"noun",    emoji:"🗳️", example:"民主是重要的政治制度。",     exampleMeaning:"Democracy is an important political system." },
  { char:"自由",     pinyin:"zìyóu",          tone:4, meaning:"freedom / liberty / free",             pos:"noun",    emoji:"🕊️", example:"言论自由是基本权利。",       exampleMeaning:"Freedom of speech is a basic right." },

  // ===== WORK & CAREER =====
  { char:"职业",     pinyin:"zhíyè",          tone:2, meaning:"profession / career / occupation",     pos:"noun",    emoji:"💼", example:"你的职业是什么？",           exampleMeaning:"What is your profession?" },
  { char:"工资",     pinyin:"gōngzī",         tone:1, meaning:"wages / salary",                       pos:"noun",    emoji:"💵", example:"这份工作工资很高。",         exampleMeaning:"This job has a very high salary." },
  { char:"合同",     pinyin:"hétong",         tone:2, meaning:"contract / agreement",                 pos:"noun",    emoji:"📄", example:"我们签了一份合同。",         exampleMeaning:"We signed a contract." },
  { char:"申请",     pinyin:"shēnqǐng",       tone:1, meaning:"to apply / application",               pos:"verb",    emoji:"📝", example:"我申请了这份工作。",         exampleMeaning:"I applied for this job." },
  { char:"面试",     pinyin:"miànshì",        tone:4, meaning:"interview (job/admission)",             pos:"noun",    emoji:"🤝", example:"明天我有一个面试。",         exampleMeaning:"I have an interview tomorrow." },
  { char:"简历",     pinyin:"jiǎnlì",         tone:3, meaning:"résumé / CV",                          pos:"noun",    emoji:"📋", example:"请把简历发给我。",           exampleMeaning:"Please send me your résumé." },
  { char:"辞职",     pinyin:"cízhí",          tone:2, meaning:"to resign / quit a job",               pos:"verb",    emoji:"🚪", example:"他上个月辞职了。",           exampleMeaning:"He resigned last month." },
  { char:"升职",     pinyin:"shēngzhí",       tone:1, meaning:"to get promoted",                      pos:"verb",    emoji:"⬆️", example:"她今年升职了！",             exampleMeaning:"She got promoted this year!" },
  { char:"出差",     pinyin:"chū chāi",       tone:1, meaning:"to go on a business trip",             pos:"verb",    emoji:"✈️", example:"他经常出差去上海。",         exampleMeaning:"He often goes on business trips to Shanghai." },
  { char:"会议",     pinyin:"huìyì",          tone:4, meaning:"meeting / conference",                 pos:"noun",    emoji:"📊", example:"下午有一个重要的会议。",     exampleMeaning:"There is an important meeting this afternoon." },
  { char:"报告",     pinyin:"bàogào",         tone:4, meaning:"report / to report",                   pos:"noun",    emoji:"📑", example:"他写了一份工作报告。",       exampleMeaning:"He wrote a work report." },
  { char:"项目",     pinyin:"xiàngmù",        tone:4, meaning:"project / item",                       pos:"noun",    emoji:"🗂️", example:"这个项目很重要。",           exampleMeaning:"This project is very important." },
  { char:"计划",     pinyin:"jìhuà",          tone:4, meaning:"plan / to plan",                       pos:"noun",    emoji:"📅", example:"我有一个新计划。",           exampleMeaning:"I have a new plan." },
  { char:"目标",     pinyin:"mùbiāo",         tone:4, meaning:"goal / objective / target",            pos:"noun",    emoji:"🎯", example:"我的目标是学好中文。",       exampleMeaning:"My goal is to learn Chinese well." },
  { char:"成功",     pinyin:"chénggōng",      tone:2, meaning:"success / to succeed",                 pos:"noun",    emoji:"🏆", example:"我相信你一定能成功！",       exampleMeaning:"I believe you will definitely succeed!" },
  { char:"失败",     pinyin:"shībài",         tone:1, meaning:"failure / to fail",                    pos:"noun",    emoji:"❌", example:"失败是成功之母。",           exampleMeaning:"Failure is the mother of success." },

  // ===== EDUCATION =====
  { char:"大学",     pinyin:"dàxué",          tone:4, meaning:"university / college",                 pos:"noun",    emoji:"🎓", example:"他在北京大学读书。",         exampleMeaning:"He studies at Peking University." },
  { char:"研究生",   pinyin:"yánjiūshēng",    tone:2, meaning:"graduate student / postgraduate",      pos:"noun",    emoji:"🎓", example:"她是一名研究生。",           exampleMeaning:"She is a graduate student." },
  { char:"毕业",     pinyin:"bì yè",          tone:4, meaning:"to graduate",                          pos:"verb",    emoji:"🎓", example:"他明年大学毕业。",           exampleMeaning:"He graduates from university next year." },
  { char:"成绩",     pinyin:"chéngjì",        tone:2, meaning:"grades / results / achievements",      pos:"noun",    emoji:"📊", example:"她的成绩很好。",             exampleMeaning:"Her grades are very good." },
  { char:"奖学金",   pinyin:"jiǎngxuéjīn",   tone:3, meaning:"scholarship",                          pos:"noun",    emoji:"🏅", example:"他获得了奖学金。",           exampleMeaning:"He received a scholarship." },
  { char:"专业",     pinyin:"zhuānyè",        tone:1, meaning:"major / specialty / professional",     pos:"noun",    emoji:"📚", example:"你学什么专业？",             exampleMeaning:"What is your major?" },
  { char:"论文",     pinyin:"lùnwén",         tone:4, meaning:"thesis / academic paper",              pos:"noun",    emoji:"📝", example:"他在写毕业论文。",           exampleMeaning:"He is writing his graduation thesis." },
  { char:"实验",     pinyin:"shíyàn",         tone:2, meaning:"experiment / to experiment",           pos:"noun",    emoji:"🔬", example:"我们在实验室做实验。",       exampleMeaning:"We are doing experiments in the lab." },

  // ===== HEALTH =====
  { char:"检查",     pinyin:"jiǎnchá",        tone:3, meaning:"to check / examine / inspection",      pos:"verb",    emoji:"🔍", example:"医生给他做了检查。",         exampleMeaning:"The doctor examined him." },
  { char:"手术",     pinyin:"shǒushù",        tone:3, meaning:"surgery / operation",                  pos:"noun",    emoji:"🏥", example:"他明天要做手术。",           exampleMeaning:"He is having surgery tomorrow." },
  { char:"护士",     pinyin:"hùshi",          tone:4, meaning:"nurse",                                pos:"noun",    emoji:"👩‍⚕️", example:"护士给他打了针。",          exampleMeaning:"The nurse gave him an injection." },
  { char:"过敏",     pinyin:"guòmǐn",         tone:4, meaning:"allergy / to be allergic",             pos:"verb",    emoji:"🤧", example:"我对花粉过敏。",             exampleMeaning:"I am allergic to pollen." },
  { char:"血压",     pinyin:"xuèyā",          tone:4, meaning:"blood pressure",                       pos:"noun",    emoji:"💉", example:"他的血压有点高。",           exampleMeaning:"His blood pressure is a bit high." },
  { char:"健身",     pinyin:"jiànshēn",       tone:4, meaning:"to work out / fitness",                pos:"verb",    emoji:"🏋️", example:"他每天去健身房。",           exampleMeaning:"He goes to the gym every day." },

  // ===== TECHNOLOGY =====
  { char:"人工智能", pinyin:"rén gōng zhìnéng",tone:2,meaning:"artificial intelligence / AI",        pos:"noun",    emoji:"🤖", example:"人工智能正在改变世界。",     exampleMeaning:"Artificial intelligence is changing the world." },
  { char:"软件",     pinyin:"ruǎnjiàn",       tone:3, meaning:"software",                             pos:"noun",    emoji:"💻", example:"这个软件很好用。",           exampleMeaning:"This software is very easy to use." },
  { char:"硬件",     pinyin:"yìngjiàn",       tone:4, meaning:"hardware",                             pos:"noun",    emoji:"🖥️", example:"电脑硬件需要升级。",         exampleMeaning:"The computer hardware needs upgrading." },
  { char:"程序",     pinyin:"chéngxù",        tone:2, meaning:"program / procedure",                  pos:"noun",    emoji:"⌨️", example:"他写了一个新的程序。",       exampleMeaning:"He wrote a new program." },
  { char:"数据",     pinyin:"shùjù",          tone:4, meaning:"data",                                 pos:"noun",    emoji:"📊", example:"这些数据非常重要。",         exampleMeaning:"This data is very important." },
  { char:"下载",     pinyin:"xiàzài",         tone:4, meaning:"to download",                          pos:"verb",    emoji:"⬇️", example:"我下载了这个应用。",         exampleMeaning:"I downloaded this app." },
  { char:"上传",     pinyin:"shàngchuán",     tone:4, meaning:"to upload",                            pos:"verb",    emoji:"⬆️", example:"请把文件上传到网上。",       exampleMeaning:"Please upload the file to the internet." },

  // ===== ENVIRONMENT & NATURE =====
  { char:"环境",     pinyin:"huánjìng",       tone:2, meaning:"environment / surroundings",           pos:"noun",    emoji:"🌿", example:"保护环境是我们的责任。",     exampleMeaning:"Protecting the environment is our responsibility." },
  { char:"污染",     pinyin:"wūrǎn",          tone:1, meaning:"pollution / to pollute",               pos:"noun",    emoji:"🏭", example:"空气污染越来越严重。",       exampleMeaning:"Air pollution is becoming more and more serious." },
  { char:"能源",     pinyin:"néngyuán",       tone:2, meaning:"energy (resource)",                    pos:"noun",    emoji:"⚡", example:"我们要节约能源。",           exampleMeaning:"We must save energy." },
  { char:"气候",     pinyin:"qìhòu",          tone:4, meaning:"climate",                              pos:"noun",    emoji:"🌡️", example:"全球气候变化影响很大。",     exampleMeaning:"Global climate change has a great impact." },
  { char:"灾难",     pinyin:"zāinàn",         tone:1, meaning:"disaster / calamity",                  pos:"noun",    emoji:"🌊", example:"那场地震是一场巨大的灾难。", exampleMeaning:"That earthquake was a massive disaster." },

  // ===== DAILY LIFE & SHOPPING =====
  { char:"超市",     pinyin:"chāoshì",        tone:1, meaning:"supermarket",                          pos:"noun",    emoji:"🛒", example:"我去超市买东西。",           exampleMeaning:"I'm going to the supermarket to buy things." },
  { char:"购物",     pinyin:"gòuwù",          tone:4, meaning:"shopping / to shop",                   pos:"noun",    emoji:"🛍️", example:"她喜欢周末去购物。",         exampleMeaning:"She likes to go shopping on weekends." },
  { char:"广告",     pinyin:"guǎnggào",       tone:3, meaning:"advertisement",                        pos:"noun",    emoji:"📢", example:"这个广告很有创意。",         exampleMeaning:"This advertisement is very creative." },
  { char:"品牌",     pinyin:"pǐnpái",         tone:3, meaning:"brand",                                pos:"noun",    emoji:"🏷️", example:"她喜欢买名牌产品。",         exampleMeaning:"She likes to buy name-brand products." },
  { char:"质量",     pinyin:"zhìliàng",       tone:4, meaning:"quality",                              pos:"noun",    emoji:"⭐", example:"这个产品质量很好。",         exampleMeaning:"The quality of this product is very good." },
  { char:"消费",     pinyin:"xiāofèi",        tone:1, meaning:"consumption / to consume / to spend",  pos:"noun",    emoji:"💳", example:"年轻人的消费越来越高。",     exampleMeaning:"Young people are spending more and more." },
  { char:"投资",     pinyin:"tóuzī",          tone:2, meaning:"investment / to invest",               pos:"noun",    emoji:"📈", example:"他把钱投资在股市里。",       exampleMeaning:"He invested money in the stock market." },

  // ===== TRAVEL =====
  { char:"签证",     pinyin:"qiānzhèng",      tone:1, meaning:"visa",                                 pos:"noun",    emoji:"📔", example:"申请签证需要很多材料。",     exampleMeaning:"Applying for a visa requires many materials." },
  { char:"海关",     pinyin:"hǎiguān",        tone:3, meaning:"customs (border)",                     pos:"noun",    emoji:"🛂", example:"过海关要填写表格。",         exampleMeaning:"You need to fill out a form at customs." },
  { char:"旅游景点", pinyin:"lǚyóu jǐngdiǎn",tone:3, meaning:"tourist attraction / scenic spot",     pos:"noun",    emoji:"🗺️", example:"这里有很多旅游景点。",       exampleMeaning:"There are many tourist attractions here." },
  { char:"导游",     pinyin:"dǎoyóu",         tone:3, meaning:"tour guide",                           pos:"noun",    emoji:"🧭", example:"导游给我们介绍了历史。",     exampleMeaning:"The tour guide introduced us to the history." },
  { char:"住宿",     pinyin:"zhùsù",          tone:4, meaning:"accommodation / lodging",              pos:"noun",    emoji:"🏨", example:"你订好住宿了吗？",           exampleMeaning:"Have you booked your accommodation?" },

  // ===== ABSTRACT / EMOTIONS =====
  { char:"压力",     pinyin:"yālì",           tone:1, meaning:"pressure / stress",                    pos:"noun",    emoji:"😰", example:"工作压力很大。",             exampleMeaning:"The work pressure is very great." },
  { char:"信心",     pinyin:"xìnxīn",         tone:4, meaning:"confidence / faith",                   pos:"noun",    emoji:"💪", example:"你要对自己有信心！",         exampleMeaning:"You must have confidence in yourself!" },
  { char:"勇气",     pinyin:"yǒngqì",         tone:3, meaning:"courage / bravery",                    pos:"noun",    emoji:"🦁", example:"做这件事需要很大的勇气。",   exampleMeaning:"Doing this requires great courage." },
  { char:"耐心",     pinyin:"nàixīn",         tone:4, meaning:"patience / patient",                   pos:"noun",    emoji:"⏳", example:"学中文需要很多耐心。",       exampleMeaning:"Learning Chinese requires a lot of patience." },
  { char:"好奇",     pinyin:"hàoqí",          tone:4, meaning:"curious / curiosity",                  pos:"adj",     emoji:"🤔", example:"孩子对一切都很好奇。",       exampleMeaning:"Children are curious about everything." },
  { char:"骄傲",     pinyin:"jiāo'ào",        tone:1, meaning:"proud / pride / arrogant",             pos:"adj",     emoji:"😤", example:"父母为他感到骄傲。",         exampleMeaning:"His parents are proud of him." },

  // ===== VERBS =====
  { char:"影响",     pinyin:"yǐngxiǎng",      tone:3, meaning:"influence / to influence / to affect", pos:"noun",    emoji:"💫", example:"他的成功影响了很多人。",     exampleMeaning:"His success influenced many people." },
  { char:"决定",     pinyin:"juédìng",        tone:2, meaning:"to decide / decision",                 pos:"verb",    emoji:"✅", example:"你决定了吗？",               exampleMeaning:"Have you decided?" },
  { char:"解决",     pinyin:"jiějué",         tone:3, meaning:"to solve / resolve",                   pos:"verb",    emoji:"🔧", example:"我们要解决这个问题。",       exampleMeaning:"We need to solve this problem." },
  { char:"实现",     pinyin:"shíxiàn",        tone:2, meaning:"to realize / achieve / come true",     pos:"verb",    emoji:"🌟", example:"他实现了自己的梦想。",       exampleMeaning:"He realized his dream." },
  { char:"提高",     pinyin:"tígāo",          tone:2, meaning:"to improve / raise / enhance",         pos:"verb",    emoji:"⬆️", example:"你要提高自己的汉语水平。",   exampleMeaning:"You should improve your Chinese level." },
  { char:"参加",     pinyin:"cānjiā",         tone:1, meaning:"to participate / join / attend",       pos:"verb",    emoji:"🙋", example:"欢迎参加我们的活动！",       exampleMeaning:"Welcome to join our activity!" },
  { char:"了解",     pinyin:"liǎojiě",        tone:3, meaning:"to understand / know / learn about",   pos:"verb",    emoji:"💡", example:"我想了解中国文化。",         exampleMeaning:"I want to learn about Chinese culture." },
  { char:"比较",     pinyin:"bǐjiào",         tone:3, meaning:"to compare / relatively / rather",     pos:"verb",    emoji:"⚖️", example:"比较两件事的优缺点。",       exampleMeaning:"Compare the pros and cons of two things." },
  { char:"提供",     pinyin:"tígōng",         tone:2, meaning:"to provide / offer / supply",          pos:"verb",    emoji:"📦", example:"公司提供免费午餐。",         exampleMeaning:"The company provides free lunch." },
  { char:"支持",     pinyin:"zhīchí",         tone:1, meaning:"to support / support",                 pos:"verb",    emoji:"🤝", example:"谢谢你一直支持我！",         exampleMeaning:"Thank you for always supporting me!" },
  { char:"反对",     pinyin:"fǎnduì",         tone:3, meaning:"to oppose / be against",               pos:"verb",    emoji:"✋", example:"我反对这个决定。",           exampleMeaning:"I oppose this decision." },
  { char:"接受",     pinyin:"jiēshòu",        tone:1, meaning:"to accept / receive",                  pos:"verb",    emoji:"🤲", example:"他接受了这份礼物。",         exampleMeaning:"He accepted this gift." },
  { char:"拒绝",     pinyin:"jùjué",          tone:4, meaning:"to refuse / reject",                   pos:"verb",    emoji:"🙅", example:"她拒绝了他的邀请。",         exampleMeaning:"She rejected his invitation." },
  { char:"表达",     pinyin:"biǎodá",         tone:3, meaning:"to express",                           pos:"verb",    emoji:"💬", example:"你要学会表达自己的想法。",   exampleMeaning:"You need to learn to express your own thoughts." },
  { char:"建议",     pinyin:"jiànyì",         tone:4, meaning:"suggestion / to suggest / recommend",  pos:"noun",    emoji:"💡", example:"我建议你多休息。",           exampleMeaning:"I suggest you rest more." },

  // ===== ADJECTIVES =====
  { char:"严重",     pinyin:"yánzhòng",       tone:2, meaning:"serious / severe / critical",          pos:"adj",     emoji:"⚠️", example:"这个问题很严重。",           exampleMeaning:"This problem is very serious." },
  { char:"复杂",     pinyin:"fùzá",           tone:4, meaning:"complex / complicated",                pos:"adj",     emoji:"🧩", example:"这个问题很复杂。",           exampleMeaning:"This problem is very complex." },
  { char:"简单",     pinyin:"jiǎndān",        tone:3, meaning:"simple / easy",                        pos:"adj",     emoji:"😊", example:"这道题很简单。",             exampleMeaning:"This problem is very simple." },
  { char:"正式",     pinyin:"zhèngshì",       tone:4, meaning:"formal / official",                    pos:"adj",     emoji:"👔", example:"这是一个正式场合。",         exampleMeaning:"This is a formal occasion." },
  { char:"普通",     pinyin:"pǔtōng",         tone:3, meaning:"ordinary / common / average",          pos:"adj",     emoji:"👤", example:"他是一个很普通的人。",       exampleMeaning:"He is a very ordinary person." },
  { char:"特殊",     pinyin:"tèshū",          tone:4, meaning:"special / particular / unusual",       pos:"adj",     emoji:"⭐", example:"这是一个特殊情况。",         exampleMeaning:"This is a special situation." },
  { char:"积极",     pinyin:"jījí",           tone:1, meaning:"positive / active / enthusiastic",     pos:"adj",     emoji:"🌟", example:"他对工作很积极。",           exampleMeaning:"He is very enthusiastic about work." },
  { char:"消极",     pinyin:"xiāojí",         tone:1, meaning:"negative / passive",                   pos:"adj",     emoji:"😶", example:"不要用消极的态度看问题。",   exampleMeaning:"Don't look at problems with a negative attitude." },
];

// ---- HSK 5 ADDITIONS (~80 words) ----
const HSK5_NEW = [

  // ===== INTELLECTUALLY DEMANDING VOCAB =====
  { char:"概念",     pinyin:"gàiniàn",        tone:4, meaning:"concept / idea",                       pos:"noun",    emoji:"💭", example:"这个概念很难理解。",         exampleMeaning:"This concept is difficult to understand." },
  { char:"理论",     pinyin:"lǐlùn",          tone:3, meaning:"theory",                               pos:"noun",    emoji:"📐", example:"理论和实践要结合。",         exampleMeaning:"Theory and practice must be combined." },
  { char:"原则",     pinyin:"yuánzé",         tone:2, meaning:"principle",                            pos:"noun",    emoji:"📏", example:"做人要有原则。",             exampleMeaning:"One must have principles in life." },
  { char:"逻辑",     pinyin:"luóji",          tone:2, meaning:"logic",                                pos:"noun",    emoji:"🧠", example:"你的逻辑很清晰。",           exampleMeaning:"Your logic is very clear." },
  { char:"矛盾",     pinyin:"máodùn",         tone:2, meaning:"contradiction / conflict / contradictory",pos:"noun", emoji:"⚡", example:"他的话前后矛盾。",           exampleMeaning:"His words contradict each other." },
  { char:"假设",     pinyin:"jiǎshè",         tone:3, meaning:"hypothesis / to hypothesize / suppose", pos:"noun",   emoji:"🤔", example:"我们假设这个理论是对的。",   exampleMeaning:"Let's assume this theory is correct." },
  { char:"结论",     pinyin:"jiélùn",         tone:2, meaning:"conclusion",                           pos:"noun",    emoji:"✅", example:"你能得出什么结论？",         exampleMeaning:"What conclusion can you draw?" },
  { char:"证明",     pinyin:"zhèngmíng",      tone:4, meaning:"to prove / proof / certificate",       pos:"verb",    emoji:"📜", example:"请证明你的观点。",           exampleMeaning:"Please prove your point of view." },
  { char:"批评",     pinyin:"pīpíng",         tone:1, meaning:"to criticize / criticism",             pos:"verb",    emoji:"❗", example:"他勇于接受批评。",           exampleMeaning:"He is brave enough to accept criticism." },
  { char:"评价",     pinyin:"píngjià",        tone:2, meaning:"evaluation / to evaluate",             pos:"noun",    emoji:"⭐", example:"请对他的工作做出评价。",     exampleMeaning:"Please evaluate his work." },
  { char:"争论",     pinyin:"zhēnglùn",       tone:1, meaning:"argument / to argue / debate",         pos:"noun",    emoji:"🗣️", example:"这个问题引起了争论。",       exampleMeaning:"This issue sparked debate." },
  { char:"观念",     pinyin:"guānniàn",       tone:1, meaning:"idea / conception / sense of values",  pos:"noun",    emoji:"💡", example:"传统观念正在改变。",         exampleMeaning:"Traditional concepts are changing." },
  { char:"价值观",   pinyin:"jiàzhíguān",     tone:4, meaning:"values / value system",                pos:"noun",    emoji:"⚖️", example:"每个人的价值观都不同。",     exampleMeaning:"Everyone's values are different." },

  // ===== MEDIA & COMMUNICATION =====
  { char:"媒体",     pinyin:"méitǐ",          tone:2, meaning:"media",                                pos:"noun",    emoji:"📺", example:"社会媒体影响越来越大。",     exampleMeaning:"Social media has increasing influence." },
  { char:"新闻",     pinyin:"xīnwén",         tone:1, meaning:"news",                                 pos:"noun",    emoji:"📰", example:"我每天早上看新闻。",         exampleMeaning:"I watch the news every morning." },
  { char:"报道",     pinyin:"bàodào",         tone:4, meaning:"news report / to report on",           pos:"noun",    emoji:"📡", example:"这条新闻报道不准确。",       exampleMeaning:"This news report is inaccurate." },
  { char:"采访",     pinyin:"cǎifǎng",        tone:3, meaning:"to interview (journalist) / interview", pos:"verb",   emoji:"🎤", example:"记者采访了总统。",           exampleMeaning:"The journalist interviewed the president." },
  { char:"评论",     pinyin:"pínglùn",        tone:2, meaning:"comment / review / commentary",        pos:"noun",    emoji:"💬", example:"他在网上发表了评论。",       exampleMeaning:"He posted a comment online." },
  { char:"传播",     pinyin:"chuánbō",        tone:2, meaning:"to spread / disseminate / propagate",  pos:"verb",    emoji:"📢", example:"谢谢信息的快速传播。",       exampleMeaning:"Information spreads quickly these days." },
  { char:"宣传",     pinyin:"xuānchuán",      tone:1, meaning:"publicity / to publicize / propaganda", pos:"noun",   emoji:"📣", example:"这是一次有效的宣传活动。",   exampleMeaning:"This was an effective publicity campaign." },

  // ===== BUSINESS & FINANCE =====
  { char:"股票",     pinyin:"gǔpiào",         tone:3, meaning:"stock / shares",                       pos:"noun",    emoji:"📈", example:"他投资了很多股票。",         exampleMeaning:"He invested in a lot of stocks." },
  { char:"利润",     pinyin:"lìrùn",          tone:4, meaning:"profit / margin",                      pos:"noun",    emoji:"💰", example:"今年公司的利润增加了。",     exampleMeaning:"The company's profit increased this year." },
  { char:"损失",     pinyin:"sǔnshī",         tone:3, meaning:"loss / to lose (economically)",        pos:"noun",    emoji:"📉", example:"这次投资造成了很大损失。",   exampleMeaning:"This investment caused great losses." },
  { char:"预算",     pinyin:"yùsuàn",         tone:4, meaning:"budget",                               pos:"noun",    emoji:"💵", example:"我们的预算不多。",           exampleMeaning:"Our budget is not much." },
  { char:"合作",     pinyin:"hézuò",          tone:2, meaning:"cooperation / to cooperate",           pos:"noun",    emoji:"🤝", example:"双方决定合作。",             exampleMeaning:"Both sides decided to cooperate." },
  { char:"竞争",     pinyin:"jìngzhēng",      tone:4, meaning:"competition / to compete",             pos:"noun",    emoji:"🏆", example:"市场竞争越来越激烈。",       exampleMeaning:"Market competition is becoming more intense." },
  { char:"垄断",     pinyin:"lǒngduàn",       tone:3, meaning:"monopoly / to monopolize",             pos:"noun",    emoji:"🔒", example:"这家公司垄断了市场。",       exampleMeaning:"This company monopolized the market." },
  { char:"谈判",     pinyin:"tánpàn",         tone:2, meaning:"negotiation / to negotiate",           pos:"noun",    emoji:"🤝", example:"双方进行了贸易谈判。",       exampleMeaning:"Both sides held trade negotiations." },
  { char:"贸易",     pinyin:"màoyì",          tone:4, meaning:"trade / commerce",                     pos:"noun",    emoji:"🚢", example:"两国贸易关系很好。",         exampleMeaning:"Trade relations between the two countries are good." },

  // ===== SCIENCE & RESEARCH =====
  { char:"研究",     pinyin:"yánjiū",         tone:2, meaning:"research / to research / to study",    pos:"noun",    emoji:"🔬", example:"他从事科学研究工作。",       exampleMeaning:"He is engaged in scientific research." },
  { char:"发现",     pinyin:"fāxiàn",         tone:1, meaning:"to discover / find / discovery",       pos:"verb",    emoji:"🔭", example:"科学家发现了新物质。",       exampleMeaning:"Scientists discovered a new substance." },
  { char:"发明",     pinyin:"fāmíng",         tone:1, meaning:"to invent / invention",                pos:"verb",    emoji:"💡", example:"电话是谁发明的？",           exampleMeaning:"Who invented the telephone?" },
  { char:"技术",     pinyin:"jìshù",          tone:4, meaning:"technology / technique / skill",       pos:"noun",    emoji:"⚙️", example:"现代技术改变了生活。",       exampleMeaning:"Modern technology has changed life." },
  { char:"创新",     pinyin:"chuàngxīn",      tone:4, meaning:"innovation / to innovate",             pos:"noun",    emoji:"🚀", example:"我们需要不断创新。",         exampleMeaning:"We need to constantly innovate." },
  { char:"突破",     pinyin:"tūpò",           tone:1, meaning:"breakthrough / to break through",      pos:"noun",    emoji:"🎯", example:"这是一项重大突破。",         exampleMeaning:"This is a major breakthrough." },
  { char:"实验室",   pinyin:"shíyànshì",      tone:2, meaning:"laboratory",                           pos:"noun",    emoji:"🔬", example:"科学家在实验室工作。",       exampleMeaning:"Scientists work in the laboratory." },

  // ===== LAW & JUSTICE =====
  { char:"违法",     pinyin:"wéifǎ",          tone:2, meaning:"to break the law / illegal",           pos:"verb",    emoji:"🚫", example:"这是违法行为。",             exampleMeaning:"This is illegal behavior." },
  { char:"犯罪",     pinyin:"fànzuì",         tone:4, meaning:"crime / to commit a crime",            pos:"noun",    emoji:"⚖️", example:"犯罪率正在下降。",           exampleMeaning:"The crime rate is declining." },
  { char:"律师",     pinyin:"lǜshī",          tone:4, meaning:"lawyer / attorney",                    pos:"noun",    emoji:"⚖️", example:"他是一名著名的律师。",       exampleMeaning:"He is a famous lawyer." },
  { char:"法院",     pinyin:"fǎyuàn",         tone:3, meaning:"court (of law)",                       pos:"noun",    emoji:"⚖️", example:"案件已提交法院。",           exampleMeaning:"The case has been submitted to court." },
  { char:"判决",     pinyin:"pànjué",         tone:4, meaning:"verdict / judgment / to sentence",     pos:"noun",    emoji:"🏛️", example:"法官做出了最终判决。",       exampleMeaning:"The judge made the final ruling." },

  // ===== VERBS & ADJ =====
  { char:"强调",     pinyin:"qiángdiào",      tone:2, meaning:"to emphasize / stress",                pos:"verb",    emoji:"❗", example:"老师强调了复习的重要性。",   exampleMeaning:"The teacher emphasized the importance of review." },
  { char:"分析",     pinyin:"fēnxī",          tone:1, meaning:"to analyze / analysis",                pos:"verb",    emoji:"🧩", example:"请分析这个问题的原因。",     exampleMeaning:"Please analyze the cause of this problem." },
  { char:"归纳",     pinyin:"guīnà",          tone:1, meaning:"to summarize / induction",             pos:"verb",    emoji:"📋", example:"请归纳本文的主要观点。",     exampleMeaning:"Please summarize the main points of this text." },
  { char:"倾向",     pinyin:"qīngxiàng",      tone:1, meaning:"tendency / inclination / to tend to",  pos:"noun",    emoji:"↗️", example:"他有倾向于保守的倾向。",     exampleMeaning:"He tends to be conservative." },
  { char:"适应",     pinyin:"shìyìng",        tone:4, meaning:"to adapt / adjust to",                 pos:"verb",    emoji:"🔄", example:"他很快适应了新环境。",       exampleMeaning:"He quickly adapted to the new environment." },
];

// ---- HSK 6 ADDITIONS (~60 words) ----
const HSK6_NEW = [

  // ===== CLASSICAL / LITERARY =====
  { char:"博大精深",  pinyin:"bódà jīngshēn",  tone:2, meaning:"broad and profound (culture/knowledge)",pos:"phrase", emoji:"🏛️", example:"中国文化博大精深。",        exampleMeaning:"Chinese culture is broad and profound." },
  { char:"源远流长",  pinyin:"yuányuǎn liúcháng",tone:2,meaning:"of long standing and established",   pos:"phrase", emoji:"🌊", example:"中华文明源远流长。",        exampleMeaning:"Chinese civilization has a long history." },
  { char:"纵观全局",  pinyin:"zòngguān quánjú", tone:4, meaning:"to take an overall view / see the big picture",pos:"phrase",emoji:"🔭",example:"领导者要纵观全局。",    exampleMeaning:"Leaders must see the big picture." },
  { char:"一针见血",  pinyin:"yī zhēn jiàn xiě",tone:1, meaning:"hit the nail on the head / to the point",pos:"phrase",emoji:"🎯",example:"他的评论一针见血。",        exampleMeaning:"His comment hit the nail on the head." },
  { char:"举足轻重",  pinyin:"jǔ zú qīng zhòng",tone:3, meaning:"to carry great weight / pivotal",   pos:"phrase", emoji:"⚖️", example:"他在行业里举足轻重。",      exampleMeaning:"He carries great weight in the industry." },
  { char:"层出不穷",  pinyin:"céng chū bù qióng",tone:2,meaning:"emerge one after another endlessly", pos:"phrase",  emoji:"♾️", example:"创新想法层出不穷。",        exampleMeaning:"Innovative ideas emerge endlessly." },
  { char:"触目惊心",  pinyin:"chùmù jīngxīn",   tone:4, meaning:"shocking / appalling",              pos:"phrase",  emoji:"😱", example:"事故现场触目惊心。",        exampleMeaning:"The accident scene was shocking." },
  { char:"叹为观止",  pinyin:"tàn wéi guān zhǐ", tone:4, meaning:"to gasp in admiration",            pos:"phrase",  emoji:"😲", example:"他的演技叹为观止。",        exampleMeaning:"His acting was breathtaking." },

  // ===== ADVANCED NOUNS =====
  { char:"意识形态",  pinyin:"yìshí xíngtài",   tone:4, meaning:"ideology",                           pos:"noun",    emoji:"💭", example:"不同国家有不同的意识形态。", exampleMeaning:"Different countries have different ideologies." },
  { char:"体制",      pinyin:"tǐzhì",            tone:3, meaning:"system / institution / regime",      pos:"noun",    emoji:"🏛️", example:"要推进体制改革。",          exampleMeaning:"We must advance institutional reform." },
  { char:"机制",      pinyin:"jīzhì",            tone:1, meaning:"mechanism",                          pos:"noun",    emoji:"⚙️", example:"建立健全的机制很重要。",    exampleMeaning:"Establishing a sound mechanism is important." },
  { char:"格局",      pinyin:"géjú",             tone:2, meaning:"pattern / layout / vision / structure",pos:"noun",  emoji:"🗺️", example:"领导者要有大格局。",        exampleMeaning:"Leaders must have great vision." },
  { char:"境界",      pinyin:"jìngjiè",          tone:4, meaning:"realm / level / state",              pos:"noun",    emoji:"🌄", example:"他的艺术达到了很高的境界。", exampleMeaning:"His art has reached a very high level." },
  { char:"内涵",      pinyin:"nèihán",           tone:4, meaning:"connotation / inner quality / depth", pos:"noun",   emoji:"🌊", example:"这幅画内涵丰富。",          exampleMeaning:"This painting has rich connotation." },
  { char:"精华",      pinyin:"jīnghuá",          tone:1, meaning:"essence / quintessence / cream",     pos:"noun",    emoji:"✨", example:"这是中华文化的精华。",      exampleMeaning:"This is the essence of Chinese culture." },
  { char:"传承",      pinyin:"chuánchéng",       tone:2, meaning:"inheritance / to inherit and carry on",pos:"noun",  emoji:"🏮", example:"文化的传承非常重要。",      exampleMeaning:"The inheritance of culture is very important." },
  { char:"脉络",      pinyin:"màiluò",           tone:4, meaning:"vein / thread / context / line of thought",pos:"noun",emoji:"🔗",example:"理清文章的脉络。",         exampleMeaning:"Clarify the thread of the article." },
  { char:"根基",      pinyin:"gēnjī",            tone:1, meaning:"foundation / base / roots",          pos:"noun",    emoji:"🌱", example:"教育是社会发展的根基。",    exampleMeaning:"Education is the foundation of social development." },

  // ===== ADVANCED VERBS =====
  { char:"弘扬",      pinyin:"hóngyáng",         tone:2, meaning:"to promote / carry forward (culture/spirit)",pos:"verb",emoji:"📣",example:"要弘扬中华传统文化。",   exampleMeaning:"We must promote traditional Chinese culture." },
  { char:"彰显",      pinyin:"zhāngxiǎn",        tone:1, meaning:"to highlight / manifest / demonstrate",pos:"verb", emoji:"🌟", example:"这项成就彰显了中国实力。", exampleMeaning:"This achievement demonstrates China's strength." },
  { char:"凸显",      pinyin:"tūxiǎn",           tone:1, meaning:"to accentuate / stand out / highlight",pos:"verb",  emoji:"⬆️", example:"这份数据凸显了问题所在。", exampleMeaning:"This data highlights where the problem lies." },
  { char:"折射",      pinyin:"zhéshè",           tone:2, meaning:"to refract / reflect (fig.) / mirror",pos:"verb",  emoji:"💫", example:"这一现象折射出社会问题。", exampleMeaning:"This phenomenon reflects social problems." },
  { char:"渗透",      pinyin:"shèntòu",          tone:4, meaning:"to permeate / infiltrate / seep into",pos:"verb",  emoji:"💧", example:"文化渗透到生活的方方面面。",exampleMeaning:"Culture permeates every aspect of life." },
  { char:"激发",      pinyin:"jīfā",             tone:1, meaning:"to inspire / stimulate / trigger",   pos:"verb",   emoji:"⚡", example:"这本书激发了我的潜能。",    exampleMeaning:"This book stimulated my potential." },
  { char:"孕育",      pinyin:"yùnyù",            tone:4, meaning:"to breed / nurture / give birth to",  pos:"verb",  emoji:"🌱", example:"这片土地孕育了灿烂文明。", exampleMeaning:"This land nurtured a brilliant civilization." },
  { char:"印证",      pinyin:"yìnzhèng",         tone:4, meaning:"to confirm / verify / corroborate",   pos:"verb",  emoji:"✅", example:"事实印证了他的推测。",      exampleMeaning:"The facts confirmed his speculation." },

  // ===== ADVANCED ADJECTIVES =====
  { char:"深远",      pinyin:"shēnyuǎn",         tone:1, meaning:"far-reaching / profound",            pos:"adj",    emoji:"🌊", example:"这件事影响深远。",          exampleMeaning:"This matter has far-reaching influence." },
  { char:"卓越",      pinyin:"zhuóyuè",          tone:2, meaning:"outstanding / remarkable / eminent",  pos:"adj",   emoji:"🌟", example:"她取得了卓越的成就。",      exampleMeaning:"She achieved outstanding accomplishments." },
  { char:"精辟",      pinyin:"jīngpì",           tone:1, meaning:"incisive / penetrating / profound (analysis)",pos:"adj",emoji:"💡",example:"他的分析非常精辟。", exampleMeaning:"His analysis is very incisive." },
  { char:"深邃",      pinyin:"shēnsuì",          tone:1, meaning:"deep / profound / abstruse",          pos:"adj",   emoji:"🌌", example:"他的思想深邃。",            exampleMeaning:"His thinking is profound." },
  { char:"鲜明",      pinyin:"xiānmíng",         tone:1, meaning:"clear-cut / distinctive / vivid",     pos:"adj",   emoji:"🎨", example:"文章观点鲜明。",            exampleMeaning:"The article's viewpoint is clear-cut." },
  { char:"严谨",      pinyin:"yánjǐn",           tone:2, meaning:"rigorous / meticulous / precise",     pos:"adj",   emoji:"📐", example:"治学要严谨。",              exampleMeaning:"One must be rigorous in scholarship." },
];

// =============================================
//  MERGE INTO GLOBAL DATA
// =============================================
(function mergeHSK456Data() {
  if (typeof HSK_DATA === 'undefined') {
    console.warn('[data_vocab_hsk456] HSK_DATA not found — load data.js first.');
    return;
  }

  function mergeWords(level, words) {
    if (!HSK_DATA[level]) HSK_DATA[level] = [];
    const existing = new Set(HSK_DATA[level].map(w => w.char));
    const added = words.filter(w => !existing.has(w.char));
    HSK_DATA[level].push(...added);
    return added.length;
  }

  const a4 = mergeWords(4, HSK4_NEW);
  const a5 = mergeWords(5, HSK5_NEW);
  const a6 = mergeWords(6, HSK6_NEW);

  const totals = [4, 5, 6].map(lv => `HSK${lv}: ${(HSK_DATA[lv] || []).length}`).join(', ');
  console.log(`[data_vocab_hsk456] Added ${a4}/${a5}/${a6} new words. ${totals}`);
})();
