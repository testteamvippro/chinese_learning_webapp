// =============================================
//  EXTENDED DATA — Hundreds of additional vocab,
//  chengyu, grammar patterns, and a full HSK 6 level.
//
//  This file merges INTO the globals already
//  declared in data.js. It must be loaded AFTER data.js.
// =============================================

// ---- HSK 1 additions ----
const HSK1_EXT = [
  { char:"红",   pinyin:"hóng",  tone:2, meaning:"red",           pos:"adj",  example:"她穿了一件红色的衣服。",    exampleMeaning:"She wore a red dress." },
  { char:"黄",   pinyin:"huáng", tone:2, meaning:"yellow",        pos:"adj",  example:"这朵花是黄色的。",          exampleMeaning:"This flower is yellow." },
  { char:"蓝",   pinyin:"lán",   tone:2, meaning:"blue",          pos:"adj",  example:"天空是蓝色的。",            exampleMeaning:"The sky is blue." },
  { char:"绿",   pinyin:"lǜ",    tone:4, meaning:"green",         pos:"adj",  example:"草地是绿色的。",            exampleMeaning:"The grass is green." },
  { char:"白",   pinyin:"bái",   tone:2, meaning:"white",         pos:"adj",  example:"我有一只白猫。",            exampleMeaning:"I have a white cat." },
  { char:"黑",   pinyin:"hēi",   tone:1, meaning:"black",         pos:"adj",  example:"他穿了黑衣服。",            exampleMeaning:"He wore black clothes." },
  { char:"头",   pinyin:"tóu",   tone:2, meaning:"head",          pos:"noun", example:"我头疼。",                  exampleMeaning:"I have a headache." },
  { char:"手",   pinyin:"shǒu",  tone:3, meaning:"hand",          pos:"noun", example:"请洗手。",                  exampleMeaning:"Please wash your hands." },
  { char:"脚",   pinyin:"jiǎo",  tone:3, meaning:"foot",          pos:"noun", example:"我的脚很疼。",              exampleMeaning:"My foot hurts." },
  { char:"眼睛", pinyin:"yǎnjing",tone:3,meaning:"eye(s)",        pos:"noun", example:"她的眼睛很大。",            exampleMeaning:"Her eyes are big." },
  { char:"耳朵", pinyin:"ěrduo", tone:3, meaning:"ear(s)",        pos:"noun", example:"兔子的耳朵很长。",          exampleMeaning:"Rabbits have long ears." },
  { char:"嘴",   pinyin:"zuǐ",   tone:3, meaning:"mouth",         pos:"noun", example:"请闭上嘴。",                exampleMeaning:"Please close your mouth." },
  { char:"鼻子", pinyin:"bízi",  tone:2, meaning:"nose",          pos:"noun", example:"他的鼻子很高。",            exampleMeaning:"His nose is tall." },
  { char:"桌子", pinyin:"zhuōzi",tone:1, meaning:"table / desk",  pos:"noun", example:"书在桌子上。",              exampleMeaning:"The book is on the table." },
  { char:"椅子", pinyin:"yǐzi",  tone:3, meaning:"chair",         pos:"noun", example:"请坐在椅子上。",            exampleMeaning:"Please sit on the chair." },
  { char:"门",   pinyin:"mén",   tone:2, meaning:"door / gate",   pos:"noun", example:"请关门。",                  exampleMeaning:"Please close the door." },
  { char:"窗",   pinyin:"chuāng",tone:1, meaning:"window",        pos:"noun", example:"请开窗。",                  exampleMeaning:"Please open the window." },
  { char:"电视", pinyin:"diànshì",tone:4,meaning:"TV / television",pos:"noun",example:"我在看电视。",              exampleMeaning:"I'm watching TV." },
  { char:"床",   pinyin:"chuáng",tone:2, meaning:"bed",           pos:"noun", example:"我在床上看书。",            exampleMeaning:"I'm reading in bed." },
  { char:"茶",   pinyin:"chá",   tone:2, meaning:"tea",           pos:"noun", example:"我喜欢喝茶。",              exampleMeaning:"I like drinking tea." },
  { char:"牛奶", pinyin:"niúnǎi",tone:2, meaning:"milk",          pos:"noun", example:"孩子喝牛奶。",              exampleMeaning:"The child drinks milk." },
  { char:"米饭", pinyin:"mǐfàn", tone:3, meaning:"cooked rice",   pos:"noun", example:"我要一碗米饭。",            exampleMeaning:"I want a bowl of rice." },
  { char:"面条", pinyin:"miàntiáo",tone:4,meaning:"noodles",       pos:"noun", example:"我喜欢吃面条。",            exampleMeaning:"I like eating noodles." },
  { char:"鸡蛋", pinyin:"jīdàn", tone:1, meaning:"egg(s)",        pos:"noun", example:"我要两个鸡蛋。",            exampleMeaning:"I want two eggs." },
  { char:"鱼",   pinyin:"yú",    tone:2, meaning:"fish",          pos:"noun", example:"这条鱼很新鲜。",            exampleMeaning:"This fish is very fresh." },
  { char:"肉",   pinyin:"ròu",   tone:4, meaning:"meat",          pos:"noun", example:"我不吃肉。",                exampleMeaning:"I don't eat meat." },
  { char:"走",   pinyin:"zǒu",   tone:3, meaning:"to walk / to go",pos:"verb",example:"我们走吧。",                exampleMeaning:"Let's go." },
  { char:"跑",   pinyin:"pǎo",   tone:3, meaning:"to run",        pos:"verb", example:"他跑得很快。",              exampleMeaning:"He runs very fast." },
  { char:"唱歌", pinyin:"chànggē",tone:4,meaning:"to sing",       pos:"verb", example:"她喜欢唱歌。",              exampleMeaning:"She likes to sing." },
  { char:"跳舞", pinyin:"tiàowǔ",tone:4, meaning:"to dance",      pos:"verb", example:"我不会跳舞。",              exampleMeaning:"I can't dance." },
  { char:"画画", pinyin:"huàhuà",tone:4, meaning:"to draw / paint",pos:"verb", example:"他在画画。",                exampleMeaning:"He is drawing." },
  { char:"洗",   pinyin:"xǐ",    tone:3, meaning:"to wash",       pos:"verb", example:"我在洗衣服。",              exampleMeaning:"I'm washing clothes." },
  { char:"教",   pinyin:"jiāo",  tone:1, meaning:"to teach",      pos:"verb", example:"老师教我们汉语。",          exampleMeaning:"The teacher teaches us Chinese." },
  { char:"学习", pinyin:"xuéxí", tone:2, meaning:"to study / learn",pos:"verb",example:"我在学习中文。",           exampleMeaning:"I am studying Chinese." },
  { char:"工作", pinyin:"gōngzuò",tone:1,meaning:"to work",       pos:"verb", example:"妈妈每天工作。",            exampleMeaning:"Mom works every day." },
  { char:"玩",   pinyin:"wán",   tone:2, meaning:"to play / have fun",pos:"verb",example:"我们一起玩吧。",         exampleMeaning:"Let's play together." },
  { char:"上",   pinyin:"shàng", tone:4, meaning:"up / above / on",pos:"noun",example:"书在桌子上。",              exampleMeaning:"The book is on the table." },
  { char:"下",   pinyin:"xià",   tone:4, meaning:"down / below / under",pos:"noun",example:"猫在桌子下。",         exampleMeaning:"The cat is under the table." },
  { char:"里",   pinyin:"lǐ",    tone:3, meaning:"inside / in",   pos:"noun", example:"他在房间里。",              exampleMeaning:"He is inside the room." },
  { char:"外",   pinyin:"wài",   tone:4, meaning:"outside / out", pos:"noun", example:"外面很冷。",                exampleMeaning:"It's cold outside." },
  { char:"前",   pinyin:"qián",  tone:2, meaning:"front / before",pos:"noun", example:"前面有一家商店。",          exampleMeaning:"There is a shop in front." },
  { char:"后",   pinyin:"hòu",   tone:4, meaning:"back / after",  pos:"noun", example:"他在我后面。",              exampleMeaning:"He is behind me." },
  { char:"左",   pinyin:"zuǒ",   tone:3, meaning:"left",          pos:"noun", example:"请向左转。",                exampleMeaning:"Please turn left." },
  { char:"右",   pinyin:"yòu",   tone:4, meaning:"right",         pos:"noun", example:"请向右转。",                exampleMeaning:"Please turn right." },
  { char:"星期一", pinyin:"xīngqīyī", tone:1, meaning:"Monday",    pos:"noun", example:"今天是星期一。",            exampleMeaning:"Today is Monday." },
  { char:"星期二", pinyin:"xīngqī'èr",tone:1, meaning:"Tuesday",   pos:"noun", example:"星期二有课。",              exampleMeaning:"There is class on Tuesday." },
  { char:"星期三", pinyin:"xīngqīsān",tone:1, meaning:"Wednesday",  pos:"noun", example:"星期三我休息。",            exampleMeaning:"I rest on Wednesday." },
  { char:"星期四", pinyin:"xīngqīsì", tone:1, meaning:"Thursday",   pos:"noun", example:"星期四下雨了。",            exampleMeaning:"It rained on Thursday." },
  { char:"星期五", pinyin:"xīngqīwǔ", tone:1, meaning:"Friday",     pos:"noun", example:"星期五我去看电影。",        exampleMeaning:"I go to a movie on Friday." },
  { char:"星期六", pinyin:"xīngqīliù",tone:1, meaning:"Saturday",   pos:"noun", example:"星期六不上班。",            exampleMeaning:"No work on Saturday." },
  { char:"星期天", pinyin:"xīngqītiān",tone:1,meaning:"Sunday",     pos:"noun", example:"星期天我在家休息。",        exampleMeaning:"I rest at home on Sunday." },
  { char:"早上", pinyin:"zǎoshang",tone:3, meaning:"morning",      pos:"noun", example:"早上好！",                  exampleMeaning:"Good morning!" },
  { char:"晚上", pinyin:"wǎnshang",tone:3, meaning:"evening / night",pos:"noun",example:"晚上好！",                exampleMeaning:"Good evening!" },
  { char:"中午", pinyin:"zhōngwǔ",tone:1, meaning:"noon / midday", pos:"noun", example:"中午吃什么？",              exampleMeaning:"What do you eat for lunch?" },
  { char:"衣服", pinyin:"yīfu",  tone:1, meaning:"clothes",       pos:"noun", example:"我买了新衣服。",            exampleMeaning:"I bought new clothes." },
  { char:"鞋子", pinyin:"xiézi", tone:2, meaning:"shoes",         pos:"noun", example:"这双鞋子很漂亮。",          exampleMeaning:"These shoes are beautiful." },
  { char:"新",   pinyin:"xīn",   tone:1, meaning:"new",           pos:"adj",  example:"这是新书。",                exampleMeaning:"This is a new book." },
  { char:"旧",   pinyin:"jiù",   tone:4, meaning:"old (things)",  pos:"adj",  example:"这是旧衣服。",              exampleMeaning:"These are old clothes." },
  { char:"长",   pinyin:"cháng", tone:2, meaning:"long",          pos:"adj",  example:"这条路很长。",              exampleMeaning:"This road is very long." },
  { char:"短",   pinyin:"duǎn",  tone:3, meaning:"short (length)",pos:"adj",  example:"这条裙子太短了。",          exampleMeaning:"This skirt is too short." },
  { char:"高",   pinyin:"gāo",   tone:1, meaning:"tall / high",   pos:"adj",  example:"他很高。",                  exampleMeaning:"He is very tall." },
  { char:"矮",   pinyin:"ǎi",    tone:3, meaning:"short (height)",pos:"adj",  example:"那棵树很矮。",              exampleMeaning:"That tree is very short." },
  { char:"胖",   pinyin:"pàng",  tone:4, meaning:"fat / chubby",  pos:"adj",  example:"那只猫很胖。",              exampleMeaning:"That cat is very chubby." },
  { char:"瘦",   pinyin:"shòu",  tone:4, meaning:"thin / skinny", pos:"adj",  example:"她很瘦。",                  exampleMeaning:"She is very thin." },
  { char:"远",   pinyin:"yuǎn",  tone:3, meaning:"far",           pos:"adj",  example:"我家很远。",                exampleMeaning:"My home is very far." },
  { char:"近",   pinyin:"jìn",   tone:4, meaning:"near / close",  pos:"adj",  example:"学校很近。",                exampleMeaning:"The school is very close." },
  { char:"忙",   pinyin:"máng",  tone:2, meaning:"busy",          pos:"adj",  example:"我今天很忙。",              exampleMeaning:"I'm very busy today." },
  { char:"雨",   pinyin:"yǔ",    tone:3, meaning:"rain",          pos:"noun", example:"今天下雨了。",              exampleMeaning:"It rained today." },
  { char:"雪",   pinyin:"xuě",   tone:3, meaning:"snow",          pos:"noun", example:"下雪了！",                  exampleMeaning:"It's snowing!" },
  { char:"风",   pinyin:"fēng",  tone:1, meaning:"wind",          pos:"noun", example:"今天风很大。",              exampleMeaning:"The wind is strong today." },
  { char:"花",   pinyin:"huā",   tone:1, meaning:"flower",        pos:"noun", example:"这朵花很漂亮。",            exampleMeaning:"This flower is beautiful." },
  { char:"树",   pinyin:"shù",   tone:4, meaning:"tree",          pos:"noun", example:"公园里有很多树。",          exampleMeaning:"There are many trees in the park." },
  { char:"山",   pinyin:"shān",  tone:1, meaning:"mountain",      pos:"noun", example:"这座山很高。",              exampleMeaning:"This mountain is very tall." },
  { char:"河",   pinyin:"hé",    tone:2, meaning:"river",         pos:"noun", example:"河里有鱼。",                exampleMeaning:"There are fish in the river." },
  { char:"路",   pinyin:"lù",    tone:4, meaning:"road / path",   pos:"noun", example:"这条路很长。",              exampleMeaning:"This road is very long." },
  { char:"公园", pinyin:"gōngyuán",tone:1,meaning:"park",         pos:"noun", example:"我喜欢去公园。",            exampleMeaning:"I like going to the park." },
  { char:"商店", pinyin:"shāngdiàn",tone:1,meaning:"shop / store",pos:"noun", example:"我去商店买东西。",          exampleMeaning:"I go to the shop to buy things." },
  { char:"饭店", pinyin:"fàndiàn",tone:4, meaning:"restaurant / hotel",pos:"noun",example:"我们去饭店吃饭。",      exampleMeaning:"Let's go to the restaurant to eat." },
  { char:"电话", pinyin:"diànhuà",tone:4, meaning:"telephone / phone call",pos:"noun",example:"请打电话给我。",    exampleMeaning:"Please call me." },
  { char:"钟",   pinyin:"zhōng", tone:1, meaning:"clock / bell",  pos:"noun", example:"现在几点钟？",              exampleMeaning:"What time is it now?" },
  { char:"百",   pinyin:"bǎi",   tone:3, meaning:"hundred",       pos:"num",  example:"一百块钱。",                exampleMeaning:"One hundred yuan." },
  { char:"千",   pinyin:"qiān",  tone:1, meaning:"thousand",      pos:"num",  example:"一千个人。",                exampleMeaning:"A thousand people." },
];

// ---- HSK 2 additions ----
const HSK2_EXT = [
  { char:"面包", pinyin:"miànbāo",tone:4, meaning:"bread",        pos:"noun", example:"我早上吃面包。",            exampleMeaning:"I eat bread in the morning." },
  { char:"蛋糕", pinyin:"dàngāo", tone:4, meaning:"cake",          pos:"noun", example:"今天是她的生日蛋糕。",      exampleMeaning:"Today is her birthday cake." },
  { char:"饺子", pinyin:"jiǎozi", tone:3, meaning:"dumplings",     pos:"noun", example:"我们过年吃饺子。",          exampleMeaning:"We eat dumplings during New Year." },
  { char:"包子", pinyin:"bāozi",  tone:1, meaning:"steamed bun",   pos:"noun", example:"早上吃了两个包子。",        exampleMeaning:"I ate two steamed buns in the morning." },
  { char:"豆腐", pinyin:"dòufu",  tone:4, meaning:"tofu",          pos:"noun", example:"麻婆豆腐很好吃。",          exampleMeaning:"Mapo tofu is delicious." },
  { char:"蔬菜", pinyin:"shūcài", tone:1, meaning:"vegetables",    pos:"noun", example:"多吃蔬菜对身体好。",        exampleMeaning:"Eating more vegetables is good for health." },
  { char:"水果", pinyin:"shuǐguǒ",tone:3, meaning:"fruit",        pos:"noun", example:"水果很新鲜。",              exampleMeaning:"The fruit is very fresh." },
  { char:"西瓜", pinyin:"xīguā",  tone:1, meaning:"watermelon",    pos:"noun", example:"夏天吃西瓜很爽。",          exampleMeaning:"Eating watermelon in summer is refreshing." },
  { char:"香蕉", pinyin:"xiāngjiāo",tone:1,meaning:"banana",      pos:"noun", example:"我买了一些香蕉。",          exampleMeaning:"I bought some bananas." },
  { char:"葡萄", pinyin:"pútao",  tone:2, meaning:"grape(s)",      pos:"noun", example:"这些葡萄很甜。",            exampleMeaning:"These grapes are very sweet." },
  { char:"火车", pinyin:"huǒchē", tone:3, meaning:"train",         pos:"noun", example:"我坐火车去上海。",          exampleMeaning:"I take the train to Shanghai." },
  { char:"自行车", pinyin:"zìxíngchē",tone:4,meaning:"bicycle",   pos:"noun", example:"他骑自行车去上班。",        exampleMeaning:"He rides a bicycle to work." },
  { char:"出租车", pinyin:"chūzūchē",tone:1,meaning:"taxi",       pos:"noun", example:"我们打出租车去机场。",      exampleMeaning:"We take a taxi to the airport." },
  { char:"公交车", pinyin:"gōngjiāochē",tone:1,meaning:"bus",     pos:"noun", example:"公交车来了。",              exampleMeaning:"The bus is coming." },
  { char:"船",   pinyin:"chuán", tone:2, meaning:"boat / ship",   pos:"noun", example:"我们坐船过河。",            exampleMeaning:"We take a boat to cross the river." },
  { char:"小时", pinyin:"xiǎoshí",tone:3, meaning:"hour",          pos:"noun", example:"我等了两个小时。",          exampleMeaning:"I waited for two hours." },
  { char:"分钟", pinyin:"fēnzhōng",tone:1,meaning:"minute",       pos:"noun", example:"请等五分钟。",              exampleMeaning:"Please wait five minutes." },
  { char:"上午", pinyin:"shàngwǔ",tone:4, meaning:"morning (formal)",pos:"noun",example:"上午有会议。",            exampleMeaning:"There is a meeting in the morning." },
  { char:"下午", pinyin:"xiàwǔ", tone:4, meaning:"afternoon",     pos:"noun", example:"下午去逛街。",              exampleMeaning:"Go shopping in the afternoon." },
  { char:"前天", pinyin:"qiántiān",tone:2,meaning:"day before yesterday",pos:"noun",example:"前天下雨了。",        exampleMeaning:"It rained the day before yesterday." },
  { char:"后天", pinyin:"hòutiān",tone:4, meaning:"day after tomorrow",pos:"noun",example:"后天我去北京。",        exampleMeaning:"I'm going to Beijing the day after tomorrow." },
  { char:"身体", pinyin:"shēntǐ", tone:1, meaning:"body / health", pos:"noun", example:"身体很重要。",              exampleMeaning:"Health is very important." },
  { char:"生病", pinyin:"shēngbìng",tone:1,meaning:"to be sick",  pos:"verb", example:"他生病了。",                exampleMeaning:"He is sick." },
  { char:"感冒", pinyin:"gǎnmào",tone:3, meaning:"cold (illness)",pos:"noun", example:"我感冒了。",                exampleMeaning:"I caught a cold." },
  { char:"药",   pinyin:"yào",   tone:4, meaning:"medicine",      pos:"noun", example:"请吃药。",                  exampleMeaning:"Please take your medicine." },
  { char:"考试", pinyin:"kǎoshì",tone:3, meaning:"exam / test",   pos:"noun", example:"明天有考试。",              exampleMeaning:"There is an exam tomorrow." },
  { char:"作业", pinyin:"zuòyè", tone:4, meaning:"homework",      pos:"noun", example:"我做完作业了。",            exampleMeaning:"I finished my homework." },
  { char:"教室", pinyin:"jiàoshì",tone:4,meaning:"classroom",     pos:"noun", example:"学生在教室里学习。",        exampleMeaning:"Students study in the classroom." },
  { char:"图书馆", pinyin:"túshūguǎn",tone:2,meaning:"library",  pos:"noun", example:"图书馆很安静。",            exampleMeaning:"The library is very quiet." },
  { char:"太阳", pinyin:"tàiyáng",tone:4, meaning:"sun",           pos:"noun", example:"太阳出来了。",              exampleMeaning:"The sun came out." },
  { char:"月亮", pinyin:"yuèliang",tone:4,meaning:"moon",         pos:"noun", example:"今晚月亮很圆。",            exampleMeaning:"The moon is very round tonight." },
  { char:"冬天", pinyin:"dōngtiān",tone:1,meaning:"winter",       pos:"noun", example:"冬天很冷。",                exampleMeaning:"Winter is very cold." },
  { char:"夏天", pinyin:"xiàtiān",tone:4, meaning:"summer",        pos:"noun", example:"夏天很热。",                exampleMeaning:"Summer is very hot." },
  { char:"春天", pinyin:"chūntiān",tone:1,meaning:"spring",       pos:"noun", example:"春天花开了。",              exampleMeaning:"Flowers bloom in spring." },
  { char:"秋天", pinyin:"qiūtiān",tone:1, meaning:"autumn / fall", pos:"noun", example:"秋天叶子变黄了。",          exampleMeaning:"The leaves turn yellow in autumn." },
  { char:"刮风", pinyin:"guāfēng",tone:1,meaning:"windy / to blow",pos:"verb",example:"今天刮大风。",              exampleMeaning:"It's very windy today." },
  { char:"游泳", pinyin:"yóuyǒng",tone:2,meaning:"to swim",       pos:"verb", example:"我喜欢游泳。",              exampleMeaning:"I like swimming." },
  { char:"跑步", pinyin:"pǎobù", tone:3, meaning:"to jog / run",  pos:"verb", example:"我每天早上跑步。",          exampleMeaning:"I jog every morning." },
  { char:"打篮球",pinyin:"dǎ lánqiú",tone:3,meaning:"to play basketball",pos:"verb",example:"他喜欢打篮球。",    exampleMeaning:"He likes playing basketball." },
  { char:"踢足球",pinyin:"tī zúqiú",tone:1,meaning:"to play soccer",pos:"verb",example:"周末踢足球。",            exampleMeaning:"Play soccer on weekends." },
  { char:"唱",   pinyin:"chàng", tone:4, meaning:"to sing",       pos:"verb", example:"她唱得很好听。",            exampleMeaning:"She sings beautifully." },
  { char:"穿",   pinyin:"chuān", tone:1, meaning:"to wear",       pos:"verb", example:"今天穿什么衣服？",          exampleMeaning:"What do you wear today?" },
  { char:"带",   pinyin:"dài",   tone:4, meaning:"to bring / take",pos:"verb",example:"请带你的书来。",            exampleMeaning:"Please bring your book." },
  { char:"送",   pinyin:"sòng",  tone:4, meaning:"to send / give (as gift)",pos:"verb",example:"我送你一个礼物。", exampleMeaning:"I give you a gift." },
  { char:"找",   pinyin:"zhǎo",  tone:3, meaning:"to look for / find",pos:"verb",example:"我在找我的手机。",      exampleMeaning:"I'm looking for my phone." },
  { char:"等",   pinyin:"děng",  tone:3, meaning:"to wait",       pos:"verb", example:"请等一下。",                exampleMeaning:"Please wait a moment." },
  { char:"画",   pinyin:"huà",   tone:4, meaning:"to draw / painting",pos:"verb",example:"她画了一幅画。",        exampleMeaning:"She drew a painting." },
  { char:"打扫", pinyin:"dǎsǎo", tone:3, meaning:"to clean up",   pos:"verb", example:"她在打扫房间。",            exampleMeaning:"She is cleaning the room." },
  { char:"做饭", pinyin:"zuòfàn",tone:4, meaning:"to cook",       pos:"verb", example:"妈妈在做饭。",              exampleMeaning:"Mom is cooking." },
  { char:"洗澡", pinyin:"xǐzǎo", tone:3, meaning:"to bathe / shower",pos:"verb",example:"我去洗澡。",            exampleMeaning:"I'm going to take a shower." },
  { char:"睡觉", pinyin:"shuìjiào",tone:4,meaning:"to sleep",     pos:"verb", example:"该睡觉了。",                exampleMeaning:"It's time to sleep." },
  { char:"起床", pinyin:"qǐchuáng",tone:3,meaning:"to get up",    pos:"verb", example:"我六点起床。",              exampleMeaning:"I get up at six." },
  { char:"回家", pinyin:"huíjiā",tone:2, meaning:"to go home",    pos:"verb", example:"我们回家吧。",              exampleMeaning:"Let's go home." },
  { char:"上班", pinyin:"shàngbān",tone:4,meaning:"to go to work",pos:"verb", example:"他每天八点上班。",          exampleMeaning:"He goes to work at eight every day." },
  { char:"下班", pinyin:"xiàbān",tone:4, meaning:"to get off work",pos:"verb",example:"她五点下班。",              exampleMeaning:"She gets off work at five." },
  { char:"开始", pinyin:"kāishǐ",tone:1, meaning:"to begin / start",pos:"verb",example:"比赛开始了。",            exampleMeaning:"The game has started." },
  { char:"结束", pinyin:"jiéshù",tone:2, meaning:"to end / finish",pos:"verb",example:"会议结束了。",              exampleMeaning:"The meeting is over." },
  { char:"准备", pinyin:"zhǔnbèi",tone:3,meaning:"to prepare",   pos:"verb", example:"我在准备考试。",            exampleMeaning:"I'm preparing for the exam." },
  { char:"干净", pinyin:"gānjìng",tone:1,meaning:"clean",         pos:"adj",  example:"房间很干净。",              exampleMeaning:"The room is very clean." },
  { char:"认真", pinyin:"rènzhēn",tone:4,meaning:"serious / careful",pos:"adj",example:"他工作很认真。",           exampleMeaning:"He works very carefully." },
  { char:"容易", pinyin:"róngyì",tone:2, meaning:"easy",          pos:"adj",  example:"这道题很容易。",            exampleMeaning:"This question is very easy." },
  { char:"难",   pinyin:"nán",   tone:2, meaning:"difficult",     pos:"adj",  example:"汉语很难。",                exampleMeaning:"Chinese is very difficult." },
  { char:"安静", pinyin:"ānjìng",tone:1, meaning:"quiet",         pos:"adj",  example:"图书馆很安静。",            exampleMeaning:"The library is very quiet." },
  { char:"热闹", pinyin:"rènao", tone:4, meaning:"lively / bustling",pos:"adj",example:"市场很热闹。",             exampleMeaning:"The market is very lively." },
  { char:"舒服", pinyin:"shūfu", tone:1, meaning:"comfortable",   pos:"adj",  example:"这张床很舒服。",            exampleMeaning:"This bed is very comfortable." },
  { char:"着急", pinyin:"zháojí",tone:2, meaning:"anxious / worried",pos:"adj",example:"别着急，慢慢来。",         exampleMeaning:"Don't worry, take your time." },
  { char:"生气", pinyin:"shēngqì",tone:1,meaning:"angry",         pos:"adj",  example:"她生气了。",                exampleMeaning:"She is angry." },
  { char:"紧张", pinyin:"jǐnzhāng",tone:3,meaning:"nervous / tense",pos:"adj",example:"考试前我很紧张。",         exampleMeaning:"I'm nervous before the exam." },
  { char:"无聊", pinyin:"wúliáo",tone:2, meaning:"boring / bored",pos:"adj",  example:"这个电影很无聊。",          exampleMeaning:"This movie is very boring." },
];

// ---- HSK 3 additions ----
const HSK3_EXT = [
  { char:"习惯", pinyin:"xíguàn",tone:2, meaning:"habit / to be used to",pos:"noun",example:"这是一个坏习惯。",    exampleMeaning:"This is a bad habit." },
  { char:"经验", pinyin:"jīngyàn",tone:1,meaning:"experience",    pos:"noun", example:"他有丰富的经验。",          exampleMeaning:"He has rich experience." },
  { char:"机会", pinyin:"jīhuì",  tone:1, meaning:"opportunity / chance",pos:"noun",example:"这是一个好机会。",    exampleMeaning:"This is a good opportunity." },
  { char:"关系", pinyin:"guānxì",tone:1, meaning:"relationship / connection",pos:"noun",example:"他们的关系很好。",exampleMeaning:"Their relationship is very good." },
  { char:"意见", pinyin:"yìjiàn",tone:4, meaning:"opinion / suggestion",pos:"noun",example:"你有什么意见？",       exampleMeaning:"Do you have any opinions?" },
  { char:"方法", pinyin:"fāngfǎ",tone:1, meaning:"method / way",  pos:"noun", example:"你知道什么好方法吗？",      exampleMeaning:"Do you know any good methods?" },
  { char:"条件", pinyin:"tiáojiàn",tone:2,meaning:"condition / requirement",pos:"noun",example:"条件不太好。",     exampleMeaning:"The conditions are not very good." },
  { char:"材料", pinyin:"cáiliào",tone:2, meaning:"material(s)",   pos:"noun", example:"准备好材料了吗？",          exampleMeaning:"Have you prepared the materials?" },
  { char:"计划", pinyin:"jìhuà",  tone:4, meaning:"plan",          pos:"noun", example:"你有什么计划？",            exampleMeaning:"What is your plan?" },
  { char:"目标", pinyin:"mùbiāo",tone:4, meaning:"goal / target", pos:"noun", example:"我的目标是学好中文。",      exampleMeaning:"My goal is to learn Chinese well." },
  { char:"效果", pinyin:"xiàoguǒ",tone:4,meaning:"effect / result",pos:"noun",example:"效果很好。",                exampleMeaning:"The effect is very good." },
  { char:"规则", pinyin:"guīzé",  tone:1, meaning:"rule(s)",       pos:"noun", example:"请遵守规则。",              exampleMeaning:"Please follow the rules." },
  { char:"活动", pinyin:"huódòng",tone:2,meaning:"activity / event",pos:"noun",example:"学校组织了很多活动。",     exampleMeaning:"The school organized many activities." },
  { char:"比赛", pinyin:"bǐsài",  tone:3, meaning:"competition / match",pos:"noun",example:"足球比赛很精彩。",     exampleMeaning:"The football match was exciting." },
  { char:"节目", pinyin:"jiémù",  tone:2, meaning:"program / show",pos:"noun", example:"这个节目很有意思。",        exampleMeaning:"This show is very interesting." },
  { char:"新闻", pinyin:"xīnwén", tone:1, meaning:"news",          pos:"noun", example:"你看新闻了吗？",            exampleMeaning:"Did you watch the news?" },
  { char:"报纸", pinyin:"bàozhǐ", tone:4, meaning:"newspaper",     pos:"noun", example:"他每天看报纸。",            exampleMeaning:"He reads the newspaper every day." },
  { char:"杂志", pinyin:"zázhì",  tone:2, meaning:"magazine",      pos:"noun", example:"这本杂志很好看。",          exampleMeaning:"This magazine is interesting." },
  { char:"文章", pinyin:"wénzhāng",tone:2,meaning:"article / essay",pos:"noun",example:"他写了一篇文章。",         exampleMeaning:"He wrote an article." },
  { char:"网站", pinyin:"wǎngzhàn",tone:3,meaning:"website",      pos:"noun", example:"这个网站很有用。",          exampleMeaning:"This website is very useful." },
  { char:"地址", pinyin:"dìzhǐ",  tone:4, meaning:"address",       pos:"noun", example:"你的地址是什么？",          exampleMeaning:"What is your address?" },
  { char:"护士", pinyin:"hùshi",  tone:4, meaning:"nurse",         pos:"noun", example:"她是一名护士。",            exampleMeaning:"She is a nurse." },
  { char:"律师", pinyin:"lǜshī",  tone:4, meaning:"lawyer",        pos:"noun", example:"我的律师很厉害。",          exampleMeaning:"My lawyer is very capable." },
  { char:"警察", pinyin:"jǐngchá",tone:3, meaning:"police / cop",  pos:"noun", example:"警察来了。",                exampleMeaning:"The police are here." },
  { char:"厨师", pinyin:"chúshī", tone:2, meaning:"chef / cook",   pos:"noun", example:"这位厨师做的菜很好吃。",    exampleMeaning:"The dishes made by this chef are delicious." },
  { char:"司机", pinyin:"sījī",   tone:1, meaning:"driver",        pos:"noun", example:"司机开车很小心。",          exampleMeaning:"The driver drives very carefully." },
  { char:"邻居", pinyin:"línjū",  tone:2, meaning:"neighbor",      pos:"noun", example:"我的邻居很友好。",          exampleMeaning:"My neighbor is very friendly." },
  { char:"客人", pinyin:"kèrén",  tone:4, meaning:"guest / visitor",pos:"noun",example:"客人来了。",                exampleMeaning:"The guests have arrived." },
  { char:"同事", pinyin:"tóngshì",tone:2, meaning:"colleague",     pos:"noun", example:"他是我的同事。",            exampleMeaning:"He is my colleague." },
  { char:"担心", pinyin:"dānxīn", tone:1, meaning:"to worry",      pos:"verb", example:"妈妈担心我。",              exampleMeaning:"Mom worries about me." },
  { char:"害怕", pinyin:"hàipà",  tone:4, meaning:"to be afraid",  pos:"verb", example:"我害怕蛇。",                exampleMeaning:"I'm afraid of snakes." },
  { char:"后悔", pinyin:"hòuhuǐ", tone:4, meaning:"to regret",     pos:"verb", example:"我后悔没有去。",            exampleMeaning:"I regret not going." },
  { char:"相信", pinyin:"xiāngxìn",tone:1,meaning:"to believe",   pos:"verb", example:"我相信你。",                exampleMeaning:"I believe you." },
  { char:"感动", pinyin:"gǎndòng",tone:3,meaning:"to be moved / touched",pos:"verb",example:"这个故事很感动。",    exampleMeaning:"This story is very touching." },
  { char:"同意", pinyin:"tóngyì", tone:2, meaning:"to agree",      pos:"verb", example:"我同意你的看法。",          exampleMeaning:"I agree with your opinion." },
  { char:"反对", pinyin:"fǎnduì", tone:3, meaning:"to oppose",     pos:"verb", example:"他反对这个计划。",          exampleMeaning:"He opposes this plan." },
  { char:"表示", pinyin:"biǎoshì",tone:3, meaning:"to express / indicate",pos:"verb",example:"他表示同意。",       exampleMeaning:"He expressed agreement." },
  { char:"联系", pinyin:"liánxì", tone:2, meaning:"to contact",    pos:"verb", example:"请和我联系。",              exampleMeaning:"Please contact me." },
  { char:"讨论", pinyin:"tǎolùn", tone:3, meaning:"to discuss",    pos:"verb", example:"我们讨论一下这个问题。",    exampleMeaning:"Let's discuss this problem." },
  { char:"解释", pinyin:"jiěshì", tone:3, meaning:"to explain",    pos:"verb", example:"请解释一下。",              exampleMeaning:"Please explain." },
  { char:"翻译", pinyin:"fānyì",  tone:1, meaning:"to translate / interpreter",pos:"verb",example:"请帮我翻译。",  exampleMeaning:"Please help me translate." },
  { char:"整理", pinyin:"zhěnglǐ",tone:3,meaning:"to organize / tidy up",pos:"verb",example:"我在整理房间。",     exampleMeaning:"I'm tidying up my room." },
  { char:"修理", pinyin:"xiūlǐ",  tone:1, meaning:"to repair / fix",pos:"verb",example:"他在修理电脑。",           exampleMeaning:"He is repairing the computer." },
  { char:"记得", pinyin:"jìde",   tone:4, meaning:"to remember",   pos:"verb", example:"你还记得我吗？",            exampleMeaning:"Do you still remember me?" },
  { char:"忘记", pinyin:"wàngjì", tone:4, meaning:"to forget",     pos:"verb", example:"我忘记带钥匙了。",          exampleMeaning:"I forgot to bring my keys." },
  { char:"注意", pinyin:"zhùyì",  tone:4, meaning:"to pay attention",pos:"verb",example:"注意安全。",              exampleMeaning:"Pay attention to safety." },
  { char:"发现", pinyin:"fāxiàn", tone:1, meaning:"to discover / find",pos:"verb",example:"我发现了一个问题。",    exampleMeaning:"I discovered a problem." },
  { char:"改变", pinyin:"gǎibiàn",tone:3,meaning:"to change / alter",pos:"verb",example:"他改变了主意。",          exampleMeaning:"He changed his mind." },
  { char:"保护", pinyin:"bǎohù",  tone:3, meaning:"to protect",    pos:"verb", example:"保护环境很重要。",          exampleMeaning:"Protecting the environment is important." },
  { char:"丰富", pinyin:"fēngfù", tone:1, meaning:"rich / abundant",pos:"adj", example:"这里的文化很丰富。",        exampleMeaning:"The culture here is very rich." },
  { char:"普通", pinyin:"pǔtōng", tone:3, meaning:"ordinary / common",pos:"adj",example:"他是一个普通人。",        exampleMeaning:"He is an ordinary person." },
  { char:"正常", pinyin:"zhèngcháng",tone:4,meaning:"normal",     pos:"adj",  example:"这很正常。",                exampleMeaning:"This is normal." },
  { char:"严重", pinyin:"yánzhòng",tone:2,meaning:"serious / severe",pos:"adj",example:"问题很严重。",             exampleMeaning:"The problem is very serious." },
  { char:"明显", pinyin:"míngxiǎn",tone:2,meaning:"obvious / clearly",pos:"adj",example:"效果很明显。",            exampleMeaning:"The effect is very obvious." },
  { char:"及时", pinyin:"jíshí",  tone:2, meaning:"timely / in time",pos:"adj",example:"他及时赶到了。",            exampleMeaning:"He arrived on time." },
  { char:"合适", pinyin:"héshì",  tone:2, meaning:"suitable / appropriate",pos:"adj",example:"这个工作很合适。",   exampleMeaning:"This job is very suitable." },
  { char:"方便", pinyin:"fāngbiàn",tone:1,meaning:"convenient",   pos:"adj",  example:"这里交通很方便。",          exampleMeaning:"Transportation is convenient here." },
  { char:"无论", pinyin:"wúlùn",  tone:2, meaning:"regardless / no matter",pos:"conj",example:"无论如何，我都要去。",exampleMeaning:"No matter what, I must go." },
  { char:"而且", pinyin:"érqiě",  tone:2, meaning:"moreover / and also",pos:"conj",example:"他聪明而且努力。",     exampleMeaning:"He is smart and hardworking." },
  { char:"或者", pinyin:"huòzhě", tone:4, meaning:"or (in statements)",pos:"conj",example:"你喝茶或者咖啡？",     exampleMeaning:"Do you drink tea or coffee?" },
  { char:"不但…而且", pinyin:"búdàn…érqiě",tone:4,meaning:"not only...but also",pos:"conj",example:"她不但漂亮，而且聪明。",exampleMeaning:"She is not only beautiful but also smart." },
];

// ---- HSK 4 additions ----
const HSK4_EXT = [
  { char:"研究", pinyin:"yánjiū",tone:2, meaning:"to research / study",pos:"verb",example:"他在研究人工智能。",     exampleMeaning:"He is researching artificial intelligence." },
  { char:"分析", pinyin:"fēnxī", tone:1, meaning:"to analyze",     pos:"verb", example:"我们需要分析数据。",        exampleMeaning:"We need to analyze the data." },
  { char:"评价", pinyin:"píngjià",tone:2, meaning:"to evaluate",    pos:"verb", example:"大家对他评价很高。",        exampleMeaning:"Everyone rates him highly." },
  { char:"申请", pinyin:"shēnqǐng",tone:1,meaning:"to apply for", pos:"verb", example:"我申请了签证。",            exampleMeaning:"I applied for a visa." },
  { char:"管理", pinyin:"guǎnlǐ",tone:3, meaning:"to manage / management",pos:"verb",example:"他管理公司。",      exampleMeaning:"He manages the company." },
  { char:"保证", pinyin:"bǎozhèng",tone:3,meaning:"to guarantee / promise",pos:"verb",example:"我保证不会迟到。",  exampleMeaning:"I promise I won't be late." },
  { char:"组织", pinyin:"zǔzhī",  tone:3, meaning:"to organize / organization",pos:"verb",example:"谁组织这次活动？",exampleMeaning:"Who is organizing this event?" },
  { char:"支持", pinyin:"zhīchí", tone:1, meaning:"to support",    pos:"verb", example:"我支持你的决定。",          exampleMeaning:"I support your decision." },
  { char:"表达", pinyin:"biǎodá", tone:3, meaning:"to express",    pos:"verb", example:"他不善于表达自己。",        exampleMeaning:"He is not good at expressing himself." },
  { char:"建议", pinyin:"jiànyì", tone:4, meaning:"to suggest / suggestion",pos:"verb",example:"我建议你早点休息。",exampleMeaning:"I suggest you rest early." },
  { char:"推荐", pinyin:"tuījiàn",tone:1, meaning:"to recommend",  pos:"verb", example:"你能推荐一本书吗？",        exampleMeaning:"Can you recommend a book?" },
  { char:"要求", pinyin:"yāoqiú", tone:1, meaning:"to require / demand",pos:"verb",example:"老板要求加班。",       exampleMeaning:"The boss requires overtime." },
  { char:"承认", pinyin:"chéngrèn",tone:2,meaning:"to admit / acknowledge",pos:"verb",example:"他承认了错误。",    exampleMeaning:"He admitted his mistake." },
  { char:"否认", pinyin:"fǒurèn", tone:3, meaning:"to deny",       pos:"verb", example:"他否认了这个说法。",        exampleMeaning:"He denied this claim." },
  { char:"强调", pinyin:"qiángdiào",tone:2,meaning:"to emphasize", pos:"verb", example:"他强调了这一点。",          exampleMeaning:"He emphasized this point." },
  { char:"预测", pinyin:"yùcè",   tone:4, meaning:"to predict / forecast",pos:"verb",example:"很难预测未来。",     exampleMeaning:"It's hard to predict the future." },
  { char:"模仿", pinyin:"mófǎng", tone:2, meaning:"to imitate",    pos:"verb", example:"孩子喜欢模仿大人。",        exampleMeaning:"Children like to imitate adults." },
  { char:"解释", pinyin:"jiěshì", tone:3, meaning:"to explain / interpretation",pos:"verb",example:"请你解释一下这个概念。",exampleMeaning:"Please explain this concept." },
  { char:"区别", pinyin:"qūbié",  tone:1, meaning:"difference / to distinguish",pos:"noun",example:"两者有什么区别？",exampleMeaning:"What is the difference between the two?" },
  { char:"标准", pinyin:"biāozhǔn",tone:1,meaning:"standard / criterion",pos:"noun",example:"符合标准了吗？",     exampleMeaning:"Does it meet the standard?" },
  { char:"程序", pinyin:"chéngxù",tone:2, meaning:"program / procedure",pos:"noun",example:"这个程序有问题。",     exampleMeaning:"This program has a problem." },
  { char:"数据", pinyin:"shùjù",  tone:4, meaning:"data",          pos:"noun", example:"数据分析很重要。",          exampleMeaning:"Data analysis is very important." },
  { char:"资源", pinyin:"zīyuán", tone:1, meaning:"resources",     pos:"noun", example:"我们缺少资源。",            exampleMeaning:"We lack resources." },
  { char:"平台", pinyin:"píngtái",tone:2, meaning:"platform",      pos:"noun", example:"这是一个学习平台。",        exampleMeaning:"This is a learning platform." },
  { char:"系统", pinyin:"xìtǒng", tone:4, meaning:"system",        pos:"noun", example:"系统需要更新。",            exampleMeaning:"The system needs to be updated." },
  { char:"结构", pinyin:"jiégòu", tone:2, meaning:"structure",     pos:"noun", example:"文章结构很清晰。",          exampleMeaning:"The article structure is very clear." },
  { char:"比例", pinyin:"bǐlì",   tone:3, meaning:"proportion / ratio",pos:"noun",example:"男女比例接近。",        exampleMeaning:"The male to female ratio is close." },
  { char:"趋势", pinyin:"qūshì",  tone:1, meaning:"trend / tendency",pos:"noun",example:"这是一个新趋势。",        exampleMeaning:"This is a new trend." },
  { char:"领域", pinyin:"lǐngyù", tone:3, meaning:"field / domain",pos:"noun", example:"他在这个领域很有名。",      exampleMeaning:"He is very famous in this field." },
  { char:"概念", pinyin:"gàiniàn",tone:4, meaning:"concept / idea",pos:"noun", example:"这个概念很新。",            exampleMeaning:"This concept is very new." },
  { char:"明确", pinyin:"míngquè",tone:2, meaning:"clear / definite",pos:"adj",example:"目标很明确。",              exampleMeaning:"The goal is very clear." },
  { char:"有效", pinyin:"yǒuxiào",tone:3, meaning:"effective / valid",pos:"adj",example:"这个方法很有效。",         exampleMeaning:"This method is very effective." },
  { char:"具体", pinyin:"jùtǐ",   tone:4, meaning:"concrete / specific",pos:"adj",example:"请给出具体方案。",      exampleMeaning:"Please give a specific plan." },
  { char:"相关", pinyin:"xiāngguān",tone:1,meaning:"related / relevant",pos:"adj",example:"这和我们无关。",        exampleMeaning:"This is not related to us." },
  { char:"基本", pinyin:"jīběn",  tone:1, meaning:"basic / fundamental",pos:"adj",example:"这是基本要求。",        exampleMeaning:"This is a basic requirement." },
  { char:"复杂", pinyin:"fùzá",   tone:4, meaning:"complex / complicated",pos:"adj",example:"这个问题很复杂。",    exampleMeaning:"This problem is very complex." },
  { char:"稳定", pinyin:"wěndìng",tone:3, meaning:"stable / steady",pos:"adj", example:"经济比较稳定。",            exampleMeaning:"The economy is relatively stable." },
  { char:"灵活", pinyin:"línghuó",tone:2, meaning:"flexible / agile",pos:"adj",example:"工作时间很灵活。",          exampleMeaning:"The working hours are very flexible." },
  { char:"独立", pinyin:"dúlì",   tone:2, meaning:"independent",   pos:"adj",  example:"她是一个独立的人。",         exampleMeaning:"She is an independent person." },
  { char:"全面", pinyin:"quánmiàn",tone:2,meaning:"comprehensive", pos:"adj",  example:"需要全面分析。",            exampleMeaning:"A comprehensive analysis is needed." },
];

// ---- HSK 5 additions ----
const HSK5_EXT = [
  { char:"隐喻", pinyin:"yǐnyù",  tone:3, meaning:"metaphor",     pos:"noun", example:"这首诗充满了隐喻。",         exampleMeaning:"This poem is full of metaphors." },
  { char:"悖论", pinyin:"bèilùn",  tone:4, meaning:"paradox",      pos:"noun", example:"这是一个有趣的悖论。",       exampleMeaning:"This is an interesting paradox." },
  { char:"共识", pinyin:"gòngshí", tone:4, meaning:"consensus",    pos:"noun", example:"我们达成了共识。",           exampleMeaning:"We reached a consensus." },
  { char:"偏见", pinyin:"piānjiàn",tone:1, meaning:"prejudice / bias",pos:"noun",example:"我们要克服偏见。",        exampleMeaning:"We must overcome prejudice." },
  { char:"伦理", pinyin:"lúnlǐ",   tone:2, meaning:"ethics",       pos:"noun", example:"这涉及伦理问题。",           exampleMeaning:"This involves ethical issues." },
  { char:"意识", pinyin:"yìshí",   tone:4, meaning:"consciousness / awareness",pos:"noun",example:"环保意识越来越强。",exampleMeaning:"Environmental awareness is growing." },
  { char:"假设", pinyin:"jiǎshè",  tone:3, meaning:"hypothesis / to assume",pos:"noun",example:"这个假设需要验证。", exampleMeaning:"This hypothesis needs verification." },
  { char:"机制", pinyin:"jīzhì",   tone:1, meaning:"mechanism / system",pos:"noun",example:"建立有效的机制。",       exampleMeaning:"Establish an effective mechanism." },
  { char:"框架", pinyin:"kuàngjià", tone:4, meaning:"framework",    pos:"noun", example:"理论框架很重要。",           exampleMeaning:"The theoretical framework is important." },
  { char:"维度", pinyin:"wéidù",   tone:2, meaning:"dimension",    pos:"noun", example:"从不同维度分析。",           exampleMeaning:"Analyze from different dimensions." },
  { char:"媒介", pinyin:"méijiè",  tone:2, meaning:"medium / media",pos:"noun",example:"社交媒介改变了沟通方式。",   exampleMeaning:"Social media has changed communication." },
  { char:"素养", pinyin:"sùyǎng",  tone:4, meaning:"literacy / competency",pos:"noun",example:"提高数字素养。",     exampleMeaning:"Improve digital literacy." },
  { char:"演变", pinyin:"yǎnbiàn", tone:3, meaning:"to evolve / evolution",pos:"verb",example:"语言不断演变。",     exampleMeaning:"Language constantly evolves." },
  { char:"颠覆", pinyin:"diānfù",  tone:1, meaning:"to overturn / disrupt",pos:"verb",example:"新技术颠覆了行业。", exampleMeaning:"New technology disrupted the industry." },
  { char:"构建", pinyin:"gòujiàn", tone:4, meaning:"to construct / build",pos:"verb",example:"构建和谐社会。",      exampleMeaning:"Build a harmonious society." },
  { char:"阐述", pinyin:"chǎnshù", tone:3, meaning:"to elaborate / expound",pos:"verb",example:"他详细阐述了观点。",exampleMeaning:"He elaborated on his point." },
  { char:"反思", pinyin:"fǎnsī",   tone:3, meaning:"to reflect / introspect",pos:"verb",example:"我们需要反思。",   exampleMeaning:"We need to reflect." },
  { char:"推动", pinyin:"tuīdòng", tone:1, meaning:"to promote / push forward",pos:"verb",example:"科技推动了发展。",exampleMeaning:"Technology promoted development." },
  { char:"界定", pinyin:"jièdìng", tone:4, meaning:"to define / delimit",pos:"verb",example:"如何界定成功？",       exampleMeaning:"How do we define success?" },
  { char:"凸显", pinyin:"tūxiǎn",  tone:1, meaning:"to highlight / stand out",pos:"verb",example:"这凸显了问题。",  exampleMeaning:"This highlights the problem." },
  { char:"抽象", pinyin:"chōuxiàng",tone:1,meaning:"abstract",     pos:"adj",  example:"这个理论很抽象。",           exampleMeaning:"This theory is very abstract." },
  { char:"深刻", pinyin:"shēnkè",  tone:1, meaning:"profound / deep",pos:"adj",example:"他的分析很深刻。",          exampleMeaning:"His analysis is very profound." },
  { char:"显著", pinyin:"xiǎnzhù", tone:3, meaning:"significant / notable",pos:"adj",example:"效果非常显著。",     exampleMeaning:"The effect is very significant." },
  { char:"潜在", pinyin:"qiánzài", tone:2, meaning:"potential / latent",pos:"adj",example:"潜在的风险很大。",        exampleMeaning:"The potential risk is great." },
  { char:"固有", pinyin:"gùyǒu",   tone:4, meaning:"inherent / intrinsic",pos:"adj",example:"这是固有的问题。",     exampleMeaning:"This is an inherent problem." },
  { char:"主流", pinyin:"zhǔliú",  tone:3, meaning:"mainstream",   pos:"adj",  example:"这是主流观点。",             exampleMeaning:"This is the mainstream view." },
  { char:"边缘", pinyin:"biānyuán",tone:1, meaning:"margin / edge",pos:"noun", example:"社会边缘群体需要关注。",     exampleMeaning:"Marginalized groups need attention." },
  { char:"互动", pinyin:"hùdòng",  tone:4, meaning:"interaction",  pos:"noun", example:"课堂互动很重要。",           exampleMeaning:"Classroom interaction is important." },
  { char:"内涵", pinyin:"nèihán",  tone:4, meaning:"connotation / depth",pos:"noun",example:"中国文化内涵丰富。",   exampleMeaning:"Chinese culture has rich depth." },
  { char:"格局", pinyin:"géjú",    tone:2, meaning:"pattern / overall situation",pos:"noun",example:"国际格局在变化。",exampleMeaning:"The international landscape is changing." },
];

// ---- HSK 6 (NEW LEVEL) ----
const HSK6_DATA = [
  { char:"晦涩", pinyin:"huìsè",   tone:4, meaning:"obscure / abstruse",pos:"adj",example:"这篇论文很晦涩。",      exampleMeaning:"This paper is very obscure." },
  { char:"斡旋", pinyin:"wòxuán",   tone:4, meaning:"to mediate / good offices",pos:"verb",example:"联合国出面斡旋。",exampleMeaning:"The UN stepped in to mediate." },
  { char:"迂腐", pinyin:"yūfǔ",     tone:1, meaning:"pedantic / old-fashioned",pos:"adj",example:"他的观点有些迂腐。",exampleMeaning:"His views are somewhat pedantic." },
  { char:"桎梏", pinyin:"zhìgù",    tone:4, meaning:"shackles / fetters (fig.)",pos:"noun",example:"突破传统桎梏。", exampleMeaning:"Break free from traditional shackles." },
  { char:"蕴含", pinyin:"yùnhán",   tone:4, meaning:"to contain / to embody",pos:"verb",example:"这幅画蕴含深意。",  exampleMeaning:"This painting embodies deep meaning." },
  { char:"匮乏", pinyin:"kuìfá",    tone:4, meaning:"deficient / lacking",pos:"adj",example:"资源十分匮乏。",        exampleMeaning:"Resources are very scarce." },
  { char:"裨益", pinyin:"bìyì",     tone:4, meaning:"benefit / profit (literary)",pos:"noun",example:"这对学习裨益良多。",exampleMeaning:"This greatly benefits studying." },
  { char:"笃信", pinyin:"dǔxìn",    tone:3, meaning:"to firmly believe in",pos:"verb",example:"他笃信科学。",         exampleMeaning:"He firmly believes in science." },
  { char:"缜密", pinyin:"zhěnmì",   tone:3, meaning:"meticulous / careful",pos:"adj",example:"他的思维非常缜密。",    exampleMeaning:"His thinking is very meticulous." },
  { char:"鞭辟入里", pinyin:"biān pì rù lǐ",tone:1,meaning:"penetrating / incisive",pos:"adj",example:"评论鞭辟入里。",exampleMeaning:"The critique is incisive." },
  { char:"沧桑", pinyin:"cāngsāng", tone:1, meaning:"vicissitudes / weathered",pos:"noun",example:"他的眼神中满是沧桑。",exampleMeaning:"His eyes are full of life's vicissitudes." },
  { char:"恪守", pinyin:"kèshǒu",   tone:4, meaning:"to scrupulously observe (rules)",pos:"verb",example:"他恪守承诺。",exampleMeaning:"He scrupulously keeps his promises." },
  { char:"铿锵", pinyin:"kēngqiāng",tone:1, meaning:"sonorous / forceful",pos:"adj",example:"她的声音铿锵有力。",     exampleMeaning:"Her voice is sonorous and forceful." },
  { char:"博弈", pinyin:"bóyì",     tone:2, meaning:"game theory / strategic contest",pos:"noun",example:"国际关系充满博弈。",exampleMeaning:"International relations are full of strategic contests." },
  { char:"隽永", pinyin:"juànyǒng", tone:4, meaning:"meaningful and lasting",pos:"adj",example:"这篇散文隽永深刻。",  exampleMeaning:"This essay is meaningful and profound." },
  { char:"厚重", pinyin:"hòuzhòng", tone:4, meaning:"heavy / profound (depth)",pos:"adj",example:"历史厚重的积淀。",   exampleMeaning:"The profound accumulation of history." },
  { char:"坎坷", pinyin:"kǎnkě",    tone:3, meaning:"bumpy / rough (life)",pos:"adj",example:"他的一生坎坷。",        exampleMeaning:"His life was rough." },
  { char:"窥探", pinyin:"kuītàn",   tone:1, meaning:"to spy / to peer into",pos:"verb",example:"窥探历史的真相。",     exampleMeaning:"Peer into the truth of history." },
  { char:"颓废", pinyin:"tuífèi",   tone:2, meaning:"decadent / dejected",pos:"adj",example:"不要颓废度日。",          exampleMeaning:"Don't live in decadence." },
  { char:"磅礴", pinyin:"pángbó",   tone:2, meaning:"majestic / magnificent",pos:"adj",example:"气势磅礴的山川。",     exampleMeaning:"Majestic mountains and rivers." },
  { char:"蜕变", pinyin:"tuìbiàn",  tone:4, meaning:"to transform / undergo metamorphosis",pos:"verb",example:"她完成了华丽的蜕变。",exampleMeaning:"She completed a magnificent transformation." },
  { char:"掣肘", pinyin:"chèzhǒu",  tone:4, meaning:"to impede / to hinder",pos:"verb",example:"资金不足掣肘了项目。",exampleMeaning:"Insufficient funds impeded the project." },
  { char:"矜持", pinyin:"jīnchí",   tone:1, meaning:"reserved / restrained",pos:"adj",example:"她表现得很矜持。",     exampleMeaning:"She behaved with great restraint." },
  { char:"豁达", pinyin:"huòdá",    tone:4, meaning:"open-minded / magnanimous",pos:"adj",example:"他为人豁达。",      exampleMeaning:"He is open-minded." },
  { char:"笃定", pinyin:"dǔdìng",   tone:3, meaning:"certain / assured",pos:"adj",example:"他对未来很笃定。",          exampleMeaning:"He is very assured about the future." },
  { char:"溯源", pinyin:"sùyuán",   tone:4, meaning:"to trace back to the origin",pos:"verb",example:"溯源文化根基。", exampleMeaning:"Trace back to the cultural roots." },
  { char:"辗转", pinyin:"zhǎnzhuǎn",tone:3, meaning:"toss and turn / pass through many places",pos:"verb",example:"他辗转多地求学。",exampleMeaning:"He went through many places seeking education." },
  { char:"遽然", pinyin:"jùrán",    tone:4, meaning:"suddenly / abruptly",pos:"adv",example:"消息来得遽然。",          exampleMeaning:"The news came abruptly." },
  { char:"恢弘", pinyin:"huīhóng",  tone:1, meaning:"vast / grand",      pos:"adj",example:"恢弘的建筑令人震撼。",     exampleMeaning:"The grand architecture is awe-inspiring." },
  { char:"赓续", pinyin:"gēngxù",   tone:1, meaning:"to continue / to carry on",pos:"verb",example:"赓续文化传承。",   exampleMeaning:"Carry on the cultural heritage." },
  { char:"颠沛", pinyin:"diānpèi",  tone:1, meaning:"displaced / wandering",pos:"adj",example:"颠沛流离的生活。",      exampleMeaning:"A displaced and wandering life." },
  { char:"殷切", pinyin:"yīnqiè",   tone:1, meaning:"ardent / earnest",  pos:"adj",example:"他殷切期望年轻人进步。",   exampleMeaning:"He earnestly hopes young people progress." },
  { char:"涵养", pinyin:"hányǎng",  tone:2, meaning:"self-restraint / cultivation",pos:"noun",example:"一个有涵养的人。",exampleMeaning:"A person of cultivation." },
  { char:"砥砺", pinyin:"dǐlì",     tone:3, meaning:"to temper / to forge (character)",pos:"verb",example:"砥砺前行。", exampleMeaning:"Press forward with determination." },
  { char:"真挚", pinyin:"zhēnzhì",  tone:1, meaning:"sincere / genuine", pos:"adj",example:"他的感情很真挚。",         exampleMeaning:"His feelings are very sincere." },
  { char:"踌躇", pinyin:"chóuchú",  tone:2, meaning:"to hesitate / to waver",pos:"verb",example:"他踌躇不前。",        exampleMeaning:"He hesitated and could not move forward." },
  { char:"诡谲", pinyin:"guǐjué",   tone:3, meaning:"treacherous / strange",pos:"adj",example:"政治局势诡谲多变。",    exampleMeaning:"The political situation is treacherous and unpredictable." },
  { char:"岿然", pinyin:"kuīrán",   tone:1, meaning:"towering and immovable",pos:"adj",example:"他岿然不动。",         exampleMeaning:"He stood firm and immovable." },
  { char:"翌日", pinyin:"yìrì",     tone:4, meaning:"the next day (literary)",pos:"noun",example:"翌日清晨出发。",     exampleMeaning:"Departed early the next morning." },
  { char:"夙愿", pinyin:"sùyuàn",   tone:4, meaning:"long-cherished wish",pos:"noun",example:"他终于实现了夙愿。",     exampleMeaning:"He finally realized his long-cherished wish." },
  { char:"殚精竭虑",pinyin:"dān jīng jié lǜ",tone:1,meaning:"to spare no effort / to rack one's brains",pos:"verb",example:"他殚精竭虑地工作。",exampleMeaning:"He spared no effort in his work." },
  { char:"藩篱", pinyin:"fānlí",    tone:1, meaning:"fence / barrier (fig.)",pos:"noun",example:"打破学科藩篱。",       exampleMeaning:"Break down disciplinary barriers." },
  { char:"睿智", pinyin:"ruìzhì",   tone:4, meaning:"wise / sagacious",  pos:"adj",example:"他是一个睿智的人。",       exampleMeaning:"He is a wise person." },
  { char:"笼统", pinyin:"lǒngtǒng", tone:3, meaning:"vague / general",   pos:"adj",example:"说法太笼统了。",          exampleMeaning:"The statement is too vague." },
  { char:"潸然泪下",pinyin:"shān rán lèi xià",tone:1,meaning:"tears streaming down (literary)",pos:"verb",example:"令人潸然泪下。",exampleMeaning:"Moved to tears." },
  { char:"肇始", pinyin:"zhàoshǐ",  tone:4, meaning:"to originate / to begin",pos:"verb",example:"工业革命肇始于英国。",exampleMeaning:"The Industrial Revolution originated in Britain." },
  { char:"暮霭", pinyin:"mùǎi",     tone:4, meaning:"evening mist / twilight haze",pos:"noun",example:"暮霭沉沉。",    exampleMeaning:"The evening mist is thick." },
  { char:"罹患", pinyin:"líhuàn",   tone:2, meaning:"to fall ill with / to suffer from",pos:"verb",example:"他罹患重病。",exampleMeaning:"He fell seriously ill." },
  { char:"缱绻", pinyin:"qiǎnquǎn", tone:3, meaning:"tenderly attached / lingering",pos:"adj",example:"缱绻的思念。",  exampleMeaning:"Lingering longing." },
  { char:"熠熠生辉",pinyin:"yì yì shēng huī",tone:4,meaning:"glittering / dazzling",pos:"adj",example:"宝石熠熠生辉。",exampleMeaning:"The gem glitters brilliantly." },
];

// ---- Extra chengyu ----
const CHENGYU_EXT = [
  {
    chars:"刻舟求剑", pinyin:"kè zhōu qiú jiàn", tone:4,
    literal:"Carve the boat, seek the sword",
    meaning:"To stubbornly cling to outdated methods; refuse to adapt",
    origin:"From 《吕氏春秋》— a man dropped his sword into a river and carved a mark on the boat where it fell.",
    example:"时代在变，不能刻舟求剑。",
    exampleMeaning:"Times are changing — you can't cling to outdated methods.",
    level:"HSK 4"
  },
  {
    chars:"杞人忧天", pinyin:"qǐ rén yōu tiān", tone:3,
    literal:"Man from Qi worries about the sky",
    meaning:"To worry about things that are unlikely or impossible; needless anxiety",
    origin:"From 《列子》— a man from Qi was afraid the sky would fall.",
    example:"你不要杞人忧天了。",
    exampleMeaning:"Stop worrying about things that won't happen.",
    level:"HSK 5"
  },
  {
    chars:"狐假虎威", pinyin:"hú jiǎ hǔ wēi", tone:2,
    literal:"Fox borrows tiger's might",
    meaning:"To bully others by flaunting one's powerful connections",
    origin:"From 《战国策》— a fox walked in front of a tiger, and animals fled from the tiger, not the fox.",
    example:"他不过是狐假虎威罢了。",
    exampleMeaning:"He's just riding on someone else's power.",
    level:"HSK 5"
  },
  {
    chars:"叶公好龙", pinyin:"yè gōng hào lóng", tone:4,
    literal:"Lord Ye loves dragons",
    meaning:"To profess love for something but actually fear it; hypocrisy",
    origin:"Lord Ye decorated everything with dragons but was terrified when a real dragon visited.",
    example:"他说喜欢挑战，其实叶公好龙。",
    exampleMeaning:"He says he likes challenges, but he's like Lord Ye who loved dragons.",
    level:"HSK 5"
  },
  {
    chars:"抛砖引玉", pinyin:"pāo zhuān yǐn yù", tone:1,
    literal:"Cast a brick to attract jade",
    meaning:"To offer a modest idea to inspire a better one from others; a humble opener",
    origin:"Common literary modesty — presenting a rough idea to elicit brilliance from others.",
    example:"我先抛砖引玉，说说我的看法。",
    exampleMeaning:"Let me cast the first stone and share my humble opinion.",
    level:"HSK 5"
  },
  {
    chars:"望梅止渴", pinyin:"wàng méi zhǐ kě", tone:4,
    literal:"Gaze at plums to quench thirst",
    meaning:"To comfort oneself with illusions; imaginary consolation",
    origin:"Cao Cao told his soldiers there were plum trees ahead, and their mouths watered, relieving their thirst.",
    example:"空想只是望梅止渴。",
    exampleMeaning:"Empty dreams are just looking at plums to quench thirst.",
    level:"HSK 5"
  },
  {
    chars:"愚公移山", pinyin:"yú gōng yí shān", tone:2,
    literal:"Foolish old man moves a mountain",
    meaning:"Perseverance and determination can overcome any obstacle",
    origin:"From 《列子》— old Yugong decided to move two mountains blocking his path, and heaven was moved by his resolve.",
    example:"只要坚持，就能愚公移山。",
    exampleMeaning:"With persistence, even mountains can be moved.",
    level:"HSK 4"
  },
  {
    chars:"纸上谈兵", pinyin:"zhǐ shàng tán bīng", tone:3,
    literal:"Discuss military strategy on paper",
    meaning:"To be all theory and no practice; armchair strategist",
    origin:"From 《史记》— Zhao Kuo studied his father's books but failed disastrously in real battle.",
    example:"不要纸上谈兵，要实际行动。",
    exampleMeaning:"Don't just talk theory — take real action.",
    level:"HSK 5"
  },
  {
    chars:"卧薪尝胆", pinyin:"wò xīn cháng dǎn", tone:4,
    literal:"Sleep on brushwood, taste gall",
    meaning:"To endure hardship to motivate oneself for revenge or achievement",
    origin:"King Goujian of Yue slept on firewood and tasted gall daily to remind himself of his humiliation.",
    example:"他卧薪尝胆，终于成功了。",
    exampleMeaning:"He endured hardship with determination and finally succeeded.",
    level:"HSK 5"
  },
  {
    chars:"精益求精", pinyin:"jīng yì qiú jīng", tone:1,
    literal:"Refine and seek further refinement",
    meaning:"To constantly strive for perfection; keep improving",
    origin:"From 《论语》— never stop pursuing excellence.",
    example:"做事要精益求精。",
    exampleMeaning:"In everything you do, strive for perfection.",
    level:"HSK 4"
  },
  {
    chars:"破釜沉舟", pinyin:"pò fǔ chén zhōu", tone:4,
    literal:"Break the cauldrons, sink the boats",
    meaning:"To burn one's bridges; fight with total commitment and no retreat",
    origin:"General Xiang Yu destroyed his own army's cooking pots and boats before battle to show there was no turning back.",
    example:"他破釜沉舟，决心成功。",
    exampleMeaning:"He burned his bridges and is determined to succeed.",
    level:"HSK 5"
  },
  {
    chars:"四面楚歌", pinyin:"sì miàn chǔ gē", tone:4,
    literal:"Chu songs from all four sides",
    meaning:"Surrounded by enemies; under attack from all sides",
    origin:"Xiang Yu heard Chu folk songs from all sides and realized his soldiers had defected.",
    example:"他现在四面楚歌，处境艰难。",
    exampleMeaning:"He is now besieged on all sides and in a difficult situation.",
    level:"HSK 5"
  },
  {
    chars:"画龙点睛", pinyin:"huà lóng diǎn jīng", tone:4,
    literal:"Paint a dragon, dot the eyes",
    meaning:"To add the finishing touch that brings something to life",
    origin:"A painter's dragons came to life only after he added their eyes.",
    example:"最后这句话画龙点睛。",
    exampleMeaning:"That final sentence was the perfect finishing touch.",
    level:"HSK 4"
  },
  {
    chars:"胸有成竹", pinyin:"xiōng yǒu chéng zhú", tone:1,
    literal:"Bamboo in the chest",
    meaning:"To have a well-thought-out plan; confident and prepared",
    origin:"A painter meditated on bamboo until he could see the complete painting in his mind. 文与可 画竹.",
    example:"他胸有成竹地上台演讲。",
    exampleMeaning:"He went on stage to speak with full confidence.",
    level:"HSK 4"
  },
  {
    chars:"班门弄斧", pinyin:"bān mén nòng fǔ", tone:1,
    literal:"Wield an axe at Lu Ban's door",
    meaning:"Show off one's skills before an expert; foolish boasting",
    origin:"Lu Ban was the greatest carpenter; swinging an axe at his door is embarrassing.",
    example:"在他面前卖弄技术，简直班门弄斧。",
    exampleMeaning:"Showing off technical skills in front of him is like wielding an axe at the master's door.",
    level:"HSK 5"
  },
  {
    chars:"入乡随俗", pinyin:"rù xiāng suí sú", tone:4,
    literal:"Enter a village, follow its customs",
    meaning:"When in Rome, do as the Romans do",
    origin:"Ancient Chinese travel wisdom — respect local customs.",
    example:"到了国外要入乡随俗。",
    exampleMeaning:"When abroad, follow the local customs.",
    level:"HSK 4"
  },
  {
    chars:"一举两得", pinyin:"yī jǔ liǎng dé", tone:1,
    literal:"One action, two gains",
    meaning:"To achieve two goals with a single effort",
    origin:"Similar to 一石二鸟 — Chinese original idiom.",
    example:"这个办法一举两得。",
    exampleMeaning:"This solution achieves two goals at once.",
    level:"HSK 3"
  },
  {
    chars:"未雨绸缪", pinyin:"wèi yǔ chóu móu", tone:4,
    literal:"Before rain, prepare the thatch",
    meaning:"To prepare for a rainy day; plan ahead",
    origin:"From 《诗经》— fix the roof before the rain comes.",
    example:"我们要未雨绸缪，提前做好准备。",
    exampleMeaning:"We should plan ahead and prepare in advance.",
    level:"HSK 5"
  },
  {
    chars:"水落石出", pinyin:"shuǐ luò shí chū", tone:4,
    literal:"Water recedes, rocks appear",
    meaning:"The truth will come to light; as things calm, facts emerge",
    origin:"Su Shi, 《后赤壁赋》— natural metaphor for revelation.",
    example:"时间长了，总会水落石出。",
    exampleMeaning:"Given enough time, the truth always comes out.",
    level:"HSK 4"
  },
  {
    chars:"不可思议", pinyin:"bù kě sī yì", tone:4,
    literal:"Cannot think, cannot discuss",
    meaning:"Unbelievable; inconceivable",
    origin:"Buddhist term — beyond human comprehension.",
    example:"这件事简直不可思议。",
    exampleMeaning:"This matter is simply inconceivable.",
    level:"HSK 4"
  },
  {
    chars:"势在必行", pinyin:"shì zài bì xíng", tone:4,
    literal:"The trend is such that it must be done",
    meaning:"Imperative; something that must be done",
    origin:"Used in political and reform contexts.",
    example:"改革势在必行。",
    exampleMeaning:"Reform is imperative.",
    level:"HSK 5"
  },
  {
    chars:"举一反三", pinyin:"jǔ yī fǎn sān", tone:3,
    literal:"Point out one, infer three",
    meaning:"To draw inferences by analogy; learn by deduction",
    origin:"Confucius, 《论语》— the ideal student learns one thing and understands three.",
    example:"学习要举一反三。",
    exampleMeaning:"When studying, draw inferences by analogy.",
    level:"HSK 4"
  },
  {
    chars:"鹤立鸡群", pinyin:"hè lì jī qún", tone:4,
    literal:"A crane standing among chickens",
    meaning:"To stand out from the crowd; head and shoulders above the rest",
    origin:"Description of Jikang's son — outstanding among peers.",
    example:"她在人群中鹤立鸡群。",
    exampleMeaning:"She stands out from the crowd.",
    level:"HSK 5"
  },
  {
    chars:"锦上添花", pinyin:"jǐn shàng tiān huā", tone:3,
    literal:"Add flowers to brocade",
    meaning:"To make something good even better; icing on the cake",
    origin:"Classical literary metaphor.",
    example:"这个设计锦上添花。",
    exampleMeaning:"This design is the icing on the cake.",
    level:"HSK 4"
  },
  {
    chars:"雪中送炭", pinyin:"xuě zhōng sòng tàn", tone:3,
    literal:"Send charcoal in the snow",
    meaning:"To provide timely help in someone's hour of need",
    origin:"Contrast to 锦上添花 — help when truly needed.",
    example:"你的帮助真是雪中送炭。",
    exampleMeaning:"Your help is truly timely assistance.",
    level:"HSK 4"
  },
  {
    chars:"百折不挠", pinyin:"bǎi zhé bù náo", tone:3,
    literal:"One hundred bends, does not yield",
    meaning:"Persist through setbacks without giving up; indomitable spirit",
    origin:"From 《后汉书》— describes a person who experienced countless hardships but never surrendered.",
    example:"他百折不挠，终于实现了梦想。",
    exampleMeaning:"He persevered through every setback and finally achieved his dream.",
    level:"HSK 4"
  },
  {
    chars:"水滴石穿", pinyin:"shuǐ dī shí chuān", tone:3,
    literal:"Water drops pierce stone",
    meaning:"Constant small efforts eventually overcome great obstacles",
    origin:"From 《汉书》— even the softest thing (water) can overcome the hardest (stone) through persistence.",
    example:"只要坚持，水滴石穿，一定能成功。",
    exampleMeaning:"Just keep at it — water drips through stone, you will certainly succeed.",
    level:"HSK 3"
  },
  {
    chars:"不耻下问", pinyin:"bù chǐ xià wèn", tone:4,
    literal:"Not ashamed to ask those below",
    meaning:"Willing to learn from anyone, regardless of status; intellectual humility",
    origin:"Confucius praised a disciple who was 'not ashamed to seek guidance from his inferiors.'",
    example:"学习时要不耻下问，不懂就问。",
    exampleMeaning:"When studying, don't be ashamed to ask questions — ask whenever you don't understand.",
    level:"HSK 4"
  },
  {
    chars:"温故知新", pinyin:"wēn gù zhī xīn", tone:1,
    literal:"Warm up the old, know the new",
    meaning:"By reviewing old knowledge you gain new understanding",
    origin:"Confucius, 《论语》— 'He who learns the new by reviewing the old may be a teacher.'",
    example:"每天温故知新，学习会进步很快。",
    exampleMeaning:"Reviewing and learning new things daily will lead to rapid progress.",
    level:"HSK 3"
  },
  {
    chars:"青出于蓝", pinyin:"qīng chū yú lán", tone:1,
    literal:"Blue comes from indigo but exceeds it",
    meaning:"The student surpasses the teacher; the new generation excels the old",
    origin:"《荀子》— blue dye extracted from the indigo plant is bluer than the plant itself.",
    example:"这个学生青出于蓝，超过了老师。",
    exampleMeaning:"This student has surpassed the teacher.",
    level:"HSK 5"
  },
  {
    chars:"勤能补拙", pinyin:"qín néng bǔ zhuō", tone:2,
    literal:"Diligence can compensate for lack of talent",
    meaning:"Hard work makes up for natural deficiencies",
    origin:"Classical Chinese educational philosophy emphasizing effort over innate talent.",
    example:"他虽然不聪明，但勤能补拙，成绩很好。",
    exampleMeaning:"Although he isn't naturally talented, his diligence compensates — his grades are excellent.",
    level:"HSK 3"
  },
  {
    chars:"循序渐进", pinyin:"xún xù jiàn jìn", tone:2,
    literal:"Follow order, advance gradually",
    meaning:"Proceed step by step in the proper order; do things systematically",
    origin:"《论语》— Confucius' method of teaching was to guide students gradually according to their level.",
    example:"学语言要循序渐进，不能急于求成。",
    exampleMeaning:"Learning a language must be gradual and systematic — you can't rush.",
    level:"HSK 4"
  },
  {
    chars:"积少成多", pinyin:"jī shǎo chéng duō", tone:1,
    literal:"Accumulate little until it becomes much",
    meaning:"Many a little makes a mickle; small consistent efforts lead to great results",
    origin:"Common Chinese proverb stressing the power of consistent, incremental progress.",
    example:"每天学十个词，积少成多，一年就学了三千多个。",
    exampleMeaning:"Learn ten words a day — it adds up, and in a year you'll know over 3,000.",
    level:"HSK 3"
  },
  {
    chars:"千里之行始于足下", pinyin:"qiān lǐ zhī xíng shǐ yú zú xià", tone:1,
    literal:"A journey of a thousand li begins beneath one's feet",
    meaning:"Every great achievement begins with a single small step",
    origin:"Laozi, 《道德经》— the mightiest journey starts with the first humble step.",
    example:"千里之行始于足下，今天就开始学中文吧！",
    exampleMeaning:"Every great journey begins with one step — start learning Chinese today!",
    level:"HSK 4"
  },
  {
    chars:"知己知彼", pinyin:"zhī jǐ zhī bǐ", tone:1,
    literal:"Know yourself, know your opponent",
    meaning:"Know your own strengths and your opponent's; thorough understanding leads to victory",
    origin:"Sun Tzu, 《孙子兵法》— 'Know yourself and know your enemy, and you will never be defeated.'",
    example:"考试前要知己知彼，了解考试范围。",
    exampleMeaning:"Before an exam, know yourself and your subject — understand the scope of the test.",
    level:"HSK 5"
  },
  {
    chars:"一日千里", pinyin:"yī rì qiān lǐ", tone:4,
    literal:"A thousand li in one day",
    meaning:"Making extremely rapid progress; advancing at a tremendous pace",
    origin:"From 《史记》— describing a horse of exceptional speed.",
    example:"中国经济的发展一日千里。",
    exampleMeaning:"China's economic development is advancing at a tremendous pace.",
    level:"HSK 4"
  },
  {
    chars:"良药苦口", pinyin:"liáng yào kǔ kǒu", tone:2,
    literal:"Good medicine tastes bitter",
    meaning:"Honest advice or constructive criticism may be hard to hear but benefits you",
    origin:"《孔子家语》— sincere admonition, like bitter medicine, is for one's benefit.",
    example:"良药苦口，老师的批评是为了帮助你。",
    exampleMeaning:"Good medicine is bitter — the teacher's criticism is to help you.",
    level:"HSK 4"
  },
  {
    chars:"名副其实", pinyin:"míng fù qí shí", tone:2,
    literal:"The name truly matches the reality",
    meaning:"To live up to one's reputation; exactly as claimed; genuine",
    origin:"Classical Chinese — used to affirm that something truly deserves its title.",
    example:"他名副其实，确实是最好的学生。",
    exampleMeaning:"He truly lives up to the reputation — he really is the best student.",
    level:"HSK 4"
  },
  {
    chars:"脚踏实地", pinyin:"jiǎo tà shí dì", tone:3,
    literal:"Feet firmly planted on solid ground",
    meaning:"Down-to-earth; practical; hardworking and grounded in reality",
    origin:"Classical Chinese — describes someone who works steadily and practically, not in empty dreams.",
    example:"成功要脚踏实地，一步一步来。",
    exampleMeaning:"Success requires keeping your feet on the ground — step by step.",
    level:"HSK 3"
  },
  {
    chars:"有备无患", pinyin:"yǒu bèi wú huàn", tone:4,
    literal:"If prepared, there is no trouble",
    meaning:"Preparedness eliminates problems; being ready prevents disaster",
    origin:"From 《左传》— 'Preparation prevents calamity.'",
    example:"考试前认真复习，有备无患。",
    exampleMeaning:"Review carefully before the exam — preparedness prevents problems.",
    level:"HSK 4"
  },
  {
    chars:"同甘共苦", pinyin:"tóng gān gòng kǔ", tone:2,
    literal:"Share sweet and bitter together",
    meaning:"To share both joys and hardships; stand by each other through thick and thin",
    origin:"Classical Chinese — the mark of true friendship or lasting partnership.",
    example:"真正的朋友要同甘共苦。",
    exampleMeaning:"True friends share both the sweet and the bitter.",
    level:"HSK 4"
  },
  {
    chars:"物以类聚", pinyin:"wù yǐ lèi jù", tone:4,
    literal:"Things of the same kind gather together",
    meaning:"Birds of a feather flock together; like attracts like",
    origin:"From 《易经》— things naturally group with their own kind.",
    example:"物以类聚，他交的朋友都很努力。",
    exampleMeaning:"Like attracts like — all his friends are hardworking.",
    level:"HSK 5"
  },
  {
    chars:"一丝不苟", pinyin:"yī sī bù gǒu", tone:1,
    literal:"Not a single thread treated carelessly",
    meaning:"Meticulous; not the slightest carelessness; doing everything with perfectionism",
    origin:"Classical Chinese — used to describe extreme care and attention to detail.",
    example:"她工作一丝不苟，从不马虎。",
    exampleMeaning:"She is meticulous in her work and never careless.",
    level:"HSK 5"
  },
  {
    chars:"孜孜不倦", pinyin:"zī zī bù juàn", tone:1,
    literal:"Tireless, never growing weary",
    meaning:"Diligent and tireless; study or work without fatigue",
    origin:"From 《尚书》— describes the ideal scholar who never tires of learning.",
    example:"他孜孜不倦地学习中文，终于通过了HSK考试。",
    exampleMeaning:"He studied Chinese tirelessly and finally passed the HSK exam.",
    level:"HSK 5"
  },
  {
    chars:"冰冻三尺非一日之寒", pinyin:"bīng dòng sān chǐ fēi yī rì zhī hán", tone:1,
    literal:"Ice three feet thick is not formed in a single day",
    meaning:"Deep-seated problems or achievements don't develop overnight; gradual accumulation",
    origin:"Wang Chong, 《论衡》— profound things take time to build up.",
    example:"语言学习需要时间，冰冻三尺非一日之寒。",
    exampleMeaning:"Language learning takes time — thick ice doesn't form in a single day.",
    level:"HSK 5"
  },
];

// ---- Extra grammar patterns ----
const GRAMMAR_EXT = {
  1: [
    {
      title:"Number + Measure Word + Noun",
      pattern:"Number + MW + Noun",
      explanation:"Chinese requires 'measure words' (量词) between numbers and nouns. 个 (gè) is the most common general-purpose measure word.",
      examples:[
        { cn:"一个人",    py:"yī gè rén",      en:"one person" },
        { cn:"两本书",    py:"liǎng běn shū",   en:"two books" },
        { cn:"三只猫",    py:"sān zhī māo",     en:"three cats" },
      ],
      tip:"Use 两 (liǎng) instead of 二 (èr) before measure words: 两个人, NOT 二个人."
    },
    {
      title:"在 + Place + V (location of action)",
      pattern:"S + 在 + Place + V",
      explanation:"在 (zài) indicates where an action takes place. The location comes BEFORE the verb in Chinese (opposite to English).",
      examples:[
        { cn:"我在家吃饭。",   py:"Wǒ zài jiā chī fàn.",   en:"I eat at home." },
        { cn:"他在学校学习。", py:"Tā zài xuéxiào xuéxí.", en:"He studies at school." },
        { cn:"她在公司工作。", py:"Tā zài gōngsī gōngzuò.",en:"She works at the company." },
      ],
      tip:"Location always comes BEFORE the verb—this is the biggest word-order difference from English."
    },
  ],
  2: [
    {
      title:"比…更… (comparative)",
      pattern:"A + 比 + B + Adj",
      explanation:"比 (bǐ) is used for comparison, similar to '-er than' or 'more...than' in English.",
      examples:[
        { cn:"他比我高。",         py:"Tā bǐ wǒ gāo.",         en:"He is taller than me." },
        { cn:"今天比昨天冷。",     py:"Jīntiān bǐ zuótiān lěng.",en:"Today is colder than yesterday." },
        { cn:"中文比英文难。",     py:"Zhōngwén bǐ Yīngwén nán.",en:"Chinese is harder than English." },
      ],
      tip:"Don't use 很 with 比: say 他比我高, NOT 他比我很高."
    },
    {
      title:"V + 得 + complement (degree complement)",
      pattern:"V + 得 + Adj/description",
      explanation:"得 (de) links a verb to a complement describing how well or to what degree the action is performed.",
      examples:[
        { cn:"他说得很好。",   py:"Tā shuō de hěn hǎo.",   en:"He speaks very well." },
        { cn:"她跑得很快。",   py:"Tā pǎo de hěn kuài.",   en:"She runs very fast." },
        { cn:"我吃得太多了。", py:"Wǒ chī de tài duō le.",   en:"I ate too much." },
      ],
      tip:"When there's an object, repeat the verb: 他说中文说得很好."
    },
  ],
  3: [
    {
      title:"一边…一边… (doing two things at once)",
      pattern:"一边 + V₁, 一边 + V₂",
      explanation:"Describes two simultaneous actions.",
      examples:[
        { cn:"他一边吃饭一边看电视。",     py:"Tā yībiān chīfàn yībiān kàn diànshì.",     en:"He eats while watching TV." },
        { cn:"她一边走路一边听音乐。",     py:"Tā yībiān zǒulù yībiān tīng yīnyuè.",     en:"She listens to music while walking." },
      ],
      tip:"Both actions must happen at the same time. Don't use for sequential events."
    },
    {
      title:"除了…以外，还/也… (besides / in addition to)",
      pattern:"除了 + X + 以外，还/也 + statement",
      explanation:"Used to add something extra (还 = also) or exclude something (都 = all).",
      examples:[
        { cn:"除了中文以外，他还会说日语。", py:"Chúle Zhōngwén yǐwài, tā hái huì shuō Rìyǔ.", en:"Besides Chinese, he can also speak Japanese." },
        { cn:"除了他以外，大家都来了。",     py:"Chúle tā yǐwài, dàjiā dōu lái le.",           en:"Everyone came except him." },
      ],
      tip:"还 means 'also' (inclusive); 都 means 'all' (exclusive — everyone except X)."
    },
  ],
  4: [
    {
      title:"不仅…而且… (not only…but also…)",
      pattern:"不仅 + A, 而且 + B",
      explanation:"Emphasizes both qualities, with the second being more significant.",
      examples:[
        { cn:"他不仅聪明，而且很努力。",   py:"Tā bùjǐn cōngmíng, érqiě hěn nǔlì.",   en:"He is not only smart but also hardworking." },
        { cn:"这个产品不仅便宜，而且质量好。",py:"Zhège chǎnpǐn bùjǐn piányi, érqiě zhìliàng hǎo.",en:"This product is not only cheap but also high quality." },
      ],
      tip:"而且 introduces the MORE important point. The climax comes second."
    },
  ],
  5: [
    {
      title:"之所以…是因为… (The reason why…is because…)",
      pattern:"S + 之所以 + result, 是因为 + reason",
      explanation:"A formal structure that presents the result first, then gives the reason. More literary than 因为…所以….",
      examples:[
        { cn:"他之所以成功，是因为他很努力。",   py:"Tā zhī suǒyǐ chénggōng, shì yīnwèi tā hěn nǔlì.", en:"The reason he succeeded is that he worked very hard." },
        { cn:"之所以迟到，是因为堵车了。",       py:"Zhī suǒyǐ chídào, shì yīnwèi dǔchē le.",         en:"The reason for being late is the traffic jam." },
      ],
      tip:"This pattern is the REVERSE of 因为…所以… — result comes first. More formal / written."
    },
  ],
};

// ---- More reading passages ----
const READING_EXT = {
  1: [
    {
      title: "My Family",
      level: "HSK 1",
      text: "我家有四个人：爸爸、妈妈、我和姐姐。爸爸是老师，妈妈在家。我的爸爸很高，妈妈很漂亮。姐姐在北京工作。我很爱我的家人。我们家有一只猫，它叫小白。我很喜欢它。",
      pinyin: "Wǒ jiā yǒu sì gè rén: bàba, māma, wǒ hé jiějie. Bàba shì lǎoshī, māma zài jiā. Wǒ de bàba hěn gāo, māma hěn piàoliang. Jiějie zài Běijīng gōngzuò. Wǒ hěn ài wǒ de jiārén. Wǒmen jiā yǒu yī zhī māo, tā jiào Xiǎo Bái. Wǒ hěn xǐhuan tā.",
      translation: "My family has four people: dad, mom, me, and my older sister. Dad is a teacher, mom stays at home. My dad is very tall, mom is very beautiful. My sister works in Beijing. I love my family very much. Our family has a cat named Xiao Bai. I like it very much.",
      questions: [
        { q:"他家有几个人？",   a:"四个人", qEn:"How many people are in his family?", aEn:"Four people" },
        { q:"爸爸做什么工作？", a:"老师",  qEn:"What does dad do for work?",          aEn:"Teacher" },
      ]
    },
    {
      title: "My School Day",
      level: "HSK 1",
      text: "我是学生。我每天早上七点去学校。学校很大，有很多学生。我喜欢我的老师，她很好。我们学习中文、英文和数学。中午我们在学校吃饭。下午三点我回家。我回家以后做作业，然后吃晚饭。",
      pinyin: "Wǒ shì xuésheng. Wǒ měitiān zǎoshang qī diǎn qù xuéxiào. Xuéxiào hěn dà, yǒu hěn duō xuésheng. Wǒ xǐhuan wǒ de lǎoshī, tā hěn hǎo. Wǒmen xuéxí Zhōngwén, Yīngwén hé shùxué. Zhōngwǔ wǒmen zài xuéxiào chīfàn. Xiàwǔ sān diǎn wǒ huíjiā. Wǒ huíjiā yǐhòu zuò zuòyè, ránhòu chī wǎnfàn.",
      translation: "I am a student. I go to school at 7 every morning. The school is big and has many students. I like my teacher, she is very nice. We study Chinese, English, and math. At noon we eat at school. At 3 in the afternoon I go home. After going home I do homework and then eat dinner.",
      questions: [
        { q:"他几点去学校？",       a:"七点",             qEn:"What time does he go to school?", aEn:"Seven o'clock" },
        { q:"他回家以后做什么？",   a:"做作业，然后吃晚饭", qEn:"What does he do after going home?", aEn:"Do homework, then eat dinner" },
      ]
    },
  ],
  2: [
    {
      title: "Going Shopping",
      level: "HSK 2",
      text: "今天妈妈带我去超市买东西。超市里人很多，东西也很多。我们买了水果、蔬菜、牛奶和面包。苹果很便宜，一斤两块钱。我想买冰淇淋，妈妈说不行，因为我正在感冒。最后我们花了一百多块钱。回家的路上，我帮妈妈提东西，妈妈夸我是好孩子。",
      pinyin: "Jīntiān māma dài wǒ qù chāoshì mǎi dōngxi. Chāoshì lǐ rén hěn duō, dōngxi yě hěn duō. Wǒmen mǎi le shuǐguǒ, shūcài, niúnǎi hé miànbāo. Píngguǒ hěn piányi, yī jīn liǎng kuài qián. Wǒ xiǎng mǎi bīngqílín, māma shuō bù xíng, yīnwèi wǒ zhèngzài gǎnmào. Zuìhòu wǒmen huā le yī bǎi duō kuài qián. Huí jiā de lù shang, wǒ bāng māma tí dōngxi, māma kuā wǒ shì hǎo háizi.",
      translation: "Today mom took me to the supermarket. The supermarket was crowded and had many things. We bought fruit, vegetables, milk, and bread. Apples were cheap, two yuan per jin. I wanted to buy ice cream, but mom said no because I have a cold. In the end we spent more than 100 yuan. On the way home I helped mom carry things, and she praised me as a good child.",
      questions: [
        { q:"他们买了什么？",       a:"水果、蔬菜、牛奶和面包", qEn:"What did they buy?", aEn:"Fruit, vegetables, milk, and bread" },
        { q:"为什么不能买冰淇淋？", a:"因为他正在感冒", qEn:"Why couldn't he buy ice cream?", aEn:"Because he has a cold" },
      ]
    },
    {
      title: "Chinese New Year",
      level: "HSK 2",
      text: "春节是中国最大的节日。春节以前，大家要打扫房子，买新衣服。春节的时候，家人一起吃年夜饭，菜很多，很好吃。孩子们收到红包，很高兴。大家放烟花，非常热闹。春节以后，新的一年开始了，大家互相说'新年快乐'和'恭喜发财'。",
      pinyin: "Chūnjié shì Zhōngguó zuì dà de jiérì. Chūnjié yǐqián, dàjiā yào dǎsǎo fángzi, mǎi xīn yīfu. Chūnjié de shíhou, jiārén yīqǐ chī niányèfàn, cài hěn duō, hěn hǎochī. Háizimen shōudào hóngbāo, hěn gāoxìng. Dàjiā fàng yānhuā, fēicháng rènao. Chūnjié yǐhòu, xīn de yī nián kāishǐ le, dàjiā hùxiāng shuō 'Xīnnián kuàilè' hé 'Gōngxǐ fācái'.",
      translation: "Spring Festival is China's biggest holiday. Before Spring Festival, everyone must clean the house and buy new clothes. During Spring Festival, the family eats New Year's Eve dinner together — there are many dishes and they are delicious. Children receive red envelopes and are very happy. Everyone sets off fireworks and it's very lively. After Spring Festival, the new year begins and everyone wishes each other 'Happy New Year' and 'Wishing you wealth and prosperity'.",
      questions: [
        { q:"春节以前要做什么？",     a:"打扫房子，买新衣服", qEn:"What do people do before Spring Festival?", aEn:"Clean the house, buy new clothes" },
        { q:"孩子们为什么高兴？",     a:"收到了红包", qEn:"Why are children happy?", aEn:"They received red envelopes" },
      ]
    },
  ],
  3: [
    {
      title: "Learning a New Language",
      level: "HSK 3",
      text: "学外语是一件有趣但也很难的事情。很多人都想学中文，但是常常觉得中文太难了。其实，学习任何语言都需要时间和方法。首先，每天坚持学习很重要，哪怕只有十五分钟。其次，多听多说比只看课本有用得多。最后，不要怕犯错——犯错是学习的好机会。我以前学英语的时候也犯了很多错，但慢慢地，我的英语越来越好了。所以，大家不要放弃，坚持下去就一定能学好！",
      pinyin: "Xué wàiyǔ shì yī jiàn yǒuqù dàn yě hěn nán de shìqing. Hěnduō rén dōu xiǎng xué Zhōngwén, dànshì chángcháng juéde Zhōngwén tài nán le...",
      translation: "Learning a foreign language is interesting but also difficult. Many people want to learn Chinese but often feel it's too hard. Actually, learning any language requires time and method. First, persisting in daily study is important, even if only fifteen minutes. Second, listening and speaking more is much more useful than just reading textbooks. Finally, don't be afraid of making mistakes — mistakes are good learning opportunities. When I was learning English before, I made many mistakes too, but gradually my English got better and better. So everyone, don't give up — persist and you will surely learn well!",
      questions: [
        { q:"文章给了哪些学习建议？",     a:"每天坚持、多听多说、不怕犯错", qEn:"What study tips does the article give?", aEn:"Persist daily, listen and speak more, don't fear mistakes" },
        { q:"每天至少学多长时间？",       a:"十五分钟", qEn:"At least how long should you study daily?", aEn:"Fifteen minutes" },
      ]
    },
    {
      title: "Protecting the Environment",
      level: "HSK 3",
      text: "现在，环境问题越来越严重。很多城市空气污染，河水变脏了，垃圾越来越多。为了保护环境，我们应该做到：少用塑料袋，多骑自行车，不乱扔垃圾，节约用水用电。每个人的力量虽然很小，但如果大家一起努力，地球就会变得更美好。保护环境是每个人的责任，要从现在做起，从小事做起。",
      pinyin: "Xiànzài, huánjìng wèntí yuè lái yuè yánzhòng. Hěnduō chéngshì kōngqì wūrǎn, hé shuǐ biàn zāng le, lājī yuè lái yuè duō. Wèile bǎohù huánjìng, wǒmen yīnggāi zuò dào: shǎo yòng sùliào dài, duō qí zìxíngchē, bù luàn rēng lājī, jiéyuē yòng shuǐ yòng diàn. Měi gèrén de lìliang suīrán hěn xiǎo, dàn rúguǒ dàjiā yīqǐ nǔlì, dìqiú jiù huì biàn de gèng měihǎo. Bǎohù huánjìng shì měi gèrén de zérèn, yào cóng xiànzài zuòqǐ, cóng xiǎoshì zuòqǐ.",
      translation: "Nowadays, environmental problems are becoming increasingly serious. Many cities have air pollution, rivers have become dirty, and there is more and more rubbish. To protect the environment, we should: use fewer plastic bags, ride bicycles more, not litter, and conserve water and electricity. Although each person's strength is small, if everyone works together, the earth will become more beautiful. Protecting the environment is everyone's responsibility — start now, start with small things.",
      questions: [
        { q:"文章提到哪些保护环境的方法？", a:"少用塑料袋/多骑自行车/不乱扔垃圾/节约用水用电", qEn:"What environmental protection methods does the article mention?", aEn:"Use fewer plastic bags / ride bicycles / don't litter / conserve water and electricity" },
        { q:"保护环境是谁的责任？",         a:"每个人的责任", qEn:"Whose responsibility is it to protect the environment?", aEn:"Everyone's responsibility" },
      ]
    },
  ],
  4: [
    {
      title: "The Digital Divide",
      level: "HSK 4",
      text: "在全球数字化浪潮中，'数字鸿沟'成为一个不容忽视的问题。一方面，年轻一代熟练地使用智能手机、社交媒体和各种应用程序；另一方面，许多老年人在数字世界面前感到无所适从。在中国，虽然移动支付已经成为主流，但仍有数千万老年人不会使用智能手机。疫情期间，健康码的普及让这一问题更加突出——一些老人因为不会出示健康码而无法乘坐公共交通。为了解决这个问题，政府和企业采取了多种措施：保留现金支付渠道、简化应用操作界面、开展数字扫盲培训等。弥合数字鸿沟需要全社会的共同努力。",
      pinyin: "Zài quánqiú shùzìhuà làngcháo zhōng, 'shùzì hónggōu' chéngwéi yī gè bùróng hūshì de wèntí...",
      translation: "In the global wave of digitization, the 'digital divide' has become an issue that cannot be ignored. On one hand, the younger generation skillfully uses smartphones, social media, and various apps; on the other hand, many elderly people feel lost in the digital world. In China, although mobile payment has become mainstream, tens of millions of elderly people still cannot use smartphones. During the pandemic, the widespread adoption of health codes made this problem more prominent — some elderly people couldn't take public transportation because they couldn't show a health code. To address this issue, governments and companies have taken multiple measures: preserving cash payment channels, simplifying app interfaces, and conducting digital literacy training. Bridging the digital divide requires the collective effort of all of society.",
      questions: [
        { q:"'数字鸿沟'指的是什么？",       a:"年轻人和老年人在数字技术使用上的差距", qEn:"What does 'digital divide' refer to?", aEn:"The gap between young and old people in using digital technology" },
        { q:"解决措施有哪些？（举两例）",     a:"保留现金支付/简化操作界面/数字扫盲培训", qEn:"What solutions are mentioned? (two examples)", aEn:"Preserve cash payment / simplify interfaces / digital literacy training" },
      ]
    },
    {
      title: "Traditional Chinese Medicine",
      level: "HSK 4",
      text: "中医是有几千年历史的传统医学。与西医不同，中医强调整体观念，认为人体各部分相互联系，治病时注重调整身体的阴阳平衡。常见的中医治疗方法包括针灸、推拿、拔罐和中草药。针灸是把很细的针插入特定穴位，可以治疗头痛、失眠和关节疼痛等问题。中草药则根据个人体质，配制不同的药方。近年来，中医越来越受到外国人的关注，已在几十个国家得到推广。当然，中医和西医各有优势，最好能够互相补充，共同为人类健康服务。",
      pinyin: "Zhōngyī shì yǒu jǐ qiān nián lìshǐ de chuántǒng yīxué. Yǔ xīyī bùtóng, Zhōngyī qiángdiào zhěngtǐ guānniàn, rènwéi réntǐ gè bùfèn hùxiāng liánxì, zhìbìng shí zhùzhòng tiáozhěng shēntǐ de yīnyáng pínghéng...",
      translation: "Traditional Chinese Medicine (TCM) has thousands of years of history. Unlike Western medicine, TCM emphasizes holistic concepts, believing that all parts of the body are interconnected, and treatment focuses on adjusting the body's yin-yang balance. Common TCM treatment methods include acupuncture, massage (tuina), cupping, and herbal medicine. Acupuncture involves inserting very thin needles into specific acupoints and can treat headaches, insomnia, joint pain, and other problems. Herbal medicine formulates different prescriptions based on individual constitution. In recent years, TCM has attracted increasing attention from foreigners and has been promoted in dozens of countries. Of course, both TCM and Western medicine have their advantages — it's best for them to complement each other and jointly serve human health.",
      questions: [
        { q:"中医和西医的主要区别是什么？",   a:"中医强调整体观念和阴阳平衡，西医注重局部治疗", qEn:"What is the main difference between TCM and Western medicine?", aEn:"TCM emphasizes holistic concepts and yin-yang balance, while Western medicine focuses on specific treatment" },
        { q:"针灸可以治疗哪些问题？",         a:"头痛、失眠、关节疼痛等", qEn:"What problems can acupuncture treat?", aEn:"Headaches, insomnia, joint pain, etc." },
      ]
    },
  ],
  5: [
    {
      title: "The Philosophy of Chinese Gardens",
      level: "HSK 5",
      text: "中国古典园林不仅是建筑与自然的融合，更是哲学思想和美学理念的物化表达。江南园林尤其以'虽由人作，宛自天开'为最高境界——即人工造景应如同自然天成。苏州拙政园中的'借景'手法堪称典范：透过月洞门，远处的北寺塔仿佛自然地嵌入园景之中，使有限的空间获得了无限的意境。这种'以小见大'的思维方式贯穿于整个中国传统文化——从盆景到山水画，从围棋到太极，莫不如此。园林中的'留白'——那些看似空旷的水面和天空——恰恰是最具想象力的空间，正如老子所言：'有之以为利，无之以为用。'理解中国园林，就是理解中国人对于自然、艺术和人生的深层哲学思考。",
      pinyin: "Zhōngguó gǔdiǎn yuánlín bùjǐn shì jiànzhù yǔ zìrán de rónghé, gèng shì zhéxué sīxiǎng hé měixué lǐniàn de wùhuà biǎodá...",
      translation: "Classical Chinese gardens are not merely a fusion of architecture and nature, but the physical expression of philosophical thought and aesthetic concepts. Jiangnan gardens especially regard 'though made by human hands, it seems as if created by heaven' as the highest ideal — meaning artificial landscape should appear as natural as possible. The 'borrowed scenery' technique in Suzhou's Humble Administrator's Garden is a prime example: through the moon gate, the distant North Temple Pagoda appears to naturally embed itself into the garden landscape, granting the finite space an infinite artistic conception. This 'seeing the grand in the small' way of thinking permeates all of traditional Chinese culture — from bonsai to landscape painting, from Go to Tai Chi, without exception. The 'blank space' in gardens — those seemingly empty water surfaces and skies — are precisely the most imaginative spaces, just as Laozi said: 'That which exists serves for possession; that which does not exist serves for use.' To understand Chinese gardens is to understand the Chinese people's deep philosophical contemplation of nature, art, and life.",
      questions: [
        { q:"'借景'手法是什么意思？",   a:"利用园外景物融入园内，扩展视觉空间", qEn:"What does 'borrowed scenery' mean?", aEn:"Using external scenery to extend the garden's visual space" },
        { q:"文章引用了谁的话？",       a:"老子", qEn:"Whose words are quoted?", aEn:"Laozi" },
      ]
    },
    {
      title: "The Art of Chinese Tea",
      level: "HSK 5",
      text: "茶，对中国人而言，早已超越饮料的范畴，成为一种生活哲学与精神寄托。从"神农尝百草，日遇七十二毒，得茶而解之"的传说，到唐代陆羽著《茶经》将茶道系统化，中国的茶文化已有数千年的深厚积淀。中国茶道奉行"和、静、怡、真"四字精髓：人与自然的和谐，内心的宁静，品茗时的怡然自得，以及对生活真谛的追求。泡茶是一种充满仪式感的艺术——温壶涤盏、置茶闻香、悬壶高冲、分汤奉客，每一道程序都蕴含着对美的感知与对客人的尊重。中国六大茶类——绿茶、白茶、黄茶、青茶（乌龙）、红茶、黑茶——涵盖了从清新淡雅到浓郁醇厚的广阔风味谱系。其中普洱茶有"能喝的古董"之称，随着陈化年份的增长，其价值与滋味愈发深邃。古人云："茶禅一味。"在当今快节奏的现代社会中，一盏好茶或许正是帮助我们慢下来、回归内心的最佳途径。",
      pinyin: "Chá, duì Zhōngguó rén éryán, zǎoyǐ chāoyuè yǐnliào de fànchóu, chéngwéi yī zhǒng shēnghuó zhéxué yǔ jīngshén jìtuō...",
      translation: "For Chinese people, tea has long transcended the realm of mere beverage to become a philosophy of life and spiritual refuge. From the legend of Shennong tasting hundreds of herbs — encountering 72 poisons in a day, cured by tea — to Tang dynasty Lu Yu systematizing tea culture in 'The Classic of Tea,' Chinese tea culture carries thousands of years of profound heritage. Chinese tea ceremony upholds four principles: 'harmony, tranquility, enjoyment, and authenticity' — harmony between humans and nature, inner stillness, the delight of savoring tea, and the pursuit of life's true meaning. Brewing tea is an art full of ritual — warming the teapot, placing the tea leaves to appreciate their fragrance, pouring water from height to unfurl the leaves, and respectfully serving guests. China's six major tea categories — green, white, yellow, oolong, black, and dark (pu-erh) — span a vast spectrum from delicate freshness to rich depth. Pu-erh in particular is called 'drinkable antique': its value and complexity deepen with years of aging. As the ancients said: 'Tea and Zen share one flavor.' In today's fast-paced world, a fine cup of tea may be the best way to slow down and return to one's inner self.",
      questions: [
        { q:"中国茶道的四字精髓是什么？",         a:"和、静、怡、真", qEn:"What are the four principles of Chinese tea ceremony?", aEn:"Harmony, tranquility, enjoyment, authenticity" },
        { q:"普洱茶为什么被称为'能喝的古董'？",   a:"随着陈化年份增长，价值与滋味愈发深邃", qEn:"Why is pu-erh called 'drinkable antique'?", aEn:"Its value and complexity deepen with years of aging" },
      ]
    },
  ],
};

// =============================================
//  MERGE INTO GLOBAL DATA
// =============================================
(function mergeExtendedData() {
  // -- Vocabulary --
  const EXT_LEVELS = { 1: HSK1_EXT, 2: HSK2_EXT, 3: HSK3_EXT, 4: HSK4_EXT, 5: HSK5_EXT };
  Object.entries(EXT_LEVELS).forEach(([level, words]) => {
    const lv = +level;
    if (!HSK_DATA[lv]) HSK_DATA[lv] = [];
    const existing = new Set(HSK_DATA[lv].map(w => w.char));
    HSK_DATA[lv].push(...words.filter(w => !existing.has(w.char)));
  });

  // -- HSK 6 (new level) --
  HSK_DATA[6] = HSK6_DATA;

  // -- Extra vocab merge for levels that have new EXTRA --
  if (typeof EXTRA_VOCAB !== 'undefined') {
    // These words are already in the extension levels, no extra needed
  }

  // -- Chengyu --
  if (typeof CHENGYU_DATA !== 'undefined') {
    const existingCY = new Set(CHENGYU_DATA.map(c => c.chars));
    CHENGYU_DATA.push(...CHENGYU_EXT.filter(c => !existingCY.has(c.chars)));
  }

  // -- Grammar --
  if (typeof GRAMMAR_DATA !== 'undefined') {
    Object.entries(GRAMMAR_EXT).forEach(([lv, patterns]) => {
      if (!GRAMMAR_DATA[lv]) GRAMMAR_DATA[lv] = [];
      const existingTitles = new Set(GRAMMAR_DATA[lv].map(g => g.title));
      GRAMMAR_DATA[lv].push(...patterns.filter(g => !existingTitles.has(g.title)));
    });
  }

  // -- Reading --
  if (typeof READING_DATA !== 'undefined') {
    Object.entries(READING_EXT).forEach(([lv, passages]) => {
      if (!READING_DATA[lv]) READING_DATA[lv] = [];
      const existingTitles = new Set(READING_DATA[lv].map(r => r.title));
      READING_DATA[lv].push(...passages.filter(r => !existingTitles.has(r.title)));
    });
  }

  // Log totals
  let total = 0;
  for (let i = 1; i <= 6; i++) total += (HSK_DATA[i] || []).length;
  console.log(`[data_extended] Merged — ${total} total vocab, ${CHENGYU_DATA.length} chengyu, HSK levels 1-6 active.`);
})();

// =============================================
//  SENTENCE PATTERNS DATA
//  Dedicated patterns for the Sentence Patterns view.
//  Each entry: { id, title, pattern, level, category, explanation, sentences, tip }
//  categories: basic | modal | aspect | question | comparison | conditional | concession | emphasis | passive | complex
// =============================================
const SENTENCE_PATTERNS_DATA = [

  // ===================== BASIC STRUCTURES =====================
  {
    id: "sp-001", level: 1, category: "basic",
    title: "S + 是 + N   (Equational: to be)",
    pattern: "Subject + 是 + Noun",
    explanation: "是 (shì) links a subject to a noun. Equivalent to 'am / is / are'. Negation: 不是.",
    sentences: [
      { cn:"我是学生。",           py:"Wǒ shì xuéshēng.",          en:"I am a student." },
      { cn:"他是中国人。",         py:"Tā shì Zhōngguórén.",       en:"He is Chinese." },
      { cn:"今天是星期一。",       py:"Jīntiān shì xīngqīyī.",     en:"Today is Monday." },
      { cn:"这不是我的书。",       py:"Zhè bú shì wǒ de shū.",     en:"This is not my book." },
      { cn:"她不是老师，是医生。", py:"Tā bú shì lǎoshī, shì yīshēng.", en:"She is not a teacher; she is a doctor." },
      { cn:"你是哪国人？",         py:"Nǐ shì nǎ guó rén?",        en:"What nationality are you?" },
      { cn:"这是我最喜欢的地方。", py:"Zhè shì wǒ zuì xǐhuan de dìfang.", en:"This is my favorite place." },
    ],
    tip: "是 is never used with adjectives! Say 她很漂亮 NOT 她是漂亮."
  },
  {
    id: "sp-002", level: 1, category: "basic",
    title: "S + 有/没有 + O   (to have / not have)",
    pattern: "Subject + 有/没有 + Object",
    explanation: "有 (yǒu) = to have. The only correct negation is 没有 (méiyǒu) — never 不有.",
    sentences: [
      { cn:"我有一个哥哥。",       py:"Wǒ yǒu yī gè gēge.",        en:"I have an older brother." },
      { cn:"你有时间吗？",         py:"Nǐ yǒu shíjiān ma?",        en:"Do you have time?" },
      { cn:"他没有钱。",           py:"Tā méiyǒu qián.",           en:"He doesn't have money." },
      { cn:"我们没有作业。",       py:"Wǒmen méiyǒu zuòyè.",       en:"We don't have homework." },
      { cn:"这里有很多好餐馆。",   py:"Zhèlǐ yǒu hěnduō hǎo cānguǎn.", en:"There are many good restaurants here." },
      { cn:"我家没有狗，只有猫。", py:"Wǒ jiā méiyǒu gǒu, zhǐyǒu māo.", en:"My home doesn't have a dog, only a cat." },
      { cn:"他有很多中文书。",     py:"Tā yǒu hěnduō Zhōngwén shū.", en:"He has many Chinese books." },
    ],
    tip: "有 also means 'there is/are': 桌上有书 (There is a book on the table)."
  },
  {
    id: "sp-003", level: 1, category: "basic",
    title: "Time Word before the Verb",
    pattern: "Time + Subject + Verb + Object",
    explanation: "In Chinese, time expressions go BEFORE the verb (or before the subject). This is the opposite of English.",
    sentences: [
      { cn:"我每天七点起床。",         py:"Wǒ měitiān qī diǎn qǐchuáng.",    en:"Every day I get up at seven." },
      { cn:"明天我们有考试。",         py:"Míngtiān wǒmen yǒu kǎoshì.",      en:"Tomorrow we have an exam." },
      { cn:"昨天他去了图书馆。",       py:"Zuótiān tā qù le túshūguǎn.",    en:"Yesterday he went to the library." },
      { cn:"上午十点我们开会。",       py:"Shàngwǔ shí diǎn wǒmen kāihuì.", en:"We have a meeting at ten in the morning." },
      { cn:"晚上我不工作。",           py:"Wǎnshang wǒ bù gōngzuò.",        en:"In the evening I don't work." },
      { cn:"下个星期她来北京。",       py:"Xià gè xīngqī tā lái Běijīng.",  en:"Next week she is coming to Beijing." },
      { cn:"现在你可以休息了。",       py:"Xiànzài nǐ kěyǐ xiūxi le.",      en:"Now you can rest." },
      { cn:"春节的时候家人会团聚。",   py:"Chūnjié de shíhou jiārén huì tuánjù.", en:"During Spring Festival families reunite." },
    ],
    tip: "Time words: 现在 (now), 今天 (today), 明天 (tomorrow), 昨天 (yesterday), 每天 (every day)."
  },
  {
    id: "sp-004", level: 1, category: "basic",
    title: "在 + Place + V   (Action at a location)",
    pattern: "Subject + 在 + Place + Verb",
    explanation: "在 (zài) places the action at a location. Location always comes BEFORE the verb — never after.",
    sentences: [
      { cn:"我在家工作。",           py:"Wǒ zài jiā gōngzuò.",         en:"I work from home." },
      { cn:"他在图书馆学习。",       py:"Tā zài túshūguǎn xuéxí.",     en:"He studies at the library." },
      { cn:"孩子们在公园玩。",       py:"Háizimen zài gōngyuán wán.",  en:"The children are playing in the park." },
      { cn:"我们在哪里吃饭？",       py:"Wǒmen zài nǎlǐ chīfàn?",     en:"Where are we eating?" },
      { cn:"她在超市买东西。",       py:"Tā zài chāoshì mǎi dōngxi.",  en:"She is shopping at the supermarket." },
      { cn:"猫在沙发上睡觉。",       py:"Māo zài shāfā shàng shuìjiào.", en:"The cat is sleeping on the sofa." },
      { cn:"请你在这里签名。",       py:"Qǐng nǐ zài zhèlǐ qiānmíng.", en:"Please sign your name here." },
    ],
    tip: "Compare: 我在北京 (I am in Beijing — location of existence) vs 我在北京工作 (I work in Beijing — location of action)."
  },

  // ===================== MODAL VERBS =====================
  {
    id: "sp-005", level: 1, category: "modal",
    title: "想 + V   (Want to / Would like to)",
    pattern: "Subject + 想 + Verb",
    explanation: "想 (xiǎng) expresses desire or intention. Softer and more tentative than 要 (yào).",
    sentences: [
      { cn:"我想学中文。",           py:"Wǒ xiǎng xué Zhōngwén.",      en:"I want to learn Chinese." },
      { cn:"你想吃什么？",           py:"Nǐ xiǎng chī shénme?",        en:"What would you like to eat?" },
      { cn:"她想去中国旅游。",       py:"Tā xiǎng qù Zhōngguó lǚyóu.", en:"She wants to travel to China." },
      { cn:"我不想工作了。",         py:"Wǒ bù xiǎng gōngzuò le.",     en:"I don't want to work anymore." },
      { cn:"他们想买一套新房子。",   py:"Tāmen xiǎng mǎi yī tào xīn fángzi.", en:"They want to buy a new house." },
      { cn:"我想去，但是没有时间。", py:"Wǒ xiǎng qù, dànshì méiyǒu shíjiān.", en:"I want to go, but I don't have time." },
      { cn:"你想不想试试？",         py:"Nǐ xiǎng bu xiǎng shìshì?",  en:"Do you want to give it a try?" },
    ],
    tip: "想 can also mean 'to miss someone': 我想你 (I miss you)."
  },
  {
    id: "sp-006", level: 1, category: "modal",
    title: "可以 + V   (Can / May — permission)",
    pattern: "Subject + 可以 + Verb",
    explanation: "可以 (kěyǐ) expresses permission or possibility. Like 'may' or 'can' in English.",
    sentences: [
      { cn:"你可以进来。",             py:"Nǐ kěyǐ jìn lái.",            en:"You may come in." },
      { cn:"这里可以停车吗？",         py:"Zhèlǐ kěyǐ tíng chē ma?",    en:"Can I park here?" },
      { cn:"我可以问你一个问题吗？",   py:"Wǒ kěyǐ wèn nǐ yī gè wèntí ma?", en:"May I ask you a question?" },
      { cn:"在图书馆不可以大声说话。", py:"Zài túshūguǎn bù kěyǐ dàshēng shuōhuà.", en:"You cannot speak loudly in the library." },
      { cn:"你可以用我的手机。",       py:"Nǐ kěyǐ yòng wǒ de shǒujī.", en:"You can use my phone." },
      { cn:"不可以在这里吸烟。",       py:"Bù kěyǐ zài zhèlǐ xīyān.",   en:"You cannot smoke here." },
      { cn:"他今天可以早点走。",       py:"Tā jīntiān kěyǐ zǎodiǎn zǒu.", en:"He can leave early today." },
    ],
    tip: "不可以 = not allowed. 不能 = unable to / not possible physically."
  },
  {
    id: "sp-007", level: 2, category: "modal",
    title: "应该 + V   (Should / Ought to)",
    pattern: "Subject + 应该 + Verb",
    explanation: "应该 (yīnggāi) expresses moral obligation or recommendation.",
    sentences: [
      { cn:"你应该多睡觉。",             py:"Nǐ yīnggāi duō shuìjiào.",        en:"You should sleep more." },
      { cn:"我们应该保护环境。",         py:"Wǒmen yīnggāi bǎohù huánjìng.",   en:"We should protect the environment." },
      { cn:"你不应该这么晚回家。",       py:"Nǐ bù yīnggāi zhème wǎn huíjiā.", en:"You shouldn't come home this late." },
      { cn:"他应该向老师道歉。",         py:"Tā yīnggāi xiàng lǎoshī dàoqiàn.", en:"He should apologize to the teacher." },
      { cn:"生病了就应该去看医生。",     py:"Shēngbìng le jiù yīnggāi qù kàn yīshēng.", en:"If you're sick, you should see a doctor." },
      { cn:"学生应该认真听讲。",         py:"Xuéshēng yīnggāi rènzhēn tīngjiǎng.", en:"Students should listen carefully in class." },
      { cn:"你应该多练习口语。",         py:"Nǐ yīnggāi duō liànxí kǒuyǔ.",    en:"You should practice speaking more." },
      { cn:"我应该早点告诉你的。",       py:"Wǒ yīnggāi zǎodiǎn gàosu nǐ de.", en:"I should have told you sooner." },
    ],
    tip: "应该 can look backward too: 我应该早点告诉你 (I should have told you earlier)."
  },
  {
    id: "sp-008", level: 2, category: "modal",
    title: "会 + V   (Can — learned ability / Will — future)",
    pattern: "Subject + 会 + Verb",
    explanation: "会 (huì) has two uses: 1) Ability acquired through learning 2) Expectation about the future.",
    sentences: [
      { cn:"我会说普通话。",             py:"Wǒ huì shuō pǔtōnghuà.",          en:"I can speak Mandarin." },
      { cn:"她不会开车。",               py:"Tā bú huì kāi chē.",               en:"She can't drive." },
      { cn:"他会弹钢琴。",               py:"Tā huì tán gāngqín.",              en:"He can play the piano." },
      { cn:"明天会下雨吗？",             py:"Míngtiān huì xià yǔ ma?",          en:"Will it rain tomorrow?" },
      { cn:"我相信他一定会成功。",       py:"Wǒ xiāngxìn tā yīdìng huì chénggōng.", en:"I believe he will definitely succeed." },
      { cn:"你学了多久，会不会写汉字？", py:"Nǐ xué le duō jiǔ, huì bu huì xiě Hànzì?", en:"How long have you studied? Can you write Chinese characters?" },
      { cn:"早点睡觉对身体会有好处。",   py:"Zǎodiǎn shuìjiào duì shēntǐ huì yǒu hǎochu.", en:"Sleeping early will benefit your health." },
    ],
    tip: "会 = learned skill; 能 = physical ability / circumstantial possibility. 我会游泳 (I know how to swim) vs 我今天不能游泳 (I can't swim today — e.g. injured)."
  },
  {
    id: "sp-009", level: 2, category: "modal",
    title: "能 + V   (Can — physical ability / circumstance)",
    pattern: "Subject + 能 + Verb",
    explanation: "能 (néng) expresses physical capability, circumstantial possibility, or permission under certain conditions.",
    sentences: [
      { cn:"他腿受伤了，不能走路。",     py:"Tā tuǐ shòushāng le, bù néng zǒulù.", en:"His leg is injured; he can't walk." },
      { cn:"你能帮我吗？",               py:"Nǐ néng bāng wǒ ma?",              en:"Can you help me?" },
      { cn:"这个箱子我搬不动，你能帮我搬吗？", py:"Zhège xiāngzi wǒ bān bú dòng, nǐ néng bāng wǒ bān ma?", en:"I can't move this box; can you help me move it?" },
      { cn:"飞机上不能使用手机。",       py:"Fēijī shàng bù néng shǐyòng shǒujī.", en:"You cannot use mobile phones on the plane." },
      { cn:"她一分钟能打一百个字。",     py:"Tā yī fēnzhōng néng dǎ yī bǎi gè zì.", en:"She can type 100 characters per minute." },
      { cn:"你身体好了，能出院了。",     py:"Nǐ shēntǐ hǎo le, néng chūyuàn le.", en:"You've recovered; you can be discharged." },
      { cn:"这件事只有他能解决。",       py:"Zhè jiàn shì zhǐyǒu tā néng jiějué.", en:"Only he is capable of solving this matter." },
    ],
    tip: "Contrast: 我会开车 (I know how to drive — a skill) vs 我今天能开车 (I can drive today — circumstance allows it)."
  },

  // ===================== QUESTIONS =====================
  {
    id: "sp-010", level: 1, category: "question",
    title: "吗-questions   (Yes/No Questions)",
    pattern: "Statement + 吗？",
    explanation: "Add 吗 (ma) to any statement to make a yes/no question. No word order changes needed.",
    sentences: [
      { cn:"你是学生吗？",             py:"Nǐ shì xuéshēng ma?",          en:"Are you a student?" },
      { cn:"这个好吃吗？",             py:"Zhège hǎo chī ma?",             en:"Is this delicious?" },
      { cn:"你会说英语吗？",           py:"Nǐ huì shuō Yīngyǔ ma?",       en:"Can you speak English?" },
      { cn:"今天天气好吗？",           py:"Jīntiān tiānqì hǎo ma?",       en:"Is the weather nice today?" },
      { cn:"你喜欢喝咖啡吗？",         py:"Nǐ xǐhuan hē kāfēi ma?",       en:"Do you like drinking coffee?" },
      { cn:"他已经回家了吗？",         py:"Tā yǐjīng huíjiā le ma?",      en:"Has he already gone home?" },
      { cn:"你有没有手机？",           py:"Nǐ yǒu méiyǒu shǒujī?",        en:"Do you have a mobile phone?" },
    ],
    tip: "有没有 / V不V patterns are also yes/no questions: 好不好？你去不去？"
  },
  {
    id: "sp-011", level: 1, category: "question",
    title: "Question Words: 什么/哪/谁/哪里/怎么/为什么",
    pattern: "Question word in place of the unknown",
    explanation: "Chinese question words stay in the same position as the answer would. The word order does NOT change.",
    sentences: [
      { cn:"这是什么？",               py:"Zhè shì shénme?",              en:"What is this?" },
      { cn:"你叫什么名字？",           py:"Nǐ jiào shénme míngzì?",       en:"What is your name?" },
      { cn:"你去哪里？",               py:"Nǐ qù nǎlǐ?",                 en:"Where are you going?" },
      { cn:"这本书是谁的？",           py:"Zhè běn shū shì shéi de?",     en:"Whose book is this?" },
      { cn:"你为什么哭？",             py:"Nǐ wèishénme kū?",             en:"Why are you crying?" },
      { cn:"这个字怎么写？",           py:"Zhège zì zěnme xiě?",          en:"How do you write this character?" },
      { cn:"你们什么时候出发？",       py:"Nǐmen shénme shíhou chūfā?",   en:"When are you setting off?" },
      { cn:"一共多少钱？",             py:"Yīgòng duōshao qián?",         en:"How much does it cost in total?" },
    ],
    tip: "什么时候 = when, 怎么 = how (manner), 多少 = how many/much, 几 = how many (small numbers)."
  },
  {
    id: "sp-012", level: 2, category: "question",
    title: "A-not-A questions   (V不V / Adj不Adj)",
    pattern: "Verb + 不 + Verb   /   Adj + 不 + Adj",
    explanation: "An alternative yes/no question form. Present both positive and negative forms for the listener to choose.",
    sentences: [
      { cn:"你去不去？",               py:"Nǐ qù bu qù?",                 en:"Are you going or not?" },
      { cn:"这个贵不贵？",             py:"Zhège guì bu guì?",             en:"Is this expensive?" },
      { cn:"你认识不认识他？",         py:"Nǐ rènshí bu rènshí tā?",      en:"Do you know him?" },
      { cn:"他来不来？",               py:"Tā lái bu lái?",               en:"Is he coming or not?" },
      { cn:"你喜不喜欢这里？",         py:"Nǐ xǐ bu xǐhuan zhèlǐ?",      en:"Do you like it here?" },
      { cn:"这件事对不对？",           py:"Zhè jiàn shì duì bu duì?",     en:"Is this matter right or wrong?" },
      { cn:"你有没有时间？",           py:"Nǐ yǒu méiyǒu shíjiān?",      en:"Do you have time or not?" },
    ],
    tip: "For two-syllable verbs, only the first syllable is repeated: 认识 → 认不认识."
  },

  // ===================== TENSE & ASPECT =====================
  {
    id: "sp-013", level: 2, category: "aspect",
    title: "V + 了   (Completed action)",
    pattern: "Verb + 了 (+ Object)",
    explanation: "了 (le) after a verb marks that an action is completed. It does NOT always equal past tense.",
    sentences: [
      { cn:"我吃了早饭。",             py:"Wǒ chī le zǎofàn.",            en:"I ate / have eaten breakfast." },
      { cn:"他去了北京。",             py:"Tā qù le Běijīng.",            en:"He went to Beijing." },
      { cn:"我买了三本书。",           py:"Wǒ mǎi le sān běn shū.",       en:"I bought three books." },
      { cn:"她换了新工作。",           py:"Tā huàn le xīn gōngzuò.",      en:"She changed to a new job." },
      { cn:"我们赢了！",               py:"Wǒmen yíng le!",               en:"We won!" },
      { cn:"下课了，大家可以走了。",   py:"Xià kè le, dàjiā kěyǐ zǒu le.", en:"Class is over; everyone can leave." },
      { cn:"他学了三年中文。",         py:"Tā xué le sān nián Zhōngwén.", en:"He studied Chinese for three years." },
    ],
    tip: "了 at the END of a sentence also signals a change of state: 下雨了 (It has started raining / It's raining now)."
  },
  {
    id: "sp-014", level: 2, category: "aspect",
    title: "V + 过   (Life experience)",
    pattern: "Verb + 过 + Object",
    explanation: "过 (guò) shows that something happened at some unspecified past time as a life experience. Negation: 没 + V + 过.",
    sentences: [
      { cn:"我去过中国三次。",         py:"Wǒ qù guò Zhōngguó sān cì.",  en:"I have been to China three times." },
      { cn:"你吃过北京烤鸭吗？",       py:"Nǐ chī guò Běijīng kǎoyā ma?", en:"Have you ever eaten Peking Duck?" },
      { cn:"他没学过日语。",           py:"Tā méi xué guò Rìyǔ.",        en:"He has never studied Japanese." },
      { cn:"我从来没见过这种东西。",   py:"Wǒ cónglái méi jiàn guò zhèzhǒng dōngxi.", en:"I have never seen this kind of thing." },
      { cn:"她以前做过护士。",         py:"Tā yǐqián zuò guò hùshi.",     en:"She used to work as a nurse." },
      { cn:"你听说过这个人吗？",       py:"Nǐ tīngshuō guò zhège rén ma?", en:"Have you heard of this person?" },
      { cn:"我爸爸年轻的时候去过欧洲。", py:"Wǒ bàba niánqīng de shíhou qù guò Ōuzhōu.", en:"My dad went to Europe when he was young." },
    ],
    tip: "Compare: 我吃了 (I have eaten — finished now) vs 我吃过 (I've eaten it before — life experience)."
  },
  {
    id: "sp-015", level: 2, category: "aspect",
    title: "正在 + V + 呢   (Currently happening)",
    pattern: "Subject + 正在 + Verb + 呢",
    explanation: "正在 (zhèngzài) + final 呢 marks an action in progress right now. Either 正在 or 呢 alone also works.",
    sentences: [
      { cn:"他正在开会。",               py:"Tā zhèngzài kāihuì.",             en:"He is in a meeting right now." },
      { cn:"妈妈正在做饭呢。",           py:"Māma zhèngzài zuòfàn ne.",         en:"Mom is cooking right now." },
      { cn:"我们正在讨论这个问题。",     py:"Wǒmen zhèngzài tǎolùn zhège wèntí.", en:"We are currently discussing this issue." },
      { cn:"孩子在睡觉呢，别吵。",       py:"Háizi zài shuìjiào ne, bié chǎo.", en:"The child is sleeping, don't make noise." },
      { cn:"你打电话的时候，我正在洗澡。", py:"Nǐ dǎ diànhuà de shíhou, wǒ zhèngzài xǐzǎo.", en:"When you called, I was taking a shower." },
      { cn:"他们正在排队买票呢。",       py:"Tāmen zhèngzài páiduì mǎi piào ne.", en:"They are currently queuing to buy tickets." },
    ],
    tip: "正 alone stresses the exact moment; 在 alone is more general. Together 正在 is the strongest."
  },
  {
    id: "sp-016", level: 2, category: "aspect",
    title: "已经 + V + 了   (Already done)",
    pattern: "Subject + 已经 + Verb + 了",
    explanation: "已经 (yǐjīng) emphasizes that an action has already been completed.",
    sentences: [
      { cn:"我已经吃饭了。",             py:"Wǒ yǐjīng chīfàn le.",            en:"I have already eaten." },
      { cn:"他已经离开了。",             py:"Tā yǐjīng líkāi le.",             en:"He has already left." },
      { cn:"作业我已经做完了。",         py:"Zuòyè wǒ yǐjīng zuò wán le.",     en:"I have already finished the homework." },
      { cn:"火车已经开走了。",           py:"Huǒchē yǐjīng kāi zǒu le.",       en:"The train has already left." },
      { cn:"他们已经结婚十年了。",       py:"Tāmen yǐjīng jiéhūn shí nián le.", en:"They have already been married for ten years." },
      { cn:"我已经告诉他了，他不听。",   py:"Wǒ yǐjīng gàosu tā le, tā bù tīng.", en:"I already told him; he just won't listen." },
      { cn:"时间已经不多了，快点。",     py:"Shíjiān yǐjīng bù duō le, kuài diǎn.", en:"Time is already running out, hurry up." },
    ],
    tip: "已经 often pairs with 了 at the end of the sentence: 我已经来了 (I'm already here)."
  },
  {
    id: "sp-017", level: 2, category: "aspect",
    title: "快/要…了   (About to happen)",
    pattern: "快要 / 就要 / 快 / 要 + Verb + 了",
    explanation: "Signal that an event is imminent. 快要 = very soon; 就要 = at a specific time; 快 = colloquial.",
    sentences: [
      { cn:"快下课了。",                 py:"Kuài xià kè le.",                  en:"Class is about to end." },
      { cn:"她快要生孩子了。",           py:"Tā kuàiyào shēng háizi le.",       en:"She is about to give birth." },
      { cn:"火车就要来了，大家排好队。", py:"Huǒchē jiù yào lái le, dàjiā pái hǎo duì.", en:"The train is about to arrive; everyone line up." },
      { cn:"太阳快下山了。",             py:"Tàiyáng kuài xià shān le.",        en:"The sun is about to set." },
      { cn:"春节快来了，街上很热闹。",   py:"Chūnjié kuài lái le, jiē shàng hěn rènao.", en:"Spring Festival is coming soon; the streets are lively." },
      { cn:"我就要毕业了。",             py:"Wǒ jiùyào bìyè le.",               en:"I am about to graduate." },
      { cn:"快要到站了，请大家准备下车。", py:"Kuàiyào dào zhàn le, qǐng dàjiā zhǔnbèi xià chē.", en:"We are almost at the stop; please prepare to get off." },
    ],
    tip: "就要 is often used with a specific time: 明天就要出发了 (tomorrow we set off)."
  },
  {
    id: "sp-018", level: 2, category: "aspect",
    title: "再/又 + V   (Again — future vs past)",
    pattern: "再 + Verb (future) / 又 + Verb (past)",
    explanation: "再 (zài) = again in the future; 又 (yòu) = again referring to the past.",
    sentences: [
      { cn:"我明天再来。",               py:"Wǒ míngtiān zài lái.",             en:"I'll come again tomorrow." },
      { cn:"请再说一遍。",               py:"Qǐng zài shuō yī biàn.",           en:"Please say it again." },
      { cn:"他又迟到了。",               py:"Tā yòu chídào le.",                en:"He was late again." },
      { cn:"这道题你又做错了。",         py:"Zhè dào tí nǐ yòu zuò cuò le.",   en:"You got this question wrong again." },
      { cn:"你再喝一杯吧。",             py:"Nǐ zài hē yī bēi ba.",             en:"Have another cup." },
      { cn:"她又哭了，不知道为什么。",   py:"Tā yòu kū le, bù zhīdào wèishénme.", en:"She cried again; I don't know why." },
      { cn:"如果听不懂，请再问一次。",   py:"Rúguǒ tīng bu dǒng, qǐng zài wèn yī cì.", en:"If you don't understand, please ask again." },
    ],
    tip: "再 only refers to future repetition; 又 always refers to past. Never swap them."
  },

  // ===================== COMPARISONS =====================
  {
    id: "sp-019", level: 2, category: "comparison",
    title: "A + 比 + B + Adj   (A is more X than B)",
    pattern: "A + 比 + B + Adjective",
    explanation: "比 (bǐ) compares two items. The adjective comes after 比 B. Do NOT add 更 or 很.",
    sentences: [
      { cn:"今天比昨天热。",             py:"Jīntiān bǐ zuótiān rè.",           en:"Today is hotter than yesterday." },
      { cn:"他比我高十厘米。",           py:"Tā bǐ wǒ gāo shí lǐmǐ.",          en:"He is 10 cm taller than me." },
      { cn:"这条路比那条路近。",         py:"Zhè tiáo lù bǐ nà tiáo lù jìn.",  en:"This road is closer than that one." },
      { cn:"她比我努力得多。",           py:"Tā bǐ wǒ nǔlì de duō.",           en:"She is much more hardworking than me." },
      { cn:"中文比我想象的有趣。",       py:"Zhōngwén bǐ wǒ xiǎngxiàng de yǒuqù.", en:"Chinese is more interesting than I imagined." },
      { cn:"他的成绩比以前好了很多。",   py:"Tā de chéngjì bǐ yǐqián hǎo le hěnduō.", en:"His grades are much better than before." },
      { cn:"骑车比开车更环保。",         py:"Qí chē bǐ kāi chē gèng huánbǎo.", en:"Cycling is more environmentally friendly than driving." },
    ],
    tip: "Do NOT say 比他很高 or 比他更高 without 更. Just say 比他高 or 比他高得多 (much taller)."
  },
  {
    id: "sp-020", level: 2, category: "comparison",
    title: "A + 跟/和 + B + 一样 + Adj   (As X as)",
    pattern: "A + 跟/和 + B + 一样 (+ Adj)",
    explanation: "一样 (yīyàng) expresses equality or similarity between two things.",
    sentences: [
      { cn:"他跟我一样高。",             py:"Tā gēn wǒ yīyàng gāo.",           en:"He is as tall as me." },
      { cn:"这两本书一样厚。",           py:"Zhè liǎng běn shū yīyàng hòu.",   en:"These two books are equally thick." },
      { cn:"她的发音跟中国人一样好。",   py:"Tā de fāyīn gēn Zhōngguórén yīyàng hǎo.", en:"Her pronunciation is as good as a Chinese person's." },
      { cn:"今天跟昨天一样冷。",         py:"Jīntiān gēn zuótiān yīyàng lěng.", en:"Today is as cold as yesterday." },
      { cn:"你们两个人的想法一样。",     py:"Nǐmen liǎng gè rén de xiǎngfǎ yīyàng.", en:"You two have the same idea." },
      { cn:"苹果和梨一样甜。",           py:"Píngguǒ hé lí yīyàng tián.",       en:"Apples are as sweet as pears." },
    ],
    tip: "Negation: A + 跟 + B + 不一样 (A and B are not the same)."
  },
  {
    id: "sp-021", level: 3, category: "comparison",
    title: "越…越…   (The more X, the more Y)",
    pattern: "越 + Adj/V, 越 + Adj/V",
    explanation: "Links two proportional changes. As the first condition increases, so does the second.",
    sentences: [
      { cn:"越学越有趣。",               py:"Yuè xué yuè yǒuqù.",              en:"The more you learn, the more interesting it becomes." },
      { cn:"越吃越饿。",                 py:"Yuè chī yuè è.",                   en:"The more I eat, the hungrier I get." },
      { cn:"越想越难过。",               py:"Yuè xiǎng yuè nánguò.",            en:"The more I think about it, the sadder I feel." },
      { cn:"这道菜越吃越上瘾。",         py:"Zhè dào cài yuè chī yuè shàngyǐn.", en:"This dish is more and more addictive the more you eat." },
      { cn:"他的汉语越说越流利。",       py:"Tā de Hànyǔ yuè shuō yuè liúlì.", en:"His Mandarin becomes more and more fluent the more he speaks." },
      { cn:"越忙，越要注意休息。",       py:"Yuè máng, yuè yào zhùyì xiūxi.",  en:"The busier you are, the more you need to pay attention to rest." },
      { cn:"问题越来越难了。",           py:"Wèntí yuè lái yuè nán le.",        en:"The problems are getting harder and harder." },
    ],
    tip: "越来越 + Adj = 'more and more': 越来越贵 (more and more expensive)."
  },
  {
    id: "sp-022", level: 3, category: "comparison",
    title: "不如 + B   (Not as good as / Inferior to)",
    pattern: "A + 不如 + B (+ Adj)",
    explanation: "不如 (bùrú) directly states that A is not as good as B.",
    sentences: [
      { cn:"我的汉语不如他好。",         py:"Wǒ de Hànyǔ bùrú tā hǎo.",       en:"My Chinese is not as good as his." },
      { cn:"今天不如昨天暖和。",         py:"Jīntiān bùrú zuótiān nuǎnhuo.",   en:"Today is not as warm as yesterday." },
      { cn:"说话不如行动。",             py:"Shuōhuà bùrú xíngdòng.",          en:"Actions speak louder than words." },
      { cn:"开车不如坐火车方便。",       py:"Kāi chē bùrú zuò huǒchē fāngbiàn.", en:"Driving is not as convenient as taking the train." },
      { cn:"外卖不如自己做的健康。",     py:"Wàimài bùrú zìjǐ zuò de jiànkāng.", en:"Takeaway food is not as healthy as homemade food." },
      { cn:"这个版本不如上一个好用。",   py:"Zhège bǎnběn bùrú shàng yī gè hǎo yòng.", en:"This version is not as user-friendly as the previous one." },
    ],
    tip: "与其 A，不如 B = 'Rather than A, it's better to do B'."
  },

  // ===================== CONDITIONALS =====================
  {
    id: "sp-023", level: 3, category: "conditional",
    title: "如果…就…   (If…then…)",
    pattern: "如果 + condition, (Subject) + 就 + result",
    explanation: "如果 (rúguǒ) introduces a hypothetical condition; 就 (jiù) introduces the consequence.",
    sentences: [
      { cn:"如果你有时间，就来我家玩。", py:"Rúguǒ nǐ yǒu shíjiān, jiù lái wǒ jiā wán.", en:"If you have time, come to my place." },
      { cn:"如果下雨，我就不去了。",     py:"Rúguǒ xià yǔ, wǒ jiù bú qù le.", en:"If it rains, I won't go." },
      { cn:"如果你不学习，就会失败。",   py:"Rúguǒ nǐ bù xuéxí, jiù huì shībài.", en:"If you don't study, you will fail." },
      { cn:"如果你需要帮助，请随时联系我。", py:"Rúguǒ nǐ xūyào bāngzhù, qǐng suíshí liánxì wǒ.", en:"If you need help, feel free to contact me at any time." },
      { cn:"如果我有钱，我就买那辆车。", py:"Rúguǒ wǒ yǒu qián, wǒ jiù mǎi nà liàng chē.", en:"If I had money, I would buy that car." },
      { cn:"如果不努力，再聪明也没用。", py:"Rúguǒ bù nǔlì, zài cōngmíng yě méiyòng.", en:"If you don't work hard, being smart is useless." },
      { cn:"如果明天天气好，我们就去爬山。", py:"Rúguǒ míngtiān tiānqì hǎo, wǒmen jiù qù pá shān.", en:"If the weather is nice tomorrow, we'll go hiking." },
    ],
    tip: "只要 (as long as) is similar but emphasizes the minimum condition needed."
  },
  {
    id: "sp-024", level: 3, category: "conditional",
    title: "只要…就…   (As long as…then…)",
    pattern: "只要 + condition, 就 + result",
    explanation: "只要 (zhǐyào) states the minimum sufficient condition. More optimistic than 如果.",
    sentences: [
      { cn:"只要努力，就一定能成功。",   py:"Zhǐyào nǔlì, jiù yīdìng néng chénggōng.", en:"As long as you work hard, you will definitely succeed." },
      { cn:"只要你喜欢，怎样都可以。",   py:"Zhǐyào nǐ xǐhuan, zěnyàng dōu kěyǐ.", en:"As long as you like it, anything is fine." },
      { cn:"只要坚持，汉语一定能学好。", py:"Zhǐyào jiānchí, Hànyǔ yīdìng néng xué hǎo.", en:"As long as you persist, you'll definitely learn Chinese well." },
      { cn:"只要天气好，我们每天都骑车上班。", py:"Zhǐyào tiānqì hǎo, wǒmen měitiān dōu qí chē shàngbān.", en:"As long as the weather is good, we cycle to work every day." },
      { cn:"只要你不迟到，老师就不会批评你。", py:"Zhǐyào nǐ bù chídào, lǎoshī jiù bú huì pīpíng nǐ.", en:"As long as you're not late, the teacher won't criticize you." },
      { cn:"只要有信心，什么都能做到。", py:"Zhǐyào yǒu xìnxīn, shénme dōu néng zuò dào.", en:"As long as you have confidence, you can achieve anything." },
    ],
    tip: "只要 focuses on a single key condition; 如果 is more neutral."
  },
  {
    id: "sp-025", level: 3, category: "conditional",
    title: "不管…都…   (No matter…always…)",
    pattern: "不管 + condition, 都/也 + result",
    explanation: "不管 (bùguǎn) shows the result stays constant regardless of any condition.",
    sentences: [
      { cn:"不管多贵，他都要买。",       py:"Bùguǎn duō guì, tā dōu yào mǎi.", en:"No matter how expensive, he still wants to buy it." },
      { cn:"不管天气好坏，他们都跑步。", py:"Bùguǎn tiānqì hǎo huài, tāmen dōu pǎobù.", en:"No matter what the weather is, they jog." },
      { cn:"不管发生什么，我都支持你。", py:"Bùguǎn fāshēng shénme, wǒ dōu zhīchí nǐ.", en:"No matter what happens, I'll support you." },
      { cn:"不管你去哪里，都要注意安全。", py:"Bùguǎn nǐ qù nǎlǐ, dōu yào zhùyì ānquán.", en:"No matter where you go, pay attention to safety." },
      { cn:"不管成功还是失败，这次经历都很宝贵。", py:"Bùguǎn chénggōng háishi shībài, zhè cì jīnglì dōu hěn bǎoguì.", en:"Whether success or failure, this experience is precious." },
      { cn:"不管别人怎么说，她都坚持自己的看法。", py:"Bùguǎn biérén zěnme shuō, tā dōu jiānchí zìjǐ de kànfǎ.", en:"No matter what others say, she sticks to her own views." },
      { cn:"不管多难，我都不会放弃。",   py:"Bùguǎn duō nán, wǒ dōu bú huì fàngqì.", en:"No matter how hard, I will never give up." },
    ],
    tip: "无论 (wúlùn) is more formal and interchangeable: 无论…都…"
  },
  {
    id: "sp-026", level: 4, category: "conditional",
    title: "就算/即使…也…   (Even if…still…)",
    pattern: "就算/即使 + extreme condition, 也 + result",
    explanation: "Expresses that the result holds even under the most extreme or unlikely circumstances.",
    sentences: [
      { cn:"就算很累，我也要坚持到最后。", py:"Jiùsuàn hěn lèi, wǒ yě yào jiānchí dào zuìhòu.", en:"Even if I'm exhausted, I'll persist to the end." },
      { cn:"即使失败了，也要勇敢面对。", py:"Jíshǐ shībài le, yě yào yǒnggǎn miànduì.", en:"Even if you fail, face it bravely." },
      { cn:"就算只剩一个人，我也要做下去。", py:"Jiùsuàn zhǐ shèng yī gè rén, wǒ yě yào zuò xiàqù.", en:"Even if there's only one person left, I'll carry on." },
      { cn:"即使我说了，他也不会听的。", py:"Jíshǐ wǒ shuō le, tā yě bú huì tīng de.", en:"Even if I said something, he wouldn't listen." },
      { cn:"就算世界上最难的事，慢慢来也能做到。", py:"Jiùsuàn shìjiè shàng zuì nán de shì, mànmàn lái yě néng zuò dào.", en:"Even the hardest thing in the world can be done by taking it slowly." },
      { cn:"即使没有人支持，她也不在乎。", py:"Jíshǐ méiyǒu rén zhīchí, tā yě bú zàihu.", en:"Even if no one supports her, she doesn't care." },
    ],
    tip: "就算 is more colloquial and emotional; 即使 is more formal and literary."
  },
  {
    id: "sp-027", level: 4, category: "conditional",
    title: "既然…就…   (Since [fact]…then…)",
    pattern: "既然 + accepted fact, 就 + logical conclusion",
    explanation: "既然 (jìrán) accepts an established fact and draws a logical or practical conclusion from it.",
    sentences: [
      { cn:"既然决定了，就行动吧。",     py:"Jìrán juédìng le, jiù xíngdòng ba.", en:"Since it's decided, let's take action." },
      { cn:"既然你来了，就留下来吃晚饭吧。", py:"Jìrán nǐ lái le, jiù liú xiàlái chī wǎnfàn ba.", en:"Since you're here, stay for dinner." },
      { cn:"既然不喜欢，就别勉强了。",   py:"Jìrán bù xǐhuan, jiù bié miǎnqiǎng le.", en:"Since you don't like it, don't force yourself." },
      { cn:"既然错了，就赶快道歉吧。",   py:"Jìrán cuò le, jiù gǎnkuài dàoqiàn ba.", en:"Since you made a mistake, apologize quickly." },
      { cn:"既然你已经知道了，我就不多说了。", py:"Jìrán nǐ yǐjīng zhīdào le, wǒ jiù bù duō shuō le.", en:"Since you already know, I won't say more." },
      { cn:"既然答应了就要做到，不能失信。", py:"Jìrán dāyìng le jiù yào zuò dào, bù néng shīxìn.", en:"Since you promised, you must keep your word." },
    ],
    tip: "既然 always refers to a REAL, accepted fact — unlike 如果 (hypothetical)."
  },

  // ===================== CONCESSION =====================
  {
    id: "sp-028", level: 2, category: "concession",
    title: "虽然…但是/可是…   (Although…but…)",
    pattern: "虽然 + concession, 但是/可是 + contrast",
    explanation: "Acknowledges a fact then introduces a contrasting result. Both clauses must have subjects.",
    sentences: [
      { cn:"虽然很贵，但他还是买了。",   py:"Suīrán hěn guì, dàn tā háisi mǎi le.", en:"Although it was expensive, he bought it anyway." },
      { cn:"虽然很累，但我们坚持下来了。", py:"Suīrán hěn lèi, dànshì wǒmen jiānchí xiàlái le.", en:"Although very tired, we persisted." },
      { cn:"虽然天气不好，他们还是去爬山了。", py:"Suīrán tiānqì bù hǎo, tāmen háishi qù pá shān le.", en:"Although the weather was bad, they still went hiking." },
      { cn:"虽然他的汉语不太好，但他敢开口说。", py:"Suīrán tā de Hànyǔ bú tài hǎo, dàn tā gǎn kāikǒu shuō.", en:"Although his Chinese isn't great, he dares to speak up." },
      { cn:"虽然失败了，但这次经历很宝贵。", py:"Suīrán shībài le, dàn zhè cì jīnglì hěn bǎoguì.", en:"Although we failed, this experience is valuable." },
      { cn:"虽然他年纪不大，但经验很丰富。", py:"Suīrán tā niánjì bú dà, dàn jīngyàn hěn fēngfù.", en:"Although he is young, he has rich experience." },
      { cn:"这本书虽然难，但是内容很有用。", py:"Zhè běn shū suīrán nán, dànshì nèiróng hěn yǒuyòng.", en:"This book, although difficult, has very useful content." },
    ],
    tip: "虽然 can appear before or after the subject: 虽然他很聪明 = 他虽然很聪明."
  },
  {
    id: "sp-029", level: 4, category: "concession",
    title: "尽管…还是/仍然…   (Despite…still…)",
    pattern: "尽管 + obstacle, 还是/仍然 + persisting result",
    explanation: "尽管 (jǐnguǎn) is more formal than 虽然. Emphasizes that the result persists despite serious obstacles.",
    sentences: [
      { cn:"尽管困难重重，他仍然没有放弃。", py:"Jǐnguǎn kùnnan chóngchóng, tā réngrán méiyǒu fàngqì.", en:"Despite countless difficulties, he still didn't give up." },
      { cn:"尽管天气很差，比赛还是如期进行。", py:"Jǐnguǎn tiānqì hěn chà, bǐsài háishi rúqī jìnxíng.", en:"Despite the bad weather, the match still proceeded as scheduled." },
      { cn:"尽管受了伤，他还是坚持跑完了马拉松。", py:"Jǐnguǎn shòu le shāng, tā háishi jiānchí pǎo wán le mǎlāsōng.", en:"Despite being injured, he persisted and finished the marathon." },
      { cn:"尽管批评了很多次，他的坏习惯还是没改。", py:"Jǐnguǎn pīpíng le hěnduō cì, tā de huài xíguàn háishi méi gǎi.", en:"Despite being criticized many times, his bad habits haven't changed." },
      { cn:"尽管已经很晚了，他仍然在工作。", py:"Jǐnguǎn yǐjīng hěn wǎn le, tā réngrán zài gōngzuò.", en:"Despite it being very late, he is still working." },
    ],
    tip: "尽管 is typically written Chinese; 虽然 is used in both spoken and written."
  },

  // ===================== EMPHASIS =====================
  {
    id: "sp-030", level: 3, category: "emphasis",
    title: "连…都/也…   (Even…also/too)",
    pattern: "连 + extreme element + 都/也 + Verb",
    explanation: "连 (lián) + 都/也 highlights the most extreme or unexpected element to strengthen a claim.",
    sentences: [
      { cn:"连小孩都知道这件事。",       py:"Lián xiǎohái dōu zhīdào zhè jiàn shì.", en:"Even children know about this." },
      { cn:"他连饭都没吃就走了。",       py:"Tā lián fàn dōu méi chī jiù zǒu le.", en:"He left without even eating." },
      { cn:"这个问题连老师也回答不了。", py:"Zhège wèntí lián lǎoshī yě huídá bù liǎo.", en:"Even the teacher can't answer this question." },
      { cn:"我累得连话都说不出来。",     py:"Wǒ lèi de lián huà dōu shuō bu chū lái.", en:"I'm so tired I can't even speak." },
      { cn:"连名字他都写错了。",         py:"Lián míngzì tā dōu xiě cuò le.",  en:"He even got his own name wrong." },
      { cn:"她连一句中文都不会说。",     py:"Tā lián yī jù Zhōngwén dōu bú huì shuō.", en:"She can't even say a single sentence in Chinese." },
      { cn:"这件事连我最好的朋友也不知道。", py:"Zhè jiàn shì lián wǒ zuì hǎo de péngyou yě bù zhīdào.", en:"Even my best friend doesn't know about this." },
    ],
    tip: "Put 连 before the most extreme/unexpected element to maximize impact."
  },
  {
    id: "sp-031", level: 4, category: "emphasis",
    title: "非…不可   (Absolutely must)",
    pattern: "非 + Verb/Adj + 不可",
    explanation: "A literary double negative creating strong necessity — absolutely must do something.",
    sentences: [
      { cn:"这件事非解决不可。",         py:"Zhè jiàn shì fēi jiějué bùkě.",   en:"This matter absolutely must be resolved." },
      { cn:"这个药非吃不可，否则会加重。", py:"Zhège yào fēi chī bùkě, fǒuzé huì jiāzhòng.", en:"This medicine must be taken, otherwise it will get worse." },
      { cn:"他这次非赢不可，输了就没机会了。", py:"Tā zhè cì fēi yíng bùkě, shū le jiù méi jīhuì le.", en:"He absolutely must win this time; losing means no more chances." },
      { cn:"这个字非常用非会写不可。",   py:"Zhège zì fēicháng yòng, fēi huì xiě bùkě.", en:"This character is very common; you absolutely must know how to write it." },
      { cn:"那个地方美极了，你非去一次不可。", py:"Nà gè dìfāng měi jí le, nǐ fēi qù yī cì bùkě.", en:"That place is incredibly beautiful — you absolutely must visit once." },
      { cn:"报告明天要交，今晚非写完不可。", py:"Bàogào míngtiān yào jiāo, jīn wǎn fēi xiě wán bùkě.", en:"The report is due tomorrow; I absolutely must finish writing it tonight." },
    ],
    tip: "非…不可 is very formal/literary. In spoken Chinese, use 一定要 instead."
  },
  {
    id: "sp-032", level: 4, category: "emphasis",
    title: "宁可…也不…   (Would rather…than…)",
    pattern: "宁可 + preferred action, 也不 + rejected action",
    explanation: "宁可 (nìngkě) expresses a firm preference — choosing one option even if it's harder, refusing another.",
    sentences: [
      { cn:"宁可自己苦，也不让家人受苦。", py:"Nìngkě zìjǐ kǔ, yě bù ràng jiārén shòu kǔ.", en:"I would rather suffer myself than let my family suffer." },
      { cn:"我宁可步行，也不打车。",     py:"Wǒ nìngkě bùxíng, yě bù dǎ chē.", en:"I'd rather walk than take a taxi." },
      { cn:"他宁可失去工作，也不愿意说谎。", py:"Tā nìngkě shīqù gōngzuò, yě bú yuànyì shuōhuǎng.", en:"He would rather lose his job than lie." },
      { cn:"宁可信其有，不可信其无。",   py:"Nìngkě xìn qí yǒu, bùkě xìn qí wú.", en:"It's better to believe it exists than to believe it doesn't. (Better safe than sorry.)" },
      { cn:"她宁可一个人住，也不想和陌生人合租。", py:"Tā nìngkě yī gè rén zhù, yě bù xiǎng hé mòshēng rén hézū.", en:"She'd rather live alone than share a flat with strangers." },
      { cn:"我宁可不吃，也不吃不新鲜的东西。", py:"Wǒ nìngkě bù chī, yě bù chī bù xīnxiān de dōngxi.", en:"I'd rather not eat than eat something not fresh." },
    ],
    tip: "宁愿 is more colloquial: 宁愿走路也不想坐那辆破车."
  },

  // ===================== PASSIVE & DISPOSAL =====================
  {
    id: "sp-033", level: 2, category: "passive",
    title: "把 construction   (Disposal: what was done to X)",
    pattern: "Subject + 把 + Object + Verb + Complement",
    explanation: "把 (bǎ) moves the object before the verb to emphasize how it was acted upon. The verb MUST have a result/complement.",
    sentences: [
      { cn:"我把作业做完了。",           py:"Wǒ bǎ zuòyè zuò wán le.",        en:"I finished the homework." },
      { cn:"他把那本书看完了。",         py:"Tā bǎ nà běn shū kàn wán le.",   en:"He finished reading that book." },
      { cn:"请把门关上。",               py:"Qǐng bǎ mén guān shàng.",        en:"Please close the door." },
      { cn:"她把房间打扫干净了。",       py:"Tā bǎ fángjiān dǎsǎo gānjìng le.", en:"She cleaned the room thoroughly." },
      { cn:"我把钱包忘在家里了。",       py:"Wǒ bǎ qiánbāo wàng zài jiā lǐ le.", en:"I left my wallet at home." },
      { cn:"他把那首歌记住了。",         py:"Tā bǎ nà shǒu gē jì zhù le.",    en:"He memorized that song." },
      { cn:"你能把这段话翻译一下吗？",   py:"Nǐ néng bǎ zhè duàn huà fānyì yīxià ma?", en:"Could you translate this passage?" },
      { cn:"妈妈把饭做好了，快来吃。",   py:"Māma bǎ fàn zuò hǎo le, kuài lái chī.", en:"Mom has cooked the food; come and eat." },
    ],
    tip: "把 requires a 'verb + result'. You CANNOT say 我把书看 — you need: 我把书看完了."
  },
  {
    id: "sp-034", level: 2, category: "passive",
    title: "被 passive   (Receiving an action — often negative)",
    pattern: "Subject + 被 + (Agent) + Verb + Complement",
    explanation: "被 (bèi) marks the subject as the receiver of an action. Usually implies an undesirable outcome.",
    sentences: [
      { cn:"我的手机被偷了。",           py:"Wǒ de shǒujī bèi tōu le.",       en:"My phone was stolen." },
      { cn:"他被老师批评了。",           py:"Tā bèi lǎoshī pīpíng le.",       en:"He was criticized by the teacher." },
      { cn:"那棵树被风刮倒了。",         py:"Nà kē shù bèi fēng guādǎo le.",  en:"That tree was blown down by the wind." },
      { cn:"这个消息已经被证实了。",     py:"Zhège xiāoxi yǐjīng bèi zhèngshí le.", en:"This news has already been confirmed." },
      { cn:"他的计划被老板否定了。",     py:"Tā de jìhuà bèi lǎobǎn fǒuding le.", en:"His plan was rejected by the boss." },
      { cn:"我做的蛋糕被弟弟全吃完了。", py:"Wǒ zuò de dàngāo bèi dìdi quán chī wán le.", en:"The cake I made was eaten up entirely by my younger brother." },
      { cn:"这件事不应该被忽视。",       py:"Zhè jiàn shì bù yīnggāi bèi hūshì.", en:"This matter should not be neglected." },
    ],
    tip: "For neutral/positive passives, use 让/叫: 他让大家感动了 (He moved everyone)."
  },

  // ===================== COMPLEX SENTENCES =====================
  {
    id: "sp-035", level: 3, category: "complex",
    title: "一边…一边…   (Doing two things simultaneously)",
    pattern: "Subject + 一边 + V₁ + 一边 + V₂",
    explanation: "Describes two actions happening at the same time by the same subject.",
    sentences: [
      { cn:"他一边吃饭一边看手机。",     py:"Tā yībiān chīfàn yībiān kàn shǒujī.", en:"He eats while looking at his phone." },
      { cn:"她一边走路一边听音乐。",     py:"Tā yībiān zǒulù yībiān tīng yīnyuè.", en:"She listens to music while walking." },
      { cn:"他们一边喝茶一边聊天。",     py:"Tāmen yībiān hē chá yībiān liáotiān.", en:"They chat while drinking tea." },
      { cn:"我一边学中文一边了解中国文化。", py:"Wǒ yībiān xué Zhōngwén yībiān liǎojiě Zhōngguó wénhuà.", en:"I learn Chinese while learning about Chinese culture." },
      { cn:"她一边哭一边说，让我听不清楚。", py:"Tā yībiān kū yībiān shuō, ràng wǒ tīng bu qīngchu.", en:"She cried while talking, making it hard for me to hear clearly." },
      { cn:"同学们一边讨论一边写答案。", py:"Tóngxuémen yībiān tǎolùn yībiān xiě dá'àn.", en:"Students discuss while writing their answers." },
    ],
    tip: "Both verbs must share the same subject. Don't use 一边 for sequential actions."
  },
  {
    id: "sp-036", level: 3, category: "complex",
    title: "除了…以外，还/都…   (Except / Besides)",
    pattern: "除了 + X + 以外, 还/也/都 + result",
    explanation: "除了 (chúle) has two functions: 1) inclusive (besides X, also Y) 2) exclusive (except X, everyone else).",
    sentences: [
      { cn:"除了英语以外，她还会日语。", py:"Chúle Yīngyǔ yǐwài, tā hái huì Rìyǔ.", en:"Besides English, she can also speak Japanese." },
      { cn:"除了他以外，大家都来了。",   py:"Chúle tā yǐwài, dàjiā dōu lái le.", en:"Everyone came except him." },
      { cn:"除了工作，他还喜欢绘画。",   py:"Chúle gōngzuò, tā hái xǐhuan huìhuà.", en:"Besides work, he also likes painting." },
      { cn:"这道菜除了有点咸，其他都很好。", py:"Zhè dào cài chúle yǒudiǎn xián, qítā dōu hěn hǎo.", en:"This dish is good in every way except being a bit salty." },
      { cn:"除了周末，他每天都去健身房。", py:"Chúle zhōumò, tā měitiān dōu qù jiànshēnfáng.", en:"He goes to the gym every day except weekends." },
      { cn:"除了复习单词，你还需要多听多说。", py:"Chúle fùxí dāncí, nǐ hái xūyào duō tīng duō shuō.", en:"Besides reviewing vocabulary, you also need to listen and speak more." },
    ],
    tip: "还 = inclusive (besides X, also); 都 = exclusive (except X, all others)."
  },
  {
    id: "sp-037", level: 3, category: "complex",
    title: "因为…所以…   (Because…therefore…)",
    pattern: "因为 + reason, 所以 + result",
    explanation: "Links cause and effect. Chinese usually uses BOTH connectives — unlike English where 'because' and 'so' are not used together.",
    sentences: [
      { cn:"因为下大雨，所以我没去上班。", py:"Yīnwèi xià dà yǔ, suǒyǐ wǒ méi qù shàngbān.", en:"Because it rained heavily, I didn't go to work." },
      { cn:"因为他很努力，所以成绩很好。", py:"Yīnwèi tā hěn nǔlì, suǒyǐ chéngjì hěn hǎo.", en:"Because he works hard, his grades are very good." },
      { cn:"因为身体不舒服，所以她早退了。", py:"Yīnwèi shēntǐ bù shūfu, suǒyǐ tā zǎotuì le.", en:"Because she wasn't feeling well, she left early." },
      { cn:"因为没有提前准备，所以演讲很糟糕。", py:"Yīnwèi méiyǒu tíqián zhǔnbèi, suǒyǐ yǎnjiǎng hěn zāogāo.", en:"Because there was no advance preparation, the speech was terrible." },
      { cn:"正因为这样，我才更加努力。", py:"Zhèng yīnwèi zhèyàng, wǒ cái gèngjiā nǔlì.", en:"Precisely because of this, I work even harder." },
      { cn:"之所以成功，是因为团队合作做得好。", py:"Zhī suǒyǐ chénggōng, shì yīnwèi tuánduì hézuò zuò de hǎo.", en:"The reason for success is good teamwork." },
    ],
    tip: "You can drop 因为 and keep only 所以, but dropping 所以 alone sounds strange."
  },
  {
    id: "sp-038", level: 4, category: "complex",
    title: "与其…不如…   (Rather than X, better to Y)",
    pattern: "与其 + less preferred option, 不如 + better option",
    explanation: "与其 (yǔqí) explicitly compares two options and recommends the second as superior.",
    sentences: [
      { cn:"与其抱怨，不如想办法解决。", py:"Yǔqí bàoyuàn, bùrú xiǎng bànfǎ jiějué.", en:"Rather than complaining, it's better to think of a solution." },
      { cn:"与其等待机会，不如主动创造机会。", py:"Yǔqí děngdài jīhuì, bùrú zhǔdòng chuàngzào jīhuì.", en:"Rather than waiting for opportunities, it's better to actively create them." },
      { cn:"与其买贵的，不如买实用的。", py:"Yǔqí mǎi guì de, bùrú mǎi shíyòng de.", en:"Rather than buying something expensive, it's better to buy something practical." },
      { cn:"与其花时间刷手机，不如多读几页书。", py:"Yǔqí huā shíjiān shuā shǒujī, bùrú duō dú jǐ yè shū.", en:"Rather than wasting time on your phone, it's better to read a few more pages." },
      { cn:"与其一个人苦撑，不如向大家求助。", py:"Yǔqí yī gè rén kǔ chēng, bùrú xiàng dàjiā qiú zhù.", en:"Rather than struggling alone, it's better to ask others for help." },
      { cn:"与其担心未来，不如好好享受现在。", py:"Yǔqí dānxīn wèilái, bùrú hǎohǎo xiǎngshòu xiànzài.", en:"Rather than worrying about the future, it's better to enjoy the present." },
    ],
    tip: "与其 A 不如 B — B is always the recommended choice."
  },
  {
    id: "sp-039", level: 4, category: "complex",
    title: "不是…就是…   (Either…or… / If not X then Y)",
    pattern: "不是 + A, 就是 + B",
    explanation: "Expresses that only two outcomes are possible — one or the other. Covers all possibilities.",
    sentences: [
      { cn:"他不是在睡觉，就是在打游戏。", py:"Tā bú shì zài shuìjiào, jiùshi zài dǎ yóuxì.", en:"He's either sleeping or playing video games." },
      { cn:"这件事不是你的错，就是他的错。", py:"Zhè jiàn shì bú shì nǐ de cuò, jiùshi tā de cuò.", en:"This mistake is either yours or his." },
      { cn:"他周末不是去爬山，就是去游泳。", py:"Tā zhōumò bú shì qù pá shān, jiùshi qù yóuyǒng.", en:"On weekends he either goes hiking or swimming." },
      { cn:"她不是忘了，就是不想来。",   py:"Tā bú shì wàng le, jiùshi bù xiǎng lái.", en:"She either forgot, or she just doesn't want to come." },
      { cn:"这道题不是我做错了，就是答案有问题。", py:"Zhè dào tí bú shì wǒ zuò cuò le, jiùshi dá'àn yǒu wèntí.", en:"Either I got this question wrong, or there's a problem with the answer." },
    ],
    tip: "不是…就是 covers ALL possibilities between two options — no third option exists."
  },
  {
    id: "sp-040", level: 5, category: "complex",
    title: "之所以…是因为…   (The reason X is because Y)",
    pattern: "S + 之所以 + result, 是因为 + reason",
    explanation: "A formal inversion of 因为…所以… — the result is stated first for emphasis, then the reason is given.",
    sentences: [
      { cn:"他之所以成功，是因为他比别人更努力。", py:"Tā zhī suǒyǐ chénggōng, shì yīnwèi tā bǐ biérén gèng nǔlì.", en:"The reason he succeeded is that he worked harder than others." },
      { cn:"中文之所以难学，是因为声调和汉字太多。", py:"Zhōngwén zhī suǒyǐ nán xué, shì yīnwèi shēngdiào hé Hànzì tài duō.", en:"Chinese is difficult to learn because there are too many tones and characters." },
      { cn:"这个产品之所以受欢迎，是因为质量好、价格合理。", py:"Zhège chǎnpǐn zhī suǒyǐ shòu huānyíng, shì yīnwèi zhìliàng hǎo, jiàgé hélǐ.", en:"The reason this product is popular is its good quality and reasonable price." },
      { cn:"他之所以离职，是因为公司文化和他的价值观不符。", py:"Tā zhī suǒyǐ lí zhí, shì yīnwèi gōngsī wénhuà hé tā de jiàzhíguān bù fú.", en:"The reason he resigned is that the company culture didn't align with his values." },
      { cn:"她之所以这么受学生欢迎，是因为她的课总是很生动。", py:"Tā zhī suǒyǐ zhème shòu xuéshēng huānyíng, shì yīnwèi tā de kè zǒng shì hěn shēngdòng.", en:"The reason she is so popular with students is that her classes are always vivid." },
    ],
    tip: "This pattern is more formal and literary than 因为…所以…. Often found in essays and speeches."
  },
  {
    id: "sp-041", level: 5, category: "complex",
    title: "不得不…   (Cannot but / Have no choice but to)",
    pattern: "Subject + 不得不 + Verb",
    explanation: "不得不 (bùdébù) expresses reluctant necessity — there is no other option.",
    sentences: [
      { cn:"因为生病，他不得不请假。",   py:"Yīnwèi shēngbìng, tā bùdébù qǐngjià.", en:"Because of illness, he had no choice but to take leave." },
      { cn:"面对现实，我们不得不承认失败。", py:"Miàn duì xiànshí, wǒmen bùdébù chéngrèn shībài.", en:"Faced with reality, we had no choice but to admit defeat." },
      { cn:"眼看截止日期已到，他不得不熬夜完成。", py:"Yǎnkàn jiézhǐ rìqī yǐ dào, tā bùdébù áoyè wánchéng.", en:"Seeing the deadline had arrived, he had no choice but to pull an all-nighter to finish." },
      { cn:"由于资金不足，计划不得不推迟。", py:"Yóuyú zījīn bùzú, jìhuà bùdébù tuīchí.", en:"Due to insufficient funding, the plan had to be postponed." },
      { cn:"为了养家，他不得不做两份工作。", py:"Wèile yǎng jiā, tā bùdébù zuò liǎng fèn gōngzuò.", en:"To support the family, he had no choice but to work two jobs." },
      { cn:"情况紧急，我们不得不立即采取行动。", py:"Qíngkuàng jǐnjí, wǒmen bùdébù lìjí cǎiqǔ xíngdòng.", en:"The situation is urgent; we have no choice but to take immediate action." },
    ],
    tip: "不得不 implies the speaker is forced against their preference — compare with 必须 (objective must)."
  },
  {
    id: "sp-042", level: 5, category: "emphasis",
    title: "是…的   (Cleft sentence — emphasize when/where/how)",
    pattern: "是 + [time / place / manner] + 的",
    explanation: "The 是…的 structure emphasizes a specific detail about a PAST completed action.",
    sentences: [
      { cn:"他是昨天来的。",             py:"Tā shì zuótiān lái de.",           en:"He came yesterday. (Emphasis: when he came)" },
      { cn:"这本书是在北京买的。",       py:"Zhè běn shū shì zài Běijīng mǎi de.", en:"This book was bought in Beijing. (Emphasis: where)" },
      { cn:"这个字是用毛笔写的。",       py:"Zhège zì shì yòng máobǐ xiě de.", en:"This character was written with a calligraphy brush. (Emphasis: how)" },
      { cn:"他们是坐高铁去的。",         py:"Tāmen shì zuò gāotiě qù de.",      en:"They went by high-speed rail. (Emphasis: how)" },
      { cn:"这个消息是谁告诉你的？",     py:"Zhège xiāoxi shì shéi gàosu nǐ de?", en:"Who told you this news?" },
      { cn:"我是在那次旅行中认识他的。", py:"Wǒ shì zài nà cì lǚxíng zhōng rènshí tā de.", en:"I got to know him during that trip." },
      { cn:"这首歌是她自己创作的。",     py:"Zhè shǒu gē shì tā zìjǐ chuàngzuò de.", en:"This song was composed by her herself." },
    ],
    tip: "是…的 only works for PAST + COMPLETED events. Present/future actions cannot use this structure."
  },
];

// Expose globally
if (typeof window !== 'undefined') {
  window.SENTENCE_PATTERNS_DATA = SENTENCE_PATTERNS_DATA;
}
