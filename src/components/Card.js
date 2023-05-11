export default function Card(data) {
  let classes = data.classes;
  return <div className={"card " + classes}></div>;
}
