import classes from "./Button.module.css";

const Button = (props) => {
  const _s = " ";
  let classNames = classes.button + _s;
  if (props.dataType === "disabled") {
    classNames += "button-disabled" + _s;
  } else if (props.dataType === "default-invert") {
    classNames += "invert" + _s;
  } else if (props.dataType === "disabled-invert") {
    classNames += "button-disabled invert" + _s;
  }

  classNames += props.className;
  return (
    <>
      <button className={classNames} onClick={props.onClick}>
        {props.text}
      </button>
    </>
  );
};
export default Button;
