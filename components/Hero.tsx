import styles from '@styles/components/Hero.module.css';
import Image from 'next/image';
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <p className={styles.heroCopy}>
              保険屋さん
              <br />
              &nbsp;&nbsp;らしくない <br />
              &nbsp;&nbsp;&nbsp;&nbsp;保険屋さん
            </p>
            <div className={styles.heroImg}>
              <div className={styles.heroImgInner}>
                <Image
                  src='/images/hero.png'
                  alt='株式会社LTD'
                  layout={'fill'}
                  objectFit={'contain'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
