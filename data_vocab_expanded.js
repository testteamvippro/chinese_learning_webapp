// =============================================
//  EXPANDED VOCABULARY — HSK 1–6
//  Official HSK 2021 Standard Wordlist basis
//  Adds `emoji` field for visual learning.
//  Targets: HSK 1 → ~500 words
//
//  NOTE: I am not able to fetch from the internet,
//        but this list is based on the official
//        HSK 1-6 (2021) syllabus vocabulary.
//
//  Must be loaded AFTER data.js and data_extended.js
// =============================================

// ---- HSK 1 NEW WORDS (~300 additions) ----
const HSK1_NEW = [

  // ===== GREETINGS & BASIC EXPRESSIONS =====
  { char:"对不起",   pinyin:"duìbuqǐ",       tone:4, meaning:"sorry / excuse me",               pos:"phrase",   emoji:"🙇", example:"对不起，我来晚了。",       exampleMeaning:"Sorry, I was late." },
  { char:"没关系",   pinyin:"méi guānxi",     tone:2, meaning:"never mind / it's OK",            pos:"phrase",   emoji:"👌", example:"没关系，你慢慢来。",       exampleMeaning:"It's OK, take your time." },
  { char:"不客气",   pinyin:"bù kèqi",        tone:4, meaning:"you're welcome",                  pos:"phrase",   emoji:"😊", example:"谢谢！不客气。",           exampleMeaning:"Thank you! You're welcome." },
  { char:"请",       pinyin:"qǐng",           tone:3, meaning:"please / to invite",              pos:"verb",     emoji:"🙏", example:"请坐！",                   exampleMeaning:"Please sit down!" },
  { char:"请问",     pinyin:"qǐngwèn",        tone:3, meaning:"excuse me / may I ask",           pos:"phrase",   emoji:"❓", example:"请问，银行在哪里？",       exampleMeaning:"Excuse me, where is the bank?" },
  { char:"欢迎",     pinyin:"huānyíng",       tone:1, meaning:"welcome",                         pos:"verb",     emoji:"🎉", example:"欢迎来到中国！",           exampleMeaning:"Welcome to China!" },
  { char:"加油",     pinyin:"jiāyóu",         tone:1, meaning:"come on / go for it",             pos:"phrase",   emoji:"💪", example:"加油！你一定能做到！",     exampleMeaning:"Come on! You can definitely do it!" },
  { char:"好久不见", pinyin:"hǎo jiǔ bú jiàn",tone:3, meaning:"long time no see",               pos:"phrase",   emoji:"👋", example:"好久不见！你还好吗？",     exampleMeaning:"Long time no see! Are you well?" },
  { char:"没问题",   pinyin:"méi wèntí",      tone:2, meaning:"no problem",                      pos:"phrase",   emoji:"✅", example:"没问题，我来帮你。",       exampleMeaning:"No problem, I'll help you." },
  { char:"有意思",   pinyin:"yǒu yìsi",       tone:3, meaning:"interesting",                     pos:"adj",      emoji:"🤩", example:"这本书很有意思。",         exampleMeaning:"This book is very interesting." },

  // ===== FAMILY (EXTENDED) =====
  { char:"儿子",     pinyin:"érzi",           tone:2, meaning:"son",                             pos:"noun",     emoji:"👦", example:"他有一个儿子。",           exampleMeaning:"He has one son." },
  { char:"女儿",     pinyin:"nǚ'ér",          tone:3, meaning:"daughter",                        pos:"noun",     emoji:"👧", example:"她的女儿很可爱。",         exampleMeaning:"Her daughter is very cute." },
  { char:"爷爷",     pinyin:"yéye",           tone:2, meaning:"paternal grandfather",            pos:"noun",     emoji:"👴", example:"爷爷每天打太极。",         exampleMeaning:"Grandpa does Tai Chi every day." },
  { char:"奶奶",     pinyin:"nǎinai",         tone:3, meaning:"paternal grandmother",            pos:"noun",     emoji:"👵", example:"奶奶特别喜欢包饺子。",     exampleMeaning:"Grandma especially loves making dumplings." },
  { char:"外公",     pinyin:"wàigōng",        tone:4, meaning:"maternal grandfather",            pos:"noun",     emoji:"👴", example:"外公是一位医生。",         exampleMeaning:"Maternal grandpa is a doctor." },
  { char:"外婆",     pinyin:"wàipó",          tone:4, meaning:"maternal grandmother",            pos:"noun",     emoji:"👵", example:"外婆做的菜最好吃。",       exampleMeaning:"The dishes maternal grandma cooks are the most delicious." },
  { char:"丈夫",     pinyin:"zhàngfu",        tone:4, meaning:"husband",                         pos:"noun",     emoji:"👨", example:"她的丈夫很体贴。",         exampleMeaning:"Her husband is very considerate." },
  { char:"妻子",     pinyin:"qīzi",           tone:1, meaning:"wife",                            pos:"noun",     emoji:"👩", example:"他的妻子是一名老师。",     exampleMeaning:"His wife is a teacher." },
  { char:"孩子",     pinyin:"háizi",          tone:2, meaning:"child / children",                pos:"noun",     emoji:"👶", example:"孩子们在公园里玩。",       exampleMeaning:"The children are playing in the park." },
  { char:"邻居",     pinyin:"línjū",          tone:2, meaning:"neighbor",                        pos:"noun",     emoji:"🏘️", example:"我的邻居很友好。",         exampleMeaning:"My neighbor is very friendly." },
  { char:"同学",     pinyin:"tóngxué",        tone:2, meaning:"classmate",                       pos:"noun",     emoji:"👫", example:"他是我的同学。",           exampleMeaning:"He is my classmate." },
  { char:"大家",     pinyin:"dàjiā",          tone:4, meaning:"everyone",                        pos:"pronoun",  emoji:"👥", example:"大家好！",                 exampleMeaning:"Hello everyone!" },
  { char:"自己",     pinyin:"zìjǐ",           tone:4, meaning:"oneself / self",                  pos:"pronoun",  emoji:"🙋", example:"你要相信自己。",           exampleMeaning:"You must believe in yourself." },

  // ===== ANIMALS =====
  { char:"鸟",       pinyin:"niǎo",           tone:3, meaning:"bird",                            pos:"noun",     emoji:"🐦", example:"树上有一只小鸟。",         exampleMeaning:"There is a little bird on the tree." },
  { char:"牛",       pinyin:"niú",            tone:2, meaning:"cow / ox",                        pos:"noun",     emoji:"🐄", example:"奶奶家有一头牛。",         exampleMeaning:"Grandma's house has a cow." },
  { char:"马",       pinyin:"mǎ",             tone:3, meaning:"horse",                           pos:"noun",     emoji:"🐴", example:"这匹马跑得很快。",         exampleMeaning:"This horse runs very fast." },
  { char:"羊",       pinyin:"yáng",           tone:2, meaning:"sheep / goat",                    pos:"noun",     emoji:"🐑", example:"草地上有很多羊。",         exampleMeaning:"There are many sheep on the grassland." },
  { char:"猪",       pinyin:"zhū",            tone:1, meaning:"pig",                             pos:"noun",     emoji:"🐷", example:"农场里有很多猪。",         exampleMeaning:"There are many pigs on the farm." },
  { char:"兔子",     pinyin:"tùzi",           tone:4, meaning:"rabbit",                          pos:"noun",     emoji:"🐰", example:"这只兔子是白色的。",       exampleMeaning:"This rabbit is white." },
  { char:"老虎",     pinyin:"lǎohǔ",          tone:3, meaning:"tiger",                           pos:"noun",     emoji:"🐯", example:"动物园里有一只老虎。",     exampleMeaning:"There is a tiger in the zoo." },
  { char:"大象",     pinyin:"dàxiàng",        tone:4, meaning:"elephant",                        pos:"noun",     emoji:"🐘", example:"大象的鼻子很长。",         exampleMeaning:"An elephant's trunk is very long." },
  { char:"熊猫",     pinyin:"xióngmāo",       tone:2, meaning:"panda",                          pos:"noun",     emoji:"🐼", example:"熊猫是中国的国宝。",       exampleMeaning:"The panda is China's national treasure." },
  { char:"猴子",     pinyin:"hóuzi",          tone:2, meaning:"monkey",                          pos:"noun",     emoji:"🐒", example:"猴子爬树很厉害。",         exampleMeaning:"Monkeys are great at climbing trees." },
  { char:"鸭子",     pinyin:"yāzi",           tone:1, meaning:"duck",                            pos:"noun",     emoji:"🦆", example:"湖里有很多鸭子。",         exampleMeaning:"There are many ducks in the lake." },
  { char:"鸡",       pinyin:"jī",             tone:1, meaning:"chicken / rooster",               pos:"noun",     emoji:"🐔", example:"农场里有很多鸡。",         exampleMeaning:"There are many chickens on the farm." },

  // ===== FOOD & DRINK =====
  { char:"橙子",     pinyin:"chéngzi",        tone:2, meaning:"orange (fruit)",                  pos:"noun",     emoji:"🍊", example:"我买了几个橙子。",         exampleMeaning:"I bought a few oranges." },
  { char:"草莓",     pinyin:"cǎoméi",         tone:3, meaning:"strawberry",                      pos:"noun",     emoji:"🍓", example:"这些草莓很甜。",           exampleMeaning:"These strawberries are very sweet." },
  { char:"柠檬",     pinyin:"níngméng",       tone:2, meaning:"lemon",                           pos:"noun",     emoji:"🍋", example:"我喜欢喝柠檬水。",         exampleMeaning:"I like drinking lemonade." },
  { char:"梨",       pinyin:"lí",             tone:2, meaning:"pear",                            pos:"noun",     emoji:"🍐", example:"这个梨子很甜。",           exampleMeaning:"This pear is very sweet." },
  { char:"桃子",     pinyin:"táozi",          tone:2, meaning:"peach",                           pos:"noun",     emoji:"🍑", example:"夏天的桃子最好吃。",       exampleMeaning:"Summer peaches are the most delicious." },
  { char:"西红柿",   pinyin:"xīhóngshì",      tone:1, meaning:"tomato",                          pos:"noun",     emoji:"🍅", example:"我喜欢吃西红柿炒鸡蛋。",   exampleMeaning:"I like eating stir-fried tomato with egg." },
  { char:"胡萝卜",   pinyin:"húluóbo",        tone:2, meaning:"carrot",                          pos:"noun",     emoji:"🥕", example:"兔子喜欢吃胡萝卜。",       exampleMeaning:"Rabbits like to eat carrots." },
  { char:"土豆",     pinyin:"tǔdòu",          tone:3, meaning:"potato",                          pos:"noun",     emoji:"🥔", example:"土豆可以做很多菜。",       exampleMeaning:"Potatoes can make many dishes." },
  { char:"白菜",     pinyin:"báicài",         tone:2, meaning:"Chinese cabbage / bok choy",      pos:"noun",     emoji:"🥬", example:"白菜价格便宜。",           exampleMeaning:"Cabbage is cheap." },
  { char:"咖啡",     pinyin:"kāfēi",          tone:1, meaning:"coffee",                          pos:"noun",     emoji:"☕", example:"我每天早上喝咖啡。",       exampleMeaning:"I drink coffee every morning." },
  { char:"啤酒",     pinyin:"píjiǔ",          tone:2, meaning:"beer",                            pos:"noun",     emoji:"🍺", example:"他喜欢喝冰啤酒。",         exampleMeaning:"He likes drinking cold beer." },
  { char:"果汁",     pinyin:"guǒzhī",         tone:3, meaning:"fruit juice",                     pos:"noun",     emoji:"🍹", example:"我要一杯橙汁。",           exampleMeaning:"I want a glass of orange juice." },
  { char:"汤",       pinyin:"tāng",           tone:1, meaning:"soup",                            pos:"noun",     emoji:"🍲", example:"这汤很好喝。",             exampleMeaning:"This soup is very tasty." },
  { char:"火锅",     pinyin:"huǒguō",         tone:3, meaning:"hot pot",                         pos:"noun",     emoji:"🫕", example:"我们一起吃火锅吧！",       exampleMeaning:"Let's eat hot pot together!" },
  { char:"烤鸭",     pinyin:"kǎoyā",          tone:3, meaning:"roast duck",                      pos:"noun",     emoji:"🍗", example:"北京烤鸭很出名。",         exampleMeaning:"Peking roast duck is very famous." },
  { char:"馒头",     pinyin:"mántou",         tone:2, meaning:"steamed bread bun",               pos:"noun",     emoji:"🥛", example:"我早饭吃了两个馒头。",     exampleMeaning:"I ate two steamed buns for breakfast." },
  { char:"粥",       pinyin:"zhōu",           tone:1, meaning:"congee / rice porridge",          pos:"noun",     emoji:"🥣", example:"早上喝粥很健康。",         exampleMeaning:"Drinking congee in the morning is very healthy." },
  { char:"饺子",     pinyin:"jiǎozi",         tone:3, meaning:"dumplings",                       pos:"noun",     emoji:"🥟", example:"春节要吃饺子。",           exampleMeaning:"Dumplings are eaten at Spring Festival." },
  { char:"寿司",     pinyin:"shòusī",         tone:4, meaning:"sushi",                           pos:"noun",     emoji:"🍱", example:"我喜欢吃寿司。",           exampleMeaning:"I like eating sushi." },
  { char:"巧克力",   pinyin:"qiǎokèlì",       tone:3, meaning:"chocolate",                       pos:"noun",     emoji:"🍫", example:"孩子们很喜欢巧克力。",     exampleMeaning:"Children love chocolate." },
  { char:"冰淇淋",   pinyin:"bīngqílín",      tone:1, meaning:"ice cream",                       pos:"noun",     emoji:"🍦", example:"夏天吃冰淇淋真爽。",       exampleMeaning:"Eating ice cream in summer is so refreshing." },
  { char:"蛋糕",     pinyin:"dàngāo",         tone:4, meaning:"cake",                            pos:"noun",     emoji:"🎂", example:"生日快乐！这是你的蛋糕。", exampleMeaning:"Happy birthday! This is your cake." },
  { char:"饼干",     pinyin:"bǐnggān",        tone:3, meaning:"biscuit / cookie / cracker",      pos:"noun",     emoji:"🍪", example:"我喜欢吃饼干。",           exampleMeaning:"I like eating biscuits." },
  { char:"糖",       pinyin:"táng",           tone:2, meaning:"sugar / candy / sweets",          pos:"noun",     emoji:"🍬", example:"小孩子喜欢吃糖。",         exampleMeaning:"Children like eating candy." },
  { char:"盐",       pinyin:"yán",            tone:2, meaning:"salt",                            pos:"noun",     emoji:"🧂", example:"请放点盐。",               exampleMeaning:"Please add some salt." },
  { char:"油",       pinyin:"yóu",            tone:2, meaning:"oil",                             pos:"noun",     emoji:"🫙", example:"炒菜要用油。",             exampleMeaning:"You need oil for stir-frying." },
  { char:"酱油",     pinyin:"jiàngyóu",       tone:4, meaning:"soy sauce",                       pos:"noun",     emoji:"🍶", example:"加点酱油更好吃。",         exampleMeaning:"Adding some soy sauce makes it more delicious." },
  { char:"醋",       pinyin:"cù",             tone:4, meaning:"vinegar",                         pos:"noun",     emoji:"🍾", example:"吃饺子要蘸醋。",           exampleMeaning:"Dumplings should be dipped in vinegar." },

  // ===== CLOTHES =====
  { char:"裤子",     pinyin:"kùzi",           tone:4, meaning:"pants / trousers",                pos:"noun",     emoji:"👖", example:"他穿了一条蓝色牛仔裤。",   exampleMeaning:"He wore a pair of blue jeans." },
  { char:"裙子",     pinyin:"qúnzi",          tone:2, meaning:"skirt / dress",                   pos:"noun",     emoji:"👗", example:"她穿了一条白色裙子。",     exampleMeaning:"She wore a white skirt." },
  { char:"帽子",     pinyin:"màozi",          tone:4, meaning:"hat / cap",                       pos:"noun",     emoji:"🎩", example:"外面很冷，戴上帽子。",     exampleMeaning:"It's very cold outside, put on your hat." },
  { char:"袜子",     pinyin:"wàzi",           tone:4, meaning:"socks",                           pos:"noun",     emoji:"🧦", example:"我找不到我的袜子。",       exampleMeaning:"I can't find my socks." },
  { char:"外套",     pinyin:"wàitào",         tone:4, meaning:"coat / jacket / overcoat",        pos:"noun",     emoji:"🧥", example:"今天冷，穿外套吧。",       exampleMeaning:"It's cold today, wear your coat." },
  { char:"毛衣",     pinyin:"máoyī",          tone:2, meaning:"sweater",                         pos:"noun",     emoji:"🧶", example:"妈妈给我织了一件毛衣。",   exampleMeaning:"Mom knitted me a sweater." },
  { char:"短裤",     pinyin:"duǎnkù",         tone:3, meaning:"shorts",                          pos:"noun",     emoji:"🩳", example:"夏天我喜欢穿短裤。",       exampleMeaning:"I like wearing shorts in summer." },
  { char:"运动鞋",   pinyin:"yùndòngxié",     tone:4, meaning:"sneakers / sports shoes",         pos:"noun",     emoji:"👟", example:"这双运动鞋很舒服。",       exampleMeaning:"These sneakers are very comfortable." },
  { char:"围巾",     pinyin:"wéijīn",         tone:2, meaning:"scarf",                           pos:"noun",     emoji:"🧣", example:"冬天戴围巾很暖和。",       exampleMeaning:"Wearing a scarf in winter is very warm." },
  { char:"手套",     pinyin:"shǒutào",        tone:3, meaning:"gloves",                          pos:"noun",     emoji:"🧤", example:"外面很冷，戴手套吧。",     exampleMeaning:"It's cold outside, wear your gloves." },
  { char:"眼镜",     pinyin:"yǎnjìng",        tone:3, meaning:"glasses / spectacles",            pos:"noun",     emoji:"👓", example:"他戴了一副眼镜。",         exampleMeaning:"He is wearing a pair of glasses." },

  // ===== BODY (EXTENDED) =====
  { char:"脸",       pinyin:"liǎn",           tone:3, meaning:"face",                            pos:"noun",     emoji:"😊", example:"她的脸很红。",             exampleMeaning:"Her face is very red." },
  { char:"胳膊",     pinyin:"gēbo",           tone:1, meaning:"arm",                             pos:"noun",     emoji:"💪", example:"我的胳膊受伤了。",         exampleMeaning:"My arm is injured." },
  { char:"腿",       pinyin:"tuǐ",            tone:3, meaning:"leg",                             pos:"noun",     emoji:"🦵", example:"他跑步腿很酸。",           exampleMeaning:"His legs are sore from running." },
  { char:"肚子",     pinyin:"dùzi",           tone:4, meaning:"stomach / belly / abdomen",       pos:"noun",     emoji:"🫃", example:"我肚子饿了。",             exampleMeaning:"My stomach is hungry." },
  { char:"牙",       pinyin:"yá",             tone:2, meaning:"tooth / teeth",                   pos:"noun",     emoji:"🦷", example:"刷牙很重要。",             exampleMeaning:"Brushing teeth is very important." },
  { char:"头发",     pinyin:"tóufa",          tone:2, meaning:"hair",                            pos:"noun",     emoji:"💇", example:"她的头发很长。",           exampleMeaning:"Her hair is very long." },
  { char:"皮肤",     pinyin:"pífū",           tone:2, meaning:"skin",                            pos:"noun",     emoji:"🤲", example:"她的皮肤很好。",           exampleMeaning:"Her skin is very good." },
  { char:"心",       pinyin:"xīn",            tone:1, meaning:"heart / mind",                    pos:"noun",     emoji:"❤️", example:"我心里很开心。",           exampleMeaning:"I feel happy in my heart." },

  // ===== PLACES =====
  { char:"房子",     pinyin:"fángzi",         tone:2, meaning:"house / building",                pos:"noun",     emoji:"🏠", example:"他买了一栋新房子。",       exampleMeaning:"He bought a new house." },
  { char:"楼",       pinyin:"lóu",            tone:2, meaning:"building / floor / storey",       pos:"noun",     emoji:"🏢", example:"我住在四楼。",             exampleMeaning:"I live on the fourth floor." },
  { char:"宿舍",     pinyin:"sùshè",          tone:4, meaning:"dormitory",                       pos:"noun",     emoji:"🛏️", example:"我住在学校宿舍。",         exampleMeaning:"I live in the school dormitory." },
  { char:"厨房",     pinyin:"chúfáng",        tone:2, meaning:"kitchen",                         pos:"noun",     emoji:"🍳", example:"妈妈在厨房做饭。",         exampleMeaning:"Mom is cooking in the kitchen." },
  { char:"浴室",     pinyin:"yùshì",          tone:4, meaning:"bathroom",                        pos:"noun",     emoji:"🛁", example:"我去浴室洗澡。",           exampleMeaning:"I'm going to the bathroom to shower." },
  { char:"客厅",     pinyin:"kètīng",         tone:4, meaning:"living room",                     pos:"noun",     emoji:"🛋️", example:"我们在客厅看电视。",       exampleMeaning:"We watch TV in the living room." },
  { char:"卧室",     pinyin:"wòshì",          tone:4, meaning:"bedroom",                         pos:"noun",     emoji:"🛏️", example:"我的卧室很小。",           exampleMeaning:"My bedroom is very small." },
  { char:"厕所",     pinyin:"cèsuǒ",          tone:4, meaning:"toilet / restroom",               pos:"noun",     emoji:"🚻", example:"厕所在哪里？",             exampleMeaning:"Where is the restroom?" },
  { char:"餐厅",     pinyin:"cāntīng",        tone:1, meaning:"restaurant / cafeteria",          pos:"noun",     emoji:"🍽️", example:"这家餐厅很有名。",         exampleMeaning:"This restaurant is very famous." },
  { char:"咖啡店",   pinyin:"kāfēidiàn",      tone:1, meaning:"coffee shop / café",              pos:"noun",     emoji:"☕", example:"我们在咖啡店见面。",       exampleMeaning:"Let's meet at the coffee shop." },
  { char:"书店",     pinyin:"shūdiàn",        tone:1, meaning:"bookstore",                       pos:"noun",     emoji:"📚", example:"我去书店买了一本书。",     exampleMeaning:"I went to the bookstore to buy a book." },
  { char:"操场",     pinyin:"cāochǎng",       tone:1, meaning:"sports ground / playground",      pos:"noun",     emoji:"⛹️", example:"孩子们在操场上玩。",       exampleMeaning:"The children are playing on the sports ground." },
  { char:"电影院",   pinyin:"diànyǐngyuàn",   tone:4, meaning:"cinema / movie theater",          pos:"noun",     emoji:"🎬", example:"我们去电影院看电影吧。",   exampleMeaning:"Let's go to the cinema to watch a movie." },
  { char:"火车站",   pinyin:"huǒchēzhàn",     tone:3, meaning:"train station",                   pos:"noun",     emoji:"🚉", example:"火车站在哪里？",           exampleMeaning:"Where is the train station?" },
  { char:"地铁站",   pinyin:"dìtiězhàn",      tone:4, meaning:"subway station",                  pos:"noun",     emoji:"🚇", example:"从这里到地铁站要走多久？", exampleMeaning:"How long does it take to walk to the subway station from here?" },
  { char:"动物园",   pinyin:"dòngwùyuán",     tone:4, meaning:"zoo",                             pos:"noun",     emoji:"🦁", example:"我们去动物园吧！",         exampleMeaning:"Let's go to the zoo!" },
  { char:"博物馆",   pinyin:"bówùguǎn",       tone:2, meaning:"museum",                          pos:"noun",     emoji:"🏛️", example:"故宫是著名的博物馆。",     exampleMeaning:"The Forbidden City is a famous museum." },

  // ===== SPORTS & ACTIVITIES =====
  { char:"篮球",     pinyin:"lánqiú",         tone:2, meaning:"basketball",                      pos:"noun",     emoji:"🏀", example:"他喜欢打篮球。",           exampleMeaning:"He likes playing basketball." },
  { char:"足球",     pinyin:"zúqiú",          tone:2, meaning:"football / soccer",               pos:"noun",     emoji:"⚽", example:"我们周末踢足球。",         exampleMeaning:"We play soccer on weekends." },
  { char:"网球",     pinyin:"wǎngqiú",        tone:3, meaning:"tennis",                          pos:"noun",     emoji:"🎾", example:"她每周打网球。",           exampleMeaning:"She plays tennis every week." },
  { char:"乒乓球",   pinyin:"pīngpāngqiú",    tone:1, meaning:"table tennis / ping-pong",        pos:"noun",     emoji:"🏓", example:"乒乓球是中国的国球。",     exampleMeaning:"Table tennis is China's national sport." },
  { char:"羽毛球",   pinyin:"yǔmáoqiú",       tone:3, meaning:"badminton",                       pos:"noun",     emoji:"🏸", example:"我和朋友打羽毛球。",       exampleMeaning:"I play badminton with my friend." },
  { char:"太极",     pinyin:"tàijí",          tone:4, meaning:"Tai Chi",                         pos:"noun",     emoji:"☯️", example:"爷爷每天早上打太极。",     exampleMeaning:"Grandpa does Tai Chi every morning." },
  { char:"爬山",     pinyin:"páshān",         tone:2, meaning:"to climb a mountain / hiking",    pos:"verb",     emoji:"🧗", example:"周末我们去爬山。",         exampleMeaning:"We go hiking on weekends." },
  { char:"钓鱼",     pinyin:"diàoyú",         tone:4, meaning:"to go fishing",                   pos:"verb",     emoji:"🎣", example:"爷爷喜欢去钓鱼。",         exampleMeaning:"Grandpa likes to go fishing." },

  // ===== SCHOOL & STATIONERY =====
  { char:"铅笔",     pinyin:"qiānbǐ",         tone:1, meaning:"pencil",                          pos:"noun",     emoji:"✏️", example:"我用铅笔写字。",           exampleMeaning:"I write with a pencil." },
  { char:"钢笔",     pinyin:"gāngbǐ",         tone:1, meaning:"fountain pen / ink pen",          pos:"noun",     emoji:"🖊️", example:"他用钢笔签名。",           exampleMeaning:"He uses a fountain pen to sign." },
  { char:"本子",     pinyin:"běnzi",          tone:3, meaning:"notebook",                        pos:"noun",     emoji:"📓", example:"我的本子上有很多笔记。",   exampleMeaning:"My notebook has many notes." },
  { char:"字典",     pinyin:"zìdiǎn",         tone:4, meaning:"dictionary",                      pos:"noun",     emoji:"📕", example:"我用字典查单词。",         exampleMeaning:"I use a dictionary to look up words." },
  { char:"粉笔",     pinyin:"fěnbǐ",          tone:3, meaning:"chalk",                           pos:"noun",     emoji:"🖍️", example:"老师用粉笔在黑板上写字。", exampleMeaning:"The teacher writes on the blackboard with chalk." },
  { char:"黑板",     pinyin:"hēibǎn",         tone:1, meaning:"blackboard",                      pos:"noun",     emoji:"🖼️", example:"黑板上写着今天的作业。",   exampleMeaning:"Today's homework is written on the blackboard." },
  { char:"橡皮",     pinyin:"xiàngpí",        tone:4, meaning:"eraser / rubber",                 pos:"noun",     emoji:"⬜", example:"我需要一块橡皮擦。",       exampleMeaning:"I need an eraser." },
  { char:"尺子",     pinyin:"chǐzi",          tone:3, meaning:"ruler",                           pos:"noun",     emoji:"📏", example:"我用尺子画直线。",         exampleMeaning:"I use a ruler to draw straight lines." },
  { char:"上课",     pinyin:"shàng kè",       tone:4, meaning:"to attend class / class begins",  pos:"verb",     emoji:"📚", example:"八点上课，别迟到！",       exampleMeaning:"Class starts at eight, don't be late!" },
  { char:"下课",     pinyin:"xià kè",         tone:4, meaning:"class is dismissed / after class",pos:"verb",     emoji:"🔔", example:"下课了，我们去吃饭吧。",   exampleMeaning:"Class is over, let's go eat." },
  { char:"放学",     pinyin:"fàng xué",       tone:4, meaning:"school is over / after school",   pos:"verb",     emoji:"🏫", example:"放学后我去打篮球。",       exampleMeaning:"After school I go play basketball." },
  { char:"考试",     pinyin:"kǎoshì",         tone:3, meaning:"exam / test",                     pos:"noun",     emoji:"📝", example:"明天有数学考试。",         exampleMeaning:"There is a math exam tomorrow." },

  // ===== TECHNOLOGY & MEDIA =====
  { char:"上网",     pinyin:"shàng wǎng",     tone:4, meaning:"to go online / surf the internet",pos:"verb",     emoji:"💻", example:"我每天晚上上网。",         exampleMeaning:"I go online every evening." },
  { char:"发短信",   pinyin:"fā duǎnxìn",     tone:1, meaning:"to send a text message",          pos:"verb",     emoji:"💬", example:"我给朋友发了一条短信。",   exampleMeaning:"I sent a text message to my friend." },
  { char:"打电话",   pinyin:"dǎ diànhuà",     tone:3, meaning:"to make a phone call",            pos:"verb",     emoji:"📞", example:"我给妈妈打了一个电话。",   exampleMeaning:"I made a phone call to mom." },
  { char:"照片",     pinyin:"zhàopiàn",       tone:4, meaning:"photo / picture",                 pos:"noun",     emoji:"📷", example:"我在手机上看照片。",       exampleMeaning:"I'm looking at photos on my phone." },
  { char:"视频",     pinyin:"shìpín",         tone:4, meaning:"video",                           pos:"noun",     emoji:"🎥", example:"我给你看一个视频。",       exampleMeaning:"Let me show you a video." },
  { char:"游戏",     pinyin:"yóuxì",          tone:2, meaning:"game",                            pos:"noun",     emoji:"🎮", example:"他特别喜欢玩电子游戏。",   exampleMeaning:"He especially likes playing video games." },
  { char:"网络",     pinyin:"wǎngluò",        tone:3, meaning:"internet / network",              pos:"noun",     emoji:"🌐", example:"这里的网络很快。",         exampleMeaning:"The internet here is very fast." },
  { char:"密码",     pinyin:"mìmǎ",           tone:4, meaning:"password / PIN",                  pos:"noun",     emoji:"🔒", example:"请输入你的密码。",         exampleMeaning:"Please enter your password." },
  { char:"充电",     pinyin:"chōngdiàn",      tone:1, meaning:"to charge (battery)",             pos:"verb",     emoji:"🔋", example:"我的手机需要充电了。",     exampleMeaning:"My phone needs to be charged." },

  // ===== NUMBERS & QUANTITIES =====
  { char:"两",       pinyin:"liǎng",          tone:3, meaning:"two (before measure word)",       pos:"num",      emoji:"✌️", example:"我有两个苹果。",           exampleMeaning:"I have two apples." },
  { char:"万",       pinyin:"wàn",            tone:4, meaning:"ten thousand",                    pos:"num",      emoji:"💰", example:"这本书卖了一万本。",       exampleMeaning:"This book sold ten thousand copies." },
  { char:"半",       pinyin:"bàn",            tone:4, meaning:"half",                            pos:"num",      emoji:"½",  example:"我要半杯水。",             exampleMeaning:"I want half a glass of water." },
  { char:"第一",     pinyin:"dì yī",          tone:4, meaning:"first (ordinal)",                 pos:"adj",      emoji:"🥇", example:"他跑了第一名！",           exampleMeaning:"He came in first!" },
  { char:"第二",     pinyin:"dì èr",          tone:4, meaning:"second (ordinal)",                pos:"adj",      emoji:"🥈", example:"她考了第二名。",           exampleMeaning:"She came in second." },

  // ===== MEASURE WORDS =====
  { char:"个",       pinyin:"gè",             tone:4, meaning:"(general measure word)",          pos:"measure",  emoji:"◼️", example:"我要两个苹果。",           exampleMeaning:"I want two apples." },
  { char:"只",       pinyin:"zhī",            tone:1, meaning:"(measure for animals/small items)",pos:"measure", emoji:"◼️", example:"她有三只猫。",             exampleMeaning:"She has three cats." },
  { char:"本",       pinyin:"běn",            tone:3, meaning:"(measure for books)",             pos:"measure",  emoji:"📚", example:"我买了两本书。",           exampleMeaning:"I bought two books." },
  { char:"张",       pinyin:"zhāng",          tone:1, meaning:"(measure for flat objects/papers)",pos:"measure", emoji:"📄", example:"我需要几张纸。",           exampleMeaning:"I need a few sheets of paper." },
  { char:"件",       pinyin:"jiàn",           tone:4, meaning:"(measure for clothes/items/matters)",pos:"measure",emoji:"👔",example:"我买了一件衣服。",         exampleMeaning:"I bought a piece of clothing." },
  { char:"条",       pinyin:"tiáo",           tone:2, meaning:"(measure for long/strip objects)",pos:"measure",  emoji:"📏", example:"我买了一条鱼。",           exampleMeaning:"I bought a fish." },
  { char:"瓶",       pinyin:"píng",           tone:2, meaning:"bottle / (measure for bottles)",  pos:"measure",  emoji:"🍶", example:"请给我一瓶水。",           exampleMeaning:"Please give me a bottle of water." },
  { char:"碗",       pinyin:"wǎn",            tone:3, meaning:"bowl / (measure for bowls)",      pos:"measure",  emoji:"🥣", example:"我要一碗米饭。",           exampleMeaning:"I want a bowl of rice." },
  { char:"杯",       pinyin:"bēi",            tone:1, meaning:"cup / glass / (measure for cups)",pos:"measure",  emoji:"🥤", example:"我喝了一杯咖啡。",         exampleMeaning:"I drank a cup of coffee." },
  { char:"双",       pinyin:"shuāng",         tone:1, meaning:"pair / couple",                   pos:"measure",  emoji:"👟", example:"我需要一双手套。",         exampleMeaning:"I need a pair of gloves." },
  { char:"位",       pinyin:"wèi",            tone:4, meaning:"(polite measure for people)",     pos:"measure",  emoji:"💼", example:"这里有三位客人。",         exampleMeaning:"There are three guests here." },
  { char:"次",       pinyin:"cì",             tone:4, meaning:"time / occasion / occurrence",    pos:"measure",  emoji:"🔢", example:"我去过北京三次。",         exampleMeaning:"I've been to Beijing three times." },

  // ===== PARTICLES & FUNCTION WORDS =====
  { char:"和",       pinyin:"hé",             tone:2, meaning:"and / with",                      pos:"conj",     emoji:"➕", example:"我和我的朋友一起去。",     exampleMeaning:"My friend and I went together." },
  { char:"还是",     pinyin:"háishi",         tone:2, meaning:"or / still",                      pos:"conj",     emoji:"❓", example:"你喝茶还是咖啡？",         exampleMeaning:"Do you want tea or coffee?" },
  { char:"了",       pinyin:"le",             tone:5, meaning:"(completion / change particle)",  pos:"particle", emoji:"✓",  example:"我吃了饭了。",             exampleMeaning:"I've already eaten." },
  { char:"着",       pinyin:"zhe",            tone:5, meaning:"(ongoing action particle)",       pos:"particle", emoji:"→",  example:"他笑着说话。",             exampleMeaning:"He speaks with a smile (while smiling)." },
  { char:"呢",       pinyin:"ne",             tone:5, meaning:"(question / pause particle)",     pos:"particle", emoji:"❓", example:"你呢？你去哪里？",         exampleMeaning:"What about you? Where are you going?" },
  { char:"吧",       pinyin:"ba",             tone:5, meaning:"(suggestion / supposition particle)",pos:"particle",emoji:"~",example:"我们一起去吃饭吧！",       exampleMeaning:"Let's go eat together!" },
  { char:"啊",       pinyin:"a",              tone:5, meaning:"(exclamation / confirmation particle)",pos:"particle",emoji:"❗",example:"太好了啊！",            exampleMeaning:"That's great!" },
  { char:"嗯",       pinyin:"ń/ňg",           tone:2, meaning:"(agreement/hesitation sound) mm / uh-huh",pos:"particle",emoji:"👍",example:"嗯，好的。",         exampleMeaning:"Mm, okay." },

  // ===== LOCATION WORDS =====
  { char:"旁边",     pinyin:"pángbiān",       tone:2, meaning:"beside / next to / alongside",    pos:"noun",     emoji:"↔️", example:"超市旁边有个公园。",       exampleMeaning:"There is a park next to the supermarket." },
  { char:"中间",     pinyin:"zhōngjiān",      tone:1, meaning:"middle / between / center",       pos:"noun",     emoji:"⬛", example:"坐在中间。",               exampleMeaning:"Sit in the middle." },
  { char:"对面",     pinyin:"duìmiàn",        tone:4, meaning:"opposite side / across from",     pos:"noun",     emoji:"↔️", example:"银行在邮局的对面。",       exampleMeaning:"The bank is across from the post office." },
  { char:"附近",     pinyin:"fùjìn",          tone:4, meaning:"nearby / in the vicinity",        pos:"noun",     emoji:"📍", example:"这附近有餐厅吗？",         exampleMeaning:"Are there restaurants nearby?" },
  { char:"里面",     pinyin:"lǐmiàn",         tone:3, meaning:"inside",                          pos:"noun",     emoji:"⬛", example:"钱在包的里面。",           exampleMeaning:"The money is inside the bag." },
  { char:"外面",     pinyin:"wàimiàn",        tone:4, meaning:"outside",                         pos:"noun",     emoji:"🌿", example:"外面在下雨。",             exampleMeaning:"It's raining outside." },
  { char:"上面",     pinyin:"shàngmiàn",      tone:4, meaning:"above / on top",                  pos:"noun",     emoji:"⬆️", example:"桌子上面有一本书。",       exampleMeaning:"There is a book on top of the table." },
  { char:"下面",     pinyin:"xiàmiàn",        tone:4, meaning:"below / under",                   pos:"noun",     emoji:"⬇️", example:"床下面有一双鞋。",         exampleMeaning:"There is a pair of shoes under the bed." },

  // ===== COMMON VERBS =====
  { char:"打",       pinyin:"dǎ",             tone:3, meaning:"to hit / to play (sports) / make (call)",pos:"verb",emoji:"👊",example:"我们去打篮球。",          exampleMeaning:"Let's go play basketball." },
  { char:"用",       pinyin:"yòng",           tone:4, meaning:"to use",                          pos:"verb",     emoji:"🔧", example:"我用筷子吃饭。",           exampleMeaning:"I eat with chopsticks." },
  { char:"让",       pinyin:"ràng",           tone:4, meaning:"to let / allow / make (someone do)",pos:"verb",   emoji:"→",  example:"妈妈让我早点回家。",       exampleMeaning:"Mom asked me to come home early." },
  { char:"拿",       pinyin:"ná",             tone:2, meaning:"to take / hold / grab",           pos:"verb",     emoji:"🤲", example:"请拿这个东西。",           exampleMeaning:"Please take this thing." },
  { char:"放",       pinyin:"fàng",           tone:4, meaning:"to put / place / let go",         pos:"verb",     emoji:"📥", example:"把书放在桌子上。",         exampleMeaning:"Put the book on the table." },
  { char:"换",       pinyin:"huàn",           tone:4, meaning:"to exchange / change",            pos:"verb",     emoji:"🔄", example:"我要换一件衣服。",         exampleMeaning:"I want to change clothes." },
  { char:"回来",     pinyin:"huí lái",        tone:2, meaning:"to come back / return",           pos:"verb",     emoji:"↩️", example:"他什么时候回来？",         exampleMeaning:"When will he come back?" },
  { char:"出去",     pinyin:"chū qù",         tone:1, meaning:"to go out",                       pos:"verb",     emoji:"🚶", example:"他出去散步了。",           exampleMeaning:"He went out for a walk." },
  { char:"进来",     pinyin:"jìn lái",        tone:4, meaning:"to come in",                      pos:"verb",     emoji:"🚪", example:"请进来！",                 exampleMeaning:"Please come in!" },
  { char:"起来",     pinyin:"qǐ lái",         tone:3, meaning:"to stand up / get up / rise",     pos:"verb",     emoji:"⬆️", example:"请大家起来唱国歌。",       exampleMeaning:"Everyone please stand up and sing the national anthem." },
  { char:"见面",     pinyin:"jiànmiàn",       tone:4, meaning:"to meet (with someone)",          pos:"verb",     emoji:"🤝", example:"我们明天几点见面？",       exampleMeaning:"What time do we meet tomorrow?" },
  { char:"结婚",     pinyin:"jiéhūn",         tone:2, meaning:"to get married",                  pos:"verb",     emoji:"💒", example:"他们明年结婚。",           exampleMeaning:"They are getting married next year." },
  { char:"介绍",     pinyin:"jièshào",        tone:4, meaning:"to introduce",                    pos:"verb",     emoji:"🤝", example:"让我来介绍一下我自己。",   exampleMeaning:"Let me introduce myself." },
  { char:"借",       pinyin:"jiè",            tone:4, meaning:"to borrow / to lend",             pos:"verb",     emoji:"🤝", example:"我可以借你的书吗？",       exampleMeaning:"Can I borrow your book?" },
  { char:"还",       pinyin:"huán",           tone:2, meaning:"to return (something)",           pos:"verb",     emoji:"↩️", example:"我把书还给你了。",         exampleMeaning:"I returned the book to you." },
  { char:"迟到",     pinyin:"chídào",         tone:2, meaning:"to be late / arrive late",        pos:"verb",     emoji:"⏰", example:"对不起，我迟到了。",       exampleMeaning:"Sorry, I was late." },
  { char:"散步",     pinyin:"sànbù",          tone:4, meaning:"to take a walk / stroll",         pos:"verb",     emoji:"🚶", example:"饭后散步很健康。",         exampleMeaning:"Taking a walk after meals is very healthy." },

  // ===== ADJECTIVES & EXPRESSIONS =====
  { char:"可爱",     pinyin:"kě'ài",          tone:3, meaning:"cute / adorable",                 pos:"adj",      emoji:"🥰", example:"这只猫真可爱！",           exampleMeaning:"This cat is so cute!" },
  { char:"帅",       pinyin:"shuài",          tone:4, meaning:"handsome",                        pos:"adj",      emoji:"😎", example:"他长得很帅。",             exampleMeaning:"He looks very handsome." },
  { char:"开心",     pinyin:"kāixīn",         tone:1, meaning:"happy / joyful",                  pos:"adj",      emoji:"😊", example:"我今天很开心！",           exampleMeaning:"I am very happy today!" },
  { char:"难过",     pinyin:"nánguò",         tone:2, meaning:"sad / upset / feel bad",           pos:"adj",      emoji:"😢", example:"她很难过，因为考试没过。", exampleMeaning:"She is sad because she failed the exam." },
  { char:"快乐",     pinyin:"kuàilè",         tone:4, meaning:"joyful / happy",                  pos:"adj",      emoji:"😄", example:"祝你生日快乐！",           exampleMeaning:"Happy birthday to you!" },
  { char:"幸福",     pinyin:"xìngfú",         tone:4, meaning:"happy / blessed / happiness",     pos:"adj",      emoji:"❤️", example:"我们一家人很幸福。",       exampleMeaning:"Our whole family is very happy." },
  { char:"厉害",     pinyin:"lìhai",          tone:4, meaning:"impressive / skilled / severe",   pos:"adj",      emoji:"💪", example:"你汉语说得真厉害！",       exampleMeaning:"Your Chinese is really impressive!" },
  { char:"一样",     pinyin:"yīyàng",         tone:1, meaning:"the same / alike",                pos:"adj",      emoji:"🟰", example:"这两件衣服一样。",         exampleMeaning:"These two pieces of clothing are the same." },
  { char:"不同",     pinyin:"bùtóng",         tone:4, meaning:"different",                       pos:"adj",      emoji:"≠",  example:"每个人都不同。",           exampleMeaning:"Everyone is different." },
  { char:"暖和",     pinyin:"nuǎnhuo",        tone:3, meaning:"warm (weather / temperature)",    pos:"adj",      emoji:"🌡️", example:"今天很暖和。",             exampleMeaning:"It's very warm today." },
  { char:"凉快",     pinyin:"liángkuai",      tone:2, meaning:"cool / refreshing (weather)",     pos:"adj",      emoji:"💨", example:"秋天凉快，我喜欢。",       exampleMeaning:"Autumn is cool, I like it." },
  { char:"好吃",     pinyin:"hǎochī",         tone:3, meaning:"delicious",                       pos:"adj",      emoji:"😋", example:"这道菜太好吃了！",         exampleMeaning:"This dish is so delicious!" },
  { char:"好喝",     pinyin:"hǎohē",          tone:3, meaning:"tasty (drinks)",                  pos:"adj",      emoji:"🥤", example:"这杯茶很好喝。",           exampleMeaning:"This cup of tea is very tasty." },
  { char:"好看",     pinyin:"hǎokàn",         tone:3, meaning:"good-looking / attractive",       pos:"adj",      emoji:"👀", example:"这部电影很好看。",         exampleMeaning:"This movie is very good-looking." },
  { char:"好玩",     pinyin:"hǎowán",         tone:3, meaning:"fun / enjoyable",                 pos:"adj",      emoji:"🎉", example:"这个游戏真好玩！",         exampleMeaning:"This game is really fun!" },

  // ===== ADVERBS & TIME =====
  { char:"一起",     pinyin:"yīqǐ",           tone:1, meaning:"together",                        pos:"adv",      emoji:"👥", example:"我们一起去！",             exampleMeaning:"Let's go together!" },
  { char:"一直",     pinyin:"yīzhí",          tone:2, meaning:"always / straight / continuously",pos:"adv",      emoji:"➡️", example:"他一直在等。",             exampleMeaning:"He has been waiting continuously." },
  { char:"突然",     pinyin:"tūrán",          tone:1, meaning:"suddenly",                        pos:"adv",      emoji:"⚡", example:"天气突然变冷了。",         exampleMeaning:"The weather suddenly got cold." },
  { char:"马上",     pinyin:"mǎshàng",        tone:3, meaning:"right away / immediately / soon", pos:"adv",      emoji:"⏩", example:"我马上来！",               exampleMeaning:"I'll be right there!" },
  { char:"当然",     pinyin:"dāngrán",        tone:1, meaning:"of course / certainly",           pos:"adv",      emoji:"✅", example:"当然可以！",               exampleMeaning:"Of course you can!" },
  { char:"其实",     pinyin:"qíshí",          tone:2, meaning:"actually / in fact",              pos:"adv",      emoji:"💡", example:"其实他不太喜欢咖啡。",     exampleMeaning:"Actually he doesn't like coffee much." },
  { char:"可能",     pinyin:"kěnéng",         tone:3, meaning:"maybe / possibly / possible",     pos:"verb",     emoji:"🤔", example:"他可能明天来。",           exampleMeaning:"He might come tomorrow." },
  { char:"也许",     pinyin:"yěxǔ",           tone:3, meaning:"perhaps / maybe",                 pos:"adv",      emoji:"🤷", example:"也许这样更好。",           exampleMeaning:"Perhaps this way is better." },
  { char:"一共",     pinyin:"yīgòng",         tone:1, meaning:"in total / altogether",           pos:"adv",      emoji:"∑",  example:"一共多少钱？",             exampleMeaning:"How much is it in total?" },
  { char:"总是",     pinyin:"zǒngshì",        tone:3, meaning:"always",                          pos:"adv",      emoji:"🔄", example:"他总是迟到。",             exampleMeaning:"He is always late." },
  { char:"有时候",   pinyin:"yǒu shíhou",     tone:3, meaning:"sometimes",                       pos:"adv",      emoji:"⏰", example:"我有时候看电影。",         exampleMeaning:"I sometimes watch movies." },
  { char:"每天",     pinyin:"měitiān",        tone:3, meaning:"every day",                       pos:"adv",      emoji:"📅", example:"我每天七点起床。",         exampleMeaning:"I get up at seven every day." },
  { char:"每次",     pinyin:"měicì",          tone:3, meaning:"every time",                      pos:"adv",      emoji:"🔂", example:"每次见到他都很开心。",     exampleMeaning:"Every time I see him I'm very happy." },

  // ===== QUESTION WORDS =====
  { char:"怎么",     pinyin:"zěnme",          tone:3, meaning:"how / why",                       pos:"adv",      emoji:"❓", example:"你怎么来的？",             exampleMeaning:"How did you get here?" },
  { char:"怎么样",   pinyin:"zěnme yàng",     tone:3, meaning:"how is it / what's it like",      pos:"phrase",   emoji:"❓", example:"今天感觉怎么样？",         exampleMeaning:"How do you feel today?" },
  { char:"为什么",   pinyin:"wèishénme",      tone:4, meaning:"why",                             pos:"adv",      emoji:"❓", example:"为什么你不吃肉？",         exampleMeaning:"Why don't you eat meat?" },
  { char:"多少",     pinyin:"duōshao",        tone:1, meaning:"how many / how much",             pos:"adv",      emoji:"🔢", example:"这个多少钱？",             exampleMeaning:"How much does this cost?" },
  { char:"哪",       pinyin:"nǎ",             tone:3, meaning:"which",                           pos:"pronoun",  emoji:"👆", example:"哪个是你的？",             exampleMeaning:"Which one is yours?" },
  { char:"哪里",     pinyin:"nǎlǐ",           tone:3, meaning:"where",                           pos:"pronoun",  emoji:"📍", example:"你住在哪里？",             exampleMeaning:"Where do you live?" },
  { char:"什么时候", pinyin:"shénme shíhou",  tone:2, meaning:"when / what time",                pos:"phrase",   emoji:"⏰", example:"你什么时候来？",           exampleMeaning:"When are you coming?" },

  // ===== COMMON NOUNS =====
  { char:"名字",     pinyin:"míngzi",         tone:2, meaning:"name",                            pos:"noun",     emoji:"📛", example:"你的名字是什么？",         exampleMeaning:"What is your name?" },
  { char:"东西",     pinyin:"dōngxi",         tone:1, meaning:"thing / stuff",                   pos:"noun",     emoji:"📦", example:"你买了什么东西？",         exampleMeaning:"What did you buy?" },
  { char:"礼物",     pinyin:"lǐwù",           tone:3, meaning:"gift / present",                  pos:"noun",     emoji:"🎁", example:"谢谢你的礼物！",           exampleMeaning:"Thank you for your gift!" },
  { char:"生日",     pinyin:"shēngrì",        tone:1, meaning:"birthday",                        pos:"noun",     emoji:"🎂", example:"今天是我的生日。",         exampleMeaning:"Today is my birthday." },
  { char:"节日",     pinyin:"jiérì",          tone:2, meaning:"holiday / festival",              pos:"noun",     emoji:"🎊", example:"中国有很多节日。",         exampleMeaning:"China has many festivals." },
  { char:"春节",     pinyin:"chūnjié",        tone:1, meaning:"Spring Festival / Chinese New Year",pos:"noun",   emoji:"🧧", example:"春节是中国最重要的节日。", exampleMeaning:"Spring Festival is China's most important festival." },
  { char:"故事",     pinyin:"gùshi",          tone:4, meaning:"story",                           pos:"noun",     emoji:"📖", example:"爷爷给我讲故事。",         exampleMeaning:"Grandpa tells me stories." },
  { char:"号码",     pinyin:"hàomǎ",          tone:4, meaning:"number / code",                   pos:"noun",     emoji:"🔢", example:"你的电话号码是多少？",     exampleMeaning:"What is your phone number?" },
  { char:"汉语",     pinyin:"Hànyǔ",          tone:4, meaning:"Chinese language (formal)",       pos:"noun",     emoji:"🇨🇳", example:"我在学汉语。",            exampleMeaning:"I'm studying Chinese." },
  { char:"中文",     pinyin:"Zhōngwén",       tone:1, meaning:"Chinese language / Chinese writing",pos:"noun",   emoji:"🇨🇳", example:"你说中文吗？",            exampleMeaning:"Do you speak Chinese?" },
  { char:"英语",     pinyin:"Yīngyǔ",         tone:1, meaning:"English (language)",              pos:"noun",     emoji:"🇬🇧", example:"她的英语很好。",           exampleMeaning:"Her English is very good." },
  { char:"普通话",   pinyin:"Pǔtōnghuà",      tone:3, meaning:"Mandarin Chinese (standard)",     pos:"noun",     emoji:"🗣️", example:"在中国大家说普通话。",     exampleMeaning:"Everyone in China speaks Mandarin." },
  { char:"歌",       pinyin:"gē",             tone:1, meaning:"song",                            pos:"noun",     emoji:"🎵", example:"这首歌很好听。",           exampleMeaning:"This song sounds very good." },
  { char:"画",       pinyin:"huà",            tone:4, meaning:"painting / picture / to draw",    pos:"noun",     emoji:"🎨", example:"他画了一幅很漂亮的画。",   exampleMeaning:"He drew a very beautiful painting." },
  { char:"颜色",     pinyin:"yánsè",          tone:2, meaning:"color",                           pos:"noun",     emoji:"🎨", example:"你最喜欢什么颜色？",       exampleMeaning:"What is your favorite color?" },
  { char:"声音",     pinyin:"shēngyīn",       tone:1, meaning:"sound / voice",                   pos:"noun",     emoji:"🔊", example:"他的声音很好听。",         exampleMeaning:"His voice sounds very good." },
  { char:"味道",     pinyin:"wèidào",         tone:4, meaning:"taste / flavor / smell",          pos:"noun",     emoji:"😋", example:"这道菜味道很好。",         exampleMeaning:"This dish tastes great." },
  { char:"价格",     pinyin:"jiàgé",          tone:4, meaning:"price",                           pos:"noun",     emoji:"💰", example:"这个价格合理吗？",         exampleMeaning:"Is this price reasonable?" },
  { char:"天",       pinyin:"tiān",           tone:1, meaning:"day / sky / heaven",              pos:"noun",     emoji:"🌤️", example:"今天是个好天。",           exampleMeaning:"Today is a nice day." },
  { char:"次",       pinyin:"cì",             tone:4, meaning:"time / occurrence (measure)",     pos:"measure",  emoji:"🔢", example:"我去过北京两次。",         exampleMeaning:"I've been to Beijing twice." },
  { char:"种",       pinyin:"zhǒng",          tone:3, meaning:"kind / type / variety",           pos:"measure",  emoji:"🏷️", example:"这里有三种颜色。",         exampleMeaning:"There are three kinds of colors here." },

  // ===== WEATHER / NATURE =====
  { char:"晴天",     pinyin:"qíngtiān",       tone:2, meaning:"sunny day / clear sky",           pos:"noun",     emoji:"☀️", example:"今天是晴天。",             exampleMeaning:"Today is a sunny day." },
  { char:"阴天",     pinyin:"yīntiān",        tone:1, meaning:"cloudy / overcast day",           pos:"noun",     emoji:"☁️", example:"今天是阴天。",             exampleMeaning:"Today is an overcast day." },
  { char:"云",       pinyin:"yún",            tone:2, meaning:"cloud",                           pos:"noun",     emoji:"⛅", example:"天上有很多云。",           exampleMeaning:"There are many clouds in the sky." },
  { char:"太阳",     pinyin:"tàiyáng",        tone:4, meaning:"sun",                             pos:"noun",     emoji:"☀️", example:"今天太阳很大。",           exampleMeaning:"The sun is very strong today." },
  { char:"月亮",     pinyin:"yuèliang",       tone:4, meaning:"moon",                            pos:"noun",     emoji:"🌙", example:"今晚月亮很圆。",           exampleMeaning:"The moon is very full tonight." },
  { char:"星星",     pinyin:"xīngxing",       tone:1, meaning:"star(s)",                         pos:"noun",     emoji:"⭐", example:"晚上的星星很漂亮。",       exampleMeaning:"The stars at night are very beautiful." },
  { char:"彩虹",     pinyin:"cǎihóng",        tone:3, meaning:"rainbow",                         pos:"noun",     emoji:"🌈", example:"下雨后出现了彩虹。",       exampleMeaning:"After the rain, a rainbow appeared." },
  { char:"海",       pinyin:"hǎi",            tone:3, meaning:"sea / ocean",                     pos:"noun",     emoji:"🌊", example:"我喜欢在海边散步。",       exampleMeaning:"I like walking by the sea." },
  { char:"湖",       pinyin:"hú",             tone:2, meaning:"lake",                            pos:"noun",     emoji:"🏞️", example:"西湖非常美丽。",           exampleMeaning:"West Lake is very beautiful." },
  { char:"树林",     pinyin:"shùlín",         tone:4, meaning:"forest / woods",                  pos:"noun",     emoji:"🌲", example:"我们在树林里散步。",       exampleMeaning:"We are taking a walk in the woods." },
  { char:"草地",     pinyin:"cǎodì",          tone:3, meaning:"lawn / grassland",                pos:"noun",     emoji:"🌱", example:"草地上有很多羊。",         exampleMeaning:"There are many sheep on the grassland." },
];

// ---- HSK 2 NEW WORDS (~100 additions with emoji) ----
const HSK2_NEW = [
  { char:"早餐",     pinyin:"zǎocān",         tone:3, meaning:"breakfast",                       pos:"noun",     emoji:"🌅", example:"我每天吃早餐。",           exampleMeaning:"I eat breakfast every day." },
  { char:"午餐",     pinyin:"wǔcān",          tone:3, meaning:"lunch",                           pos:"noun",     emoji:"🌞", example:"我们去哪里吃午餐？",       exampleMeaning:"Where shall we have lunch?" },
  { char:"晚餐",     pinyin:"wǎncān",         tone:3, meaning:"dinner",                          pos:"noun",     emoji:"🌙", example:"晚餐准备好了。",           exampleMeaning:"Dinner is ready." },
  { char:"服务员",   pinyin:"fúwùyuán",       tone:2, meaning:"waiter / service staff",          pos:"noun",     emoji:"🧑‍🍳", example:"服务员！请来一下。",        exampleMeaning:"Waiter! Please come here." },
  { char:"账单",     pinyin:"zhàngdān",       tone:4, meaning:"bill / invoice",                  pos:"noun",     emoji:"🧾", example:"请问账单多少钱？",         exampleMeaning:"How much is the bill?" },
  { char:"菜单",     pinyin:"càidān",         tone:4, meaning:"menu",                            pos:"noun",     emoji:"📋", example:"请给我看一下菜单。",       exampleMeaning:"Please show me the menu." },
  { char:"打折",     pinyin:"dǎzhé",          tone:3, meaning:"discount / on sale",              pos:"verb",     emoji:"🏷️", example:"今天打八折。",             exampleMeaning:"Today there is a 20% discount." },
  { char:"优惠",     pinyin:"yōuhuì",         tone:1, meaning:"preferential / discount deal",    pos:"noun",     emoji:"💸", example:"有没有优惠活动？",         exampleMeaning:"Is there a promotional discount?" },
  { char:"收据",     pinyin:"shōujù",         tone:1, meaning:"receipt",                         pos:"noun",     emoji:"🧾", example:"请给我一张收据。",         exampleMeaning:"Please give me a receipt." },
  { char:"护照",     pinyin:"hùzhào",         tone:4, meaning:"passport",                        pos:"noun",     emoji:"📔", example:"我忘带护照了。",           exampleMeaning:"I forgot to bring my passport." },
  { char:"行李",     pinyin:"xínglǐ",         tone:2, meaning:"luggage / baggage",               pos:"noun",     emoji:"🧳", example:"我的行李太重了。",         exampleMeaning:"My luggage is too heavy." },
  { char:"预订",     pinyin:"yùdìng",         tone:4, meaning:"to reserve / book (in advance)",  pos:"verb",     emoji:"📅", example:"我想预订一个房间。",       exampleMeaning:"I want to book a room." },
  { char:"小费",     pinyin:"xiǎofèi",        tone:3, meaning:"tip (for service)",               pos:"noun",     emoji:"💰", example:"在美国要给小费。",         exampleMeaning:"In America you need to give tips." },
  { char:"地图",     pinyin:"dìtú",           tone:4, meaning:"map",                             pos:"noun",     emoji:"🗺️", example:"我需要一张地图。",         exampleMeaning:"I need a map." },
  { char:"路线",     pinyin:"lùxiàn",         tone:4, meaning:"route / itinerary",               pos:"noun",     emoji:"🛣️", example:"这条路线最近。",           exampleMeaning:"This route is the shortest." },
  { char:"堵车",     pinyin:"dǔchē",          tone:3, meaning:"traffic jam",                     pos:"noun",     emoji:"🚗", example:"路上堵车，所以迟到了。",   exampleMeaning:"There was a traffic jam on the road, so I was late." },
  { char:"能力",     pinyin:"nénglì",         tone:2, meaning:"ability / capability",            pos:"noun",     emoji:"💪", example:"他的工作能力很强。",       exampleMeaning:"His work ability is very strong." },
  { char:"感觉",     pinyin:"gǎnjué",         tone:3, meaning:"feeling / sense / to feel",       pos:"noun",     emoji:"💭", example:"我感觉有点累。",           exampleMeaning:"I feel a little tired." },
  { char:"梦想",     pinyin:"mèngxiǎng",      tone:4, meaning:"dream (aspiration)",              pos:"noun",     emoji:"💭", example:"我的梦想是去全世界旅行。", exampleMeaning:"My dream is to travel the whole world." },
  { char:"机会",     pinyin:"jīhuì",          tone:1, meaning:"opportunity / chance",            pos:"noun",     emoji:"🎯", example:"这是一个好机会。",         exampleMeaning:"This is a good opportunity." },
];

// ---- HSK 3 NEW WORDS (~50 additions with emoji) ----
const HSK3_NEW = [
  { char:"演讲",     pinyin:"yǎnjiǎng",       tone:3, meaning:"speech / presentation / to give a speech",pos:"noun", emoji:"🎤", example:"他做了一个精彩的演讲。",  exampleMeaning:"He gave a wonderful speech." },
  { char:"辩论",     pinyin:"biànlùn",        tone:4, meaning:"debate / to debate",               pos:"noun",    emoji:"🗣️", example:"他们进行了一场辩论。",     exampleMeaning:"They had a debate." },
  { char:"作文",     pinyin:"zuòwén",         tone:4, meaning:"composition / essay (school)",     pos:"noun",    emoji:"✍️", example:"老师让我写一篇作文。",     exampleMeaning:"The teacher asked me to write a composition." },
  { char:"词汇",     pinyin:"cíhuì",          tone:2, meaning:"vocabulary",                       pos:"noun",    emoji:"📝", example:"学好词汇很重要。",         exampleMeaning:"Learning vocabulary well is very important." },
  { char:"语法",     pinyin:"yǔfǎ",           tone:3, meaning:"grammar",                          pos:"noun",    emoji:"📖", example:"中文语法和英文不一样。",   exampleMeaning:"Chinese grammar is different from English." },
  { char:"成语",     pinyin:"chéngyǔ",        tone:2, meaning:"idiom (4-character)",              pos:"noun",    emoji:"📜", example:"成语是中文的精华。",       exampleMeaning:"Idioms are the essence of Chinese." },
  { char:"文化",     pinyin:"wénhuà",         tone:2, meaning:"culture",                          pos:"noun",    emoji:"🏛️", example:"了解中国文化很有趣。",     exampleMeaning:"Understanding Chinese culture is very interesting." },
  { char:"传统",     pinyin:"chuántǒng",      tone:2, meaning:"tradition / traditional",          pos:"noun",    emoji:"🏮", example:"春节是中国的传统节日。",   exampleMeaning:"Spring Festival is a Chinese traditional holiday." },
  { char:"历史",     pinyin:"lìshǐ",          tone:4, meaning:"history",                          pos:"noun",    emoji:"📜", example:"中国历史很悠久。",         exampleMeaning:"Chinese history is very ancient." },
  { char:"科学",     pinyin:"kēxué",          tone:1, meaning:"science",                          pos:"noun",    emoji:"🔬", example:"科学改变了世界。",         exampleMeaning:"Science has changed the world." },
  { char:"数学",     pinyin:"shùxué",         tone:4, meaning:"mathematics",                      pos:"noun",    emoji:"➕", example:"我不喜欢数学。",           exampleMeaning:"I don't like mathematics." },
  { char:"音乐",     pinyin:"yīnyuè",         tone:1, meaning:"music",                            pos:"noun",    emoji:"🎵", example:"我喜欢听音乐。",           exampleMeaning:"I like listening to music." },
  { char:"艺术",     pinyin:"yìshù",          tone:4, meaning:"art",                              pos:"noun",    emoji:"🎨", example:"艺术让生活更美好。",       exampleMeaning:"Art makes life more beautiful." },
  { char:"体育",     pinyin:"tǐyù",           tone:3, meaning:"physical education / sports",      pos:"noun",    emoji:"🏃", example:"体育锻炼对身体好。",       exampleMeaning:"Physical exercise is good for the body." },
  { char:"哲学",     pinyin:"zhéxué",         tone:2, meaning:"philosophy",                       pos:"noun",    emoji:"💡", example:"哲学让我思考很多。",       exampleMeaning:"Philosophy makes me think a lot." },
];

// =============================================
//  ADD EMOJI MARKERS TO EXISTING HSK1 BASE DATA
//  (patches emoji field onto already-loaded words)
// =============================================
const HSK1_EMOJI_PATCH = {
  "你好":   "👋",  "谢谢": "🙏",  "再见": "👋",
  "我":     "🙋",  "你":   "🫵",  "他":   "👨",
  "她":     "👩",  "是":   "✓",   "有":   "✓",
  "不":     "❌",  "好":   "👍",  "大":   "🔺",
  "小":     "🔻",  "多":   "📊",  "少":   "📉",
  "人":     "👤",  "学生": "🧑‍🎓", "老师": "👨‍🏫",
  "朋友":   "👫",  "妈妈": "👩",  "爸爸": "👨",
  "家":     "🏠",  "中国": "🇨🇳", "水":   "💧",
  "饭":     "🍚",  "苹果": "🍎",  "猫":   "🐱",
  "狗":     "🐶",  "书":   "📚",  "车":   "🚗",
  "今天":   "📅",  "明天": "⏭️",  "昨天": "⏮️",
  "年":     "🗓️",  "月":   "🗓️",  "日":   "📅",
  "红":     "🔴",  "黄":   "🟡",  "蓝":   "🔵",
  "绿":     "🟢",  "白":   "⬜",  "黑":   "⬛",
  "头":     "🗣️",  "手":   "🤚",  "脚":   "🦵",
  "眼睛":   "👁️",  "嘴":   "👄",  "鼻子": "👃",
  "桌子":   "🪑",  "椅子": "💺",  "床":   "🛏️",
  "茶":     "🍵",  "牛奶": "🥛",  "米饭": "🍚",
  "面条":   "🍜",  "鸡蛋": "🥚",  "鱼":   "🐟",
  "肉":     "🥩",  "雨":   "🌧️",  "雪":   "❄️",
  "风":     "💨",  "花":   "🌸",  "树":   "🌳",
  "山":     "⛰️",  "河":   "🌊",  "路":   "🛣️",
  "公园":   "🌿",  "商店": "🏪",  "饭店": "🍽️",
  "电话":   "☎️",  "电视": "📺",  "手机": "📱",
  "电脑":   "💻",  "门":   "🚪",  "窗":   "🪟",
};


// =============================================
//  MERGE INTO GLOBAL DATA
// =============================================
(function mergeExpandedVocab() {
  if (typeof HSK_DATA === 'undefined') {
    console.warn('[data_vocab_expanded] HSK_DATA not found — load data.js first.');
    return;
  }

  // ---- Helper: merge without duplicates ----
  function mergeWords(level, words) {
    if (!HSK_DATA[level]) HSK_DATA[level] = [];
    const existing = new Set(HSK_DATA[level].map(w => w.char));
    HSK_DATA[level].push(...words.filter(w => !existing.has(w.char)));
  }

  mergeWords(1, HSK1_NEW);
  mergeWords(2, HSK2_NEW);
  mergeWords(3, HSK3_NEW);

  // ---- Patch emoji onto existing HSK1 words ----
  if (HSK_DATA[1]) {
    HSK_DATA[1].forEach(word => {
      if (!word.emoji && HSK1_EMOJI_PATCH[word.char]) {
        word.emoji = HSK1_EMOJI_PATCH[word.char];
      }
    });
  }

  // ---- Patch emoji onto HSK 2 & 3 existing words ----
  const HSK23_EMOJI = {
    "超市": "🛒", "医院": "🏥", "学校": "🏫", "公司": "🏢",
    "银行": "🏦", "机场": "✈️", "地铁": "🚇", "飞机": "✈️",
    "手机": "📱", "电脑": "💻", "问题": "❓", "时间": "⏰",
    "钱":   "💰", "天气": "🌤️", "电影": "🎬", "运动": "🏃",
    "旅游": "🗺️", "帮助": "🤝", "告诉": "💬", "快":   "⚡",
    "慢":   "🐢", "热":   "🔥", "冷":   "🧊", "贵":   "💎",
    "便宜": "🏷️", "漂亮": "💄", "聪明": "🧠",
    // HSK3
    "经验": "🎓", "文化": "🏛️", "历史": "📜", "环境": "🌿",
    "机会": "🎯", "方法": "🛠️", "生活": "🌟", "安全": "🛡️",
    "危险": "⚠️", "重要": "⭐",
  };
  [2, 3, 4, 5, 6].forEach(lv => {
    if (HSK_DATA[lv]) {
      HSK_DATA[lv].forEach(word => {
        if (!word.emoji && HSK23_EMOJI[word.char]) {
          word.emoji = HSK23_EMOJI[word.char];
        }
      });
    }
  });

  let total = 0;
  for (let i = 1; i <= 9; i++) total += (HSK_DATA[i] || []).length;
  console.log(`[data_vocab_expanded] Done — ${total} total words across HSK 1-9. HSK1: ${(HSK_DATA[1]||[]).length}`);
})();
