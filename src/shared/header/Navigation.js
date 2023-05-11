export default function Navigation() {
  const links = [
    { id: 1, link: "./", name: "Home", active: true },
    { id: 2, link: "pricing", name: "Pricing" },
    { id: 3, link: "support", name: "Support" },
    { id: 4, link: "contact-us", name: "Contact Us" },
    { id: 5, link: "about-us", name: "About Us" },
  ];

  function Anchor({ data }) {
    return (
      <li className="nav-item">
        <a
          href={data.link}
          className={data.active ? "nav-link active" : "nav-link"}
        >
          {data.name}
        </a>
      </li>
    );
  }

  return (
    <>
      <ul className="nav justify-content-end align-items-center">
        {links.map((l) => {
          return <Anchor key={l.id} data={l} />;
        })}
      </ul>
    </>
  );
}
