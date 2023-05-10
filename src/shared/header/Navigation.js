export default function Navigation() {
  const links = [
    { link: "./", name: "Home", active: true },
    { link: "pricing", name: "Pricing" },
    { link: "support", name: "Support" },
    { link: "contact-us", name: "Contact Us" },
    { link: "about-us", name: "About Us" },
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
        <Anchor data={links[0]} />
        <Anchor data={links[1]} />
        <Anchor data={links[2]} />
        <Anchor data={links[3]} />
        <Anchor data={links[4]} />
      </ul>
    </>
  );
}
