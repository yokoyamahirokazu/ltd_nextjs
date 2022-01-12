import styles from '@styles/components/Components.module.css';
import Button from '@components/Button';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

interface Article {
  id?: string;
  question?: string;
  answer?: string;
}

type FaqProps = {
  articles: Article[];
};
export const Faq: React.FC<FaqProps> = (props) => {
  return (
    <section>
      <div className={styles.section_inner}>
        <div className={styles.sectionFlex}>
          <div className={styles.sectionFlexLeft}>
            <h2 className={styles.headline}>
              よくあるご質問<span>FAQ</span>
            </h2>
          </div>
          <div className={styles.sectionFlexRight}>
            <Accordion>
              <ul className={styles.faqContent}>
                {props.articles.map((faq) => {
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

            <div className={styles.newx_list_link}>
              <Button
                bgColor='primary'
                size='normal'
                types='link'
                href='/service/faq'
              >
                全てのよくあるご質問を見る
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
