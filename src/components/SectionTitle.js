export default function SectionTitle(props) {
  return (
    <>
      <h2 className="section-title text-center mt-1 mb-3">{props.title}</h2>
      <p className="text-center">{props.description}</p>
    </>
  );
}
