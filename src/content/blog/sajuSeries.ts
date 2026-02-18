import type { Locale } from "@/lib/i18n";

export type SajuSeriesPost = {
  no: number;
  slug: string;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
};

const posts: SajuSeriesPost[] = [
  {
    no: 1,
    slug: "saju-series-01-free-saju-start",
    title: {
      ko: "무료 사주보기, 처음이라면 5분만에 이렇게 시작하세요",
      en: "Free Saju Reading: A 5-Minute Beginner Start Guide",
      ja: "無料四柱推命の始め方: 初心者向け5分ガイド",
      "zh-CN": "免费八字入门：5分钟开始看盘",
      "zh-TW": "免費八字入門：5分鐘開始看盤",
      es: "Lectura de saju gratis: guía inicial en 5 minutos",
      fr: "Lecture saju gratuite : démarrer en 5 minutes",
    },
    excerpt: {
      ko: "입력부터 첫 결과 읽기까지, 사주 초보를 위한 가장 쉬운 시작 가이드입니다.",
      en: "The easiest start guide for beginners, from input to your first interpretation.",
      ja: "入力から最初の読み方まで、初心者向けの最短ガイドです。",
      "zh-CN": "从输入到首份结果阅读，最适合新手的快速指南。",
      "zh-TW": "從輸入到第一份結果閱讀，最適合初學者的快速指南。",
      es: "Guía rápida para principiantes: desde la entrada de datos hasta la primera lectura.",
      fr: "Guide rapide débutant, de la saisie à la première lecture du résultat.",
    },
  },
  {
    no: 2,
    slug: "saju-series-02-what-is-saju",
    title: {
      ko: "사주란 무엇인가? 사주팔자 개념을 가장 쉽게 정리",
      en: "What Is Saju? Easy Guide to Four Pillars Basics",
      ja: "四柱推命とは？基礎用語をやさしく解説",
      "zh-CN": "什么是八字？四柱命理基础一文看懂",
      "zh-TW": "什麼是八字？四柱命理基礎一次看懂",
      es: "¿Qué es el saju? Guía fácil de conceptos básicos",
      fr: "Qu’est-ce que le saju ? Les bases expliquées simplement",
    },
    excerpt: {
      ko: "사주, 명식, 만세력 같은 핵심 용어를 한 번에 이해합니다.",
      en: "Understand core terms like saju, chart structure, and calendar logic.",
      ja: "四柱推命・命式・万年暦の基本用語を整理します。",
      "zh-CN": "一次搞懂八字、命盘与万年历等核心概念。",
      "zh-TW": "一次搞懂八字、命盤與萬年曆等核心概念。",
      es: "Aclara términos clave como saju, carta y base de cálculo.",
      fr: "Clarifiez les notions clés : saju, carte et base de calcul.",
    },
  },
  {
    no: 3,
    slug: "saju-series-03-how-to-enter-birth-info",
    title: {
      ko: "사주 보는 법 첫걸음: 생년월일시 입력이 중요한 이유",
      en: "How to Enter Birth Info Correctly for Saju Reading",
      ja: "入力精度の基本: 生年月日時で結果が変わる理由",
      "zh-CN": "八字排盘怎么填？出生时间为何会影响结果",
      "zh-TW": "八字排盤怎麼填？出生時間為何影響結果",
      es: "Cómo introducir bien tus datos de nacimiento en saju",
      fr: "Bien saisir ses données de naissance en saju",
    },
    excerpt: {
      ko: "양력/음력, 윤달, 시간대 설정이 결과에 미치는 영향을 정리합니다.",
      en: "Learn how lunar/solar date, leap month, and timezone affect your output.",
      ja: "陰暦/陽暦、うるう月、時差設定のポイントを解説します。",
      "zh-CN": "解释阳历/农历、闰月与时区设置对结果的影响。",
      "zh-TW": "說明陽曆/農曆、閏月與時區設定對結果的影響。",
      es: "Cómo afectan calendario, hora y zona horaria al resultado de saju.",
      fr: "Impact du calendrier, de l’heure et du fuseau sur votre résultat saju.",
    },
  },
  {
    no: 4,
    slug: "saju-series-04-five-elements-basic",
    title: {
      ko: "오행(목화토금수) 입문: 내 사주의 균형을 읽는 방법",
      en: "Five Elements in Saju: Beginner Guide to Balance",
      ja: "五行入門: 木火土金水バランスの見方",
      "zh-CN": "五行入门：木火土金水平衡怎么看",
      "zh-TW": "五行入門：木火土金水平衡怎麼看",
      es: "Cinco elementos en saju: guía básica para principiantes",
      fr: "Les cinq éléments en saju : guide débutant",
    },
    excerpt: {
      ko: "오행은 점수 경쟁이 아니라 균형 관리 도구라는 관점으로 설명합니다.",
      en: "Read five elements as a balance framework, not a good/bad score.",
      ja: "五行を優劣ではなくバランスの視点で読み解きます。",
      "zh-CN": "以平衡而非好坏评分的方式理解五行。",
      "zh-TW": "以平衡而非好壞評分的方式理解五行。",
      es: "Cómo interpretar los cinco elementos como equilibrio, no como nota final.",
      fr: "Lire les cinq éléments comme un équilibre, pas comme un score.",
    },
  },
  {
    no: 5,
    slug: "saju-series-05-ilgan-ilju",
    title: {
      ko: "일간·일주가 뭐예요? 내 성향을 읽는 핵심 포인트",
      en: "Ilgan and Ilju Explained: Read Your Core Saju Traits",
      ja: "日干・日柱とは？性質を読む基本",
      "zh-CN": "日干与日柱是什么？读懂你的核心性格",
      "zh-TW": "日干與日柱是什麼？看懂你的核心性格",
      es: "Ilgan e ilju: cómo leer tu rasgo central en saju",
      fr: "Ilgan et ilju : lire vos traits clés en saju",
    },
    excerpt: {
      ko: "일간/일주의 기본 의미와 단정 해석을 피하는 방법을 다룹니다.",
      en: "Learn ilgan/ilju basics and how to avoid over-simplified interpretation.",
      ja: "日干・日柱の基本と断定を避ける読み方を紹介します。",
      "zh-CN": "解释日干日柱基础，并说明如何避免单点定性。",
      "zh-TW": "解釋日干日柱基礎，並說明如何避免單點定性。",
      es: "Base de ilgan/ilju y cómo evitar interpretaciones rígidas.",
      fr: "Bases d’ilgan/ilju et lecture sans simplification excessive.",
    },
  },
  {
    no: 6,
    slug: "saju-series-06-month-branch-season",
    title: {
      ko: "월지와 계절감: 같은 사주도 다르게 읽히는 이유",
      en: "Month Branch and Seasonality: Why Saju Readings Differ",
      ja: "月支と季節感: 同じ命式でも解釈が変わる理由",
      "zh-CN": "月支与季节气：为什么同盘也会解读不同",
      "zh-TW": "月支與季節氣：為何同盤也會有不同解讀",
      es: "Rama mensual y estacionalidad: por qué cambia la lectura saju",
      fr: "Branche mensuelle et saison : pourquoi la lecture varie",
    },
    excerpt: {
      ko: "월지와 계절 맥락이 해석 강약을 어떻게 바꾸는지 설명합니다.",
      en: "See how month branch and season context shift interpretation strength.",
      ja: "月支と季節が解釈の強弱に与える影響を解説します。",
      "zh-CN": "说明月支与季节背景如何改变解读强弱。",
      "zh-TW": "說明月支與季節背景如何改變解讀強弱。",
      es: "Cómo contexto mensual y estación cambian la fuerza de interpretación.",
      fr: "Comment le contexte mensuel et saisonnier modifie l’interprétation.",
    },
  },
  {
    no: 7,
    slug: "saju-series-07-three-things-beginners-see",
    title: {
      ko: "초보가 사주에서 먼저 볼 3가지: 성향·관계·일/돈",
      en: "3 Things Beginners Should Read First in Saju",
      ja: "初心者が最初に見る3点: 性質・関係・仕事/お金",
      "zh-CN": "新手先看这3点：性格、关系、工作与财务",
      "zh-TW": "新手先看這3點：性格、關係、工作與財務",
      es: "Las 3 claves para leer saju si eres principiante",
      fr: "Les 3 points à lire en premier en saju",
    },
    excerpt: {
      ko: "복잡한 이론보다 실전 활용이 쉬운 3가지 축을 제안합니다.",
      en: "Focus on three practical lenses instead of heavy theory.",
      ja: "複雑な理論より実用的な3軸に絞って解説します。",
      "zh-CN": "先看最实用的三个维度，避免信息过载。",
      "zh-TW": "先看最實用的三個維度，避免資訊過載。",
      es: "Tres lentes prácticos para empezar sin saturarte de teoría.",
      fr: "Trois axes pratiques pour débuter sans surcharge théorique.",
    },
  },
  {
    no: 8,
    slug: "saju-series-08-compatibility-basic",
    title: {
      ko: "사주 궁합 입문: 상생·상극만으로 보면 위험한 이유",
      en: "Saju Compatibility Basics: Beyond Simple Match/Conflict",
      ja: "相性入門: 相生・相剋だけで判断しない理由",
      "zh-CN": "合盘入门：别只看相生相克",
      "zh-TW": "合盤入門：別只看相生相剋",
      es: "Compatibilidad saju para principiantes: más allá del “encaja/no encaja”",
      fr: "Compatibilité saju débutant : au-delà du “compatible/incompatible”",
    },
    excerpt: {
      ko: "궁합을 단순 판정이 아닌 관계 개선 도구로 읽는 방법을 안내합니다.",
      en: "Use compatibility reading for relationship improvement, not labels.",
      ja: "相性を判定ではなく関係改善に使う視点を紹介します。",
      "zh-CN": "将合盘用于关系优化，而非简单贴标签。",
      "zh-TW": "將合盤用於關係優化，而非簡單貼標籤。",
      es: "Cómo usar la compatibilidad para mejorar la relación, no para juzgar.",
      fr: "Utiliser la compatibilité pour améliorer la relation, pas pour juger.",
    },
  },
  {
    no: 9,
    slug: "saju-series-09-daewoon-sewoon",
    title: {
      ko: "대운·세운 입문: 내 사주의 ‘타이밍’을 읽는 기본",
      en: "Daewoon and Sewoon: Beginner Timing Guide in Saju",
      ja: "大運・歳運入門: タイミングの基本",
      "zh-CN": "大运与流年入门：读懂你的时间节奏",
      "zh-TW": "大運與流年入門：看懂你的時間節奏",
      es: "Daewoon y sewoon: guía básica de timing en saju",
      fr: "Daewoon et sewoon : guide timing pour débutants",
    },
    excerpt: {
      ko: "대운과 세운 차이와 타이밍 해석의 실전 적용을 다룹니다.",
      en: "Understand long and yearly cycles, then apply them to planning.",
      ja: "大運・歳運の違いと実践的な活用法を解説します。",
      "zh-CN": "理解大运流年差异，并应用到现实规划。",
      "zh-TW": "理解大運流年差異，並應用到現實規劃。",
      es: "Diferencia entre ciclos y cómo aplicarlos en tu planificación.",
      fr: "Différence des cycles et application pratique à votre planification.",
    },
  },
  {
    no: 10,
    slug: "saju-series-10-how-to-use-saju-in-life",
    title: {
      ko: "사주를 삶에 활용하는 법: 맹신 없이 똑똑하게 보는 체크리스트",
      en: "How to Use Saju in Real Life Without Blind Belief",
      ja: "四柱推命を生活に活かす方法: 盲信しない実践チェック",
      "zh-CN": "如何把八字用在生活中：不迷信的实用清单",
      "zh-TW": "如何把八字用在生活中：不迷信的實用清單",
      es: "Cómo usar el saju en tu vida sin caer en el dogma",
      fr: "Utiliser le saju au quotidien sans croyance aveugle",
    },
    excerpt: {
      ko: "사주 해석을 실생활 의사결정으로 전환하는 실전 루틴을 제공합니다.",
      en: "A practical routine to turn interpretation into better daily decisions.",
      ja: "解釈を日常の意思決定に変える実践ルーティンを紹介します。",
      "zh-CN": "提供将解读转化为日常决策的实践流程。",
      "zh-TW": "提供將解讀轉化為日常決策的實踐流程。",
      es: "Rutina práctica para convertir interpretación en decisiones reales.",
      fr: "Routine pratique pour transformer l’interprétation en décisions concrètes.",
    },
  },
];

export function getSajuSeriesPosts(lang: Locale) {
  return posts.map((post) => ({
    no: post.no,
    slug: post.slug,
    title: post.title[lang],
    excerpt: post.excerpt[lang],
  }));
}

export function getSajuSeriesPostBySlug(lang: Locale, slug: string) {
  const post = posts.find((item) => item.slug === slug);
  if (!post) {
    return null;
  }
  return {
    no: post.no,
    slug: post.slug,
    title: post.title[lang],
    excerpt: post.excerpt[lang],
  };
}
