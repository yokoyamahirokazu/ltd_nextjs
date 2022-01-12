import styles from '@styles/components/Components.module.css';
import { ReactElement } from 'react';
import Button from '@components/Button';

export const About: React.FC = (): ReactElement => {
  return (
    <>
      <section>
        <div className={styles.section_inner}>
          <div className={styles.headline_box_center}>
            <h2 className={styles.headline}>
              LTDが目指すのは
              <br />
              保険屋さんらしくない保険屋さん
            </h2>
            <p>保険だけではないお客様とのパートナーシップ</p>
            <div className={styles.mgTop}>
              <Button
                bgColor='primary'
                size='normal'
                types='link'
                href='/company/about'
              >
                LTDについて
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
