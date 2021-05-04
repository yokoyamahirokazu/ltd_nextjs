import { GetStaticPropsContext, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { Banner } from '../../../../components/Banner';
import { BreadCrumb } from '../../../../components/BreadCrumb';
import { Categories } from '../../../../components/Categories';
import { Loader } from '../../../../components/Loader';
import { Meta } from '../../../../components/Meta';
import { Pager } from '../../../../components/Pager';
import { PopularArticle } from '../../../../components/PopularArticle';
import { Search } from '../../../../components/Search';
import {
  IBanner,
  IBlog,
  ICategory,
  IPopularArticles,
  MicroCmsResponse,
} from '../../../../interfaces/interface';
import {
  getBanners,
  getBlogsByCategory,
  getCategories,
  getPopularArticles,
} from '../../../../utils/BlogService';

type PageProps = {
  blogs: MicroCmsResponse<IBlog>;
  categories: MicroCmsResponse<ICategory>;
  popularArticles: IPopularArticles;
  banner: IBanner;
  pager: [];
  selectedCategory: ICategory;
};

const Page: NextPage<PageProps> = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />
  }
  return (
    <div className="divider">
      <div className="container">
        <BreadCrumb category={props.selectedCategory} />
        {props.blogs.contents.length === 0 && <>記事がありません</>}
        <ul>
          {props.blogs.contents.map((blog) => {
            return (
              <li key={blog.id} className="list">
                <Link href="/[blogId]" as={`/${blog.id}`}>
                  <a className="link">
                    <>
                      {blog.ogimage && (
                        <picture>
                          <img src={`${blog.ogimage.url}?w=670`} className="ogimage lazyload" />
                        </picture>
                      )}
                      <dl className="content">
                        <dt className="title">{blog.title}</dt>
                        <dd>
                          <Meta
                            createdAt={blog.createdAt}
                            author={blog.writer}
                            category={blog.category}
                          />
                        </dd>
                      </dl>
                    </>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
        {props.blogs.contents.length > 0 && (
          <ul className="pager">
            <Pager pager={props.pager} selectedCategory={props.selectedCategory} />
          </ul>
        )}
      </div>
      <aside className="aside">
        <Banner banner={props.banner} />
        <Search />
        <Categories categories={props.categories.contents} />
        <PopularArticle blogs={props.popularArticles.articles} />
      </aside>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [], fallback: true
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const page: any = context.params?.id || '1';
  const categoryId = context.params?.categoryId;

  const limit: number = 10;
  const blogs = await getBlogsByCategory(limit, page, categoryId as string);
  const categories = await getCategories();
  const popularArticles = await getPopularArticles();
  const selectedCategory =
    categoryId !== undefined
      ? categories.contents.find((content) => content.id === categoryId)
      : undefined;

  const banner = await getBanners();

  return {
    props: {
      blogs: blogs,
      categories: categories,
      popularArticles: popularArticles,
      banner: banner,
      pager: [...Array(Math.ceil(blogs.totalCount / 10)).keys()],
      selectedCategory: selectedCategory,
    },
  };
}
export default Page;
