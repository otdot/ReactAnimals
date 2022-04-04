import Button from "./Button";
import classes from "./AnimalCard.module.css";

const AnimalCard = (props) => {
  return (
    <div data-name={props.name} className={classes.AnimalCard}>
      <img src={props.imgsrc} />
      <Button
        style={classes.addlikebutton}
        click={props.func}
        text="add like"
      />
      <p>👍</p>
      <Button
        style={classes.deletebutton}
        click={props.func2}
        text="remove card"
      />
      <h2>{props.name}</h2>
      <p className={classes.count}>{props.count}</p>
    </div>
  );
};

export default AnimalCard;
