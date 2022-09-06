import classes from "./TitleHeader.module.css";

const TitleHeader: React.FC<{ title: string }> = (props) => {
  return (
    <div className={classes.title}>
      <h1 className={classes.title}>{props.title}</h1>
    </div>
  );
};

export default TitleHeader;
