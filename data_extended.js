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
