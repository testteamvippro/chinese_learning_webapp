// =============================================
//  CHINESE LEARNING WEBAPP — VOCABULARY DATA
//  HSK 1 – HSK 5
//  Fields: char, pinyin, tone (1-4, 5=neutral),
//          meaning, pos (part of speech), example, exampleMeaning
// =============================================

const HSK_DATA = {

  1: [
    { char:"你好", pinyin:"nǐ hǎo",   tone:3, meaning:"Hello",           pos:"phrase",   example:"你好！很高兴认识你。", exampleMeaning:"Hello! Nice to meet you." },
    { char:"谢谢", pinyin:"xiè xie",  tone:4, meaning:"Thank you",       pos:"phrase",   example:"谢谢你的帮助。",       exampleMeaning:"Thank you for your help." },
    { char:"再见", pinyin:"zài jiàn", tone:4, meaning:"Goodbye",         pos:"phrase",   example:"明天见，再见！",        exampleMeaning:"See you tomorrow, goodbye!" },
    { char:"我",   pinyin:"wǒ",       tone:3, meaning:"I / me",          pos:"pronoun",  example:"我是学生。",           exampleMeaning:"I am a student." },
    { char:"你",   pinyin:"nǐ",       tone:3, meaning:"you",             pos:"pronoun",  example:"你叫什么名字？",       exampleMeaning:"What is your name?" },
    { char:"他",   pinyin:"tā",       tone:1, meaning:"he / him",        pos:"pronoun",  example:"他是我的朋友。",       exampleMeaning:"He is my friend." },
    { char:"她",   pinyin:"tā",       tone:1, meaning:"she / her",       pos:"pronoun",  example:"她很漂亮。",           exampleMeaning:"She is beautiful." },
    { char:"们",   pinyin:"men",      tone:5, meaning:"-s (plural)",     pos:"suffix",   example:"我们是朋友。",         exampleMeaning:"We are friends." },
    { char:"是",   pinyin:"shì",      tone:4, meaning:"to be (am/is/are)",pos:"verb",    example:"我是中国人。",         exampleMeaning:"I am Chinese." },
    { char:"有",   pinyin:"yǒu",      tone:3, meaning:"to have",         pos:"verb",     example:"我有一只猫。",         exampleMeaning:"I have a cat." },
    { char:"不",   pinyin:"bù",       tone:4, meaning:"not / no",        pos:"adverb",   example:"我不喜欢咖啡。",       exampleMeaning:"I don't like coffee." },
    { char:"好",   pinyin:"hǎo",      tone:3, meaning:"good",            pos:"adj",      example:"这个苹果很好吃。",     exampleMeaning:"This apple is delicious." },
    { char:"大",   pinyin:"dà",       tone:4, meaning:"big / large",     pos:"adj",      example:"这个房间很大。",       exampleMeaning:"This room is very big." },
    { char:"小",   pinyin:"xiǎo",     tone:3, meaning:"small / little",  pos:"adj",      example:"她的包很小。",         exampleMeaning:"Her bag is very small." },
    { char:"多",   pinyin:"duō",      tone:1, meaning:"many / much",     pos:"adj",      example:"这里有很多人。",       exampleMeaning:"There are many people here." },
    { char:"少",   pinyin:"shǎo",     tone:3, meaning:"few / little",    pos:"adj",      example:"钱太少了。",           exampleMeaning:"The money is too little." },
    { char:"人",   pinyin:"rén",      tone:2, meaning:"person / people",  pos:"noun",    example:"那个人是谁？",         exampleMeaning:"Who is that person?" },
    { char:"学生", pinyin:"xuéshēng", tone:2, meaning:"student",         pos:"noun",     example:"他是大学生。",         exampleMeaning:"He is a college student." },
    { char:"老师", pinyin:"lǎoshī",   tone:3, meaning:"teacher",         pos:"noun",     example:"我的老师很好。",       exampleMeaning:"My teacher is very good." },
    { char:"朋友", pinyin:"péngyou",  tone:2, meaning:"friend",          pos:"noun",     example:"她是我最好的朋友。",   exampleMeaning:"She is my best friend." },
    { char:"妈妈", pinyin:"māma",     tone:1, meaning:"mom / mother",    pos:"noun",     example:"妈妈在家吗？",         exampleMeaning:"Is mom at home?" },
    { char:"爸爸", pinyin:"bàba",     tone:4, meaning:"dad / father",    pos:"noun",     example:"爸爸去上班了。",       exampleMeaning:"Dad went to work." },
    { char:"家",   pinyin:"jiā",      tone:1, meaning:"home / family",   pos:"noun",     example:"我的家在北京。",       exampleMeaning:"My home is in Beijing." },
    { char:"中国", pinyin:"Zhōngguó", tone:1, meaning:"China",           pos:"noun",     example:"中国是一个大国。",     exampleMeaning:"China is a large country." },
    { char:"一",   pinyin:"yī",       tone:1, meaning:"one",             pos:"number",   example:"我有一个哥哥。",       exampleMeaning:"I have one older brother." },
    { char:"二",   pinyin:"èr",       tone:4, meaning:"two",             pos:"number",   example:"我住在二楼。",         exampleMeaning:"I live on the second floor." },
    { char:"三",   pinyin:"sān",      tone:1, meaning:"three",           pos:"number",   example:"我有三个朋友。",       exampleMeaning:"I have three friends." },
    { char:"四",   pinyin:"sì",       tone:4, meaning:"four",            pos:"number",   example:"他四岁了。",           exampleMeaning:"He is four years old." },
    { char:"五",   pinyin:"wǔ",       tone:3, meaning:"five",            pos:"number",   example:"苹果有五个。",         exampleMeaning:"There are five apples." },
    { char:"六",   pinyin:"liù",      tone:4, meaning:"six",             pos:"number",   example:"今天是六号。",         exampleMeaning:"Today is the 6th." },
    { char:"七",   pinyin:"qī",       tone:1, meaning:"seven",           pos:"number",   example:"七点起床。",           exampleMeaning:"Wake up at seven o'clock." },
    { char:"八",   pinyin:"bā",       tone:1, meaning:"eight",           pos:"number",   example:"八月很热。",           exampleMeaning:"August is very hot." },
    { char:"九",   pinyin:"jiǔ",      tone:3, meaning:"nine",            pos:"number",   example:"九月开学。",           exampleMeaning:"School starts in September." },
    { char:"十",   pinyin:"shí",      tone:2, meaning:"ten",             pos:"number",   example:"十个苹果。",           exampleMeaning:"Ten apples." },
    { char:"零",   pinyin:"líng",     tone:2, meaning:"zero",            pos:"number",   example:"今天零度。",           exampleMeaning:"It's zero degrees today." },
    { char:"今天", pinyin:"jīntiān",  tone:1, meaning:"today",           pos:"noun",     example:"今天天气不错。",       exampleMeaning:"The weather is nice today." },
    { char:"明天", pinyin:"míngtiān", tone:2, meaning:"tomorrow",        pos:"noun",     example:"明天我去北京。",       exampleMeaning:"I'm going to Beijing tomorrow." },
    { char:"昨天", pinyin:"zuótiān",  tone:2, meaning:"yesterday",       pos:"noun",     example:"昨天下雨了。",         exampleMeaning:"It rained yesterday." },
    { char:"年",   pinyin:"nián",     tone:2, meaning:"year",            pos:"noun",     example:"今年是2025年。",       exampleMeaning:"This year is 2025." },
    { char:"月",   pinyin:"yuè",      tone:4, meaning:"month / moon",    pos:"noun",     example:"这个月很忙。",         exampleMeaning:"This month is very busy." },
    { char:"日",   pinyin:"rì",       tone:4, meaning:"day / sun",       pos:"noun",     example:"今日天气晴。",         exampleMeaning:"Today's weather is sunny." },
    { char:"水",   pinyin:"shuǐ",     tone:3, meaning:"water",           pos:"noun",     example:"我想喝水。",           exampleMeaning:"I want to drink water." },
    { char:"饭",   pinyin:"fàn",      tone:4, meaning:"rice / meal",     pos:"noun",     example:"吃饭了吗？",           exampleMeaning:"Have you eaten?" },
    { char:"苹果", pinyin:"píngguǒ",  tone:2, meaning:"apple",           pos:"noun",     example:"我喜欢吃苹果。",       exampleMeaning:"I like eating apples." },
    { char:"猫",   pinyin:"māo",      tone:1, meaning:"cat",             pos:"noun",     example:"我家有一只猫。",       exampleMeaning:"I have a cat at home." },
    { char:"狗",   pinyin:"gǒu",      tone:3, meaning:"dog",             pos:"noun",     example:"这只狗很可爱。",       exampleMeaning:"This dog is very cute." },
    { char:"书",   pinyin:"shū",      tone:1, meaning:"book",            pos:"noun",     example:"我在看书。",           exampleMeaning:"I'm reading a book." },
    { char:"车",   pinyin:"chē",      tone:1, meaning:"car / vehicle",   pos:"noun",     example:"他开车上班。",         exampleMeaning:"He drives to work." },
    { char:"岁",   pinyin:"suì",      tone:4, meaning:"years old",       pos:"noun",     example:"我二十岁了。",         exampleMeaning:"I am twenty years old." },
    { char:"块",   pinyin:"kuài",     tone:4, meaning:"yuan / piece",    pos:"measure",  example:"这个苹果一块钱。",     exampleMeaning:"This apple costs one yuan." },
  ],

  2: [
    { char:"但是", pinyin:"dànshì",   tone:4, meaning:"but / however",   pos:"conj",     example:"我想去，但是没有时间。", exampleMeaning:"I want to go, but I have no time." },
    { char:"因为", pinyin:"yīnwèi",   tone:1, meaning:"because",         pos:"conj",     example:"因为下雨，我没去。",   exampleMeaning:"Because it rained, I didn't go." },
    { char:"所以", pinyin:"suǒyǐ",    tone:3, meaning:"so / therefore",  pos:"conj",     example:"很累，所以早睡了。",   exampleMeaning:"Very tired, so I slept early." },
    { char:"如果", pinyin:"rúguǒ",    tone:2, meaning:"if",              pos:"conj",     example:"如果你来，告诉我。",   exampleMeaning:"If you come, tell me." },
    { char:"虽然", pinyin:"suīrán",   tone:1, meaning:"although",        pos:"conj",     example:"虽然累，还是去了。",   exampleMeaning:"Although tired, I still went." },
    { char:"觉得", pinyin:"juéde",    tone:2, meaning:"to feel / think", pos:"verb",     example:"我觉得他很好。",       exampleMeaning:"I think he is very good." },
    { char:"喜欢", pinyin:"xǐhuān",   tone:3, meaning:"to like",         pos:"verb",     example:"我喜欢看电影。",       exampleMeaning:"I like watching movies." },
    { char:"知道", pinyin:"zhīdào",   tone:1, meaning:"to know",         pos:"verb",     example:"你知道他住哪里吗？",   exampleMeaning:"Do you know where he lives?" },
    { char:"想",   pinyin:"xiǎng",    tone:3, meaning:"to want / think", pos:"verb",     example:"我想去中国旅行。",     exampleMeaning:"I want to travel to China." },
    { char:"能",   pinyin:"néng",     tone:2, meaning:"can / be able to",pos:"verb",     example:"你能帮我吗？",         exampleMeaning:"Can you help me?" },
    { char:"可以", pinyin:"kěyǐ",     tone:3, meaning:"may / can",       pos:"verb",     example:"我可以进来吗？",       exampleMeaning:"May I come in?" },
    { char:"应该", pinyin:"yīnggāi",  tone:1, meaning:"should / ought to",pos:"verb",   example:"你应该多喝水。",       exampleMeaning:"You should drink more water." },
    { char:"超市", pinyin:"chāoshì",  tone:1, meaning:"supermarket",     pos:"noun",     example:"我去超市买东西。",     exampleMeaning:"I go to the supermarket to buy things." },
    { char:"医院", pinyin:"yīyuàn",   tone:1, meaning:"hospital",        pos:"noun",     example:"他在医院工作。",       exampleMeaning:"He works at the hospital." },
    { char:"学校", pinyin:"xuéxiào",  tone:2, meaning:"school",          pos:"noun",     example:"我去学校上课。",       exampleMeaning:"I go to school for class." },
    { char:"公司", pinyin:"gōngsī",   tone:1, meaning:"company",         pos:"noun",     example:"她在一家大公司工作。", exampleMeaning:"She works at a big company." },
    { char:"银行", pinyin:"yínháng",  tone:2, meaning:"bank",            pos:"noun",     example:"银行几点开门？",       exampleMeaning:"What time does the bank open?" },
    { char:"机场", pinyin:"jīchǎng",  tone:1, meaning:"airport",         pos:"noun",     example:"我去机场接朋友。",     exampleMeaning:"I'm picking up a friend at the airport." },
    { char:"地铁", pinyin:"dìtiě",    tone:4, meaning:"subway / metro",  pos:"noun",     example:"我坐地铁上班。",       exampleMeaning:"I take the subway to work." },
    { char:"飞机", pinyin:"fēijī",    tone:1, meaning:"airplane",        pos:"noun",     example:"飞机几点起飞？",       exampleMeaning:"What time does the plane take off?" },
    { char:"手机", pinyin:"shǒujī",   tone:3, meaning:"mobile phone",    pos:"noun",     example:"我的手机没电了。",     exampleMeaning:"My phone has run out of battery." },
    { char:"电脑", pinyin:"diànnǎo",  tone:4, meaning:"computer",        pos:"noun",     example:"我用电脑工作。",       exampleMeaning:"I work on a computer." },
    { char:"问题", pinyin:"wèntí",    tone:4, meaning:"question / problem",pos:"noun",   example:"你有什么问题吗？",     exampleMeaning:"Do you have any questions?" },
    { char:"时间", pinyin:"shíjiān",  tone:2, meaning:"time",            pos:"noun",     example:"我没有时间。",         exampleMeaning:"I don't have time." },
    { char:"地方", pinyin:"dìfāng",   tone:4, meaning:"place",           pos:"noun",     example:"这个地方很漂亮。",     exampleMeaning:"This place is very beautiful." },
    { char:"事情", pinyin:"shìqing",  tone:4, meaning:"thing / matter",  pos:"noun",     example:"什么事情？",           exampleMeaning:"What's the matter?" },
    { char:"钱",   pinyin:"qián",     tone:2, meaning:"money",           pos:"noun",     example:"我没带钱。",           exampleMeaning:"I didn't bring money." },
    { char:"天气", pinyin:"tiānqì",   tone:1, meaning:"weather",         pos:"noun",     example:"今天天气怎么样？",     exampleMeaning:"What's the weather like today?" },
    { char:"颜色", pinyin:"yánsè",    tone:2, meaning:"color",           pos:"noun",     example:"你喜欢什么颜色？",     exampleMeaning:"What color do you like?" },
    { char:"电影", pinyin:"diànyǐng", tone:4, meaning:"movie / film",    pos:"noun",     example:"我们去看电影吧。",     exampleMeaning:"Let's go watch a movie." },
    { char:"音乐", pinyin:"yīnyuè",   tone:1, meaning:"music",           pos:"noun",     example:"我喜欢听音乐。",       exampleMeaning:"I like listening to music." },
    { char:"运动", pinyin:"yùndòng",  tone:4, meaning:"sport / exercise",pos:"noun",     example:"运动对身体好。",       exampleMeaning:"Exercise is good for the body." },
    { char:"旅游", pinyin:"lǚyóu",    tone:3, meaning:"travel / tourism",pos:"verb",     example:"我们去旅游吧！",       exampleMeaning:"Let's go travel!" },
    { char:"休息", pinyin:"xiūxi",    tone:1, meaning:"to rest",         pos:"verb",     example:"好好休息一下。",       exampleMeaning:"Rest well." },
    { char:"帮助", pinyin:"bāngzhù",  tone:1, meaning:"to help",         pos:"verb",     example:"谢谢你的帮助。",       exampleMeaning:"Thank you for your help." },
    { char:"告诉", pinyin:"gàosu",    tone:4, meaning:"to tell",         pos:"verb",     example:"告诉我你的名字。",     exampleMeaning:"Tell me your name." },
    { char:"快",   pinyin:"kuài",     tone:4, meaning:"fast / quick",    pos:"adj",      example:"他走得很快。",         exampleMeaning:"He walks very fast." },
    { char:"慢",   pinyin:"màn",      tone:4, meaning:"slow",            pos:"adj",      example:"请说慢一点。",         exampleMeaning:"Please speak more slowly." },
    { char:"热",   pinyin:"rè",       tone:4, meaning:"hot",             pos:"adj",      example:"今天很热。",           exampleMeaning:"It's very hot today." },
    { char:"冷",   pinyin:"lěng",     tone:3, meaning:"cold",            pos:"adj",      example:"冬天很冷。",           exampleMeaning:"Winter is very cold." },
    { char:"贵",   pinyin:"guì",      tone:4, meaning:"expensive",       pos:"adj",      example:"这个太贵了。",         exampleMeaning:"This is too expensive." },
    { char:"便宜", pinyin:"piányí",   tone:2, meaning:"cheap / inexpensive",pos:"adj",   example:"这件衣服很便宜。",     exampleMeaning:"This piece of clothing is very cheap." },
    { char:"漂亮", pinyin:"piàoliang",tone:4, meaning:"beautiful / pretty",pos:"adj",    example:"她很漂亮。",           exampleMeaning:"She is very beautiful." },
    { char:"干净", pinyin:"gānjìng",  tone:1, meaning:"clean",           pos:"adj",      example:"房间很干净。",         exampleMeaning:"The room is very clean." },
    { char:"聪明", pinyin:"cōngmíng", tone:1, meaning:"smart / clever",  pos:"adj",      example:"他的孩子很聪明。",     exampleMeaning:"His child is very smart." },
  ],

  3: [
    { char:"经验", pinyin:"jīngyàn",  tone:1, meaning:"experience",      pos:"noun",     example:"他有丰富的工作经验。", exampleMeaning:"He has rich work experience." },
    { char:"文化", pinyin:"wénhuà",   tone:2, meaning:"culture",         pos:"noun",     example:"中国文化博大精深。",   exampleMeaning:"Chinese culture is profound." },
    { char:"历史", pinyin:"lìshǐ",    tone:4, meaning:"history",         pos:"noun",     example:"中国有几千年历史。",   exampleMeaning:"China has thousands of years of history." },
    { char:"环境", pinyin:"huánjìng", tone:2, meaning:"environment",     pos:"noun",     example:"我们要保护环境。",     exampleMeaning:"We must protect the environment." },
    { char:"机会", pinyin:"jīhuì",    tone:1, meaning:"opportunity / chance",pos:"noun", example:"这是个好机会。",       exampleMeaning:"This is a good opportunity." },
    { char:"关系", pinyin:"guānxi",   tone:1, meaning:"relationship",    pos:"noun",     example:"我们关系很好。",       exampleMeaning:"We have a good relationship." },
    { char:"方法", pinyin:"fāngfǎ",   tone:1, meaning:"method / way",    pos:"noun",     example:"你有什么好方法？",     exampleMeaning:"Do you have any good methods?" },
    { char:"生活", pinyin:"shēnghuó", tone:1, meaning:"life / to live",  pos:"noun",     example:"他的生活很幸福。",     exampleMeaning:"His life is very happy." },
    { char:"工作", pinyin:"gōngzuò",  tone:1, meaning:"work / job",      pos:"noun",     example:"她喜欢她的工作。",     exampleMeaning:"She likes her job." },
    { char:"情况", pinyin:"qíngkuàng",tone:2, meaning:"situation / condition",pos:"noun",example:"情况怎么样了？",       exampleMeaning:"How is the situation?" },
    { char:"交通", pinyin:"jiāotōng", tone:1, meaning:"traffic / transportation",pos:"noun",example:"这里交通很方便。",  exampleMeaning:"Transportation here is very convenient." },
    { char:"城市", pinixin:"chéngshì",tone:2, meaning:"city",            pos:"noun",     example:"上海是个大城市。",     exampleMeaning:"Shanghai is a big city." },
    { char:"国家", pinyin:"guójiā",   tone:2, meaning:"country / nation",pos:"noun",     example:"你是哪个国家的人？",   exampleMeaning:"What country are you from?" },
    { char:"问题", pinyin:"wèntí",    tone:4, meaning:"problem / question",pos:"noun",   example:"这个问题很难。",       exampleMeaning:"This problem is very difficult." },
    { char:"消息", pinyin:"xiāoxi",   tone:1, meaning:"news / message",  pos:"noun",     example:"你有什么新消息？",     exampleMeaning:"Do you have any news?" },
    { char:"压力", pinyin:"yālì",     tone:1, meaning:"pressure / stress",pos:"noun",    example:"他工作压力很大。",     exampleMeaning:"He has a lot of work pressure." },
    { char:"热情", pinyin:"rèqíng",   tone:4, meaning:"enthusiasm / warm",pos:"adj",     example:"她对工作很热情。",     exampleMeaning:"She is very enthusiastic about work." },
    { char:"认真", pinyin:"rènzhēn",  tone:4, meaning:"serious / earnest",pos:"adj",     example:"他学习很认真。",       exampleMeaning:"He studies very earnestly." },
    { char:"复杂", pinyin:"fùzá",     tone:4, meaning:"complicated",     pos:"adj",      example:"这件事很复杂。",       exampleMeaning:"This matter is very complicated." },
    { char:"简单", pinyin:"jiǎndān",  tone:3, meaning:"simple / easy",   pos:"adj",      example:"这道题很简单。",       exampleMeaning:"This question is very simple." },
    { char:"安全", pinyin:"ānquán",   tone:1, meaning:"safe / security", pos:"adj",      example:"这里很安全。",         exampleMeaning:"It is very safe here." },
    { char:"危险", pinyin:"wéixiǎn",  tone:2, meaning:"dangerous",       pos:"adj",      example:"这条路很危险。",       exampleMeaning:"This road is very dangerous." },
    { char:"重要", pinyin:"zhòngyào", tone:4, meaning:"important",       pos:"adj",      example:"这件事很重要。",       exampleMeaning:"This matter is very important." },
    { char:"特别", pinyin:"tèbié",    tone:4, meaning:"special / especially",pos:"adj",  example:"今天特别冷。",         exampleMeaning:"Today is especially cold." },
    { char:"常常", pinyin:"chángcháng",tone:2,meaning:"often / frequently",pos:"adverb", example:"我常常去图书馆。",     exampleMeaning:"I often go to the library." },
    { char:"已经", pinyin:"yǐjīng",   tone:3, meaning:"already",         pos:"adverb",   example:"他已经走了。",         exampleMeaning:"He has already left." },
    { char:"继续", pinyin:"jìxù",     tone:4, meaning:"to continue",     pos:"verb",     example:"请继续说。",           exampleMeaning:"Please continue." },
    { char:"解决", pinyin:"jiějué",   tone:3, meaning:"to solve / resolve",pos:"verb",   example:"我们要解决这个问题。", exampleMeaning:"We need to solve this problem." },
    { char:"发展", pinyin:"fāzhǎn",   tone:1, meaning:"to develop",      pos:"verb",     example:"科技快速发展。",       exampleMeaning:"Technology develops rapidly." },
    { char:"影响", pinyin:"yǐngxiǎng",tone:3, meaning:"to influence",    pos:"verb",     example:"天气影响心情。",       exampleMeaning:"Weather influences mood." },
    { char:"参加", pinyin:"cānjiā",   tone:1, meaning:"to participate",  pos:"verb",     example:"你参加比赛了吗？",     exampleMeaning:"Did you participate in the competition?" },
    { char:"选择", pinyin:"xuǎnzé",   tone:3, meaning:"to choose",       pos:"verb",     example:"你要怎么选择？",       exampleMeaning:"How will you choose?" },
    { char:"完成", pinyin:"wánchéng", tone:2, meaning:"to complete",     pos:"verb",     example:"任务已经完成了。",     exampleMeaning:"The task has been completed." },
    { char:"提高", pinyin:"tígāo",    tone:2, meaning:"to improve / raise",pos:"verb",   example:"我想提高我的汉语。",   exampleMeaning:"I want to improve my Chinese." },
    { char:"了解", pinyin:"liǎojiě",  tone:3, meaning:"to understand",   pos:"verb",     example:"我了解他的情况。",     exampleMeaning:"I understand his situation." },
  ],

  4: [
    { char:"经济", pinyin:"jīngjì",   tone:1, meaning:"economy / economics",pos:"noun",  example:"中国经济增长很快。",   exampleMeaning:"China's economy grows fast." },
    { char:"政治", pinyin:"zhèngzhì", tone:4, meaning:"politics",        pos:"noun",     example:"他对政治感兴趣。",     exampleMeaning:"He is interested in politics." },
    { char:"社会", pinyin:"shèhuì",   tone:4, meaning:"society",         pos:"noun",     example:"社会发展很快。",       exampleMeaning:"Society is developing rapidly." },
    { char:"科技", pinyin:"kējì",     tone:1, meaning:"science & technology",pos:"noun", example:"科技改变了我们的生活。",exampleMeaning:"Technology has changed our lives." },
    { char:"信息", pinyin:"xìnxī",    tone:4, meaning:"information",     pos:"noun",     example:"我需要更多信息。",     exampleMeaning:"I need more information." },
    { char:"观点", pinyin:"guāndiǎn", tone:1, meaning:"viewpoint / opinion",pos:"noun",  example:"请说说你的观点。",     exampleMeaning:"Please share your viewpoint." },
    { char:"态度", pinyin:"tàidu",    tone:4, meaning:"attitude",        pos:"noun",     example:"他的态度很好。",       exampleMeaning:"His attitude is very good." },
    { char:"目的", pinyin:"mùdì",     tone:4, meaning:"purpose / goal",  pos:"noun",     example:"你的目的是什么？",     exampleMeaning:"What is your purpose?" },
    { char:"结果", pinyin:"jiéguǒ",   tone:2, meaning:"result / outcome",pos:"noun",     example:"结果出来了吗？",       exampleMeaning:"Has the result come out?" },
    { char:"阶段", pinyin:"jiēduàn",  tone:1, meaning:"stage / phase",   pos:"noun",     example:"现在是重要阶段。",     exampleMeaning:"Now is an important stage." },
    { char:"制度", pinyin:"zhìdù",    tone:4, meaning:"system / institution",pos:"noun", example:"公司制度很严格。",     exampleMeaning:"The company's rules are very strict." },
    { char:"进步", pinyin:"jìnbù",    tone:4, meaning:"progress",        pos:"noun",     example:"你的汉语有很大进步。",  exampleMeaning:"Your Chinese has improved a lot." },
    { char:"矛盾", pinyin:"máodùn",   tone:2, meaning:"contradiction / conflict",pos:"noun",example:"两人之间有矛盾。", exampleMeaning:"There is a conflict between them." },
    { char:"责任", pinyin:"zérèn",    tone:2, meaning:"responsibility",  pos:"noun",     example:"这是你的责任。",       exampleMeaning:"This is your responsibility." },
    { char:"原因", pinyin:"yuányīn",  tone:2, meaning:"reason / cause",  pos:"noun",     example:"这件事的原因是什么？", exampleMeaning:"What is the reason for this?" },
    { char:"意义", pinyin:"yìyì",     tone:4, meaning:"meaning / significance",pos:"noun",example:"这很有意义。",       exampleMeaning:"This is very meaningful." },
    { char:"优势", pinyin:"yōushì",   tone:1, meaning:"advantage",       pos:"noun",     example:"我们有技术优势。",     exampleMeaning:"We have a technical advantage." },
    { char:"困难", pinyin:"kùnnan",   tone:4, meaning:"difficulty",      pos:"noun",     example:"遇到困难不要放弃。",   exampleMeaning:"Don't give up when you meet difficulties." },
    { char:"消费", pinyin:"xiāofèi",  tone:1, meaning:"consumption / spending",pos:"verb",example:"年轻人消费能力强。",  exampleMeaning:"Young people have strong spending power." },
    { char:"竞争", pinyin:"jìngzhēng",tone:4, meaning:"competition",     pos:"verb",     example:"市场竞争很激烈。",     exampleMeaning:"Market competition is very fierce." },
    { char:"合作", pinyin:"hézuò",    tone:2, meaning:"cooperation",     pos:"verb",     example:"我们需要相互合作。",   exampleMeaning:"We need to cooperate with each other." },
    { char:"调查", pinyin:"diàochá",  tone:4, meaning:"to investigate / survey",pos:"verb",example:"我们做了一个调查。", exampleMeaning:"We conducted a survey." },
    { char:"证明", pinyin:"zhèngmíng",tone:4, meaning:"to prove",        pos:"verb",     example:"你能证明你的观点吗？", exampleMeaning:"Can you prove your point?" },
    { char:"沟通", pinyin:"gōutōng",  tone:1, meaning:"to communicate",  pos:"verb",     example:"有效沟通非常重要。",   exampleMeaning:"Effective communication is very important." },
    { char:"实现", pinyin:"shíxiàn",  tone:2, meaning:"to realize/achieve",pos:"verb",   example:"梦想终于实现了。",     exampleMeaning:"The dream has finally been realized." },
    { char:"坚持", pinyin:"jiānchí",  tone:1, meaning:"to persist / insist",pos:"verb",  example:"坚持就是胜利。",       exampleMeaning:"Persistence means victory." },
    { char:"适应", pinyin:"shìyìng",  tone:4, meaning:"to adapt",        pos:"verb",     example:"他很快适应了新环境。", exampleMeaning:"He quickly adapted to the new environment." },
    { char:"忽视", pinyin:"hūshì",    tone:1, meaning:"to neglect / ignore",pos:"verb",  example:"不能忽视这个问题。",   exampleMeaning:"We cannot ignore this problem." },
    { char:"鼓励", pinyin:"gǔlì",     tone:3, meaning:"to encourage",    pos:"verb",     example:"老师鼓励学生多读书。", exampleMeaning:"The teacher encourages students to read more." },
    { char:"批评", pinyin:"pīpíng",   tone:1, meaning:"to criticize",    pos:"verb",     example:"老师批评了他。",       exampleMeaning:"The teacher criticized him." },
  ],

  5: [
    { char:"哲学", pinyin:"zhéxué",    tone:2, meaning:"philosophy",      pos:"noun",    example:"他学的是哲学。",       exampleMeaning:"He studies philosophy." },
    { char:"心理", pinyin:"xīnlǐ",    tone:1, meaning:"psychology / mentality",pos:"noun",example:"心理健康很重要。",   exampleMeaning:"Mental health is very important." },
    { char:"逻辑", pinyin:"luójí",     tone:2, meaning:"logic",           pos:"noun",    example:"你的逻辑不对。",       exampleMeaning:"Your logic is wrong." },
    { char:"辩证", pinyin:"biànzhèng", tone:4, meaning:"dialectical",     pos:"adj",     example:"要辩证地看问题。",     exampleMeaning:"We must look at problems dialectically." },
    { char:"价值观",pinyin:"jiàzhíguān",tone:4,meaning:"values",          pos:"noun",    example:"价值观影响行为。",     exampleMeaning:"Values influence behavior." },
    { char:"理念", pinyin:"lǐniàn",    tone:3, meaning:"concept / idea",  pos:"noun",    example:"企业理念很重要。",     exampleMeaning:"Corporate concepts are important." },
    { char:"抽象", pinyin:"chōuxiàng", tone:1, meaning:"abstract",        pos:"adj",     example:"这个概念很抽象。",     exampleMeaning:"This concept is very abstract." },
    { char:"本质", pinyin:"běnzhì",    tone:3, meaning:"essence / nature",pos:"noun",    example:"问题的本质是什么？",   exampleMeaning:"What is the essence of the problem?" },
    { char:"矛盾", pinyin:"máodùn",    tone:2, meaning:"contradiction",   pos:"noun",    example:"事物都有矛盾。",       exampleMeaning:"Everything has contradictions." },
    { char:"规律", pinyin:"guīlǜ",     tone:1, meaning:"law / regularity",pos:"noun",    example:"事物有它的规律。",     exampleMeaning:"Things have their own laws." },
    { char:"现象", pinyin:"xiànxiàng", tone:4, meaning:"phenomenon",      pos:"noun",    example:"这是个有趣的现象。",   exampleMeaning:"This is an interesting phenomenon." },
    { char:"趋势", pinyin:"qūshì",     tone:1, meaning:"trend",           pos:"noun",    example:"这是一个全球趋势。",   exampleMeaning:"This is a global trend." },
    { char:"核心", pinyin:"héxīn",     tone:2, meaning:"core / kernel",   pos:"noun",    example:"这是核心问题。",       exampleMeaning:"This is the core issue." },
    { char:"层面", pinyin:"céngmiàn",  tone:2, meaning:"level / dimension",pos:"noun",   example:"从不同层面来看。",     exampleMeaning:"Looking from different dimensions." },
    { char:"背景", pinyin:"bèijǐng",   tone:4, meaning:"background",      pos:"noun",    example:"了解历史背景很重要。",  exampleMeaning:"Understanding historical background is important." },
    { char:"传统", pinyin:"chuántǒng", tone:2, meaning:"tradition",       pos:"noun",    example:"我们要继承传统文化。",  exampleMeaning:"We should inherit traditional culture." },
    { char:"创新", pinyin:"chuàngxīn", tone:4, meaning:"innovation",      pos:"verb",    example:"公司不断创新。",       exampleMeaning:"The company continuously innovates." },
    { char:"可持续",pinyin:"kě chíxù", tone:3, meaning:"sustainable",     pos:"adj",     example:"可持续发展很重要。",   exampleMeaning:"Sustainable development is important." },
    { char:"全球化",pinyin:"quánqiúhuà",tone:2,meaning:"globalization",   pos:"noun",    example:"全球化带来机遇和挑战。",exampleMeaning:"Globalization brings opportunities and challenges." },
    { char:"多元化",pinyin:"duōyuánhuà",tone:1,meaning:"diversification", pos:"noun",    example:"社会越来越多元化。",   exampleMeaning:"Society is increasingly diversified." },
    { char:"批判性",pinyin:"pīpànxìng",tone:1,meaning:"critical (thinking)",pos:"adj",   example:"要有批判性思维。",     exampleMeaning:"One must have critical thinking." },
    { char:"客观",  pinyin:"kèguān",   tone:4, meaning:"objective",       pos:"adj",     example:"要客观地分析问题。",   exampleMeaning:"We must analyze problems objectively." },
    { char:"主观",  pinyin:"zhǔguān",  tone:3, meaning:"subjective",      pos:"adj",     example:"不要太主观。",         exampleMeaning:"Don't be too subjective." },
    { char:"宏观",  pinyin:"hóngguān", tone:2, meaning:"macro / big picture",pos:"adj",  example:"从宏观角度看。",       exampleMeaning:"Looking from a macro perspective." },
    { char:"微观",  pinyin:"wēiguān",  tone:1, meaning:"micro",           pos:"adj",     example:"微观分析也很重要。",   exampleMeaning:"Micro analysis is also important." },
    { char:"辐射",  pinyin:"fúshè",    tone:2, meaning:"radiation / to radiate",pos:"verb",example:"手机辐射对人有影响吗？",exampleMeaning:"Does phone radiation affect people?" },
    { char:"探索",  pinyin:"tànsuǒ",   tone:4, meaning:"to explore",      pos:"verb",    example:"人类不断探索宇宙。",   exampleMeaning:"Humans continuously explore the universe." },
    { char:"诠释",  pinyin:"quánshì",  tone:2, meaning:"to interpret",    pos:"verb",    example:"他对这首诗有独特的诠释。",exampleMeaning:"He has a unique interpretation of this poem." },
    { char:"融合",  pinyin:"rónghé",   tone:2, meaning:"to merge / integrate",pos:"verb", example:"东西方文化融合。",     exampleMeaning:"Eastern and Western cultures are merging." },
    { char:"渗透",  pinyin:"shèntòu",  tone:4, meaning:"to permeate",     pos:"verb",    example:"技术渗透到生活各处。",  exampleMeaning:"Technology permeates all aspects of life." },
    // --- Extra HSK5 vocab ---
    { char:"辩论",  pinyin:"biànlùn",  tone:4, meaning:"debate / to debate",pos:"verb",  example:"他们进行了激烈的辩论。", exampleMeaning:"They had a fierce debate." },
    { char:"权威",  pinyin:"quánwēi",  tone:2, meaning:"authority",       pos:"noun",    example:"他是这个领域的权威。",   exampleMeaning:"He is an authority in this field." },
    { char:"制约",  pinyin:"zhìyuē",   tone:4, meaning:"to restrain / constrain",pos:"verb",example:"资金制约了项目发展。",exampleMeaning:"Funding constrains the project's development." },
    { char:"衍生",  pinyin:"yǎnshēng", tone:3, meaning:"to derive / spin off",pos:"verb", example:"这个问题衍生出了很多新问题。",exampleMeaning:"This issue spawned many new problems." },
    { char:"模糊",  pinyin:"móhu",     tone:2, meaning:"vague / blurry",  pos:"adj",     example:"边界越来越模糊。",       exampleMeaning:"The boundary is becoming increasingly blurred." },
    { char:"精确",  pinyin:"jīngquè",  tone:1, meaning:"precise / accurate",pos:"adj",   example:"数据要精确。",           exampleMeaning:"The data must be accurate." },
    { char:"宽泛",  pinyin:"kuānfàn",  tone:1, meaning:"broad / wide-ranging",pos:"adj", example:"这个概念太宽泛了。",     exampleMeaning:"This concept is too broad." },
    { char:"具体",  pinyin:"jùtǐ",     tone:4, meaning:"concrete / specific",pos:"adj",  example:"请给出具体的例子。",     exampleMeaning:"Please give a specific example." },
    { char:"颠覆",  pinyin:"diānfù",   tone:1, meaning:"to overturn / subvert",pos:"verb",example:"这项技术颠覆了传统行业。",exampleMeaning:"This technology overturned traditional industries." },
    { char:"审视",  pinyin:"shěnshì",  tone:3, meaning:"to scrutinize",   pos:"verb",    example:"我们需要重新审视这个问题。",exampleMeaning:"We need to re-examine this problem." },
  ],

};

// =============================================
//  EXTRA VOCABULARY (bonus words per level)
//  Shown in "Advanced" filter
// =============================================
const EXTRA_VOCAB = {
  1: [
    { char:"哥哥", pinyin:"gēgē",   tone:1, meaning:"older brother",     pos:"noun",   example:"我哥哥很高。",         exampleMeaning:"My older brother is tall." },
    { char:"姐姐", pinyin:"jiějie", tone:3, meaning:"older sister",      pos:"noun",   example:"我姐姐在北京工作。",   exampleMeaning:"My older sister works in Beijing." },
    { char:"弟弟", pinyin:"dìdi",   tone:4, meaning:"younger brother",   pos:"noun",   example:"弟弟今年十岁。",       exampleMeaning:"My younger brother is ten this year." },
    { char:"妹妹", pinyin:"mèimei", tone:4, meaning:"younger sister",    pos:"noun",   example:"妹妹喜欢唱歌。",       exampleMeaning:"My younger sister likes singing." },
    { char:"喝",   pinyin:"hē",     tone:1, meaning:"to drink",          pos:"verb",   example:"我想喝茶。",           exampleMeaning:"I want to drink tea." },
    { char:"吃",   pinyin:"chī",    tone:1, meaning:"to eat",            pos:"verb",   example:"你吃饭了吗？",         exampleMeaning:"Have you eaten?" },
    { char:"看",   pinyin:"kàn",    tone:4, meaning:"to look / watch",   pos:"verb",   example:"我在看书。",           exampleMeaning:"I'm reading a book." },
    { char:"去",   pinyin:"qù",     tone:4, meaning:"to go",             pos:"verb",   example:"我去学校。",           exampleMeaning:"I'm going to school." },
    { char:"来",   pinyin:"lái",    tone:2, meaning:"to come",           pos:"verb",   example:"你来我家吧。",         exampleMeaning:"Come to my house." },
    { char:"说",   pinyin:"shuō",   tone:1, meaning:"to speak / say",    pos:"verb",   example:"他说中文。",           exampleMeaning:"He speaks Chinese." },
    { char:"听",   pinyin:"tīng",   tone:1, meaning:"to listen",         pos:"verb",   example:"我听音乐。",           exampleMeaning:"I listen to music." },
    { char:"写",   pinyin:"xiě",    tone:3, meaning:"to write",          pos:"verb",   example:"我在写字。",           exampleMeaning:"I'm writing characters." },
    { char:"读",   pinyin:"dú",     tone:2, meaning:"to read aloud",     pos:"verb",   example:"请读这个句子。",       exampleMeaning:"Please read this sentence." },
    { char:"买",   pinyin:"mǎi",    tone:3, meaning:"to buy",            pos:"verb",   example:"我去买苹果。",         exampleMeaning:"I'm going to buy apples." },
    { char:"卖",   pinyin:"mài",    tone:4, meaning:"to sell",           pos:"verb",   example:"他在卖水果。",         exampleMeaning:"He is selling fruit." },
    { char:"坐",   pinyin:"zuò",    tone:4, meaning:"to sit / ride",     pos:"verb",   example:"请坐。",               exampleMeaning:"Please sit down." },
    { char:"站",   pinyin:"zhàn",   tone:4, meaning:"to stand",          pos:"verb",   example:"请站起来。",           exampleMeaning:"Please stand up." },
    { char:"开",   pinyin:"kāi",    tone:1, meaning:"to open / drive",   pos:"verb",   example:"开门！",               exampleMeaning:"Open the door!" },
    { char:"关",   pinyin:"guān",   tone:1, meaning:"to close / turn off",pos:"verb",  example:"关门吧。",             exampleMeaning:"Close the door." },
    { char:"高兴", pinyin:"gāoxìng",tone:1, meaning:"happy / glad",      pos:"adj",   example:"见到你很高兴。",       exampleMeaning:"Nice / glad to meet you." },
    { char:"累",   pinyin:"lèi",    tone:4, meaning:"tired",             pos:"adj",   example:"我很累。",             exampleMeaning:"I'm very tired." },
    { char:"饿",   pinyin:"è",      tone:4, meaning:"hungry",            pos:"adj",   example:"我很饿。",             exampleMeaning:"I'm very hungry." },
    { char:"渴",   pinyin:"kě",     tone:3, meaning:"thirsty",           pos:"adj",   example:"我渴了。",             exampleMeaning:"I'm thirsty." },
    { char:"对",   pinyin:"duì",    tone:4, meaning:"correct / right",   pos:"adj",   example:"你说得对。",           exampleMeaning:"You are correct." },
    { char:"错",   pinyin:"cuò",    tone:4, meaning:"wrong / mistake",   pos:"adj",   example:"这是我的错。",         exampleMeaning:"This is my mistake." },
  ],
  2: [
    { char:"出发", pinyin:"chūfā",   tone:1, meaning:"to set off / depart",pos:"verb",  example:"我们八点出发。",       exampleMeaning:"We depart at eight." },
    { char:"到达", pinyin:"dàodá",   tone:4, meaning:"to arrive",        pos:"verb",    example:"飞机已经到达了。",     exampleMeaning:"The plane has already arrived." },
    { char:"预订", pinyin:"yùdìng",  tone:4, meaning:"to reserve / book",pos:"verb",    example:"我预订了一个房间。",   exampleMeaning:"I reserved a room." },
    { char:"结账", pinyin:"jiézhàng",tone:2, meaning:"to pay the bill",  pos:"verb",    example:"我来结账。",           exampleMeaning:"I'll pay the bill." },
    { char:"换钱", pinyin:"huàn qián",tone:4,meaning:"to exchange money",pos:"phrase",  example:"我要换一些人民币。",   exampleMeaning:"I want to exchange some RMB." },
    { char:"堵车", pinyin:"dǔchē",   tone:3, meaning:"traffic jam",      pos:"noun",    example:"路上堵车很严重。",     exampleMeaning:"The traffic jam on the road is very bad." },
    { char:"打折", pinyin:"dǎzhé",   tone:3, meaning:"discount",         pos:"verb",    example:"今天打八折。",         exampleMeaning:"Today there is a 20% discount." },
    { char:"退款", pinyin:"tuìkuǎn", tone:4, meaning:"refund",           pos:"noun",    example:"我想申请退款。",       exampleMeaning:"I want to apply for a refund." },
    { char:"优惠", pinyin:"yōuhuì",  tone:1, meaning:"preferential / discount",pos:"noun",example:"有没有优惠？",      exampleMeaning:"Is there a discount?" },
    { char:"收据", pinyin:"shōujù",  tone:1, meaning:"receipt",          pos:"noun",    example:"请给我收据。",         exampleMeaning:"Please give me a receipt." },
    { char:"签证", pinyin:"qiānzhèng",tone:1,meaning:"visa",             pos:"noun",    example:"我需要申请签证。",     exampleMeaning:"I need to apply for a visa." },
    { char:"护照", pinyin:"hùzhào",  tone:4, meaning:"passport",         pos:"noun",    example:"我的护照在哪里？",     exampleMeaning:"Where is my passport?" },
    { char:"行李", pinyin:"xínglǐ",  tone:2, meaning:"luggage / baggage",pos:"noun",    example:"我的行李太重了。",     exampleMeaning:"My luggage is too heavy." },
    { char:"座位", pinyin:"zuòwèi",  tone:4, meaning:"seat",             pos:"noun",    example:"我的座位在哪里？",     exampleMeaning:"Where is my seat?" },
    { char:"窗户", pinyin:"chuānghu",tone:1, meaning:"window",           pos:"noun",    example:"请打开窗户。",         exampleMeaning:"Please open the window." },
  ],
  3: [
    { char:"职业", pinyin:"zhíyè",   tone:2, meaning:"profession / career",pos:"noun",  example:"你的职业是什么？",     exampleMeaning:"What is your profession?" },
    { char:"薪水", pinyin:"xīnshuǐ", tone:1, meaning:"salary / wages",   pos:"noun",    example:"他的薪水很高。",       exampleMeaning:"His salary is very high." },
    { char:"简历", pinyin:"jiǎnlì",  tone:3, meaning:"résumé / CV",      pos:"noun",    example:"请发给我你的简历。",   exampleMeaning:"Please send me your CV." },
    { char:"面试", pinyin:"miànshì", tone:4, meaning:"interview",        pos:"noun",    example:"我明天有面试。",       exampleMeaning:"I have an interview tomorrow." },
    { char:"培训", pinyin:"péixùn",  tone:2, meaning:"training",         pos:"noun",    example:"公司提供培训机会。",   exampleMeaning:"The company provides training opportunities." },
    { char:"晋升", pinyin:"jìnshēng",tone:4, meaning:"promotion (career)",pos:"noun",   example:"他最近晋升了。",       exampleMeaning:"He was recently promoted." },
    { char:"合同", pinyin:"hétong",  tone:2, meaning:"contract",         pos:"noun",    example:"请签一下合同。",       exampleMeaning:"Please sign the contract." },
    { char:"谈判", pinyin:"tánpàn",  tone:2, meaning:"negotiation",      pos:"noun",    example:"双方正在谈判。",       exampleMeaning:"Both parties are negotiating." },
    { char:"效率", pinyin:"xiàolǜ",  tone:4, meaning:"efficiency",       pos:"noun",    example:"提高工作效率。",       exampleMeaning:"Improve work efficiency." },
    { char:"截止", pinyin:"jiézhǐ",  tone:2, meaning:"deadline",         pos:"noun",    example:"截止日期是什么时候？", exampleMeaning:"What is the deadline?" },
    { char:"汇报", pinyin:"huìbào",  tone:4, meaning:"to report (to superiors)",pos:"verb",example:"我向老板汇报了情况。",exampleMeaning:"I reported the situation to the boss." },
    { char:"出差", pinyin:"chūchāi", tone:1, meaning:"business trip",    pos:"verb",    example:"他这周出差去上海。",   exampleMeaning:"He's on a business trip to Shanghai this week." },
  ],
  4: [
    { char:"宏观调控",pinyin:"hóngguān tiáokòng",tone:2,meaning:"macro-economic regulation",pos:"phrase",example:"政府实施宏观调控。",exampleMeaning:"The government implements macro-economic regulation." },
    { char:"可再生", pinyin:"kě zàishēng",tone:3,meaning:"renewable",    pos:"adj",     example:"可再生能源越来越重要。",exampleMeaning:"Renewable energy is increasingly important." },
    { char:"碳排放", pinyin:"tàn páifàng",tone:4,meaning:"carbon emissions",pos:"noun", example:"减少碳排放是目标。",   exampleMeaning:"Reducing carbon emissions is a goal." },
    { char:"人工智能",pinyin:"réngōng zhìnéng",tone:2,meaning:"artificial intelligence",pos:"noun",example:"人工智能改变了世界。",exampleMeaning:"AI has changed the world." },
    { char:"大数据", pinyin:"dà shùjù",tone:4,meaning:"big data",        pos:"noun",    example:"大数据分析很有价值。", exampleMeaning:"Big data analysis is very valuable." },
    { char:"云计算", pinyin:"yún jìsuàn",tone:2,meaning:"cloud computing",pos:"noun",   example:"云计算降低了成本。",   exampleMeaning:"Cloud computing reduced costs." },
    { char:"区块链", pinyin:"qūkuài liàn",tone:1,meaning:"blockchain",   pos:"noun",    example:"区块链技术应用广泛。", exampleMeaning:"Blockchain technology is widely applied." },
    { char:"数字化", pinyin:"shùzìhuà",tone:4,meaning:"digitization",    pos:"noun",    example:"企业加速数字化转型。", exampleMeaning:"Companies accelerate digital transformation." },
  ],
  5: [
    { char:"范式转移",pinyin:"fànshì zhuǎnyí",tone:4,meaning:"paradigm shift",pos:"noun",example:"这是一次范式转移。",  exampleMeaning:"This is a paradigm shift." },
    { char:"认知偏差",pinyin:"rènzhī piānchā",tone:4,meaning:"cognitive bias",pos:"noun",example:"我们都有认知偏差。",  exampleMeaning:"We all have cognitive biases." },
    { char:"辩证唯物主义",pinyin:"biànzhèng wéiwù zhǔyì",tone:4,meaning:"dialectical materialism",pos:"noun",example:"辩证唯物主义是哲学理论。",exampleMeaning:"Dialectical materialism is a philosophical theory." },
    { char:"元认知", pinyin:"yuán rènzhī",tone:2,meaning:"metacognition", pos:"noun",   example:"元认知能力有助于学习。",exampleMeaning:"Metacognitive ability aids learning." },
    { char:"批判性思维",pinyin:"pīpànxìng sīwéi",tone:1,meaning:"critical thinking",pos:"noun",example:"培养批判性思维很重要。",exampleMeaning:"Developing critical thinking is important." },
    { char:"跨文化交际",pinyin:"kuà wénhuà jiāojì",tone:4,meaning:"intercultural communication",pos:"noun",example:"跨文化交际越来越重要。",exampleMeaning:"Intercultural communication is increasingly important." },
  ],
};

// =============================================
//  GRAMMAR PATTERNS
// =============================================
const GRAMMAR_DATA = {
  1: [
    {
      title: "Subject + 是 + Object",
      pattern: "S + 是 + O",
      explanation: "Use 是 (shì) to link a subject to a noun. It works like 'am/is/are' in English.",
      examples: [
        { cn:"我是学生。",   py:"Wǒ shì xuéshēng.",   en:"I am a student." },
        { cn:"他是老师。",   py:"Tā shì lǎoshī.",     en:"He is a teacher." },
        { cn:"这是我的书。", py:"Zhè shì wǒ de shū.", en:"This is my book." },
      ],
      tip:"To negate, put 不 before 是：我不是老师 (I am not a teacher)."
    },
    {
      title: "Subject + 有 + Object",
      pattern: "S + 有 + O",
      explanation: "有 (yǒu) means 'to have'. It is negated by 没有 (méi yǒu), NOT 不有.",
      examples: [
        { cn:"我有一本书。",     py:"Wǒ yǒu yī běn shū.",   en:"I have a book." },
        { cn:"他没有钱。",       py:"Tā méiyǒu qián.",       en:"He doesn't have money." },
        { cn:"你有问题吗？",     py:"Nǐ yǒu wèntí ma?",     en:"Do you have questions?" },
      ],
      tip:"没有 is the only correct negation for 有. Never say 不有."
    },
    {
      title: "Question particle 吗",
      pattern: "Statement + 吗？",
      explanation: "Add 吗 (ma) at the end of any statement to turn it into a yes/no question.",
      examples: [
        { cn:"你是学生吗？",   py:"Nǐ shì xuéshēng ma?",   en:"Are you a student?" },
        { cn:"他有书吗？",     py:"Tā yǒu shū ma?",         en:"Does he have a book?" },
        { cn:"这好吃吗？",     py:"Zhè hǎo chī ma?",        en:"Is this delicious?" },
      ],
      tip:"答：是的 (yes) / 不是 (no) for 是 questions. 有 (yes) / 没有 (no) for 有 questions."
    },
    {
      title: "很 as a linking adjective",
      pattern: "S + 很 + Adj",
      explanation: "In Chinese, adjectives need a degree adverb like 很 (hěn, 'very') when used predicatively. In most sentences 很 doesn't mean 'very' — it's just a grammatical link.",
      examples: [
        { cn:"她很漂亮。",   py:"Tā hěn piàoliang.",   en:"She is pretty." },
        { cn:"天气很好。",   py:"Tiānqì hěn hǎo.",     en:"The weather is good." },
        { cn:"苹果很甜。",   py:"Píngguǒ hěn tián.",   en:"The apple is sweet." },
      ],
      tip:"To say 'very', stress 很: tā HĚN piàoliang. To contrast, omit 很: 她漂亮，他不漂亮."
    },
    {
      title: "的 — Possession & modification",
      pattern: "Possessor + 的 + Noun",
      explanation: "的 (de) shows possession or modifies a noun, like 's in English.",
      examples: [
        { cn:"我的书",     py:"wǒ de shū",   en:"my book" },
        { cn:"老师的学生", py:"lǎoshī de xuésheng", en:"the teacher's student" },
        { cn:"中国的文化", py:"Zhōngguó de wénhuà", en:"Chinese culture" },
      ],
      tip:"With pronouns + close relationships, 的 is often dropped: 我妈妈 (my mom), 他家 (his home)."
    },
  ],
  2: [
    {
      title: "因为…所以… (Because…Therefore…)",
      pattern: "因为 + reason, 所以 + result",
      explanation: "This pair links cause and effect. Unlike English, Chinese often uses BOTH connectives together.",
      examples: [
        { cn:"因为下雨，所以我没去。",   py:"Yīnwèi xià yǔ, suǒyǐ wǒ méi qù.",   en:"Because it rained, I didn't go." },
        { cn:"因为他聪明，所以考得好。", py:"Yīnwèi tā cōngmíng, suǒyǐ kǎo de hǎo.", en:"Because he's smart, he did well on the exam." },
      ],
      tip:"You can drop 因为 and keep only 所以, but the reverse sounds unnatural."
    },
    {
      title: "虽然…但是… (Although…But…)",
      pattern: "虽然 + concession, 但是 + contrast",
      explanation: "Expresses a concession followed by a contrasting result.",
      examples: [
        { cn:"虽然很累，但是他继续工作。", py:"Suīrán hěn lèi, dànshì tā jìxù gōngzuò.", en:"Although very tired, he continued working." },
        { cn:"虽然贵，但是很好用。",       py:"Suīrán guì, dànshì hěn hǎo yòng.",       en:"Although expensive, it's very useful." },
      ],
      tip:"Always use 但是 in the second clause — never 可是 with 虽然 in formal writing."
    },
    {
      title: "Verb + 过 (past experience)",
      pattern: "V + 过 + Object",
      explanation: "过 (guò) marks an experience that happened at some unspecified time in the past.",
      examples: [
        { cn:"我去过北京。",     py:"Wǒ qù guo Běijīng.",   en:"I have been to Beijing (before)." },
        { cn:"他没吃过榴莲。",   py:"Tā méi chī guò liúlián.", en:"He has never eaten durian." },
        { cn:"你看过这部电影吗？", py:"Nǐ kàn guò zhè bù diànyǐng ma?", en:"Have you seen this movie?" },
      ],
      tip:"过 is about experience; 了 is about completion. Compare: 我吃了 (I ate/I'm done eating) vs 我吃过 (I've eaten it before)."
    },
    {
      title: "把 — Disposal construction",
      pattern: "S + 把 + Object + V + Resultative",
      explanation: "把 (bǎ) moves the object before the verb to emphasize what was done to it. The verb must have a complement or result.",
      examples: [
        { cn:"我把书看完了。",     py:"Wǒ bǎ shū kàn wán le.",   en:"I finished reading the book." },
        { cn:"他把钱都花了。",     py:"Tā bǎ qián dōu huā le.",   en:"He spent all the money." },
        { cn:"请把门关上。",       py:"Qǐng bǎ mén guān shàng.", en:"Please close the door." },
      ],
      tip:"The verb after 把 must be a 'result' verb — you can't say 把书看 alone."
    },
    {
      title: "被 — Passive voice",
      pattern: "S + 被 + Agent + V + Complement",
      explanation: "被 (bèi) marks passive voice when the subject receives the action. Often implies an undesirable outcome.",
      examples: [
        { cn:"我的钱包被偷了。",     py:"Wǒ de qiánbāo bèi tōu le.",   en:"My wallet was stolen." },
        { cn:"他被老师批评了。",     py:"Tā bèi lǎoshī pīpíng le.",   en:"He was criticized by the teacher." },
        { cn:"这本书被很多人读过。", py:"Zhè běn shū bèi hěn duō rén dú guò.", en:"This book has been read by many people." },
      ],
      tip:"被 sentences often carry a negative connotation. For neutral/positive passives, use 让 or 叫."
    },
  ],
  3: [
    {
      title: "越来越… (more and more…)",
      pattern: "越来越 + Adj/V",
      explanation: "Expresses a gradual increase or change over time.",
      examples: [
        { cn:"天气越来越冷。",     py:"Tiānqì yuè lái yuè lěng.",     en:"The weather is getting colder and colder." },
        { cn:"他的汉语越来越好。", py:"Tā de Hànyǔ yuè lái yuè hǎo.", en:"His Chinese is getting better and better." },
        { cn:"生活越来越复杂。",   py:"Shēnghuó yuè lái yuè fùzá.",   en:"Life is becoming more and more complicated." },
      ],
      tip:"The subject must be capable of gradual change. Don't use for permanent states."
    },
    {
      title: "越…越… (The more…the more…)",
      pattern: "越 + Adj/V, 越 + Adj/V",
      explanation: "Links two proportional changes — as X increases, Y increases.",
      examples: [
        { cn:"越学越有意思。",       py:"Yuè xué yuè yǒu yìsi.",       en:"The more you study, the more interesting it becomes." },
        { cn:"越吃越胖。",           py:"Yuè chī yuè pàng.",           en:"The more you eat, the fatter you get." },
        { cn:"越忙越要休息。",       py:"Yuè máng yuè yào xiūxi.",     en:"The busier you are, the more you need to rest." },
      ],
      tip:"Both clauses can share the same or different subjects."
    },
    {
      title: "对…来说 (For… / From…'s perspective)",
      pattern: "对 + Person + 来说",
      explanation: "Introduces a perspective or point of view.",
      examples: [
        { cn:"对我来说，汉语很难。",   py:"Duì wǒ lái shuō, Hànyǔ hěn nán.", en:"For me, Chinese is very difficult." },
        { cn:"对学生来说这很重要。",   py:"Duì xuésheng lái shuō zhè hěn zhòngyào.", en:"For students, this is very important." },
      ],
      tip:"Use 对…来说 for personal perspectives; use 从…角度 for more analytical viewpoints."
    },
    {
      title: "不管…都… (No matter…, always…)",
      pattern: "不管 + condition, 都/也 + result",
      explanation: "Expresses that the result remains the same regardless of circumstances.",
      examples: [
        { cn:"不管多忙，他都坚持锻炼。", py:"Bùguǎn duō máng, tā dōu jiānchí duànliàn.", en:"No matter how busy, he always keeps exercising." },
        { cn:"不管下不下雨，我都要去。", py:"Bùguǎn xià bu xià yǔ, wǒ dōu yào qù.", en:"No matter if it rains or not, I'm going." },
      ],
      tip:"不管 and 无论 are interchangeable in most contexts."
    },
  ],
  4: [
    {
      title: "就算…也… (Even if…still…)",
      pattern: "就算 + condition, 也 + result",
      explanation: "A stronger form of 'even if' — the result holds even under extreme circumstances.",
      examples: [
        { cn:"就算很难，我也要坚持。",   py:"Jiùsuàn hěn nán, wǒ yě yào jiānchí.", en:"Even if it's very difficult, I'll persist." },
        { cn:"就算下雪，我们也要出发。", py:"Jiùsuàn xià xuě, wǒmen yě yào chūfā.", en:"Even if it snows, we will set out." },
      ],
      tip:"More hypothetical than 即使. Use 就算 for more emphatic/emotional contexts."
    },
    {
      title: "与其…不如… (Rather than…it's better to…)",
      pattern: "与其 + less preferred option, 不如 + better option",
      explanation: "Compares two options and recommends the second.",
      examples: [
        { cn:"与其等待，不如主动出击。", py:"Yǔqí děngdài, bùrú zhǔdòng chūjī.", en:"Rather than waiting, it's better to take the initiative." },
        { cn:"与其抱怨，不如改变。",     py:"Yǔqí bàoyuàn, bùrú gǎibiàn.",     en:"Rather than complaining, it's better to change." },
      ],
      tip:"The subject usually appears after 与其, not before it."
    },
    {
      title: "何况 (let alone / not to mention)",
      pattern: "…何况…",
      explanation: "Introduces an even more extreme case to reinforce the main argument.",
      examples: [
        { cn:"这对专家来说都难，何况我们？", py:"Zhè duì zhuānjiā lái shuō dōu nán, hékuàng wǒmen?", en:"Even experts find this difficult, let alone us." },
        { cn:"他连走路都费力，何况跑步。", py:"Tā lián zǒulù dōu fèilì, hékuàng pǎobù.", en:"He even struggles to walk, let alone run." },
      ],
      tip:"何况 always raises the stakes — the second example must be harder than the first."
    },
    {
      title: "尽管…还是… (Despite…still…)",
      pattern: "尽管 + obstacle, 还是 + persisting result",
      explanation: "Emphasizes persisting despite obstacles — stronger than 虽然…但是.",
      examples: [
        { cn:"尽管疲惫，他还是坚持到了终点。", py:"Jǐnguǎn píbèi, tā háishi jiānchí dào le zhōngdiǎn.", en:"Despite exhaustion, he still persisted to the finish." },
        { cn:"尽管障碍重重，我们还是完成了任务。", py:"Jǐnguǎn zhàng'ài chóngchóng, wǒmen háishi wánchéng le rénwù.", en:"Despite many obstacles, we still completed the task." },
      ],
      tip:"尽管 is more formal than 虽然. Preferred in written Chinese."
    },
  ],
  5: [
    {
      title: "Fixed expression: 非…不可 (Must / Have to)",
      pattern: "非 + V/Adj + 不可",
      explanation: "A double negative creating strong necessity — 'must absolutely do something'.",
      examples: [
        { cn:"这件事非解决不可。",   py:"Zhè jiàn shì fēi jiějué bùkě.",   en:"This matter absolutely must be resolved." },
        { cn:"他非去不可。",         py:"Tā fēi qù bùkě.",                 en:"He absolutely has to go." },
        { cn:"这道题非常难，非常人聪明非解不可。", py:"Zhè dào tí fēicháng nán, fēi cháng rén cōngmíng fēi jiě bùkě.", en:"This problem is extremely hard — only exceptionally intelligent people can solve it." },
      ],
      tip:"This is a formal/literary pattern. Very emphatic."
    },
    {
      title: "既然…就… (Since…then…)",
      pattern: "既然 + established fact, 就 + conclusion",
      explanation: "Draws a logical conclusion from an already accepted fact.",
      examples: [
        { cn:"既然你来了，就坐下吧。",       py:"Jìrán nǐ lái le, jiù zuò xià ba.",   en:"Since you're here, sit down." },
        { cn:"既然决定了，就不要后悔。",     py:"Jìrán juédìng le, jiù bùyào hòuhuǐ.", en:"Since it's decided, don't regret it." },
        { cn:"既然如此，我们就换个方案。",   py:"Jìrán rúcǐ, wǒmen jiù huàn gè fāng'àn.", en:"Since that's the case, let's change the plan." },
      ],
      tip:"既然always refers to a fact the speaker ACCEPTS as true — unlike 如果 (hypothetical)."
    },
    {
      title: "Inversion for emphasis: 连…都/也… (Even…)",
      pattern: "连 + extreme element + 都/也 + V",
      explanation: "Highlights the most extreme item to emphasize a point.",
      examples: [
        { cn:"连小孩都知道。",         py:"Lián xiǎohái dōu zhīdào.",       en:"Even children know this." },
        { cn:"他连饭都没吃就走了。",   py:"Tā lián fàn dōu méi chī jiù zǒu le.", en:"He left without even eating." },
        { cn:"连专家也难以解释。",     py:"Lián zhuānjiā yě nányǐ jiěshì.", en:"Even experts find it hard to explain." },
      ],
      tip:"连 emphasizes the MOST unexpected element. The more unexpected, the stronger the effect."
    },
  ],
};

// =============================================
//  READING PASSAGES
// =============================================
const READING_DATA = {
  1: [
    {
      title: "Making a New Friend",
      level: "HSK 1",
      text: "我叫王明。我是学生。我有一个朋友，他叫李华。李华是老师。他有一只猫，猫叫小白。小白很可爱。我喜欢小白。",
      pinyin: "Wǒ jiào Wáng Míng. Wǒ shì xuéshēng. Wǒ yǒu yī gè péngyou, tā jiào Lǐ Huá. Lǐ Huá shì lǎoshī. Tā yǒu yī zhī māo, māo jiào Xiǎo Bái. Xiǎo Bái hěn kě'ài. Wǒ xǐhuān Xiǎo Bái.",
      translation: "My name is Wang Ming. I am a student. I have a friend named Li Hua. Li Hua is a teacher. He has a cat named Xiao Bai. Xiao Bai is very cute. I like Xiao Bai.",
      questions: [
        { q:"王明是什么人？", a:"学生", qEn:"What is Wang Ming?", aEn:"A student" },
        { q:"李华有什么？",   a:"一只猫", qEn:"What does Li Hua have?", aEn:"A cat" },
        { q:"猫叫什么？",     a:"小白", qEn:"What is the cat called?", aEn:"Xiao Bai" },
      ]
    },
    {
      title: "My Family",
      level: "HSK 1",
      text: "我家有四个人：爸爸、妈妈、哥哥和我。爸爸是医生。妈妈是老师。哥哥是大学生。我是中学生。我们家很幸福。",
      pinyin: "Wǒ jiā yǒu sì gè rén: bàba, māma, gēge hé wǒ. Bàba shì yīshēng. Māma shì lǎoshī. Gēge shì dàxuéshēng. Wǒ shì zhōngxuéshēng. Wǒmen jiā hěn xìngfú.",
      translation: "My family has four people: dad, mom, older brother, and me. Dad is a doctor. Mom is a teacher. My brother is a college student. I am a middle school student. Our family is very happy.",
      questions: [
        { q:"爸爸是什么职业？", a:"医生", qEn:"What is dad's job?", aEn:"A doctor" },
        { q:"家里有几个人？",   a:"四个", qEn:"How many people in the family?", aEn:"Four" },
      ]
    },
  ],
  2: [
    {
      title: "A Day in Beijing",
      level: "HSK 2",
      text: "今天是星期六。我和朋友去了天安门广场。天安门很大，很漂亮。我们拍了很多照片。然后我们去了一家餐厅吃北京烤鸭。北京烤鸭很好吃，但是有点贵。吃完饭，我们坐地铁回家了。今天很开心！",
      pinyin: "Jīntiān shì xīngqīliù. Wǒ hé péngyou qù le Tiān'ānmén guǎngchǎng. Tiān'ānmén hěn dà, hěn piàoliang. Wǒmen pāi le hěn duō zhàopiàn. Ránhòu wǒmen qù le yī jiā cāntīng chī Běijīng kǎoyā. Běijīng kǎoyā hěn hào chī, dànshì yǒudiǎn guì. Chī wán fàn, wǒmen zuò dìtiě huíjiā le. Jīntiān hěn kāixīn!",
      translation: "Today is Saturday. I went to Tiananmen Square with my friend. Tiananmen is very big and beautiful. We took many photos. Then we went to a restaurant to eat Peking Duck. Peking Duck is delicious, but a bit expensive. After eating, we took the subway home. Today was very happy!",
      questions: [
        { q:"他们去了哪里？",     a:"天安门广场", qEn:"Where did they go?", aEn:"Tiananmen Square" },
        { q:"北京烤鸭怎么样？",   a:"很好吃，但是有点贵", qEn:"How was Peking Duck?", aEn:"Delicious but a bit expensive" },
        { q:"他们怎么回家的？",   a:"坐地铁", qEn:"How did they go home?", aEn:"By subway" },
      ]
    },
  ],
  3: [
    {
      title: "The Pressure of Modern Life",
      level: "HSK 3",
      text: "现代生活节奏越来越快，很多人感到压力很大。特别是年轻人，他们需要面对工作、学习和家庭的多重压力。但是，压力不一定是坏事。适当的压力可以激励人们努力工作，取得更好的成绩。关键是要学会如何管理压力。比如，可以通过运动、听音乐或者和朋友聊天来减轻压力。保持积极的心态也很重要。",
      pinyin: "Xiàndài shēnghuó jiézòu yuè lái yuè kuài, hěn duō rén gǎndào yālì hěn dà. Tèbié shì niánqīng rén, tāmen xūyào miànduì gōngzuò, xuéxí hé jiātíng de duōchóng yālì. Dànshì, yālì bù yīdìng shì huài shì. Shìdàng de yālì kěyǐ jīlì rénmen nǔlì gōngzuò, qǔdé gèng hǎo de chéngjì. Guānjiàn shì yào xuéhuì rúhé guǎnlǐ yālì. Bǐrú, kěyǐ tōngguò yùndòng, tīng yīnyuè huòzhě hé péngyou liáotiān lái jiǎnqīng yālì. Bǎochí jījí de xīntài yě hěn zhòngyào.",
      translation: "The pace of modern life is getting faster and faster, and many people feel great pressure. Especially young people who face multiple pressures from work, study, and family. However, pressure is not necessarily a bad thing. Appropriate pressure can motivate people to work hard and achieve better results. The key is learning how to manage pressure. For example, you can relieve pressure through exercise, listening to music, or chatting with friends. Maintaining a positive mindset is also very important.",
      questions: [
        { q:"文章说压力是好事还是坏事？",   a:"不一定是坏事", qEn:"Does the article say pressure is good or bad?", aEn:"Not necessarily bad" },
        { q:"可以怎么减轻压力？（举一例）", a:"运动/听音乐/和朋友聊天", qEn:"How can you relieve pressure? (one example)", aEn:"Exercise / listen to music / chat with friends" },
      ]
    },
  ],
  4: [
    {
      title: "Artificial Intelligence and Society",
      level: "HSK 4",
      text: "人工智能（AI）正在深刻改变我们的社会。在医疗领域，AI可以帮助医生更准确地诊断疾病；在教育方面，个性化学习系统可以根据每个学生的特点提供定制化教学；在交通领域，自动驾驶技术有望大幅减少交通事故。然而，AI的快速发展也带来了一些挑战。许多传统工作岗位面临被自动化取代的风险，这可能加剧社会不平等。此外，如何确保AI系统的公平性、透明度和安全性，也是亟待解决的问题。面对这些挑战，政府、企业和个人需要共同努力，建立合理的监管框架，确保AI技术造福全人类。",
      pinyin: "Rén gōng zhìnéng (AI) zhèngzài shēnkè gǎibiàn wǒmen de shèhuì. Zài yīliáo lǐngyù, AI kěyǐ bāngzhù yīshēng gèng zhǔnquè de zhěnduàn jíbìng...",
      translation: "Artificial intelligence (AI) is profoundly changing our society. In the medical field, AI can help doctors diagnose diseases more accurately; in education, personalized learning systems can provide customized teaching based on each student's characteristics; in transportation, autonomous driving technology is expected to significantly reduce traffic accidents. However, the rapid development of AI also brings challenges. Many traditional jobs face the risk of being replaced by automation, which may exacerbate social inequality. Furthermore, how to ensure the fairness, transparency, and security of AI systems are urgent issues to be resolved. Facing these challenges, governments, enterprises, and individuals need to work together to establish reasonable regulatory frameworks to ensure AI technology benefits all of humanity.",
      questions: [
        { q:"AI在医疗领域有什么应用？",           a:"帮助医生更准确地诊断疾病", qEn:"What is AI's application in medicine?", aEn:"Help doctors diagnose diseases more accurately" },
        { q:"AI发展带来的挑战是什么？（举一例）", a:"传统工作岗位面临被取代的风险", qEn:"What challenge does AI bring? (one example)", aEn:"Traditional jobs face risk of being replaced" },
      ]
    },
  ],
  5: [
    {
      title: "The Paradox of Modern Communication",
      level: "HSK 5",
      text: "在信息爆炸的时代，人与人之间的沟通似乎变得更加便捷，然而真正意义上的深度交流却愈发稀缺。社交媒体让我们与数百人保持联系，但这种联系往往流于表面，缺乏真正的情感共鸣。心理学研究表明，尽管现代人拥有比历史上任何时期都更多的社交工具，孤独感却在与日俱增。这一悖论的根源在于：数字化沟通剥夺了面对面交流中那些微妙的非语言信号——眼神、表情、肢体语言——这些是构建真实情感连接的基础。因此，在享受技术便利的同时，我们或许更需要重新审视沟通的本质，有意识地为深度对话留出空间。",
      pinyin: "Zài xìnxī bàozhà de shídài, rén yǔ rén zhī jiān de gōutōng sìhū biàn de gèngjiā biànjié, rán'ér zhēnzhèng yìyì shàng de shēndù jiāoliú què yùfā xīquē...",
      translation: "In the age of information explosion, communication between people seems to have become more convenient, yet truly meaningful deep exchange is increasingly scarce. Social media lets us stay connected with hundreds of people, but this connection often remains superficial, lacking genuine emotional resonance. Psychological research indicates that although modern people possess more social tools than any period in history, feelings of loneliness are increasing day by day. The root of this paradox lies in the fact that digital communication strips away those subtle nonverbal signals in face-to-face interaction — eye contact, facial expressions, body language — which are the foundation of building real emotional connections. Therefore, while enjoying technological convenience, we may need to re-examine the essence of communication and consciously make space for deep dialogue.",
      questions: [
        { q:"文章的主要观点是什么？",               a:"虽然沟通工具增多，但深度交流减少，孤独感增加", qEn:"What is the article's main point?", aEn:"Despite more communication tools, deep exchange declines and loneliness grows" },
        { q:"数字化沟通剥夺了什么？",               a:"非语言信号（眼神、表情、肢体语言）", qEn:"What does digital communication strip away?", aEn:"Non-verbal signals (eye contact, expressions, body language)" },
      ]
    },
  ],
};

// =============================================
//  CHENGYU — CHINESE IDIOMS (4 characters)
// =============================================
const CHENGYU_DATA = [
  {
    chars:"一石二鸟", pinyin:"yī shí èr niǎo", tone:1,
    literal:"One stone, two birds",
    meaning:"Kill two birds with one stone — achieve two goals with one action",
    origin:"Based on the English idiom, widely adopted in modern Chinese.",
    example:"这个方案一石二鸟，既省钱又省时间。",
    exampleMeaning:"This plan kills two birds with one stone — saving both money and time.",
    level:"HSK 4"
  },
  {
    chars:"半途而废", pinyin:"bàn tú ér fèi", tone:4,
    literal:"Halfway, give up",
    meaning:"To give up halfway; to leave something unfinished",
    origin:"From ancient texts about perseverance. A warning against quitting.",
    example:"学习语言不能半途而废。",
    exampleMeaning:"You cannot give up halfway when learning a language.",
    level:"HSK 4"
  },
  {
    chars:"马到成功", pinyin:"mǎ dào chéng gōng", tone:3,
    literal:"Horse arrives, success follows",
    meaning:"Immediate success upon arrival; wishing someone swift success",
    origin:"From military history — a general's horse arriving meant victory was near.",
    example:"祝你马到成功！",
    exampleMeaning:"Wishing you immediate success!",
    level:"HSK 3"
  },
  {
    chars:"亡羊补牢", pinyin:"wáng yáng bǔ láo", tone:2,
    literal:"Sheep gone, mend the pen",
    meaning:"Better late than never; fix a problem after it occurs",
    origin:"From 《战国策》— a shepherd who fixed his pen after losing sheep.",
    example:"虽然迟了，但亡羊补牢，为时未晚。",
    exampleMeaning:"Though late, it's still not too late to fix the problem.",
    level:"HSK 4"
  },
  {
    chars:"守株待兔", pinyin:"shǒu zhū dài tù", tone:3,
    literal:"Guard a stump, wait for rabbits",
    meaning:"Wait passively for good luck; rely on chance instead of effort",
    origin:"A farmer saw a rabbit run into a tree stump and die — he then waited forever for another.",
    example:"不能守株待兔，要主动寻找机会。",
    exampleMeaning:"You can't just wait for luck — actively seek opportunities.",
    level:"HSK 4"
  },
  {
    chars:"画蛇添足", pinyin:"huà shé tiān zú", tone:4,
    literal:"Draw a snake, add feet",
    meaning:"Ruin something by overdoing it; add unnecessary things",
    origin:"From a wine-drinking contest — the winner drew a snake, then unnecessarily added feet and lost.",
    example:"这篇文章已经很好了，别画蛇添足。",
    exampleMeaning:"This article is already great — don't ruin it by overdoing it.",
    level:"HSK 4"
  },
  {
    chars:"对牛弹琴", pinyin:"duì niú tán qín", tone:4,
    literal:"Play the lute to a cow",
    meaning:"Waste effort on someone who doesn't understand; pearls before swine",
    origin:"Attributed to scholar Mou Rong in ancient times.",
    example:"跟他解释这么多，简直是对牛弹琴。",
    exampleMeaning:"Explaining so much to him is like playing music to a cow.",
    level:"HSK 4"
  },
  {
    chars:"一帆风顺", pinyin:"yī fān fēng shùn", tone:1,
    literal:"Sails full, wind favorable",
    meaning:"Smooth sailing; everything going well",
    origin:"Classical nautical metaphor for a prosperous journey.",
    example:"祝你一帆风顺，前程似锦。",
    exampleMeaning:"Wishing you smooth sailing and a bright future.",
    level:"HSK 3"
  },
  {
    chars:"三人行必有我师", pinyin:"sān rén xíng bì yǒu wǒ shī", tone:1,
    literal:"Three travelers, surely one is my teacher",
    meaning:"You can always learn from others around you",
    origin:"Confucius, 《论语》— humility and the pursuit of knowledge.",
    example:"三人行必有我师，我们要谦虚好学。",
    exampleMeaning:"Among any three people, there is always someone to learn from — we must be humble.",
    level:"HSK 5"
  },
  {
    chars:"欲速则不达", pinyin:"yù sù zé bù dá", tone:4,
    literal:"Desire speed, won't arrive",
    meaning:"Haste makes waste; rushing leads to failure",
    origin:"Confucius, 《论语》.",
    example:"学习要循序渐进，欲速则不达。",
    exampleMeaning:"Learning must be step by step — haste makes waste.",
    level:"HSK 5"
  },
  {
    chars:"塞翁失马", pinyin:"sài wēng shī mǎ", tone:4,
    literal:"Old man at the border loses a horse",
    meaning:"A seeming misfortune may turn out to be a blessing (全句：塞翁失马，焉知非福)",
    origin:"From 《淮南子》— an old man loses his horse, which returns with wild horses; his son breaks his leg but escapes war.",
    example:"塞翁失马，焉知非福，也许这是好事。",
    exampleMeaning:"What seems a loss may be a gain — perhaps this is a good thing.",
    level:"HSK 5"
  },
  {
    chars:"自相矛盾", pinyin:"zì xiāng máo dùn", tone:4,
    literal:"Self-contradictory spear and shield",
    meaning:"Contradicting oneself; a logical inconsistency",
    origin:"A merchant claimed his spear could pierce any shield and his shield could stop any spear.",
    example:"你说的话自相矛盾。",
    exampleMeaning:"What you said is self-contradictory.",
    level:"HSK 5"
  },
  {
    chars:"功夫不负有心人", pinyin:"gōngfu bù fù yǒuxīn rén", tone:1,
    literal:"Hard work won't let down a determined person",
    meaning:"Perseverance will be rewarded; hard work pays off",
    origin:"Popular Chinese proverb emphasizing persistence.",
    example:"功夫不负有心人，坚持学习一定会成功。",
    exampleMeaning:"Hard work pays off — persist in studying and you will succeed.",
    level:"HSK 4"
  },
  {
    chars:"一鸣惊人", pinyin:"yī míng jīng rén", tone:1,
    literal:"One cry startles everyone",
    meaning:"To astonish everyone with a sudden great achievement after a long silence",
    origin:"King of Chu in 《史记》— silent for 3 years then surprised everyone with brilliance.",
    example:"他默默努力了一年，终于一鸣惊人。",
    exampleMeaning:"After quietly working hard for a year, he finally astonished everyone.",
    level:"HSK 5"
  },
  {
    chars:"井底之蛙", pinyin:"jǐng dǐ zhī wā", tone:3,
    literal:"Frog at the bottom of a well",
    meaning:"A person with a very limited worldview; narrow-minded",
    origin:"《庄子》— a frog in a well cannot conceive of the vast ocean.",
    example:"出门旅行，别做井底之蛙。",
    exampleMeaning:"Go travel and broaden your world — don't be a frog in a well.",
    level:"HSK 5"
  },
];

