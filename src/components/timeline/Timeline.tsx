import React from 'react';
import TimelineItem from './TimelineItem';

const educationPath = [
  {
    year: "2023 - 2025",
    title: "BTS SIO",
    subtitle: "Services Informatiques aux Organisations option Solutions d'Infrastructure, Systèmes et Réseaux (SISR)",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPvwaQhwI2N62mu6ymJ4rTxpu7FUBm4--PbA&s",
    website: "https://www.iscb.fr/"
  },
  {
    year: "2020 - 2023",
    title: "BAC PRO SN",
    subtitle: "Systèmes Numériques option Audiovisuel, réseau et équipements domestiques (ARED)",
    logo: "https://medias.uxco.com/img/2020/03/17/lycee-prive-la-providence-lycee-des-metiers-des-services-a-la-personne-et-des-organisations.png",
    website: "https://www.laprovidence-blois.fr/"
  },
  {
    year: "2019 - 2020",
    title: "Collège Hubert Fillay",
    subtitle: "J'ai eu mon diplome national du brevet (DNB)",
    logo: "https://college-hubert-fillay.fr/wp-content/uploads/2022/05/hubert_fillay-logo.png",
    website: "https://college-hubert-fillay.fr/"
  }
];

export default function Timeline() {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <div className="space-y-24">
        {educationPath.map((item, index) => (
          <TimelineItem
            key={index}
            index={index}
            year={item.year}
            title={item.title}
            subtitle={item.subtitle}
            logo={item.logo}
            website={item.website}
            isLast={index === educationPath.length - 1}
          />
        ))}
      </div>
    </div>
  );
}