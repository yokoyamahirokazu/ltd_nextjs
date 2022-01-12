import { NextPage } from 'next';
import React from 'react';
import styles from '@styles/components/Components.module.css';
import ContactSection from '@components/ContactSection';
import Image from 'next/image';
import SeoContent from '@components/SeoContent';
import Iframe from 'react-iframe';

const Index: NextPage = () => {
  const companyOutline = [
    { item: '会社名', content: '株式会社LTD' },
    { item: '本社所在地', content: '〒720-0824 広島県福山市多治米町2-25-8' },
    { item: 'TEL', content: '084-959-4318' },
    { item: 'FAX', content: '084-959-4319' },
    { item: '創業', content: '2007年04月01日' },
    { item: '法人設立', content: '2017年05月08日' },
    { item: '代表取締役', content: '宇田 光美' },
    {
      item: '業務内容',
      content:
        '・生命保険の募集に関する業務\n・損害保険の代理業\n・ファイナンシャルプランニング業務\n・経営、労務、金融及び保険に関する総合コンサルタント',
    },
  ];

  return (
    <>
      <SeoContent
        pageTitle='LTDについて'
        pageDescription='株式会社LTDについてご紹介するページです。'
      />
      <div className={styles.pageContent}>
        <section>
          <div className={styles.headline_box}>
            <h1 className={styles.headline}>
              LTDについて<span>About Us</span>
            </h1>
          </div>
        </section>
        <section>
          <div className={styles.section_inner}>
            <div className={styles.vmv}>
              <div className={styles.vmvHeadline}>Vision</div>
              <p className={styles.vmvCopy}>
                広島県福山市になくてはならない最も選ばれる会社
                <br />
                〜保険は保険会社ではなく｢LTD｣で加入していると言ってもらえるように〜
              </p>
            </div>
            <div className={styles.vmv}>
              <div className={styles.vmvHeadline}>Mission</div>
              <p className={styles.vmvCopy}>
                我々の仕事はお客様に万が一が生じた時、経済的にお守りすることができる唯一の職業である。
                <br />
                故に使命感と誇りと喜びを持って、常に自身のスキルアップに努め1人でも多くの方の人生に寄り添いお守りしていく。
              </p>
            </div>
            <div className={styles.vmv}>
              <div className={styles.vmvHeadline}>Value</div>
              <p className={styles.vmvCopy}>
                広島県福山市になくてはならない最も選ばれる保険代理店を目指します。
                <br />
                保険代理店・保険コンサルタントの社会的地位向上に努めます。
                <br />
                「保険に差がつくワケがある」を徹底的に追求します。
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.section_inner}>
            <div className={styles.greeting}>
              <div className={styles.greetingCopy}>
                <h2>安心で豊かな未来創造業</h2>
                <p>
                  創業の精神である「貢献」を常に念頭に置き、企業理念「豊かさの追求」～LTDに関わるすべての方の豊かさを追求する～を実現するために我が社は存在しております。
                  <br />
                  理念にある「すべての方」とは、お客様はもちろんのこと、共に働く従業員やその家族、保険会社の方やお取引先様、地域の皆様のことです。
                  <br />
                  「豊かさ」とは、経済的、知識、情報の豊かさなど、そして何より「心の豊かさ」のことで、弊社で最も大切にしている価値観です。
                  <br />
                  従業員一同、会社を生涯成長の場と捉え、仕事を通して豊かな心を育み、その豊かな心を持って関わるすべての方に貢献して参ります。
                  <br />
                  我々は、お客様をお守りするために広島県福山市になくてはならない最も選ばれる会社を目指します。
                  <br />
                  弊社は損害保険・生命保険共に取り扱っておりますので、お客様に生じる可能性のある、あらゆるリスクから総合的にお守りさせて頂ければ幸せなことでございます。
                  <br />
                  これからも従業員一同、皆様のお役に立てるよう日々精進して参りますので、引き続きご愛顧の程よろしくお願い申し上げます。
                </p>
              </div>
              <div className={styles.greetingImg}>
                <div className={styles.imageCircle}>
                  <Image
                    src='/images/greetingImg.png'
                    alt='代表取締役 宇田光美'
                    layout={'fill'}
                    objectFit={'contain'}
                  />
                </div>
                <p>代表取締役 宇田光美</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.section_inner_padding}>
            <h2>会社概要</h2>
            <table>
              {companyOutline.map((items) => (
                <tr key={items.item}>
                  <th>{items.item}</th>
                  <td>{items.content}</td>
                </tr>
              ))}
            </table>
          </div>
        </section>
        <section>
          <div className={styles.section_inner}>
            <div className={styles.paddingBox}>
              <h2>アクセス</h2>
            </div>
            <Iframe
              url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13202.994338832672!2d133.37315430283266!3d34.46918046056501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355111fbab3aa255%3A0x9785a84bbf25235d!2z5qCq5byP5Lya56S-TFRE!5e0!3m2!1sja!2sjp!4v1641346220792!5m2!1sja!2sjp'
              width='100%'
              height='500px'
              id='myId'
              className='myClassname'
              position='relative'
              loading='lazy'
            />
          </div>
        </section>
      </div>
      {}
      <ContactSection downloadId='companyD' contactId='companyC' />
    </>
  );
};

export default Index;
