import { NextPage } from 'next';
import {
  Hero,
  Newsindex,
  Service,
  WebInsurance,
  About,
  Faq,
} from '@components';

import ContactSection from '@components/ContactSection';
import SeoContent from '@components/SeoContent';
import { IBlog, ICategory, IPopularArticles } from '@/types';
import { client } from 'framework/client';

interface faqItems {
  id?: string;
  question?: string;
  answer?: string;
}
type IndexProps = {
  currentPage: number;
  blogs: IBlog[];
  categories: ICategory[];
  popularArticles: IPopularArticles;
  pager: [];
  blogItem: IBlog[];
  faqItem: faqItems[];
};

const Index: NextPage<IndexProps> = (props) => {
  return (
    <>
      <SeoContent />
      <Hero />
      <About />
      <Newsindex articles={props.blogItem} />
      <Service />
      <WebInsurance />
      <Faq articles={props.faqItem} />
      <ContactSection downloadId='indexD1' contactId='indexC1' />
    </>
  );
};

export async function getStaticProps() {
  const blogData = await client.get({
    endpoint: 'blog',
    queries: { limit: 5 },
  });
  const faqData = await client.get({
    endpoint: 'faq',
    queries: { limit: 5 },
  });
  const categoryData = await client.get({ endpoint: 'categories' });

  return {
    props: {
      blogItem: blogData.contents,
      cateoryItem: categoryData.contents,
      faqItem: faqData.contents,
    },
  };
}

export default Index;
