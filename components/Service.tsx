import styles from '@styles/components/Components.module.css';
import Image from 'next/image';
import { ReactElement } from 'react';
import Button from '@components/Button';

export const Service: React.FC = (): ReactElement => {
  return (
    <>
      <section>
        <div className={styles.section_inner}>
          <div className={styles.flexBox}>
            <div className={styles.flexBoxRight}>
              <div className={styles.serviceImg}>
                <div className={styles.serviceImgInner}>
                  <Image
                    src='/images/service_a.png'
                    alt='個人のお客様'
                    layout={'fill'}
                    objectFit={'contain'}
                  />
                </div>
              </div>
            </div>
            <div className={styles.flexBoxLeft}>
              <div className={styles.headline_box_center}>
                <h2 className={styles.headline}>
                  個人のお客様
                  <span>Individual Customer</span>
                </h2>
                <p>安心で豊かな未来のため、起こりうるリスクに備えます。</p>
                <div className={styles.mgTop}>
                  <Button
                    bgColor='primary'
                    size='normal'
                    types='link'
                    href='/service/individual'
                  >
                    詳しく見る
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.slantBg}>
        <div className={styles.section_inner}>
          <div className={styles.flexBoxChange}>
            <div className={styles.flexBox}>
              <div className={styles.flexBoxRight}>
                <div className={styles.serviceImg}>
                  <div className={styles.serviceImgInner}>
                    <Image
                      src='/images/service_b.png'
                      alt='法人のお客様'
                      layout={'fill'}
                      objectFit={'contain'}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.flexBoxLeft}>
                <div className={styles.headline_box_center}>
                  <h2 className={styles.headline}>
                    法人のお客様
                    <span>Corporate Customer</span>
                  </h2>
                  <p>
                    あらゆるリスクマネジメントのお手伝いをすることで、御社の発展繁栄に貢献します。
                  </p>
                  <div className={styles.mgTop}>
                    <Button
                      bgColor='primary'
                      size='normal'
                      types='link'
                      href='/service/corporation'
                    >
                      詳しく見る
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.section_inner}>
          <div className={styles.flexBox}>
            <div className={styles.flexBoxRight}>
              <div className={styles.serviceImg}>
                <div className={styles.serviceImgInner}>
                  <Image
                    src='/images/service_c.png'
                    alt='相続のご相談'
                    layout={'fill'}
                    objectFit={'contain'}
                  />
                </div>
              </div>
            </div>
            <div className={styles.flexBoxLeft}>
              <div className={styles.headline_box_center}>
                <h2 className={styles.headline}>
                  相続のご相談
                  <span>Inheritance</span>
                </h2>
                <p>
                  財産の全容を把握し、無駄のないスムーズな相続を実現します。
                </p>
                <div className={styles.mgTop}>
                  <Button
                    bgColor='primary'
                    size='normal'
                    types='link'
                    href='/service/inheritance'
                  >
                    詳しく見る
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
