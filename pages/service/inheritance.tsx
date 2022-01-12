import { NextPage } from 'next';
import React from 'react';
import styles from '@styles/components/Components.module.css';
import ContactSection from '@components/ContactSection';
import Image from 'next/image';
import SeoContent from '@components/SeoContent';
import {
  FaChild,
  FaRegLightbulb,
  FaDivide,
  FaSearchDollar,
} from 'react-icons/fa';

const Index: NextPage = () => {
  return (
    <>
      <SeoContent
        pageTitle='相続のご相談'
        pageDescription='相続をご相談したいのお客様向けのサービスをご紹介します。 子供たちへの資産の贈与について有効な方法を考えたい、財産の全容を把握したい。相続税がかかるかどうか確認したい、相続税を考慮した効果的な相続対策を考えたい、法定相続割合や遺留分を考慮した、もめない相続財産の配分を考えたい方におすすめです。'
      />

      <div className={styles.pageContent}>
        <section>
          <div className={styles.headline_box}>
            <h1 className={styles.headline}>
              相続のご相談<span>Inheritance</span>
            </h1>
          </div>
        </section>
        <section>
          <div className={styles.section_inner}>
            <div className={styles.servicePageTitle}>
              <div className={styles.servicePageTitleRight}>
                <h2>
                  財産の全容を把握し、
                  <br /> 無駄のないスムーズな相続を実現します
                </h2>
                <p>
                  相続税を払う、払わないにかかわらず、すべての人に起こりうるのが相続です。
                  <br />
                  期限内に財産の全容を把握して適切に判断し、なおかつそれを相続する人全員が納得できるように分割しなければなりません。
                  <br />
                  遺された家族にとって、それなりに負荷が大きいのが相続の手続きと言えます。
                  遺す側は、少しでもスムーズに引き継げるよう、日頃から財産を把握、整理しておくことが大切です
                  <br /> <br />
                  また、相続税の基礎控除の額が大幅に引き下げられ、以前より多くの人にとって、相続税が身近な問題になりました。
                  <br />
                  相続税がかかるのか、またどのくらいの額になるのかを事前に知っておくことは、大切なことです。
                </p>
              </div>
              <div className={styles.servicePageTitleLeft}>
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
            </div>
          </div>
        </section>

        <section>
          <div className={styles.section_inner}>
            <div className={styles.recomendBoxInner}>
              <div className={styles.recomendBox}>
                <div className={styles.recomendBoxTitle}>
                  <p>
                    こんな方に
                    <br />
                    おすすめです
                  </p>
                </div>
                <p>
                  <FaChild />
                  子供たちへの資産の贈与について有効な方法を考えたい
                </p>
                <p>
                  <FaSearchDollar />
                  財産の全容を把握したい。相続税がかかるかどうか確認したい
                </p>
                <p>
                  <FaRegLightbulb />
                  相続税を考慮した効果的な相続対策を考えたい
                </p>
                <p>
                  <FaDivide />
                  法定相続割合や遺留分を考慮した、もめない相続財産の配分を考えたい
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.section_inner}>
            <div className={styles.stepsContent}>
              <div className={styles.flexBox}>
                <div className={styles.flexBoxLeft}>
                  <h2>サービスの流れ</h2>
                  <p>
                    保険のこと、家計のこと、資産運用のこと。
                    <br />
                    ファイナンシャルプランナーに無料相談できます。
                  </p>
                  <h3>相続シミュレーションの作成</h3>
                  <p>
                    ・相続財産の分割アドバイス <br />
                    ・一次、二次相続を考慮した贈与プランアドバイス <br />
                    ・相続を円満に迎えるためのアドバイス <br />
                    ・事業承継のアドバイス
                    <br />
                    ・弁護士、司法書士、税理士など士業のご紹介
                  </p>
                  <h3>各種作成サービス</h3>
                  <p>
                    ・生命保険加入一覧表の作成
                    <br />
                    ・エンディングノートの作成
                  </p>
                </div>
                <div className={styles.flexBoxRight}>
                  <div className={styles.steps}>
                    <h3>無料相談予約</h3>
                    <p>
                      Webサイトまたはお電話で、ご都合のよい日程とご希望の相談方法でご予約ください。
                    </p>

                    <h3>相談開始</h3>
                    <p>
                      ご予約日時になりましたらご希望の相談方法（ご来店・訪問・オンライン）で相談を開始します。
                    </p>

                    <h3>ヒアリング</h3>
                    <p>
                      保険の見直しや新規加入などの質問はもちろん、将来のことなど、気になることはなんでもお聞きください。
                    </p>
                    <h3>ご提案</h3>
                    <p>
                      ヒアリングした内容をもとに、お客さまに合った保険の提案をします。加入したいと思われた保険商品があれば、ご契約へ進みます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {}
      <ContactSection downloadId='companyD' contactId='companyC' />
    </>
  );
};

export default Index;
