import Button from "./Button";
import classes from "./AnimalCard.module.css";

const AnimalCard = (props) => {
  return (
    <div className={classes.AnimalCard}>
      <img src={props.imgsrc} />
      <Button text="add like" />
      <h2>{props.name}</h2>
      <p>{props.count}</p>
    </div>
  );
};

export default AnimalCard;
