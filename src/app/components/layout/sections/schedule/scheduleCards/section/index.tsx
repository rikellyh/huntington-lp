interface CardSectionProps {
  sectionTitle: string;
}

export const CardSection = ({ sectionTitle }: CardSectionProps) => {
  return (
    <div className="w-full p-4 bg-brand-500 text-center font-light">
      <p>Sessão {sectionTitle}</p>
    </div>
  );
};
