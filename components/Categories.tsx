import { ICategory } from '@/types';
import styles from '@styles/components/Components.module.css';
import Link from 'next/link';

type CategoriesProps = {
  categories: ICategory[];
};

export const Categories: React.FC<CategoriesProps> = (props) => {
  return (
    <div className={styles.newsCategoryFlex}>
      <ul className={styles.newsCategoryList}>
        {props.categories.map((category) => {
          return (
            <li key={category.id}>
              <Link
                href='/news/category/[categoryId]/page/[id]'
                as={`/news/category/${category.id}/page/1`}
              >
                <a>{category.name}</a>
              </Link>
            </li>
          );
        })}
        <li>
          <Link href='/news/page/1' as='/news/page/1'>
            <a>ALL</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
