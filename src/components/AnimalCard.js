import Button from "./Button";
import classes from "./AnimalCard.module.css";

const AnimalCard = (props) => {
  return (
    <div className={classes.AnimalCard}>
      <img src={props.imgsrc} />
      <Button
        style={classes.addlikebutton}
        click={props.func}
        text="add like"
      />
      <Button
        style={classes.deletebutton}
        click={props.func2}
        text="remove card"
      />
      <p className={classes.thumb}>👍</p>
      <h2>{props.name}</h2>
      <p className={classes.count}>{props.count}</p>
    </div>
  );
};

export default AnimalCard;
