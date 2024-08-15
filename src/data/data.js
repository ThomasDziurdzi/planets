// Importation des images
import mercury from '../assets/planet-mercury.svg';
import mercuryInternal from '../assets/planet-mercury-internal.svg';
import geologyMercury from '../assets/geology-mercury.png';

import venus from '../assets/planet-venus.svg';
import venusInternal from '../assets/planet-venus-internal.svg';
import geologyVenus from '../assets/geology-venus.png';

import earth from '../assets/planet-earth.svg';
import earthInternal from '../assets/planet-earth-internal.svg';
import geologyEarth from '../assets/geology-earth.png';

import mars from '../assets/planet-mars.svg';
import marsInternal from '../assets/planet-mars-internal.svg';
import geologyMars from '../assets/geology-mars.png';

import jupiter from '../assets/planet-jupiter.svg';
import jupiterInternal from '../assets/planet-jupiter-internal.svg';
import geologyJupiter from '../assets/geology-jupiter.png';

import saturn from '../assets/planet-saturn.svg';
import saturnInternal from '../assets/planet-saturn-internal.svg';
import geologySaturn from '../assets/geology-saturn.png';

import uranus from '../assets/planet-uranus.svg';
import uranusInternal from '../assets/planet-uranus-internal.svg';
import geologyUranus from '../assets/geology-uranus.png';

import neptune from '../assets/planet-neptune.svg';
import neptuneInternal from '../assets/planet-neptune-internal.svg';
import geologyNeptune from '../assets/geology-neptune.png';

// Définition des données des planètes
const planets = [
  {
    name: "Mercury",
    overview: {
      content: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
      source: "https://en.wikipedia.org/wiki/Mercury_(planet)"
    },
    structure: {
      content: "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
      source: "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure"
    },
    geology: {
      content: "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
      source: "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology"
    },
    rotation: "58.6 Days",
    revolution: "87.97 Days",
    radius: "2,439.7 KM",
    temperature: "430°c",
    images: {
      planet: mercury,
      internal: mercuryInternal,
      geology: geologyMercury
    }
  },
  {
    name: "Venus",
    overview: {
      content: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
      source: "https://en.wikipedia.org/wiki/Venus"
    },
    structure: {
      content: "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
      source: "https://en.wikipedia.org/wiki/Venus#Internal_structure"
    },
    geology: {
      content: "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
      source: "https://en.wikipedia.org/wiki/Venus#Surface_geology"
    },
    rotation: "243 Days",
    revolution: "224.7 Days",
    radius: "6,051.8 KM",
    temperature: "471°c",
    images: {
      planet: venus,
      internal: venusInternal,
      geology: geologyVenus
    }
  },
  {
    name: "Earth",
    overview: {
      content: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
      source: "https://en.wikipedia.org/wiki/Earth"
    },
    structure: {
      content: "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
      source: "https://en.wikipedia.org/wiki/Earth#Internal_structure"
    },
    geology: {
      content: "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
      source: "https://en.wikipedia.org/wiki/Earth#Surface"
    },
    rotation: "0.99 Days",
    revolution: "365.26 Days",
    radius: "6,371 KM",
    temperature: "16°c",
    images: {
      planet: earth,
      internal: earthInternal,
      geology: geologyEarth
    }
  },
  {
    name: "Mars",
    overview: {
      content: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the \"Red Planet\".",
      source: "https://en.wikipedia.org/wiki/Mars"
    },
    structure: {
      content: "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
      source: "https://en.wikipedia.org/wiki/Mars#Internal_structure"
    },
    geology: {
      content: "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
      source: "https://en.wikipedia.org/wiki/Mars#Surface_geology"
    },
    rotation: "1.03 Days",
    revolution: "1.88 Years",
    radius: "3,389.5 KM",
    temperature: "-28°c",
    images: {
      planet: mars,
      internal: marsInternal,
      geology: geologyMars
    }
  },
  {
    name: "Jupiter",
    overview: {
      content: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
      source: "https://en.wikipedia.org/wiki/Jupiter"
    },
    structure: {
      content: "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
      source: "https://en.wikipedia.org/wiki/Jupiter#Internal_structure"
    },
    geology: {
      content: "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
      source: "https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices"
    },
    rotation: "9.93 Hours",
    revolution: "11.86 Years",
    radius: "69,911 KM",
    temperature: "-108°c",
    images: {
      planet: jupiter,
      internal: jupiterInternal,
      geology: geologyJupiter
    }
  },
  {
    name: "Saturn",
    overview: {
      content: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has about one-eighth the average density of Earth, due to its low density.",
      source: "https://en.wikipedia.org/wiki/Saturn"
    },
    structure: {
      content: "Saturn's interior is composed of a rocky core surrounded by a mantle of liquid metallic hydrogen and helium. The planet's deep interior is thought to have a solid core that contains a significant amount of iron and other elements.",
      source: "https://en.wikipedia.org/wiki/Saturn#Internal_structure"
    },
    geology: {
      content: "Saturn's rings are composed mostly of ice particles, with a smaller amount of rocky debris and dust. The rings are divided into several main sections, named alphabetically in the order of their discovery.",
      source: "https://en.wikipedia.org/wiki/Saturn#Rings"
    },
    rotation: "10.7 Hours",
    revolution: "29.46 Years",
    radius: "58,232 KM",
    temperature: "-138°c",
    images: {
      planet: saturn,
      internal: saturnInternal,
      geology: geologySaturn
    }
  },
  {
    name: "Uranus",
    overview: {
      content: "Uranus is the seventh planet from the Sun. It is a gas giant with an average radius of about four times that of Earth. Uranus is unique among planets in the Solar System because its axis of rotation is tilted over almost 98 degrees from the plane of its orbit.",
      source: "https://en.wikipedia.org/wiki/Uranus"
    },
    structure: {
      content: "Uranus has a rocky core surrounded by a mantle of ice and gas. The core is believed to be composed of rock and metal, with a surrounding icy layer consisting of water, ammonia, and methane.",
      source: "https://en.wikipedia.org/wiki/Uranus#Internal_structure"
    },
    geology: {
      content: "Uranus has a complex ring system made up of narrow and faint rings composed primarily of dark, carbon-rich particles. The rings are relatively young, having been formed in the past billion years.",
      source: "https://en.wikipedia.org/wiki/Uranus#Rings"
    },
    rotation: "17.24 Hours",
    revolution: "84 Years",
    radius: "25,362 KM",
    temperature: "-197°c",
    images: {
      planet: uranus,
      internal: uranusInternal,
      geology: geologyUranus
    }
  },
  {
    name: "Neptune",
    overview: {
      content: "Neptune is the eighth and farthest planet from the Sun in the Solar System. It is a gas giant with an average radius about three times that of Earth. Neptune's atmosphere is primarily composed of hydrogen, helium, and methane.",
      source: "https://en.wikipedia.org/wiki/Neptune"
    },
    structure: {
      content: "Neptune's interior is composed of a small, dense core surrounded by a mantle of water, ammonia, and methane ices, and a thick outer atmosphere composed primarily of hydrogen and helium.",
      source: "https://en.wikipedia.org/wiki/Neptune#Internal_structure"
    },
    geology: {
      content: "Neptune's surface is characterized by its deep blue color due to the presence of methane in the atmosphere. The planet has the strongest winds in the Solar System and large storm systems.",
      source: "https://en.wikipedia.org/wiki/Neptune#Atmosphere"
    },
    rotation: "16.11 Hours",
    revolution: "164.8 Years",
    radius: "24,622 KM",
    temperature: "-201°c",
    images: {
      planet: neptune,
      internal: neptuneInternal,
      geology: geologyNeptune
    }
  }
];

export default planets;
