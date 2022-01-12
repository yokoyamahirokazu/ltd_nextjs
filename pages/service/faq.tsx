import { NextPage } from 'next';

import styles from '@styles/components/Components.module.css';
import SeoContent from '@components/SeoContent';
import { client } from 'framework/client';
import ContactSection from '@components/ContactSection';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

interface faqItems {
  id?: string;
  question?: string;
  answer?: string;
}

type IndexProps = {
  faqItem: faqItems[];
};

const Index: NextPage<IndexProps> = (props) => {
  return (
    <>
      <SeoContent
        pageTitle='法人のお客様'
        pageDescription='遠隔接客サービスRURAの運営会社タイムリープ株式会社をご紹介します。'
      />
      <div className={`${styles.pageContent} ${styles.pageContentBgLight}`}>
        <section>
          <div className={styles.headline_box}>
            <h1 className={styles.headline}>
              よくあるご質問<span>FAQ</span>
            </h1>
          </div>
        </section>
        <section>
          <div className={styles.section_inner}>
            <Accordion>
              <ul className={styles.faqContent}>
                {props.faqItem.map((faq) => {
                  return (
                    <li key={faq.id}>
                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <h3>
                              <BsFillQuestionCircleFill />
                              {faq.question && faq.question}
                            </h3>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>{faq.answer && faq.answer}</p>
                        </AccordionItemPanel>
                      </AccordionItem>
                    </li>
                  );
                })}
              </ul>
            </Accordion>
          </div>
        </section>
      </div>
      <ContactSection downloadId='companyD' contactId='companyC' />
    </>
  );
};

export async function getStaticProps() {
  const faqData = await client.get({
    endpoint: 'faq',
    queries: { limit: 3000 },
  });

  return {
    props: {
      faqItem: faqData.contents,
    },
  };
}

export default Index;
