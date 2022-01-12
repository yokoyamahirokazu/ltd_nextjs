import { NextPage } from 'next';
import styles from '@styles/components/Components.module.css';
import SeoContent from '@components/SeoContent';
import { client } from 'framework/client';
import ContactSection from '@components/ContactSection';
import Button from '@components/Button';

interface careerItems {
  id?: string;
  title?: string;
  status?: string;
  business?: string;
  place?: string;
  requirements?: string;
  salary?: string;
  time?: string;
  holiday?: string;
  welfare?: string;
  education?: string;
}

type IndexProps = {
  careerItem: careerItems[];
};

const Index: NextPage<IndexProps> = (props) => {
  return (
    <>
      <SeoContent
        pageTitle='採用情報'
        pageDescription='株式会社LTDの採用情報のページです。'
      />
      <div className={`${styles.pageContent} ${styles.pageContentBgLight}`}>
        <section>
          <div className={styles.headline_box}>
            <h1 className={styles.headline}>
              採用情報<span>Career Opportunities</span>
            </h1>
          </div>
        </section>
        {props.careerItem.length === 0 && (
          <>
            <section>
              <div className={styles.section_inner}>
                <div className={styles.whiteBase}>
                  <p>現在、採用情報はございません。</p>
                </div>
              </div>
            </section>
          </>
        )}
        {props.careerItem.length !== 0 && (
          <>
            <section>
              <div className={styles.section_inner}>
                <div className={styles.whiteBase}>
                  <div className={styles.headline_box_center}>
                    <h2 className={styles.headline}>募集要項</h2>
                  </div>
                  {props.careerItem.map((career) => {
                    return (
                      <table key={career.id}>
                        <tr>
                          <th>募集職種</th>
                          <td>{career.title && career.title}</td>
                        </tr>
                        <tr>
                          <th>雇用形態</th>
                          <td>{career.status && career.status}</td>
                        </tr>
                        <tr>
                          <th>業務内容</th>
                          <td>{career.business && career.business}</td>
                        </tr>
                        <tr>
                          <th>勤務場所</th>
                          <td>{career.place && career.place}</td>
                        </tr>
                        <tr>
                          <th>応募資格</th>
                          <td>{career.requirements && career.requirements}</td>
                        </tr>
                        <tr>
                          <th>給与</th>
                          <td>{career.salary && career.salary}</td>
                        </tr>
                        <tr>
                          <th>勤務時間</th>
                          <td>{career.time && career.time}</td>
                        </tr>
                        <tr>
                          <th>休暇</th>
                          <td>{career.holiday && career.holiday}</td>
                        </tr>
                        <tr>
                          <th>待遇・福利厚生</th>
                          <td>{career.welfare && career.welfare}</td>
                        </tr>
                        <tr>
                          <th>教育制度</th>
                          <td>{career.education && career.education}</td>
                        </tr>
                      </table>
                    );
                  })}
                  <div className={styles.btnCenter}>
                    <Button
                      bgColor='primary'
                      size='normal'
                      types='link'
                      href='/contact/career'
                      icon='contact'
                    >
                      この求人について問い合わせる
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
      <ContactSection downloadId='companyD' contactId='companyC' />
    </>
  );
};

export async function getStaticProps() {
  const careerData = await client.get({
    endpoint: 'career',
    queries: { limit: 3000 },
  });

  return {
    props: {
      careerItem: careerData.contents,
    },
  };
}

export default Index;
