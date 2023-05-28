import React from 'react';

const trails = [
  { name: 'Slovenian Istria: Where are those waterfalls???', distance: '10.17mi', elevation: '1844f' },
  { name: 'Lipnik - Beautiful landscape', distance: '7.52mi', elevation: '1873f' },
  { name: 'Veli Badin - Ears of Istria', distance: '13.51mi', elevation: '2822f' },
  { name: 'Socerb-forest on the italian border', distance: '3.37mi', elevation: '164f' },
  { name: 'Socerb-Botaz-Malj kras', distance: '5.26mi', elevation: '541f' },
];

function TrailButton() {
  const generateTrail = () => {
    const randomTrail = trails[Math.floor(Math.random() * trails.length)];
    alert(`Trail Name: ${randomTrail.name}\nDistance: ${randomTrail.distance}\nElevation: ${randomTrail.elevation}`);
  };

  return (
    <button onClick={generateTrail}>
      Generate Trail
    </button>
  );
}

export default TrailButton;
