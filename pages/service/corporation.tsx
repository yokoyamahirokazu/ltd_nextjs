import { NextPage } from 'next';
import React from 'react';
import styles from '@styles/components/Components.module.css';
import ContactSection from '@components/ContactSection';
import Image from 'next/image';
import SeoContent from '@components/SeoContent';

const Index: NextPage = () => {
  return (
    <>
      <SeoContent
        pageTitle='法人のお客様'
        pageDescription='法人のお客様向けのサービスをご紹介します。事業補償対策、決算対策、役員様・従業員様の退職金コンサルティング、決算対策の提案、相続・事業承継対策・自社株評価、従業員様向けセミナー・個別相談などなんでもご相談ください。'
      />

      <div className={styles.pageContent}>
        <section>
          <div className={styles.headline_box}>
            <h1 className={styles.headline}>
              法人のお客様<span>Corporate Customer</span>
            </h1>
          </div>
        </section>
        <section>
          <div className={styles.section_inner}>
            <div className={styles.servicePageTitle}>
              <div className={styles.servicePageTitleRight}>
                <h2>
                  あらゆるリスクマネジメントの
                  <br />
                  お手伝いをすることで、
                  <br />
                  御社の発展繁栄に貢献します。
                </h2>
                <p>
                  株式会社LTDでは、法人のお客様にも各種サービスをご用意しております。
                  <br />
                  各サービスの詳細につきましては、お気軽にお問い合わせください。
                </p>
              </div>
              <div className={styles.servicePageTitleLeft}>
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
            </div>
          </div>
        </section>
        <section>
          <div className={styles.section_inner}>
            <div className={styles.numberContent}>
              <div className={styles.numberContentBox}>
                <h2>事業補償対策</h2>
                <p>リスクマネジメント</p>
              </div>
              <div className={styles.numberContentBox}>
                <h2>決算対策</h2>
                <p>決算対策の提案</p>
              </div>
              <div className={styles.numberContentBox}>
                <h2>役員様・従業員様の退職金コンサルティング</h2>
                <p>
                  会社状況に合わせた退職金準備の提案
                  <br />
                  事業承継等を考慮した役員退職金プランニング
                  <br />
                  福利厚生プラン
                </p>
              </div>
              <div className={styles.numberContentBox}>
                <h2>決算対策の提案</h2>
                <p>
                  毎年の決算月に合わせた加入保険一覧表の作成
                  <br />
                  会社の状況に合わせた資産運用・管理のアドバイス
                </p>
              </div>
              <div className={styles.numberContentBox}>
                <h2>相続・事業承継対策・自社株評価</h2>
                <p>
                  自社株評価、相続資産評価シミュレーション
                  <br />
                  会社状況に合わせた事業承継対策の提案
                </p>
              </div>
              <div className={styles.numberContentBox}>
                <h2>従業員様向けセミナー・個別相談</h2>
                <p>
                  従業員様向けライフプランニングの作成、保険・住宅ローン・年金相談、iDeco・つみたてNISAマネーセミナーの実施
                  <br />
                  メンタルヘルスサポート・個別相談
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
                    ・ライフプランニング表の作成
                    <br />
                    ・キャッシュフロー表に基づいた生命保険の相談
                    <br />
                    ・金融資産づくり相談
                    <br />
                    ・住宅ローン相談
                    <br />
                    ・年金の準備相談
                    <br />
                    ・年金資産
                    <br />
                    ・退職後生活設計相談
                  </p>
                  <h3>各種作成サービス</h3>
                  <p>
                    生命保険加入一覧表の作成など
                    <br />
                    なんでもご相談ください
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
