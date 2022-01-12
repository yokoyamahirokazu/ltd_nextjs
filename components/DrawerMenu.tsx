import Link from 'next/link';
import React from 'react';
import styles from '@styles/components/Header.module.css';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { IoIosMenu } from 'react-icons/io';
import Image from 'next/image';
import Button from '@components/Button';

const DrawerMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navItem = [
    { url: 'company/about', name: 'LTDについて' },
    { url: 'service/individual', name: '個人のお客様' },
    { url: 'service/corporation', name: '法人のお客様' },
    { url: 'service/inheritance', name: '相続のご相談' },

    { url: 'service/faq', name: 'よくあるご質問' },
    { url: 'news/page/1', name: '新着情報' },
    { url: 'career', name: '採用情報' },
  ];

  return (
    <>
      <button className={styles.drawerBtn} onClick={toggleDrawer}>
        <IoIosMenu />
      </button>
      <Drawer open={isOpen} onClose={toggleDrawer} direction='right'>
        <div className={styles.drawerInner}>
          <div className={styles.drawerInnerContent}>
            <Link href='/'>
              <a className={styles.drawerlogo}>
                <div className={styles.drawerlogoImg}>
                  <Image
                    src='/images/ltd_logo.svg'
                    alt='株式会社LTD'
                    layout={'fill'}
                    objectFit={'contain'}
                  />
                </div>
              </a>
            </Link>

            <ul>
              <li>
                <Link href={'/'}>
                  <a onClick={toggleDrawer}>ホーム</a>
                </Link>
              </li>

              {navItem.map((items) => (
                <li key={items.url}>
                  <Link href={`/${items.url}`}>
                    <a onClick={toggleDrawer}>{items.name}</a>
                  </Link>
                </li>
              ))}
            </ul>

            <div className={styles.drawerInnerBtn}>
              <div onClick={toggleDrawer}>
                <Button
                  bgColor='primary'
                  size='normal'
                  types='link'
                  href='/contact'
                  id='drawerC'
                  icon='contact'
                >
                  お問い合わせ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
