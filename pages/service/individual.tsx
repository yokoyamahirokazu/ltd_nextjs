import { NextPage } from 'next';
import React from 'react';
import styles from '@styles/components/Components.module.css';
import ContactSection from '@components/ContactSection';
import Image from 'next/image';
import SeoContent from '@components/SeoContent';
import {
  FaBabyCarriage,
  FaHome,
  FaUserFriends,
  FaYenSign,
  FaChartBar,
} from 'react-icons/fa';

const Index: NextPage = () => {
  return (
    <>
      <SeoContent
        pageTitle='個人のお客様'
        pageDescription='個人のお客様向けのサービスをご紹介します。ご結婚やお子様の誕生など家族が増える、住宅の購入で住宅ローンを借りる、定年退職後のリタイアメントプランを考えたい、退職金の効率的な運用方法を考えたい、ライフプランを考慮した生命保険、金融資産ポートフォリオを考えたい方におすすめです。'
      />

      <div className={styles.pageContent}>
        <section>
          <div className={styles.headline_box}>
            <h1 className={styles.headline}>
              個人のお客様<span>Individual Customer</span>
            </h1>
          </div>
        </section>
        <section>
          <div className={styles.section_inner}>
            <div className={styles.servicePageTitle}>
              <div className={styles.servicePageTitleRight}>
                <h2>
                  <span>生命保険・損害保険のご相談</span>
                  安心で豊かな未来のため、
                  <br />
                  起こりうるリスクに備えます
                </h2>
                <p>
                  二人に一人ががんに罹患する時代。今は早期発見し治療して治す時代。
                  <br />
                  豪雨災害や交通事故のようにいつ何時災害や事故に遭遇するか分からない時代。
                  <br />
                  自転車事故においても、被害者だけでなく加害者になってしまう可能性もある時代。
                  <br />
                  日常生活だけでも避けきれないたくさんの危険に囲まれている私たちは、常にリスクに対しての準備が必要です。
                </p>
              </div>
              <div className={styles.servicePageTitleLeft}>
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
            </div>
          </div>
        </section>
        <section>
          <div className={styles.section_inner_padding}>
            <div className={styles.width540Box}>
              <h2>
                <span>ライフプラン・リタイアメントプラン</span>
                健全な家計を実現し、
                <br />
                夢を叶えるお手伝いをさせて頂きます
              </h2>
              <p>
                ひとりひとりの生き方や家族構成などによって必要な資金も、資金が必要な時期も異なります。
                <br />
                いつごろ、何のために、いくらのお金が必要で、そのためにいつからどうやって準備するかは、貯蓄などの資産の状況によって変わってきます。
                <br />
                <br />
                人生の夢を叶えながら、将来にわたって赤字に陥らない健全な家計を実現するためには、10年単位の長期的な視野に立って家計の収支を見ておく必要があります。
                <br />
                また、リタイア後のライフスタイルを考えたり、ライフワークを見つけることなどに加え、望む人生を過ごすためには、どのくらいお金が必要になるか、そのためにどのような準備をすればよいかを考える必要があります。
              </p>
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
                  <FaBabyCarriage />
                  ご結婚やお子様の誕生など家族が増える
                </p>
                <p>
                  <FaHome />
                  住宅の購入で住宅ローンを借りる
                </p>
                <p>
                  <FaUserFriends />
                  定年退職後のリタイアメントプランを考えたい
                </p>
                <p>
                  <FaYenSign />
                  退職金の効率的な運用方法を考えたい
                </p>
                <p>
                  <FaChartBar />
                  ライフプランを考慮した生命保険、金融資産ポートフォリオを考えたい
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
                    ファイナンシャルプランナーに無料相談できます。
                  </p>
                  <h3>ライフプランニング表の作成</h3>
                  <p>
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
                    ・生命保険加入一覧表の作成 <br />
                    ・エンディングノートの作成
                    <br />
                    などなんでもご相談ください。
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

        <section>
          <div className={styles.section_inner}>
            <h2>その他のサービス</h2>
            <div className={styles.recomendBox}>
              <p>・終活サービス（相続、葬儀、介護、仏壇、遺品整理、お墓）</p>
              <p>
                ・各種業者紹介サービス（不動産、お掃除屋、車屋、工務店など）
              </p>
              <p>LTDが自信を持ってご紹介できる業者を紹介いたします。</p>
            </div>
          </div>
        </section>
      </div>
      <ContactSection downloadId='companyD' contactId='companyC' />
    </>
  );
};

export default Index;
