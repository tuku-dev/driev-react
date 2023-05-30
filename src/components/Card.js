export default function Card(props) {
  let classes = props.classes;
  return <div className={"card " + classes}>{props.children}</div>;
}
