import Link from "next/link";

interface ButtonRedirectProps {
  href: string;
  className: string;
  text: string;
}

export const ButtonRedirect = ({
  href,
  className,
  text,
}: ButtonRedirectProps) => {
  return (
    <Link href={href} className={`${className} font-semibold text-center`}>
      {text}
    </Link>
  );
};
