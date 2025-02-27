interface SponsorsTitleProps {
  title: string;
  className?: string;
}

export default function SponsorsTitle({
  title,
  className,
}: SponsorsTitleProps) {
  return (
    <>
      <h1 className={`text-2xl text-support-100 ${className}`}>{title}</h1>
      <div className="gradient-border-bottom-sponsors w-full h-1"></div>
    </>
  );
}
