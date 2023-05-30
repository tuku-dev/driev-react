import classes from "./Wrapper.module.css";

const Wrapper = (props) => {
  return (
    <>
      <div className={classes.wrapper + " container " + props.className}>
        {props.children}
      </div>
    </>
  );
};
export default Wrapper;
