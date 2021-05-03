import { IAuthor, ICategory } from '../interfaces/interface';

type MetaProps = {
  category?: ICategory;
  author?: IAuthor;
  createdAt?: string;
};

export const Meta: React.FC<MetaProps> = (props) => {
  return (
    <div>
      {props.category && <span className="category">{props.category.name}</span>}
      <div className="meta">
        <span className="timestamp">
          <img src="/images/icon_clock.svg" alt="clock" />
        </span>
        {props.author && (
          <span className="author">
            <img src="/images/icon_author.svg" alt="author" />
            {props.author.name}
          </span>
        )}
      </div>
    </div>
  );
};