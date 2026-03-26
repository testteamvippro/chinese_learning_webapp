// =============================================
//  HSK 7–9 DATA — Advanced Level Content
//  Vocabulary, Grammar Patterns, Reading Passages,
//  and additional Chengyu for advanced learners.
//
//  Must be loaded AFTER data.js and data_extended.js.
// =============================================

// ---- HSK 7 Vocabulary ----
const HSK7_DATA = [
  { char:"范畴", pinyin:"fànchóu", tone:4, meaning:"category / domain", pos:"noun", example:"这属于哲学的范畴。", exampleMeaning:"This falls within the domain of philosophy." },
  { char:"衍生", pinyin:"yǎnshēng", tone:3, meaning:"to derive / derivative", pos:"verb", example:"由此衍生出许多新概念。", exampleMeaning:"Many new concepts were derived from this." },
  { char:"悖论", pinyin:"bèilùn", tone:4, meaning:"paradox", pos:"noun", example:"这个悖论困扰了哲学家数百年。", exampleMeaning:"This paradox has troubled philosophers for centuries." },
  { char:"辩驳", pinyin:"biànbó", tone:4, meaning:"to refute / to rebut", pos:"verb", example:"他有力地辩驳了对方的观点。", exampleMeaning:"He forcefully refuted the other side's viewpoint." },
  { char:"洞察", pinyin:"dòngchá", tone:4, meaning:"insight / to see clearly", pos:"verb", example:"他对市场有深刻的洞察。", exampleMeaning:"He has deep insight into the market." },
  { char:"嬗变", pinyin:"shànbiàn", tone:4, meaning:"to evolve / gradual change", pos:"verb", example:"社会在不断嬗变。", exampleMeaning:"Society is constantly evolving." },
  { char:"肆意", pinyin:"sìyì", tone:4, meaning:"recklessly / wantonly", pos:"adv", example:"不能肆意破坏环境。", exampleMeaning:"One cannot recklessly destroy the environment." },
  { char:"殆尽", pinyin:"dàijìn", tone:4, meaning:"nearly exhausted / almost gone", pos:"verb", example:"资源消耗殆尽。", exampleMeaning:"Resources are nearly exhausted." },
  { char:"斟酌", pinyin:"zhēnzhuó", tone:1, meaning:"to deliberate / to consider carefully", pos:"verb", example:"用词需要仔细斟酌。", exampleMeaning:"Word choice needs careful deliberation." },
  { char:"濒临", pinyin:"bīnlín", tone:1, meaning:"to be on the verge of", pos:"verb", example:"这种动物濒临灭绝。", exampleMeaning:"This animal is on the verge of extinction." },
  { char:"笃行", pinyin:"dǔxíng", tone:3, meaning:"to practice earnestly", pos:"verb", example:"学以致用，笃行不怠。", exampleMeaning:"Apply what you learn and practice earnestly without slacking." },
  { char:"箴言", pinyin:"zhēnyán", tone:1, meaning:"proverb / admonition", pos:"noun", example:"这是古代圣贤的箴言。", exampleMeaning:"These are proverbs from ancient sages." },
  { char:"曙光", pinyin:"shǔguāng", tone:3, meaning:"dawn / first light (fig. hope)", pos:"noun", example:"终于看到了曙光。", exampleMeaning:"Finally, we see the first light of hope." },
  { char:"旷日持久", pinyin:"kuàng rì chí jiǔ", tone:4, meaning:"to drag on for a long time", pos:"adj", example:"这是一场旷日持久的谈判。", exampleMeaning:"This is a protracted negotiation." },
  { char:"遐想", pinyin:"xiáxiǎng", tone:2, meaning:"reverie / daydream", pos:"noun", example:"这片风景令人遐想。", exampleMeaning:"This scenery invites reverie." },
  { char:"幡然醒悟", pinyin:"fān rán xǐng wù", tone:1, meaning:"to suddenly see the light", pos:"verb", example:"他终于幡然醒悟。", exampleMeaning:"He finally had a sudden awakening." },
  { char:"纷繁", pinyin:"fēnfán", tone:1, meaning:"diverse and complex", pos:"adj", example:"纷繁复杂的世界。", exampleMeaning:"A diverse and complex world." },
  { char:"诘问", pinyin:"jiéwèn", tone:2, meaning:"to question closely / to interrogate", pos:"verb", example:"他诘问了事件的真相。", exampleMeaning:"He closely questioned the truth of the matter." },
  { char:"恣意", pinyin:"zìyì", tone:4, meaning:"unrestrained / unbridled", pos:"adv", example:"青春就是恣意挥洒。", exampleMeaning:"Youth is about living uninhibitedly." },
  { char:"逡巡", pinyin:"qūnxún", tone:1, meaning:"to pace back and forth / to hesitate", pos:"verb", example:"他在门口逡巡不前。", exampleMeaning:"He paced back and forth at the door." },
  { char:"翰墨", pinyin:"hànmò", tone:4, meaning:"brush and ink / literary arts", pos:"noun", example:"他精通翰墨之道。", exampleMeaning:"He is skilled in the literary arts." },
  { char:"鸿儒", pinyin:"hóngrú", tone:2, meaning:"great scholar / learned person", pos:"noun", example:"他是当代鸿儒。", exampleMeaning:"He is a great scholar of our time." },
  { char:"叱咤风云", pinyin:"chì zhà fēng yún", tone:4, meaning:"to command the wind and clouds (influential)", pos:"verb", example:"他曾叱咤风云。", exampleMeaning:"He once commanded great influence." },
  { char:"鞭辟入里", pinyin:"biān pì rù lǐ", tone:1, meaning:"penetrating / incisive", pos:"adj", example:"他的分析鞭辟入里。", exampleMeaning:"His analysis is penetrating and incisive." },
  { char:"披荆斩棘", pinyin:"pī jīng zhǎn jí", tone:1, meaning:"to forge ahead despite difficulties", pos:"verb", example:"他披荆斩棘，终于成功。", exampleMeaning:"He forged ahead through all difficulties and finally succeeded." },
  { char:"韬光养晦", pinyin:"tāo guāng yǎng huì", tone:1, meaning:"to hide one's strengths and bide one's time", pos:"verb", example:"他选择韬光养晦。", exampleMeaning:"He chose to hide his strengths and bide his time." },
  { char:"蹉跎", pinyin:"cuōtuó", tone:1, meaning:"to waste (time) / to fritter away", pos:"verb", example:"不要蹉跎岁月。", exampleMeaning:"Don't waste your years." },
  { char:"淬炼", pinyin:"cuìliàn", tone:4, meaning:"to temper / to refine through hardship", pos:"verb", example:"品格需要淬炼。", exampleMeaning:"Character needs to be refined through hardship." },
  { char:"桀骜不驯", pinyin:"jié ào bù xùn", tone:2, meaning:"untamable / rebellious", pos:"adj", example:"他性格桀骜不驯。", exampleMeaning:"He has an untamable personality." },
  { char:"抉择", pinyin:"juézé", tone:2, meaning:"to choose / critical decision", pos:"verb", example:"人生面临很多抉择。", exampleMeaning:"Life presents many critical decisions." },
];

// ---- HSK 8 Vocabulary ----
const HSK8_DATA = [
  { char:"兼容并蓄", pinyin:"jiān róng bìng xù", tone:1, meaning:"to be tolerant and inclusive", pos:"verb", example:"中华文化兼容并蓄。", exampleMeaning:"Chinese culture is tolerant and inclusive." },
  { char:"醍醐灌顶", pinyin:"tí hú guàn dǐng", tone:2, meaning:"to have a sudden enlightenment", pos:"verb", example:"他的话令我醍醐灌顶。", exampleMeaning:"His words gave me a sudden enlightenment." },
  { char:"纵横捭阖", pinyin:"zòng héng bǎi hé", tone:4, meaning:"strategic maneuvering / political skill", pos:"verb", example:"他在国际舞台上纵横捭阖。", exampleMeaning:"He maneuvers skillfully on the international stage." },
  { char:"集腋成裘", pinyin:"jí yè chéng qiú", tone:2, meaning:"many a little makes a mickle", pos:"verb", example:"集腋成裘，积少成多。", exampleMeaning:"Many small contributions make a large sum." },
  { char:"厝火积薪", pinyin:"cuò huǒ jī xīn", tone:4, meaning:"to sit on a powder keg (hidden danger)", pos:"verb", example:"如此做法犹如厝火积薪。", exampleMeaning:"Such an approach is like sitting on a powder keg." },
  { char:"蕞尔", pinyin:"zuìěr", tone:4, meaning:"tiny / minuscule (of territory)", pos:"adj", example:"蕞尔小国也有大智慧。", exampleMeaning:"Even a tiny nation can have great wisdom." },
  { char:"诲人不倦", pinyin:"huì rén bù juàn", tone:4, meaning:"to teach tirelessly", pos:"verb", example:"孔子诲人不倦。", exampleMeaning:"Confucius taught others tirelessly." },
  { char:"微言大义", pinyin:"wēi yán dà yì", tone:1, meaning:"profound meaning in brief words", pos:"noun", example:"《春秋》微言大义。", exampleMeaning:"The Spring and Autumn Annals contain profound meaning in brief words." },
  { char:"管窥蠡测", pinyin:"guǎn kuī lí cè", tone:3, meaning:"to take a narrow view / limited perspective", pos:"verb", example:"我的看法不过是管窥蠡测。", exampleMeaning:"My view is merely a limited perspective." },
  { char:"声名鹊起", pinyin:"shēng míng què qǐ", tone:1, meaning:"to rise to fame rapidly", pos:"verb", example:"他因此声名鹊起。", exampleMeaning:"He rose to fame rapidly because of this." },
  { char:"高屋建瓴", pinyin:"gāo wū jiàn líng", tone:1, meaning:"to have a commanding view / strategic vision", pos:"adj", example:"他的规划高屋建瓴。", exampleMeaning:"His planning shows strategic vision." },
  { char:"振聋发聩", pinyin:"zhèn lóng fā kuì", tone:4, meaning:"to awaken the deaf (startling revelation)", pos:"verb", example:"他的演讲振聋发聩。", exampleMeaning:"His speech was a startling revelation." },
  { char:"殊途同归", pinyin:"shū tú tóng guī", tone:1, meaning:"different routes lead to the same destination", pos:"verb", example:"各种方法殊途同归。", exampleMeaning:"Various methods lead to the same destination." },
  { char:"巍峨", pinyin:"wēi'é", tone:1, meaning:"towering / majestic (of mountains/buildings)", pos:"adj", example:"巍峨的群山。", exampleMeaning:"Towering mountains." },
  { char:"浩渺", pinyin:"hàomiǎo", tone:4, meaning:"vast and misty (of water)", pos:"adj", example:"浩渺的大海。", exampleMeaning:"The vast and misty ocean." },
  { char:"逶迤", pinyin:"wēiyí", tone:1, meaning:"winding / meandering", pos:"adj", example:"道路逶迤曲折。", exampleMeaning:"The road winds and meanders." },
  { char:"雕琢", pinyin:"diāozhuó", tone:1, meaning:"to carve and polish / to refine", pos:"verb", example:"文章需要反复雕琢。", exampleMeaning:"An essay needs repeated refining." },
  { char:"矢志不渝", pinyin:"shǐ zhì bù yú", tone:3, meaning:"to remain unwavering in one's determination", pos:"adj", example:"他矢志不渝地追求真理。", exampleMeaning:"He unwaveringly pursues the truth." },
  { char:"饮鸩止渴", pinyin:"yǐn zhèn zhǐ kě", tone:3, meaning:"to drink poison to quench thirst (short-sighted)", pos:"verb", example:"这种做法无异于饮鸩止渴。", exampleMeaning:"This approach is no different from a short-sighted solution." },
  { char:"筚路蓝缕", pinyin:"bì lù lán lǚ", tone:4, meaning:"to pioneer under hardship", pos:"verb", example:"先辈们筚路蓝缕。", exampleMeaning:"Our predecessors pioneered under great hardship." },
];

// ---- HSK 9 Vocabulary ----
const HSK9_DATA = [
  { char:"鸢飞鱼跃", pinyin:"yuān fēi yú yuè", tone:1, meaning:"kites fly and fish leap — all things in their element", pos:"verb", example:"鸢飞鱼跃，万物各得其所。", exampleMeaning:"Kites fly and fish leap — all things find their place." },
  { char:"韦编三绝", pinyin:"wéi biān sān jué", tone:2, meaning:"to study diligently (Confucius wore out his book bindings)", pos:"verb", example:"他韦编三绝，博学多才。", exampleMeaning:"He studied so diligently that he became widely learned." },
  { char:"焚膏继晷", pinyin:"fén gāo jì guǐ", tone:2, meaning:"to burn the midnight oil / to study from dawn to dusk", pos:"verb", example:"他焚膏继晷地研究。", exampleMeaning:"He burns the midnight oil in his research." },
  { char:"悬壶济世", pinyin:"xuán hú jì shì", tone:2, meaning:"to practice medicine to help the world", pos:"verb", example:"他立志悬壶济世。", exampleMeaning:"He is determined to practice medicine to help the world." },
  { char:"运筹帷幄", pinyin:"yùn chóu wéi wò", tone:4, meaning:"to plan strategies from behind the scenes", pos:"verb", example:"他运筹帷幄，决胜千里。", exampleMeaning:"He plans strategies from behind the scenes and wins battles a thousand miles away." },
  { char:"醯鸡舞镜", pinyin:"xī jī wǔ jìng", tone:1, meaning:"limited vision / seeing only one's small world", pos:"noun", example:"不要像醯鸡舞镜一样。", exampleMeaning:"Don't be like a vinegar fly dancing in a mirror." },
  { char:"沧海桑田", pinyin:"cāng hǎi sāng tián", tone:1, meaning:"great changes over time (seas become mulberry fields)", pos:"noun", example:"沧海桑田，物是人非。", exampleMeaning:"Great changes — things remain but people change." },
  { char:"钟灵毓秀", pinyin:"zhōng líng yù xiù", tone:1, meaning:"blessed with natural beauty and talent", pos:"adj", example:"这里钟灵毓秀。", exampleMeaning:"This place is blessed with natural beauty." },
  { char:"旖旎", pinyin:"yǐnǐ", tone:3, meaning:"graceful / charming (scenery)", pos:"adj", example:"旖旎的风光。", exampleMeaning:"Graceful scenery." },
  { char:"嶙峋", pinyin:"línxún", tone:2, meaning:"craggy / jagged (of rocks/bones)", pos:"adj", example:"嶙峋的怪石。", exampleMeaning:"Craggy strange rocks." },
  { char:"汗牛充栋", pinyin:"hàn niú chōng dòng", tone:4, meaning:"enough books to make the ox sweat (vast collection)", pos:"adj", example:"相关文献汗牛充栋。", exampleMeaning:"The related literature is vast." },
  { char:"独辟蹊径", pinyin:"dú pì xī jìng", tone:2, meaning:"to blaze a new trail / to take an original approach", pos:"verb", example:"他独辟蹊径，另出新意。", exampleMeaning:"He blazed a new trail with original ideas." },
  { char:"引经据典", pinyin:"yǐn jīng jù diǎn", tone:3, meaning:"to cite classics and historical precedents", pos:"verb", example:"他写文章善于引经据典。", exampleMeaning:"He is adept at citing classics in his writing." },
  { char:"栉风沐雨", pinyin:"zhì fēng mù yǔ", tone:4, meaning:"to endure hardships of travel", pos:"verb", example:"他栉风沐雨数十载。", exampleMeaning:"He endured hardships for decades." },
  { char:"厚德载物", pinyin:"hòu dé zài wù", tone:4, meaning:"virtue carries all things (Tsinghua motto)", pos:"verb", example:"自强不息，厚德载物。", exampleMeaning:"Strive constantly, and let virtue carry all things." },
  { char:"薪火相传", pinyin:"xīn huǒ xiāng chuán", tone:1, meaning:"to pass on the torch (传承)", pos:"verb", example:"文化薪火相传。", exampleMeaning:"Culture is passed down like a torch." },
  { char:"浮光掠影", pinyin:"fú guāng lüè yǐng", tone:2, meaning:"a superficial glance / skimming the surface", pos:"noun", example:"不能浮光掠影地了解。", exampleMeaning:"One cannot understand things by just skimming the surface." },
  { char:"字斟句酌", pinyin:"zì zhēn jù zhuó", tone:4, meaning:"to weigh every word carefully", pos:"verb", example:"他写作字斟句酌。", exampleMeaning:"He weighs every word carefully when writing." },
  { char:"博观约取", pinyin:"bó guān yuē qǔ", tone:2, meaning:"read widely but select carefully", pos:"verb", example:"学习要博观约取。", exampleMeaning:"In learning, read widely but select carefully." },
  { char:"兼听则明", pinyin:"jiān tīng zé míng", tone:1, meaning:"listening to all sides leads to clarity", pos:"verb", example:"兼听则明，偏信则暗。", exampleMeaning:"Listen to all sides for clarity; trust only one for confusion." },
];

// ---- HSK 7-9 Grammar Patterns ----
const GRAMMAR_HSK789 = {
  7: [
    {
      title: "以…为… (Taking…as…)",
      pattern: "以 + A + 为 + B",
      explanation: "A literary/formal pattern meaning 'to take A as B' or 'regarding A as B'. Common in essays and official language.",
      examples: [
        { cn:"以人民为中心。", py:"Yǐ rénmín wéi zhōngxīn.", en:"Taking the people as the center." },
        { cn:"以事实为依据。", py:"Yǐ shìshí wéi yījù.", en:"Taking facts as the basis." },
        { cn:"以创新为驱动力。", py:"Yǐ chuàngxīn wéi qūdòng lì.", en:"Taking innovation as the driving force." },
      ],
      tip:"Very common in formal writing, speeches, and policy documents."
    },
    {
      title: "鉴于… (In view of… / Given that…)",
      pattern: "鉴于 + situation, …conclusion",
      explanation: "Formal connective introducing a reason or circumstance that leads to a conclusion or action.",
      examples: [
        { cn:"鉴于目前形势，我们决定推迟。", py:"Jiànyú mùqián xíngshì, wǒmen juédìng tuīchí.", en:"In view of the current situation, we decided to postpone." },
        { cn:"鉴于他的贡献, 授予他荣誉称号。", py:"Jiànyú tā de gòngxiàn, shòuyǔ tā róngyù chēnghào.", en:"Given his contributions, he was awarded an honorary title." },
      ],
      tip:"Used in formal/written contexts. For casual speech, use 考虑到 instead."
    },
    {
      title: "Classical: 者…也 (Topic-comment marker)",
      pattern: "…者, …也",
      explanation: "Classical Chinese sentence structure. 者 marks the topic, 也 confirms the predicate. Appears in literary quotations and formal prose.",
      examples: [
        { cn:"知之者不如好之者。", py:"Zhī zhī zhě bùrú hào zhī zhě.", en:"Those who know it are not as good as those who love it." },
        { cn:"仁者爱人。", py:"Rén zhě ài rén.", en:"The benevolent person loves others." },
      ],
      tip:"Essential for reading 文言文 (classical Chinese). Memorize common patterns."
    },
  ],
  8: [
    {
      title: "Classical: 之…者 (Nominalizer)",
      pattern: "V/Adj + 之 + 者",
      explanation: "Classical structure turning a verb/adjective phrase into a noun phrase ('the one who…'). Critical for reading ancient texts.",
      examples: [
        { cn:"为学之道，必先知之。", py:"Wéi xué zhī dào, bì xiān zhī zhī.", en:"The way of learning must first begin with knowing." },
        { cn:"知足之者常乐。", py:"Zhīzú zhī zhě cháng lè.", en:"The one who knows contentment is always happy." },
      ],
      tip:"之 here functions as a structural particle connecting modifier to noun."
    },
    {
      title: "与其说…不如说… (Rather than saying…it's better to say…)",
      pattern: "与其说 + interpretation A, 不如说 + interpretation B",
      explanation: "A sophisticated comparison pattern used to reframe or reinterpret something. Common in essays and analysis.",
      examples: [
        { cn:"与其说他是天才，不如说他极其勤奋。", py:"Yǔqí shuō tā shì tiāncái, bùrú shuō tā jíqí qínfèn.", en:"Rather than saying he's a genius, it's better to say he's extremely diligent." },
        { cn:"与其说这是失败，不如说是重新开始的契机。", py:"Yǔqí shuō zhè shì shībài, bùrú shuō shì chóngxīn kāishǐ de qìjī.", en:"Rather than saying this is a failure, it's better to say it's an opportunity for a fresh start." },
      ],
      tip:"Elevates analytical writing. Shows logical sophistication."
    },
  ],
  9: [
    {
      title: "Classical: 焉 (Question/Exclamation particle)",
      pattern: "…焉？ / …焉。",
      explanation: "Classical Chinese particle serving as a question word ('where? how?'), or as an exclamatory/declarative ending.",
      examples: [
        { cn:"不入虎穴，焉得虎子？", py:"Bù rù hǔ xué, yān dé hǔ zǐ?", en:"If you don't enter the tiger's den, how can you catch the tiger's cub?" },
        { cn:"心不在焉。", py:"Xīn bù zài yān.", en:"The mind is not there (absent-minded)." },
      ],
      tip:"焉 remains in many modern idioms. Recognizing it unlocks classical quotes."
    },
    {
      title: "Classical: 其…乎 (Rhetorical question)",
      pattern: "其 + VP + 乎？",
      explanation: "Classical rhetorical question pattern implying the answer is obvious. Conveys strong emotion or certainty.",
      examples: [
        { cn:"其真无马邪？其真不知马也。", py:"Qí zhēn wú mǎ yé? Qí zhēn bù zhī mǎ yě.", en:"Is there truly no good horse? No — they truly don't know horses." },
        { cn:"巍巍乎泰山！", py:"Wēiwēi hū Tàishān!", en:"How majestic is Mount Tai!" },
      ],
      tip:"This pattern appears frequently in pre-Qin texts and Tang poetry."
    },
  ]
};

// ---- HSK 7-9 Reading Passages ----
const READING_HSK789 = {
  7: [
    {
      title: "The Paradox of Choice in the Digital Age",
      level: "HSK 7",
      text: "信息时代赋予人们前所未有的选择自由，但选择的悖论也由此凸显。美国心理学家巴里·施瓦茨在其著作《选择的悖论》中指出：当选择过多时，人们反而更难做出决定，且对已做出的选择更不满意。在数字消费领域，这一现象尤为突出——流媒体平台提供上万部影视作品，消费者往往花费大量时间浏览却最终什么都不看。算法推荐系统试图通过个性化过滤来解决信息过载的问题，却陷入了'信息茧房'的陷阱，使人们的认知视野日益狭窄。如何在自由选择与信息过载之间找到平衡点，已成为当代社会亟需解决的命题。",
      pinyin: "Xìnxī shídài fùyǔ rénmen qiánsuǒwèiyǒu de xuǎnzé zìyóu...",
      translation: "The information age has given people unprecedented freedom of choice, but the paradox of choice has also become prominent. American psychologist Barry Schwartz pointed out in his book 'The Paradox of Choice' that when choices are too many, people actually find it harder to decide, and are less satisfied with the decisions they make. In digital consumption, this phenomenon is particularly striking — streaming platforms offer tens of thousands of shows, and consumers often spend a lot of time browsing but end up watching nothing. Algorithmic recommendation systems attempt to solve information overload through personalized filtering, yet fall into the trap of 'information cocoons', making people's cognitive horizons increasingly narrow. How to find a balance between free choice and information overload has become an urgent proposition for contemporary society.",
      questions: [
        { q:"'选择的悖论'是什么意思？", a:"选择太多反而让人难以决定且不满", qEn:"What does 'the paradox of choice' mean?", aEn:"Too many choices make it harder to decide and reduce satisfaction" },
        { q:"算法推荐的问题是什么？", a:"造成'信息茧房'，使认知视野狭窄", qEn:"What's the problem with algorithmic recommendations?", aEn:"They create 'information cocoons' that narrow cognitive horizons" },
      ]
    },
  ],
  8: [
    {
      title: "韩愈《师说》选段赏析",
      level: "HSK 8",
      text: "古之学者必有师。师者，所以传道受业解惑也。人非生而知之者，孰能无惑？惑而不从师，其为惑也，终不解矣。生乎吾前，其闻道也固先乎吾，吾从而师之；生乎吾后，其闻道也亦先乎吾，吾从而师之。吾师道也，夫庸知其年之先后生于吾乎？是故无贵无贱，无长无少，道之所存，师之所存也。\n\n——韩愈《师说》",
      pinyin: "Gǔ zhī xuézhě bì yǒu shī. Shī zhě, suǒyǐ chuán dào shòu yè jiě huò yě...",
      translation: "Scholars of ancient times necessarily had teachers. A teacher is one who transmits the Way, imparts knowledge, and resolves doubts. Since people are not born with knowledge, who can be without doubts? If you have doubts yet do not follow a teacher, those doubts will never be resolved. Those born before me who learned the Way before me — I follow and learn from them. Those born after me who also learned the Way before me — I follow and learn from them too. What I learn from them is the Way; why should I care whether they were born before or after me? Therefore, regardless of noble or humble, old or young — where the Way exists, there the teacher exists.\n\n— Han Yu, 'On the Teacher'",
      questions: [
        { q:"韩愈认为老师的作用是什么？", a:"传道、受业、解惑", qEn:"What does Han Yu think the role of a teacher is?", aEn:"To transmit the Way, impart knowledge, and resolve doubts" },
        { q:"选择老师的标准是什么？", a:"不论贵贱长少，只看谁先闻道", qEn:"What is the criterion for choosing a teacher?", aEn:"Regardless of status or age, only who learned the Way first matters" },
      ]
    },
  ],
  9: [
    {
      title: "《道德经》第一章解读",
      level: "HSK 9",
      text: "道可道，非常道；名可名，非常名。无名天地之始；有名万物之母。故常无欲以观其妙；常有欲以观其徼。此两者同出而异名，同谓之玄。玄之又玄，众妙之门。\n\n这短短二十五个字，构成了老子哲学的总纲。'道'是宇宙的终极法则，但它一旦被语言捕捉，就不再是那个永恒的'道'了。这揭示了语言与真理之间的根本张力——人类试图用有限的符号系统来描述无限的存在。'无'与'有'并非对立，而是同一本源的两个面向：从'无'的视角看世界的奥妙，从'有'的视角看世界的边界。这种辩证思维影响了两千多年的中国哲学、美学和政治思想。",
      pinyin: "Dào kě dào, fēi cháng dào; míng kě míng, fēi cháng míng...",
      translation: "The Way that can be spoken of is not the eternal Way; the name that can be named is not the eternal name. The nameless is the beginning of heaven and earth; the named is the mother of all things. Thus, always without desire, one observes its wonder; always with desire, one observes its boundaries. These two emerge together but differ in name; both are called mystery. Mystery of mysteries — the gateway to all wonders.\n\nThese mere twenty-five characters form the general outline of Laozi's philosophy. The 'Dao' is the ultimate principle of the universe, but once captured by language, it is no longer that eternal 'Dao'. This reveals the fundamental tension between language and truth — humans try to describe infinite existence with a finite system of symbols. 'Non-being' and 'being' are not opposites but two aspects of the same origin: from the perspective of 'non-being' we observe the wonder of the world; from 'being' we observe its boundaries. This dialectical thinking has influenced over two thousand years of Chinese philosophy, aesthetics, and political thought.",
      questions: [
        { q:"'道可道，非常道'的核心含义是什么？", a:"能用语言表达的道不是永恒的道——揭示语言与真理的张力", qEn:"What is the core meaning of 'The Way that can be spoken is not the eternal Way'?", aEn:"The Way expressible in words is not the eternal Way — revealing the tension between language and truth" },
        { q:"'无'与'有'是什么关系？", a:"同一本源的两个面向，非对立关系", qEn:"What is the relationship between 'non-being' and 'being'?", aEn:"Two aspects of the same origin, not opposites" },
      ]
    },
  ],
};

// ---- Advanced Chengyu (HSK 7-9) ----
const CHENGYU_HSK789 = [
  {
    chars:"韦编三绝", pinyin:"wéi biān sān jué", tone:2,
    literal:"Leather bindings broken three times",
    meaning:"To study with extreme diligence (Confucius read the Book of Changes so often the bindings broke thrice)",
    origin:"From《史记·孔子世家》— Confucius studied the Yi Jing so intently that the leather strips binding his bamboo scrolls broke three times.",
    example:"他韦编三绝，终成大器。",
    exampleMeaning:"He studied with extreme diligence and eventually became accomplished.",
    level:"HSK 7"
  },
  {
    chars:"醍醐灌顶", pinyin:"tí hú guàn dǐng", tone:2,
    literal:"Pouring clarified butter over the head",
    meaning:"A sudden and profound enlightenment; an 'aha moment'",
    origin:"From Buddhist scripture — clarified butter (ghee) poured on the head symbolizes the bestowing of supreme wisdom.",
    example:"听了他的话，我如醍醐灌顶。",
    exampleMeaning:"After hearing his words, I felt suddenly enlightened.",
    level:"HSK 8"
  },
  {
    chars:"运筹帷幄", pinyin:"yùn chóu wéi wò", tone:4,
    literal:"Plan strategies inside the tent",
    meaning:"To devise strategies from a command center; to plan strategically behind the scenes",
    origin:"From《史记·高祖本纪》— Liu Bang praised Zhang Liang for planning victories from within a military tent.",
    example:"他运筹帷幄，稳操胜券。",
    exampleMeaning:"He strategized from behind the scenes and had the victory firmly in hand.",
    level:"HSK 9"
  },
  {
    chars:"高屋建瓴", pinyin:"gāo wū jiàn líng", tone:1,
    literal:"Pour water from a high roof",
    meaning:"To have a commanding view; a top-down strategic perspective",
    origin:"From《史记》— describes pouring water downhill from a high position, symbolizing strategic advantage.",
    example:"文章立论高屋建瓴。",
    exampleMeaning:"The article's argument takes a commanding strategic perspective.",
    level:"HSK 8"
  },
  {
    chars:"沧海桑田", pinyin:"cāng hǎi sāng tián", tone:1,
    literal:"Blue seas become mulberry fields",
    meaning:"Great changes over a long period of time; the vicissitudes of life",
    origin:"From 《神仙传》— An immortal witnessed the sea turning to mulberry fields three times.",
    example:"沧海桑田，昔日渔村已成繁华都市。",
    exampleMeaning:"Great changes — the former fishing village has become a bustling city.",
    level:"HSK 9"
  },
  {
    chars:"独辟蹊径", pinyin:"dú pì xī jìng", tone:2,
    literal:"Blaze a trail alone",
    meaning:"To take an original approach; think outside the box",
    origin:"Figurative expression from literary tradition, praising those who find novel solutions.",
    example:"他在研究方法上独辟蹊径。",
    exampleMeaning:"He took an original approach in his research methodology.",
    level:"HSK 7"
  },
  {
    chars:"厚德载物", pinyin:"hòu dé zài wù", tone:4,
    literal:"Thick virtue carries all things",
    meaning:"Great virtue can sustain everything; moral excellence supports the world",
    origin:"From《周易·坤卦》— 'The terrain of the earth: the superior person carries all things with great virtue.'",
    example:"自强不息，厚德载物。",
    exampleMeaning:"Strive ceaselessly and carry all things with virtue.",
    level:"HSK 9"
  },
  {
    chars:"筚路蓝缕", pinyin:"bì lù lán lǚ", tone:4,
    literal:"Riding a firewood cart in ragged clothes",
    meaning:"To pioneer under extreme hardship; to start from nothing",
    origin:"From《左传》— King of Chu started his kingdom with a firewood cart and ragged clothes.",
    example:"先辈们筚路蓝缕，开创了这番事业。",
    exampleMeaning:"Our predecessors pioneered under great hardship to build this enterprise.",
    level:"HSK 8"
  },
];

// =============================================
//  MERGE HSK 7-9 INTO GLOBAL DATA
// =============================================
(function mergeHSK789() {
  // -- Vocabulary --
  if (typeof HSK_DATA !== 'undefined') {
    HSK_DATA[7] = HSK7_DATA;
    HSK_DATA[8] = HSK8_DATA;
    HSK_DATA[9] = HSK9_DATA;
  }

  // -- Grammar --
  if (typeof GRAMMAR_DATA !== 'undefined') {
    Object.entries(GRAMMAR_HSK789).forEach(([lv, patterns]) => {
      if (!GRAMMAR_DATA[lv]) GRAMMAR_DATA[lv] = [];
      GRAMMAR_DATA[lv].push(...patterns);
    });
  }

  // -- Reading --
  if (typeof READING_DATA !== 'undefined') {
    Object.entries(READING_HSK789).forEach(([lv, passages]) => {
      if (!READING_DATA[lv]) READING_DATA[lv] = [];
      READING_DATA[lv].push(...passages);
    });
  }

  // -- Chengyu --
  if (typeof CHENGYU_DATA !== 'undefined') {
    const existingCY = new Set(CHENGYU_DATA.map(c => c.chars));
    CHENGYU_DATA.push(...CHENGYU_HSK789.filter(c => !existingCY.has(c.chars)));
  }

  // Log totals
  let total = 0;
  for (let i = 1; i <= 9; i++) total += (HSK_DATA[i] || []).length;
  console.log(`[data_hsk789] Merged — ${total} total vocab across HSK 1-9.`);
})();
