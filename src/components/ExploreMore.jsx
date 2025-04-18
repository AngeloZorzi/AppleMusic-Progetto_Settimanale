import React from "react";

import { ChevronRight } from "lucide-react";

const exploreItems = [
  "Esplora per genere",
  "Decenni",
  "Attività e stati d’animo",
  "Worldwide",
  "Classifiche",
  "Audio spaziale",
  "Video musicali",
  "Nuovi artisti",
  "Hit del passato",
];

const ExploreMore = () => {
  return (
    <div className="explore-container">
      <h2 className="explore-title">Altro da esplorare</h2>
      <div className="explore-grid">
        {exploreItems.map((item, index) => (
          <div className="explore-card" key={index}>
            <span>{item}</span>
            <ChevronRight size={18} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMore;
