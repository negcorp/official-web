import type { Locale } from "@/lib/i18n";

export type SajuAccountDeletionContent = {
  effectiveDate: string;
  sections: Array<{
    title: string;
    paragraphs: string[];
  }>;
};

export function getSajuAccountDeletionContent(
  locale: Locale
): SajuAccountDeletionContent {
  switch (locale) {
    case "ko":
      return {
        effectiveDate: "2026-02-21",
        sections: [
          {
            title: "1. 계정 삭제 요청 방법",
            paragraphs: [
              "앱 내 계정 설정의 탈퇴 기능을 이용하거나 이메일(me@nine20.net)로 계정 삭제를 요청할 수 있습니다.",
              "이메일 요청 시 본인 확인을 위해 가입한 소셜 계정 정보 또는 서비스 이용 식별 정보를 확인할 수 있습니다.",
            ],
          },
          {
            title: "2. 삭제되는 데이터",
            paragraphs: [
              "계정 삭제가 완료되면 계정 프로필 정보, 로그인 연동 정보, 사주 분석 이력 등 서비스 계정에 연결된 개인정보를 삭제 대상으로 처리합니다.",
              "삭제 완료 이후 해당 계정으로는 기존 데이터를 복구할 수 없습니다.",
            ],
          },
          {
            title: "3. 법적 보관이 필요한 정보",
            paragraphs: [
              "전자상거래 등 관련 법령에 따라 거래/결제 관련 일부 정보는 법정 보관 기간 동안 별도 보관될 수 있습니다.",
              "법정 보관 기간이 만료되면 해당 정보도 지체 없이 파기합니다.",
            ],
          },
          {
            title: "4. 처리 기간",
            paragraphs: [
              "계정 삭제 요청은 원칙적으로 접수 후 7일 이내 처리합니다.",
              "백업 시스템 반영 시점에 따라 일부 데이터는 최대 30일 내 순차 삭제될 수 있습니다.",
            ],
          },
          {
            title: "5. 문의처",
            paragraphs: [
              "계정 삭제 또는 개인정보 처리 관련 문의는 me@nine20.net 으로 연락해 주세요.",
            ],
          },
        ],
      };
    case "en":
      return {
        effectiveDate: "2026-02-21",
        sections: [
          {
            title: "1. How to request account deletion",
            paragraphs: [
              "You can request account deletion through the in-app account settings or by email at me@nine20.net.",
              "For email requests, we may verify account ownership using your social login account details or service identifiers.",
            ],
          },
          {
            title: "2. Data that will be deleted",
            paragraphs: [
              "Once deletion is completed, personal data linked to your service account is deleted, including profile information, login linkage data, and saju analysis history.",
              "After deletion is completed, previously linked data cannot be restored for that account.",
            ],
          },
          {
            title: "3. Data retained for legal obligations",
            paragraphs: [
              "Some transaction or payment-related records may be retained separately for the legally required retention period.",
              "When the legal retention period expires, the retained data is promptly deleted.",
            ],
          },
          {
            title: "4. Processing timeline",
            paragraphs: [
              "Account deletion requests are generally processed within 7 days of receipt.",
              "Depending on backup cycle timing, some records may be removed from backup systems within up to 30 days.",
            ],
          },
          {
            title: "5. Contact",
            paragraphs: [
              "For account deletion or personal data inquiries, contact us at me@nine20.net.",
            ],
          },
        ],
      };
    case "ja":
      return {
        effectiveDate: "2026-02-21",
        sections: [
          {
            title: "1. アカウント削除の申請方法",
            paragraphs: [
              "アプリ内のアカウント設定にある退会機能、またはメール（me@nine20.net）で削除申請できます。",
              "メール申請時は本人確認のため、ソーシャルログイン情報またはサービス識別情報の確認をお願いする場合があります。",
            ],
          },
          {
            title: "2. 削除対象データ",
            paragraphs: [
              "削除完了後、プロフィール情報、ログイン連携情報、サジュ分析履歴など、アカウントに紐づく個人データを削除対象として処理します。",
              "削除完了後は、同アカウントの既存データを復元できません。",
            ],
          },
          {
            title: "3. 法令上保管が必要なデータ",
            paragraphs: [
              "取引・決済関連の一部情報は、法令で定められた期間に限り別途保管される場合があります。",
              "法定保管期間の満了後、当該情報は速やかに削除されます。",
            ],
          },
          {
            title: "4. 処理期間",
            paragraphs: [
              "アカウント削除申請は、原則として受付後7日以内に処理します。",
              "バックアップ反映タイミングにより、一部データの完全削除まで最大30日かかる場合があります。",
            ],
          },
          {
            title: "5. お問い合わせ",
            paragraphs: [
              "アカウント削除および個人情報に関するお問い合わせは、me@nine20.net までご連絡ください。",
            ],
          },
        ],
      };
    case "zh-CN":
      return {
        effectiveDate: "2026-02-21",
        sections: [
          {
            title: "1. 如何申请删除账号",
            paragraphs: [
              "你可以通过应用内账号设置中的注销功能，或发送邮件至 me@nine20.net 提交删除申请。",
              "通过邮件申请时，我们可能会要求你提供社交登录信息或服务识别信息以完成身份确认。",
            ],
          },
          {
            title: "2. 将被删除的数据",
            paragraphs: [
              "账号删除完成后，与你账号关联的个人数据将被删除，包括个人资料、登录关联信息及四柱分析记录等。",
              "删除完成后，该账号的历史数据无法恢复。",
            ],
          },
          {
            title: "3. 因法律义务保留的数据",
            paragraphs: [
              "根据相关法律法规，部分交易或支付记录可能在法定保存期限内被单独保留。",
              "法定保存期限届满后，相关保留数据将及时删除。",
            ],
          },
          {
            title: "4. 处理时长",
            paragraphs: [
              "账号删除申请原则上会在收到后7天内处理完成。",
              "受备份系统周期影响，部分数据可能在最多30天内完成清除。",
            ],
          },
          {
            title: "5. 联系方式",
            paragraphs: [
              "如需咨询账号删除或个人信息处理问题，请联系 me@nine20.net。",
            ],
          },
        ],
      };
    case "zh-TW":
      return {
        effectiveDate: "2026-02-21",
        sections: [
          {
            title: "1. 帳號刪除申請方式",
            paragraphs: [
              "你可以透過 App 內帳號設定的刪除功能，或寄信至 me@nine20.net 申請刪除帳號。",
              "若透過 email 申請，為確認本人身分，我們可能會要求提供社群登入資訊或服務識別資訊。",
            ],
          },
          {
            title: "2. 會被刪除的資料",
            paragraphs: [
              "帳號刪除完成後，與帳號綁定的個人資料將被刪除，包括個人檔案、登入連結資訊與四柱分析紀錄等。",
              "刪除完成後，該帳號既有資料無法復原。",
            ],
          },
          {
            title: "3. 因法規需保留的資料",
            paragraphs: [
              "依相關法規，部分交易或付款紀錄可能需於法定期間內另行保存。",
              "法定保存期間屆滿後，保留資料將儘速刪除。",
            ],
          },
          {
            title: "4. 處理時間",
            paragraphs: [
              "帳號刪除申請原則上會於受理後 7 日內完成處理。",
              "受備份系統週期影響，部分資料可能於最長 30 日內完成清除。",
            ],
          },
          {
            title: "5. 聯絡方式",
            paragraphs: [
              "如需洽詢帳號刪除或個資處理事宜，請聯絡 me@nine20.net。",
            ],
          },
        ],
      };
    case "es":
      return {
        effectiveDate: "2026-02-21",
        sections: [
          {
            title: "1. Cómo solicitar la eliminación de la cuenta",
            paragraphs: [
              "Puedes solicitar la eliminación de tu cuenta desde la configuración de la app o por correo a me@nine20.net.",
              "Si la solicitud se hace por email, podemos verificar la titularidad usando datos de inicio de sesión social o identificadores del servicio.",
            ],
          },
          {
            title: "2. Datos que se eliminarán",
            paragraphs: [
              "Una vez completada la eliminación, se borran los datos personales vinculados a la cuenta, incluidos perfil, enlaces de inicio de sesión e historial de análisis de saju.",
              "Después de la eliminación, los datos anteriores de esa cuenta no se pueden restaurar.",
            ],
          },
          {
            title: "3. Datos conservados por obligación legal",
            paragraphs: [
              "Parte de la información de transacciones o pagos puede conservarse por separado durante el plazo exigido por la ley.",
              "Cuando finaliza ese plazo legal, los datos conservados se eliminan sin demora.",
            ],
          },
          {
            title: "4. Plazo de procesamiento",
            paragraphs: [
              "Las solicitudes de eliminación de cuenta se procesan, por regla general, dentro de 7 días desde su recepción.",
              "Según el ciclo de copias de seguridad, algunos registros pueden eliminarse completamente en un plazo máximo de 30 días.",
            ],
          },
          {
            title: "5. Contacto",
            paragraphs: [
              "Para consultas sobre eliminación de cuenta o tratamiento de datos personales, escribe a me@nine20.net.",
            ],
          },
        ],
      };
    case "fr":
      return {
        effectiveDate: "2026-02-21",
        sections: [
          {
            title: "1. Comment demander la suppression du compte",
            paragraphs: [
              "Vous pouvez demander la suppression de votre compte depuis les paramètres de l'application ou par e-mail à me@nine20.net.",
              "En cas de demande par e-mail, nous pouvons vérifier l'identité via les informations de connexion sociale ou des identifiants de service.",
            ],
          },
          {
            title: "2. Données supprimées",
            paragraphs: [
              "Une fois la suppression effectuée, les données personnelles liées au compte sont supprimées, y compris le profil, les liaisons de connexion et l'historique d'analyse saju.",
              "Après suppression, les données de ce compte ne peuvent pas être restaurées.",
            ],
          },
          {
            title: "3. Données conservées pour obligations légales",
            paragraphs: [
              "Certaines données liées aux transactions ou paiements peuvent être conservées séparément pendant la durée légale requise.",
              "À l'expiration de cette durée, les données conservées sont supprimées sans délai.",
            ],
          },
          {
            title: "4. Délai de traitement",
            paragraphs: [
              "Les demandes de suppression de compte sont en principe traitées dans un délai de 7 jours après réception.",
              "Selon le cycle des sauvegardes, certaines données peuvent être purgées définitivement dans un délai maximal de 30 jours.",
            ],
          },
          {
            title: "5. Contact",
            paragraphs: [
              "Pour toute demande liée à la suppression de compte ou aux données personnelles, contactez-nous à me@nine20.net.",
            ],
          },
        ],
      };
    default:
      return {
        effectiveDate: "2026-02-21",
        sections: [],
      };
  }
}
