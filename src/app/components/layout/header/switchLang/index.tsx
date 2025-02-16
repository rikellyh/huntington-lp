"use client";
import { useState } from "react";

import { ButtonLangImg } from "./button";
import BRFlag from "../../../../../../public/assets/flags/brazil-flag.png";
import ENFlag from "../../../../../../public/assets/flags/united-kingdom-flag.png";

export const SwitchLang = () => {
  const [selectedLang, setSelectedLang] = useState(false);

  const handleSelectLang = () => setSelectedLang(!selectedLang);

  return (
    <div
      onClick={handleSelectLang}
      className={`${selectedLang ? "bg-support-800" : "bg-support-700"}`}
    >
      <ButtonLangImg
        src={BRFlag}
        alt="bandeira do Brasil"
        title="PT"
        showArrow
      />
      {selectedLang && (
        <ButtonLangImg
          src={ENFlag}
          className="absolute z-10 bg-support-800"
          alt="bandeira do Reino Unido"
          title="EN"
          showArrow={false}
        />
      )}
    </div>
  );
};
