// =============================================
//  HSK OFFICIAL METADATA — New Standard (2021+)
//  Reference: HSK 1–9 Official Syllabus
//
//  Fields per level:
//    stage      – Beginner (初级) / Intermediate (中级) / Advanced (高级)
//    phonetics  – Cumulative phonetic elements
//    characters – Cumulative character count
//    vocabulary – Cumulative vocabulary requirement
//    grammar    – Cumulative grammar points
//    cefr       – Approximate CEFR equivalent
//    desc       – Brief description of what learner can do
//    topics     – Key topic areas at this level
// =============================================

const HSK_META = {
  1: {
    level: 1,
    stage: "Beginner",
    stageZh: "初级",
    phonetics: 269,
    characters: 300,
    vocabulary: 500,
    grammar: 48,
    cefr: "A1",
    desc: "Handle basic daily communication: greetings, self-introduction, numbers, dates, simple purchases.",
    descZh: "能进行最基本的日常交流：问候、自我介绍、数字、日期、简单购物。",
    topics: ["Greetings & introductions", "Numbers & counting", "Family members", "Daily objects", "Basic verbs (eat, drink, go)", "Time & dates"],
    color: "#4CAF50"
  },
  2: {
    level: 2,
    stage: "Beginner",
    stageZh: "初级",
    phonetics: 468,
    characters: 600,
    vocabulary: 1272,
    grammar: 129,
    cefr: "A2",
    desc: "Communicate in routine tasks: shopping, transport, dining, describing weather and plans.",
    descZh: "能在日常生活中进行简单交流：购物、交通、用餐、描述天气和计划。",
    topics: ["Shopping & prices", "Transportation", "Weather & seasons", "Hobbies & sports", "Making comparisons", "Expressing opinions"],
    color: "#8BC34A"
  },
  3: {
    level: 3,
    stage: "Beginner",
    stageZh: "初级",
    phonetics: 608,
    characters: 900,
    vocabulary: 2245,
    grammar: 210,
    cefr: "B1",
    desc: "Handle most situations in daily life: express opinions, describe experiences, understand paragraphs.",
    descZh: "能应对日常生活中的大多数情况：表达观点、描述经历、理解段落。",
    topics: ["Workplace basics", "Health & illness", "Travel planning", "Emotions & feelings", "News & media", "Social relationships"],
    color: "#CDDC39"
  },
  4: {
    level: 4,
    stage: "Intermediate",
    stageZh: "中级",
    phonetics: 724,
    characters: 1200,
    vocabulary: 3245,
    grammar: 286,
    cefr: "B2",
    desc: "Discuss abstract topics, understand longer articles, participate in professional discussions.",
    descZh: "能讨论抽象话题、理解较长文章、参与专业讨论。",
    topics: ["Society & culture", "Economy & technology", "Education system", "Environmental issues", "Formal debate", "Business communication"],
    color: "#FFC107"
  },
  5: {
    level: 5,
    stage: "Intermediate",
    stageZh: "中级",
    phonetics: 822,
    characters: 1500,
    vocabulary: 4316,
    grammar: 357,
    cefr: "C1",
    desc: "Read newspapers, give presentations, write essays on complex topics with nuanced expression.",
    descZh: "能阅读报纸、进行演讲、就复杂话题撰写文章，表达有层次。",
    topics: ["Philosophy & ethics", "Academic writing", "Literary analysis", "Media & communication", "Scientific concepts", "Critical thinking"],
    color: "#FF9800"
  },
  6: {
    level: 6,
    stage: "Intermediate",
    stageZh: "中级",
    phonetics: 908,
    characters: 1800,
    vocabulary: 5456,
    grammar: 424,
    cefr: "C1+",
    desc: "Near-native comprehension of written and spoken Chinese. Handle formal, literary, and classical references.",
    descZh: "接近母语水平的中文理解能力。能处理正式、文学和古典文献。",
    topics: ["Classical Chinese basics", "Literary vocabulary", "Formal writing", "Translation skills", "Idiomatic expression", "Cultural depth"],
    color: "#FF5722"
  },
  7: {
    level: 7,
    stage: "Advanced",
    stageZh: "高级",
    phonetics: 1110,
    characters: 3000,
    vocabulary: 7500,
    grammar: null,
    cefr: "C2",
    desc: "Academic writing and professional presentations. Understand specialized texts and literary works.",
    descZh: "能进行学术写作和专业演讲。理解专业文本和文学作品。",
    topics: ["Academic discourse", "Research methodology", "Classical Chinese (文言文)", "Professional translation", "Rhetorical analysis", "Specialized vocabulary"],
    color: "#E91E63"
  },
  8: {
    level: 8,
    stage: "Advanced",
    stageZh: "高级",
    phonetics: 1110,
    characters: 3000,
    vocabulary: 9500,
    grammar: null,
    cefr: "C2",
    desc: "Research-level reading, rhetorical sophistication, deep classical Chinese understanding.",
    descZh: "研究级阅读水平，修辞精炼，深入理解古文。",
    topics: ["Academic publishing", "Classical literature", "Advanced rhetoric", "Interpreting", "Historical documents", "Philosophical texts"],
    color: "#9C27B0"
  },
  9: {
    level: 9,
    stage: "Advanced",
    stageZh: "高级",
    phonetics: 1110,
    characters: 3000,
    vocabulary: 11092,
    grammar: null,
    cefr: "C2+",
    desc: "Native-level mastery. Academic publishing, professional interpreting, complete cultural literacy.",
    descZh: "母语级别掌握。学术发表、专业口译、完整的文化素养。",
    topics: ["Native-level mastery", "Academic publishing", "Simultaneous interpreting", "Ancient texts", "Regional dialects awareness", "Cultural nuance"],
    color: "#673AB7"
  }
};

// Stage groupings for UI rendering
const HSK_STAGES = [
  {
    name: "Beginner",
    nameZh: "初级",
    levels: [1, 2, 3],
    desc: "Build your foundation: daily communication, basic grammar, essential vocabulary.",
    color: "#4CAF50"
  },
  {
    name: "Intermediate",
    nameZh: "中级",
    levels: [4, 5, 6],
    desc: "Expand your abilities: abstract discussion, professional topics, cultural depth.",
    color: "#FF9800"
  },
  {
    name: "Advanced",
    nameZh: "高级",
    levels: [7, 8, 9],
    desc: "Achieve mastery: academic fluency, literary sophistication, native-level expression.",
    color: "#9C27B0"
  }
];

// Utility: get all levels as array
const HSK_LEVELS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Utility: Vietnamese labels (matching user's reference table)
const HSK_LABELS_VI = {
  1: { stage: "Sơ cấp", level: "Cấp 1" },
  2: { stage: "Sơ cấp", level: "Cấp 2" },
  3: { stage: "Sơ cấp", level: "Cấp 3" },
  4: { stage: "Trung cấp", level: "Cấp 4" },
  5: { stage: "Trung cấp", level: "Cấp 5" },
  6: { stage: "Trung cấp", level: "Cấp 6" },
  7: { stage: "Cao cấp", level: "Cấp 7" },
  8: { stage: "Cao cấp", level: "Cấp 8" },
  9: { stage: "Cao cấp", level: "Cấp 9" },
};
