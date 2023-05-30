import "./Button.css";

const Button = (props) => {
  const _s = " ";
  let classNames = "button" + _s;
  if (props.dataType === "disabled") {
    classNames += "button-disabled" + _s;
  } else if (props.dataType === "default-invert") {
    classNames += "invert" + _s;
  } else if (props.dataType === "disabled-invert") {
    classNames += "button-disabled invert" + _s;
  } else {
    classNames += "button-default" + _s;
  }

  classNames += props.className;
  return (
    <button className={classNames} onClick={props.onClick}>
      {props.text}
    </button>
  );
};
export default Button;
