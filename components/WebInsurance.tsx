import styles from '@styles/components/Components.module.css';
import Link from 'next/link';
import { FaCarSide } from 'react-icons/fa';

export const WebInsurance: React.FC = () => {
  return (
    <section className={styles.insurance}>
      <div className={styles.section_inner}>
        <div className={styles.headline_box_center}>
          <h2 className={styles.headline}>ネットで加入できる保険</h2>
          <p>ネットで加入できる様々な保険をご用意しております。</p>
        </div>
        <div className={styles.insuranceFlex}>
          <Link href='https://my.ms-ins.com/page/?x=0000359811&n='>
            <a className={styles.contactSectionLink} target='_blank'>
              <FaCarSide />
              <h3>１日分の自動車保険</h3>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WebInsurance;
