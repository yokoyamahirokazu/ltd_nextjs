import styles from '@styles/components/Components.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { FiCheckSquare, FiMail } from 'react-icons/fi';
import { BsLine } from 'react-icons/bs';
import Link from 'next/link';

interface Props {
  ids?: string;
  downloadId?: string;
  contactId?: string;
}
const ContactSection: React.FC<Props> = ({}: Props) => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactSection_inner}>
        <div className={styles.headline_box_center}>
          <h2 className={styles.headline}>
            まずはお気軽にお問い合わせください<span>Contact</span>
          </h2>
        </div>
        <div className={styles.contactSectionFlex}>
          <Link href='tel:084-959-4318'>
            <a className={styles.contactSectionLink}>
              <h3>
                <FaPhoneAlt />
                お電話
              </h3>
              <p>
                お電話でのお問い合わせはこちら<span>Tel.084-959-4318</span>
              </p>
            </a>
          </Link>
          <Link href='https://airrsv.net/ltd/calendar'>
            <a className={styles.contactSectionLink} target='_blank'>
              <h3>
                <FiCheckSquare />
                無料相談申し込み
              </h3>
              <p>
                無料相談をWEB上で
                <br />
                お申し込みいただけます
              </p>
            </a>
          </Link>
          <Link href='/contact'>
            <a className={styles.contactSectionLink}>
              <h3>
                <FiMail />
                お問い合わせフォーム
              </h3>
              <p>
                各種お問い合わせは <br />
                専用フォームをご利用ください
              </p>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.lineLink}>
        <div className={styles.lineLinkInner}>
          <div className={styles.headline_box_center}>
            <h2 className={styles.headline}>
              LTD公式LINEアカウント
              <span>いつでもLINEでお気軽にご相談いただけます！</span>
            </h2>
          </div>
          <Link href='https://lin.ee/Kw1JuTW'>
            <a className={styles.lineBtn} target='_blank'>
              <BsLine />
              友達になる
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
