import Link from 'next/link';
import styles from '@styles/components/Header.module.css';
import Button from '@components/Button';
import TopButton from '@components/TopButton';
import DrawerMenu from '@components/DrawerMenu';
import { useRouter } from 'next/router';
import React, { useCallback, useState, useEffect } from 'react';
import Image from 'next/image';

export const Header: React.FC = () => {
  const router = useRouter();

  const navItem = [
    { url: 'company/about', name: 'LTDについて' },
    { url: 'service/individual', name: '個人のお客様' },
    { url: 'service/corporation', name: '法人のお客様' },
    { url: 'service/inheritance', name: '相続のご相談' },
    { url: 'service/faq', name: 'よくあるご質問' },
    { url: 'news/page/1', name: '新着情報' },
    { url: 'career', name: '採用情報' },
  ];
  const [isHeaderShown, setIsHeaderClass] = useState(true);
  const [lastPosition, setLastPosition] = useState(0);
  const headerHeight = 0;

  const scrollEvent = useCallback(() => {
    const offset = window.pageYOffset;

    if (offset > headerHeight) {
      setIsHeaderClass(false);
    } else {
      setIsHeaderClass(true);
    }

    setLastPosition(offset);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastPosition]);

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);

    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, [scrollEvent]);

  return (
    <>
      <div className={router.pathname == '/' ? styles.index : styles.other}>
        <header
          className={
            isHeaderShown == true
              ? styles.header
              : `${styles.headerFixed} ${styles.header}`
          }
        >
          <div className={styles.logo}>
            <Link href='/'>
              <a>
                <div className={styles.logoImg}>
                  <Image
                    src={
                      router.pathname == '/'
                        ? '/images/ltd_logo_white.svg'
                        : '/images/ltd_logo.svg'
                    }
                    alt='株式会社LTD'
                    layout={'fill'}
                    objectFit={'contain'}
                  />
                </div>
              </a>
            </Link>
          </div>
          <div className={styles.headerRight}>
            <nav className={styles.header_nav}>
              <ul>
                <li>
                  <Link href={'/'}>
                    <a>ホーム</a>
                  </Link>
                </li>
                {navItem.map((navContent) => (
                  <li key={navContent.name}>
                    <Link href={`/${navContent.url}`} as={`/${navContent.url}`}>
                      {navContent.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <Button
              bgColor='primary'
              size={isHeaderShown == true ? 'normal' : 'headerSmall'}
              types='link'
              href='/contact'
              icon='contact'
            >
              お問い合わせ
            </Button>
          </div>
          <DrawerMenu />
        </header>
      </div>
      <TopButton />
    </>
  );
};
