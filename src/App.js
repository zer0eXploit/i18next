import React, { Suspense } from "react";

import { useTranslation, Trans } from "react-i18next";

import "./App.css";

import languages from "./config/languages";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <h1>{t("greeting")}</h1>
        <h2>{t("description.part1")}</h2>
        <h2>
          <Trans i18nKey="description.part2" />
        </h2>
        {Object.keys(languages).map((lan) => {
          return (
            <button key={lan} onClick={() => i18n.changeLanguage(lan)}>
              {languages[lan].displayName}
            </button>
          );
        })}
      </header>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="Please wait...">
      <App />
    </Suspense>
  );
}
