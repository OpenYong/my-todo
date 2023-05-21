import classes from "./TitleHeader.module.css";

interface TitleProps {
  title: string;
}

const TitleHeader = ({ title }: TitleProps) => {
  return (
    <div className={classes.title}>
      <h1 className={classes.title}>{title}</h1>
    </div>
  );
};

export default TitleHeader;
