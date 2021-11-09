import { NextPage } from 'next';
import { BreadCrumb, Categories, Latest, Loader, Meta, Post, Share, Toc } from '@components';
import { IBlog, ICategory, ITag } from '@/types';
import { useDraft } from '@hooks';
import styles from '@styles/Detail.module.scss';
import { getContents } from '@blog';
import { Tags } from '@components/Tags';

type DraftProps = {
  blogs: IBlog[];
  categories: ICategory[];
  tags: ITag[];
};

const Draft: NextPage<DraftProps> = (props) => {
  const { data } = useDraft();

  return (
    <div className={styles.divider}>
      <article className={styles.article}>
        <div className={styles.ogimageWrap}>
          <picture>
            <source
              media="(min-width: 1160px)"
              type="image/webp"
              srcSet={`${data.blog.ogimage.url}?w=820&fm=webp, ${data.blog.ogimage.url}?w=1640&fm=webp 2x`}
            />
            <source
              media="(min-width: 820px)"
              type="image/webp"
              srcSet={`${data.blog.ogimage.url}?w=740&fm=webp, ${data.blog.ogimage.url}?w=1480&fm=webp 2x`}
            />
            <source
              media="(min-width: 768px)"
              type="image/webp"
              srcSet={`${data.blog.ogimage.url}?w=728&fm=webp, ${data.blog.ogimage.url}?w=1456&fm=webp 2x`}
            />
            <source
              media="(min-width: 768px)"
              type="image/webp"
              srcSet={`${data.blog.ogimage.url}?w=375&fm=webp, ${data.blog.ogimage.url}?w=750&fm=webp 2x`}
            />
            <img src={`${data.blog.ogimage?.url}?w=820&q=100`} className={styles.ogimage} />
          </picture>
        </div>
        <BreadCrumb category={data.blog.category} />
        <div className={styles.main}>
          <Share id={data.blog.id} title={data.blog.title} />
          <div className={styles.container}>
            <h1 className={styles.title}>{data.blog.title}</h1>
            <Meta
              category={data.blog.category}
              createdAt={data.blog.createdAt}
              tags={data.blog.tag}
            />
            {data.blog.toc_visible && <Toc toc={data.toc} />}
            <Post body={data.body} />
          </div>
        </div>
      </article>
      <aside className="aside">
        <Categories categories={props.categories} />
        <Tags tags={props.tags} />
        <Latest blogs={props.blogs} />
      </aside>
    </div>
  );
};

export async function getStaticProps() {
  const { blogs, categories, tags } = await getContents();
  return {
    props: {
      blogs,
      categories,

      tags,
    },
  };
}
export default Draft;
