import styles from '@styles/components/Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

export const Footer: React.FC = () => {
  const navItem = [
    { url: 'company/about', name: 'LTDについて' },
    { url: 'service/individual', name: '個人のお客様' },
    { url: 'service/corporation', name: '法人のお客様' },
    { url: 'service/inheritance', name: '相続のご相談' },
    { url: 'service/faq', name: 'よくあるご質問' },
  ];

  const thisYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerNavFlex}>
          <ul className={styles.footerNav}>
            <li>
              <Link href={'/'}>
                <a>ホーム</a>
              </Link>
            </li>

            {navItem.map((items) => (
              <li key={items.url}>
                <Link href={`/${items.url}`}>
                  <a>{items.name}</a>
                </Link>
              </li>
            ))}
          </ul>
          <ul className={styles.footerNav}>
            <li>
              <Link href={'/news/page/1'}>
                <a>新着情報</a>
              </Link>
              <ul>
                <li>
                  <Link
                    href='/news/category/[categoryId]/page/[id]'
                    as={'/news/category/newsrelease/page/1'}
                  >
                    <a>お知らせ</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href='/news/category/[categoryId]/page/[id]'
                    as={'/news/category/event/page/1'}
                  >
                    <a>メディア掲載</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul className={styles.footerNav}>
            <li>
              <Link href={'/career'}>
                <a>採用情報</a>
              </Link>
            </li>

            <li>
              <Link href={'/contact'}>
                <a>お問い合わせ</a>
              </Link>
            </li>
            <li>
              <Link href={'/company/privacy-policy'}>
                <a>プライバシーポリシー</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerLogo}>
          <div className={styles.footerLogoImg}>
            <Image
              src='/images/ltd_logo.svg'
              alt='株式会社LTD'
              layout={'fill'}
              objectFit={'contain'}
            />
          </div>
        </div>
      </div>
      <p className={styles.footerCopyRight}>
        Copyright© {thisYear} LTD Inc. All Rights Reserved.
      </p>
    </footer>
  );
};
