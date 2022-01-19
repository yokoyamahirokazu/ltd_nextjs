import { GetStaticPropsContext, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { BreadCrumb, Categories, Loader, Meta, Pager } from '@components';
import { IBanner, IBlog, ICategory, IPopularArticles, ITag } from '@/types';
import { getBlogsByFilter, getContents } from '@blog';
import styles from '@styles/components/Components.module.css';
import ContactSection from '@components/ContactSection';
import Image from 'next/image';

import SeoContent from '@components/SeoContent';
type PageProps = {
  currentPage: number;
  blogs: IBlog[];
  categories: ICategory[];
  popularArticles: IPopularArticles;
  banner: IBanner;
  pager: [];
  tags: ITag[];
};

const Page: NextPage<PageProps> = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
      <SeoContent
        pageTitle='新着情報'
        pageDescription='株式会社LTDの新着情報をお届けします。'
        pageUrl={router.asPath}
      />
      <BreadCrumb />
      <div className={`${styles.pageContent} ${styles.pageContentBgLight}`}>
        <section>
          <div className={styles.headline_box}>
            <h1 className={styles.headline}>
              新着情報<span>What&apos;s New</span>
            </h1>
          </div>
        </section>
        <Categories categories={props.categories} />

        <div className={styles.newsListContent}>
          {props.blogs.length === 0 && <>記事がありません</>}
          <ul className={`${styles.news} ${styles.newsImages}`}>
            {props.blogs.map((blog) => {
              return (
                <li key={blog.id}>
                  <Link href='/news/[blogId]' as={`/news/${blog.id}`}>
                    <a>
                      {blog.ogimage ? (
                        <div className={styles.newsImagesBox}>
                          <Image
                            src={`${blog.ogimage.url}?w=670`}
                            alt={blog.title}
                            layout={'fill'}
                            objectFit={'cover'}
                          />
                        </div>
                      ) : (
                        <div className={styles.newsImagesBox}>
                          <Image
                            src='/images/og_image.png'
                            alt={blog.title}
                            layout={'fill'}
                            objectFit={'cover'}
                          />
                        </div>
                      )}

                      <div className={styles.newsImagesTxt}>
                        <h3>{blog.title}</h3>
                        <Meta
                          createdAt={blog.postDate}
                          category={blog.category}
                          tags={blog.tag}
                        />
                      </div>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
          {props.blogs.length > 0 && (
            <ul className='pager'>
              <Pager pager={props.pager} currentPage={props.currentPage} />
            </ul>
          )}
        </div>
        <ContactSection downloadId='newsD' contactId='newsC' />
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const limit: number = 12;
  const { pager } = await getBlogsByFilter(limit, 1);
  const paths = pager.map((page) => {
    return { params: { id: (page + 1).toString() } };
  });

  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const page: any = context.params?.id || '1';
  const { blogs, pager, categories, tags } = await getContents(page);

  return {
    props: {
      currentPage: parseInt(page),
      blogs,
      categories,
      pager,
      tags,
    },
  };
}
export default Page;
