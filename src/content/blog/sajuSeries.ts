import type { Locale } from "@/lib/i18n";

export type SajuSeriesPost = {
  no: number;
  slug: string;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
};

export type SajuSeriesPostDetail = {
  no: number;
  slug: string;
  title: string;
  excerpt: string;
  body: {
    intro: string;
    sections: Array<{
      heading: string;
      paragraphs: string[];
    }>;
    outro: string;
  };
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

function getSectionHeadings(lang: Locale) {
  switch (lang) {
    case "ko":
      return ["핵심 개념", "실전 적용", "주의할 점"];
    case "en":
      return ["Core Concept", "Practical Use", "Common Mistakes"];
    case "ja":
      return ["核心ポイント", "実践での使い方", "よくある注意点"];
    case "zh-CN":
      return ["核心概念", "实战应用", "常见误区"];
    case "zh-TW":
      return ["核心概念", "實戰應用", "常見誤區"];
    case "es":
      return ["Concepto clave", "Aplicación práctica", "Errores comunes"];
    case "fr":
      return ["Concept clé", "Application pratique", "Erreurs fréquentes"];
  }
}

function getSeriesOutro(lang: Locale, no: number) {
  const nextNo = Math.min(no + 1, 10);
  switch (lang) {
    case "ko":
      return `다음 편(${nextNo}편)에서는 이 내용을 바탕으로 바로 적용할 수 있는 체크리스트를 다룹니다.`;
    case "en":
      return `In episode ${nextNo}, we build on this with a practical checklist you can apply immediately.`;
    case "ja":
      return `次回（第${nextNo}回）では、この内容をすぐ実践できるチェックリストとして整理します。`;
    case "zh-CN":
      return `下一篇（第${nextNo}篇）将基于这些内容给出可立即执行的检查清单。`;
    case "zh-TW":
      return `下一篇（第${nextNo}篇）將以此為基礎提供可立即執行的檢查清單。`;
    case "es":
      return `En el episodio ${nextNo}, convertiremos esto en una checklist aplicable de inmediato.`;
    case "fr":
      return `Dans l'épisode ${nextNo}, nous transformerons cela en checklist immédiatement applicable.`;
  }
}

function buildPostBody(lang: Locale, post: SajuSeriesPost) {
  const localizedTitle = post.title[lang];
  const localizedExcerpt = post.excerpt[lang];
  const headings = getSectionHeadings(lang);

  switch (lang) {
    case "ko":
      return {
        intro: `${localizedExcerpt} 이 글은 ${localizedTitle} 주제를 초보 관점에서 단계적으로 이해할 수 있도록 구성했습니다.`,
        sections: [
          {
            heading: headings[0],
            paragraphs: [
              `${localizedTitle}를 볼 때는 단일 키워드보다 흐름을 먼저 파악해야 해석의 정확도가 올라갑니다.`,
              "용어를 외우기보다 입력값과 결과의 연결 관계를 이해하면 실전에서 더 안정적으로 읽을 수 있습니다.",
            ],
          },
          {
            heading: headings[1],
            paragraphs: [
              "실제 해석에서는 현재 생활 패턴, 관계, 업무 맥락을 함께 적어두고 결과를 대조해보는 방식이 효과적입니다.",
              "한 번에 결론을 내리기보다 2주 단위로 기록하고 비교하면 자신에게 맞는 해석 기준이 빠르게 잡힙니다.",
            ],
          },
          {
            heading: headings[2],
            paragraphs: [
              "하나의 문장으로 사람을 단정하거나 불안을 유도하는 해석은 피하고, 선택 가능한 행동 옵션으로 바꾸는 것이 중요합니다.",
              "사주는 결정이 아니라 참고 프레임으로 활용할 때 가장 높은 실용성을 가집니다.",
            ],
          },
        ],
        outro: getSeriesOutro(lang, post.no),
      };
    case "en":
      return {
        intro: `${localizedExcerpt} This article explains ${localizedTitle} in a beginner-friendly, step-by-step way.`,
        sections: [
          {
            heading: headings[0],
            paragraphs: [
              `When reading ${localizedTitle}, focus on pattern and context before jumping to isolated keywords.`,
              "Understanding how inputs connect to interpretation usually matters more than memorizing terminology.",
            ],
          },
          {
            heading: headings[1],
            paragraphs: [
              "In practice, compare your reading with your real routine, relationships, and work context.",
              "Tracking notes over two to four weeks gives a more reliable interpretation baseline than one-time judgment.",
            ],
          },
          {
            heading: headings[2],
            paragraphs: [
              "Avoid deterministic conclusions from one phrase; translate insights into actionable options.",
              "Saju works best as a decision-support frame, not as fixed destiny.",
            ],
          },
        ],
        outro: getSeriesOutro(lang, post.no),
      };
    case "ja":
      return {
        intro: `${localizedExcerpt} 本記事では「${localizedTitle}」を初心者向けに段階的に整理します。`,
        sections: [
          {
            heading: headings[0],
            paragraphs: [
              `${localizedTitle}を読むときは、単語単位より全体の流れを先に押さえることが重要です。`,
              "用語暗記より、入力値と解釈結果のつながりを理解する方が実践で役立ちます。",
            ],
          },
          {
            heading: headings[1],
            paragraphs: [
              "実際には、生活習慣・人間関係・仕事の状況と照合しながら読むと精度が上がります。",
              "1回で断定せず、2〜4週間の記録で比較する方法を推奨します。",
            ],
          },
          {
            heading: headings[2],
            paragraphs: [
              "一つの表現で性質を断定したり、不安を煽る解釈は避けるべきです。",
              "四柱推命は決定論ではなく、意思決定を補助するフレームとして使うのが実用的です。",
            ],
          },
        ],
        outro: getSeriesOutro(lang, post.no),
      };
    case "zh-CN":
      return {
        intro: `${localizedExcerpt} 本文会以新手友好的方式分步骤讲清“${localizedTitle}”。`,
        sections: [
          {
            heading: headings[0],
            paragraphs: [
              `阅读${localizedTitle}时，先看整体结构与上下文，再看单个关键词。`,
              "与其背术语，不如先理解输入信息如何影响解读结果。",
            ],
          },
          {
            heading: headings[1],
            paragraphs: [
              "实战中建议把解读与当前生活、关系、工作场景一起对照。",
              "不要一次下结论，连续记录2到4周会更容易形成稳定判断。",
            ],
          },
          {
            heading: headings[2],
            paragraphs: [
              "避免用一句话给人贴标签，也不要把解读变成焦虑来源。",
              "把八字当作决策参考框架，而不是绝对结论，效果会更好。",
            ],
          },
        ],
        outro: getSeriesOutro(lang, post.no),
      };
    case "zh-TW":
      return {
        intro: `${localizedExcerpt} 本文會以新手可理解的方式，逐步說明「${localizedTitle}」。`,
        sections: [
          {
            heading: headings[0],
            paragraphs: [
              `閱讀${localizedTitle}時，先看整體脈絡，再看個別關鍵詞。`,
              "與其硬背術語，不如先理解輸入資訊如何影響解讀結果。",
            ],
          },
          {
            heading: headings[1],
            paragraphs: [
              "實作時，建議把解讀與當前生活、關係、工作情境交叉對照。",
              "不要一次定論，持續記錄2到4週更容易建立穩定判斷。",
            ],
          },
          {
            heading: headings[2],
            paragraphs: [
              "避免用單一句子替人定性，也不要讓解讀成為焦慮來源。",
              "把四柱當作決策參考框架，而非絕對答案，會更實用。",
            ],
          },
        ],
        outro: getSeriesOutro(lang, post.no),
      };
    case "es":
      return {
        intro: `${localizedExcerpt} En este artículo explicamos "${localizedTitle}" en pasos simples para principiantes.`,
        sections: [
          {
            heading: headings[0],
            paragraphs: [
              `Al leer ${localizedTitle}, conviene entender primero el patrón general y el contexto.`,
              "Más útil que memorizar términos es comprender cómo los datos de entrada cambian la interpretación.",
            ],
          },
          {
            heading: headings[1],
            paragraphs: [
              "En la práctica, compara la lectura con tu rutina real, relaciones y situación laboral.",
              "Evita conclusiones de una sola vez: registrar durante 2 a 4 semanas mejora la consistencia.",
            ],
          },
          {
            heading: headings[2],
            paragraphs: [
              "No conviertas una frase en etiqueta permanente ni en fuente de ansiedad.",
              "El saju funciona mejor como marco de apoyo para decidir, no como destino fijo.",
            ],
          },
        ],
        outro: getSeriesOutro(lang, post.no),
      };
    case "fr":
      return {
        intro: `${localizedExcerpt} Cet article présente "${localizedTitle}" étape par étape pour les débutants.`,
        sections: [
          {
            heading: headings[0],
            paragraphs: [
              `Pour lire ${localizedTitle}, commencez par le contexte global avant les mots-clés isolés.`,
              "Comprendre le lien entre données d'entrée et résultat d'interprétation est plus utile que mémoriser des termes.",
            ],
          },
          {
            heading: headings[1],
            paragraphs: [
              "En pratique, comparez la lecture avec votre routine, vos relations et votre situation professionnelle.",
              "Évitez le verdict immédiat: un suivi sur 2 à 4 semaines donne une base plus fiable.",
            ],
          },
          {
            heading: headings[2],
            paragraphs: [
              "N'enfermez pas une personne dans une phrase unique et évitez les lectures anxiogènes.",
              "Le saju est le plus utile comme cadre d'aide à la décision, pas comme fatalité.",
            ],
          },
        ],
        outro: getSeriesOutro(lang, post.no),
      };
  }
}

export function getSajuSeriesPostDetailBySlug(
  lang: Locale,
  slug: string
): SajuSeriesPostDetail | null {
  const post = posts.find((item) => item.slug === slug);
  if (!post) {
    return null;
  }

  return {
    no: post.no,
    slug: post.slug,
    title: post.title[lang],
    excerpt: post.excerpt[lang],
    body: buildPostBody(lang, post),
  };
}

export function getSajuSeriesAdjacentPosts(lang: Locale, slug: string) {
  const index = posts.findIndex((item) => item.slug === slug);
  if (index === -1) {
    return null;
  }

  const prev = index > 0 ? posts[index - 1] : null;
  const next = index < posts.length - 1 ? posts[index + 1] : null;

  return {
    prev: prev
      ? {
          slug: prev.slug,
          title: prev.title[lang],
          no: prev.no,
        }
      : null,
    next: next
      ? {
          slug: next.slug,
          title: next.title[lang],
          no: next.no,
        }
      : null,
  };
}
