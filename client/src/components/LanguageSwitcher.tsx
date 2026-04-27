import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setLang("en")}
        className={lang === "en" ? "font-bold" : ""}
      >
        EN
      </button>

      <button
        onClick={() => setLang("fr")}
        className={lang === "fr" ? "font-bold" : ""}
      >
        FR
      </button>
    </div>
  );
}