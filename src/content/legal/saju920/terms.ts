import type { Locale } from "@/lib/i18n";

export type SajuTermsContent = {
  effectiveDate: string;
  sections: Array<{
    title: string;
    paragraphs: string[];
  }>;
};

export function getSajuTermsContent(locale: Locale): SajuTermsContent {
  switch (locale) {
    case "ko":
      return {
        effectiveDate: "2026-02-19",
        sections: [
          {
            title: "1. 서비스 개요",
            paragraphs: [
              "사주920은 사용자가 입력한 생년월일·시간·성별 정보를 기반으로 사주 해석 정보를 제공하는 서비스입니다.",
              "제공되는 결과는 참고용 정보이며, 법률·의료·재무 등 전문 자문을 대체하지 않습니다.",
            ],
          },
          {
            title: "2. 이용자 의무",
            paragraphs: [
              "이용자는 정확한 정보를 입력해야 하며, 타인의 개인정보를 무단으로 입력하거나 도용해서는 안 됩니다.",
              "서비스를 불법 목적으로 사용하거나 운영을 방해하는 행위는 금지됩니다.",
            ],
          },
          {
            title: "3. 계정 및 접근",
            paragraphs: [
              "소셜 로그인 기반 계정 정보는 본인 책임 하에 관리해야 합니다.",
              "계정 도용이나 보안 침해가 의심되는 경우 즉시 운영자에게 알려야 합니다.",
            ],
          },
          {
            title: "4. 데이터 처리",
            paragraphs: [
              "개인정보의 수집·이용·보관은 개인정보처리방침에 따릅니다.",
              "서비스 품질 개선을 위해 최소 범위의 이용 로그가 처리될 수 있습니다.",
            ],
          },
          {
            title: "5. 책임 제한",
            paragraphs: [
              "서비스 장애, 네트워크 문제, 제3자 플랫폼 이슈로 인한 손해에 대해 당사는 관련 법령 범위 내에서 책임을 제한합니다.",
              "사주 해석 결과의 활용에 따른 최종 의사결정 책임은 이용자 본인에게 있습니다.",
            ],
          },
          {
            title: "6. 약관 변경",
            paragraphs: [
              "관련 법령 또는 서비스 변경 시 약관이 개정될 수 있으며, 중요한 변경은 사전에 고지합니다.",
              "개정 약관 시행일 이후 서비스를 계속 이용하면 변경 사항에 동의한 것으로 봅니다.",
            ],
          },
        ],
      };
    case "en":
      return {
        effectiveDate: "2026-02-19",
        sections: [
          {
            title: "1. Service Overview",
            paragraphs: [
              "Saju920 provides saju interpretation based on user input such as birth date, time, and gender.",
              "All results are informational and do not replace legal, medical, or financial advice.",
            ],
          },
          {
            title: "2. User Obligations",
            paragraphs: [
              "Users must provide accurate information and must not submit or misuse another person's personal data.",
              "Any illegal use or disruption of the service is prohibited.",
            ],
          },
          {
            title: "3. Account and Access",
            paragraphs: [
              "Users are responsible for managing their social login credentials securely.",
              "If account abuse or security issues are suspected, users must contact the operator immediately.",
            ],
          },
          {
            title: "4. Data Handling",
            paragraphs: [
              "Collection and use of personal data follow the Privacy Policy.",
              "Minimal usage logs may be processed to improve service quality and reliability.",
            ],
          },
          {
            title: "5. Limitation of Liability",
            paragraphs: [
              "The company limits liability within applicable law for damage caused by outages, network issues, or third-party platforms.",
              "Final decisions based on interpretation outputs are the user's responsibility.",
            ],
          },
          {
            title: "6. Changes to Terms",
            paragraphs: [
              "These terms may be updated when laws or service operations change; material updates will be announced in advance.",
              "Continued use after the effective date of revised terms indicates acceptance.",
            ],
          },
        ],
      };
    case "ja":
      return {
        effectiveDate: "2026-02-19",
        sections: [
          {
            title: "1. サービス概要",
            paragraphs: [
              "Saju920は、生年月日・出生時刻・性別などの入力情報に基づいて四柱推命の解釈情報を提供します。",
              "提供内容は参考情報であり、法律・医療・金融等の専門助言を代替するものではありません。",
            ],
          },
          {
            title: "2. 利用者の義務",
            paragraphs: [
              "利用者は正確な情報を入力し、他人の個人情報を無断で使用してはなりません。",
              "違法目的での利用やサービス運営を妨害する行為は禁止されます。",
            ],
          },
          {
            title: "3. アカウント管理",
            paragraphs: [
              "ソーシャルログイン情報は利用者自身の責任で安全に管理してください。",
              "不正利用やセキュリティ侵害が疑われる場合は速やかに運営者へ連絡してください。",
            ],
          },
          {
            title: "4. データ取扱い",
            paragraphs: [
              "個人情報の収集・利用・保管はプライバシーポリシーに従います。",
              "品質改善のため、必要最小限の利用ログを処理する場合があります。",
            ],
          },
          {
            title: "5. 責任の制限",
            paragraphs: [
              "障害、ネットワーク問題、第三者プラットフォーム起因の損害について、当社は法令の範囲内で責任を制限します。",
              "解釈結果の活用に関する最終判断は利用者本人の責任です。",
            ],
          },
          {
            title: "6. 規約の変更",
            paragraphs: [
              "法令やサービス内容の変更に応じて本規約を改定することがあります。重要な変更は事前に告知します。",
              "改定後の施行日以降に利用を継続した場合、変更に同意したものとみなされます。",
            ],
          },
        ],
      };
    case "zh-CN":
      return {
        effectiveDate: "2026-02-19",
        sections: [
          {
            title: "1. 服务概述",
            paragraphs: [
              "Saju920 基于用户输入的出生日期、时间、性别等信息提供八字解读服务。",
              "页面结果仅供参考，不构成法律、医疗、财务等专业意见。",
            ],
          },
          {
            title: "2. 用户义务",
            paragraphs: [
              "用户应提供真实信息，不得冒用或擅自输入他人个人信息。",
              "禁止将服务用于违法目的或干扰服务正常运行。",
            ],
          },
          {
            title: "3. 账号与访问",
            paragraphs: [
              "社交登录账号信息由用户自行妥善保管。",
              "若发现账号异常或安全风险，应立即联系运营方。",
            ],
          },
          {
            title: "4. 数据处理",
            paragraphs: [
              "个人信息的收集、使用与保存遵循隐私政策。",
              "为提升稳定性与体验，系统可能处理最小范围的使用日志。",
            ],
          },
          {
            title: "5. 责任限制",
            paragraphs: [
              "对于服务中断、网络问题或第三方平台导致的损失，平台将在适用法律范围内承担责任。",
              "基于解读结果作出的最终决策由用户自行负责。",
            ],
          },
          {
            title: "6. 条款更新",
            paragraphs: [
              "因法律法规或服务调整，条款可能更新；重大变更将提前通知。",
              "在新版条款生效后继续使用服务，视为同意更新内容。",
            ],
          },
        ],
      };
    case "zh-TW":
      return {
        effectiveDate: "2026-02-19",
        sections: [
          {
            title: "1. 服務概述",
            paragraphs: [
              "Saju920 會根據使用者輸入的出生日期、時間、性別等資料提供四柱解讀服務。",
              "本服務結果僅供參考，不構成法律、醫療、財務等專業建議。",
            ],
          },
          {
            title: "2. 使用者義務",
            paragraphs: [
              "使用者應提供正確資訊，不得冒用或未經授權輸入他人個人資料。",
              "禁止以違法目的使用服務或妨礙服務正常運作。",
            ],
          },
          {
            title: "3. 帳號與存取",
            paragraphs: [
              "社群登入帳號資訊應由使用者自行妥善保管。",
              "若有疑似盜用或安全異常，請立即聯繫營運方。",
            ],
          },
          {
            title: "4. 資料處理",
            paragraphs: [
              "個人資料之蒐集、使用與保存依隱私權政策辦理。",
              "為改善服務品質與穩定性，系統可能處理最小範圍的使用紀錄。",
            ],
          },
          {
            title: "5. 責任限制",
            paragraphs: [
              "因系統中斷、網路問題或第三方平台造成之損害，平台將於法律允許範圍內限制責任。",
              "使用者依解讀結果所做之最終決策，應由使用者自行負責。",
            ],
          },
          {
            title: "6. 條款更新",
            paragraphs: [
              "因法規或服務調整，條款可能更新；重大變更將事前公告。",
              "條款生效後若持續使用服務，視為同意更新內容。",
            ],
          },
        ],
      };
    case "es":
      return {
        effectiveDate: "2026-02-19",
        sections: [
          {
            title: "1. Descripción del servicio",
            paragraphs: [
              "Saju920 ofrece interpretación de saju con base en datos ingresados por el usuario, como fecha de nacimiento, hora y género.",
              "Los resultados son informativos y no sustituyen asesoría legal, médica o financiera.",
            ],
          },
          {
            title: "2. Obligaciones del usuario",
            paragraphs: [
              "El usuario debe proporcionar información veraz y no puede usar datos personales de terceros sin autorización.",
              "Está prohibido usar el servicio con fines ilícitos o interferir con su funcionamiento.",
            ],
          },
          {
            title: "3. Cuenta y acceso",
            paragraphs: [
              "Las credenciales de inicio social deben ser gestionadas de forma segura por el usuario.",
              "Si se detecta uso indebido o riesgo de seguridad, el usuario debe notificar de inmediato al operador.",
            ],
          },
          {
            title: "4. Tratamiento de datos",
            paragraphs: [
              "La recopilación y el uso de datos personales se rigen por la Política de Privacidad.",
              "Podemos procesar registros mínimos de uso para mejorar estabilidad y calidad del servicio.",
            ],
          },
          {
            title: "5. Limitación de responsabilidad",
            paragraphs: [
              "La empresa limita su responsabilidad dentro del marco legal por daños derivados de caídas, red o plataformas de terceros.",
              "La decisión final basada en resultados de interpretación recae en el usuario.",
            ],
          },
          {
            title: "6. Cambios en los términos",
            paragraphs: [
              "Estos términos pueden actualizarse por cambios legales o del servicio; los cambios relevantes se anunciarán previamente.",
              "El uso continuo después de la fecha de vigencia implica aceptación.",
            ],
          },
        ],
      };
    case "fr":
      return {
        effectiveDate: "2026-02-19",
        sections: [
          {
            title: "1. Présentation du service",
            paragraphs: [
              "Saju920 fournit des interprétations saju à partir des données saisies (date de naissance, heure, genre).",
              "Les résultats sont informatifs et ne remplacent pas un conseil juridique, médical ou financier.",
            ],
          },
          {
            title: "2. Obligations de l'utilisateur",
            paragraphs: [
              "L'utilisateur doit fournir des informations exactes et ne pas utiliser des données personnelles d'autrui sans autorisation.",
              "Toute utilisation illicite ou perturbation du service est interdite.",
            ],
          },
          {
            title: "3. Compte et accès",
            paragraphs: [
              "Les identifiants de connexion sociale doivent être gérés de manière sécurisée par l'utilisateur.",
              "En cas de suspicion d'accès non autorisé, l'utilisateur doit contacter immédiatement l'opérateur.",
            ],
          },
          {
            title: "4. Traitement des données",
            paragraphs: [
              "La collecte et l'utilisation des données personnelles suivent la Politique de confidentialité.",
              "Des journaux d'usage minimaux peuvent être traités pour améliorer la stabilité et la qualité du service.",
            ],
          },
          {
            title: "5. Limitation de responsabilité",
            paragraphs: [
              "La société limite sa responsabilité, dans le cadre légal applicable, pour les dommages liés aux interruptions, au réseau ou aux plateformes tierces.",
              "La décision finale fondée sur les résultats d'interprétation relève de la responsabilité de l'utilisateur.",
            ],
          },
          {
            title: "6. Modification des conditions",
            paragraphs: [
              "Ces conditions peuvent être mises à jour en cas d'évolution légale ou opérationnelle; les changements importants seront annoncés à l'avance.",
              "L'utilisation continue après la date d'entrée en vigueur vaut acceptation des nouvelles conditions.",
            ],
          },
        ],
      };
  }
}
