import { Link } from 'react-router-dom';
import classes from './styles/QuoteItem.module.css';

const QuoteItem = (props) => {
  // const params = useParams()
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link to={`/quotes/${props.id}`} className='btn'>
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
