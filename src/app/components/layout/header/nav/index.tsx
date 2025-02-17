import Link from "next/link";

export const Nav = () => {
  const navLinks = [
    { href: "#sobre", text: "SOBRE" },
    { href: "#speakers", text: "SPEAKERS" },
    { href: "#agenda", text: "AGENDA CIENTÍFICA" },
    { href: "#comissao", text: "COMISSÃO CIENTÍFICA" },
    { href: "#patrocinadores", text: "PATROCINADORES" },
    { href: "#faq", text: "FAQ" },
  ];

  return (
    <nav>
      <ul className="flex items-center flex-row gap-[30px] font-light">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              style={{
                textRendering: "geometricPrecision",
              }}
              className="font-light hover:font-semibold hover:scale-90 transition-all duration-200"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
