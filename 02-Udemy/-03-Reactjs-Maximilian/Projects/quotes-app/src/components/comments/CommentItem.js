import classes from './styles/CommentItem.module.css';

const CommentItem = (props) => {
  return (
    <li className={classes.item}>
      <p>{props.text}</p>
    </li>
  );
};

export default CommentItem;
