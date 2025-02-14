"use client";
import { useState } from "react";

import { ButtonLangImg } from "./button";
import BRFlag from "../../../../../../public/assets/flags/brazil-flag.png";
import ENFlag from "../../../../../../public/assets/flags/united-kingdom-flag.png";

export function SwitchLang() {
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
        showArrow={!selectedLang}
      />
      {selectedLang && (
        <div className="absolute top-full right-0 bg-support-800">
          <ButtonLangImg
            src={ENFlag}
            alt="bandeira do Reino Unido"
            title="EN"
            showArrow={false}
          />
        </div>
      )}
    </div>
  );
}
