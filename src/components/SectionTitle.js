export default function SectionTitle(options) {
  return (
    <>
      <h2 className="section-title text-center mt-1 mb-3">{options.title}</h2>
      <p className="text-center">{options.description}</p>
    </>
  );
}
