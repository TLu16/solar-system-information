import { PLANETS } from "./mock-planets";
import { Moon } from "./moon";


export const MOONS: Moon[] = [{ 
    id: 1, 
    name: "Mond", 
    diameter: 3478.8, 
    url: "../assets/erd-mond-m.png", 
    motherPlanet: 'Erde',
    distanceToPlanet: 384400
},
{ 
    id: 2, 
    name: "Phobos", 
    diameter: 25, 
    url: "../assets/Phobos.png", 
    motherPlanet: 'Mars',
    distanceToPlanet: 9377
},
{ 
    id: 3, 
    name: "Deimos", 
    diameter: 13, 
    url: "../assets/Deimos.png", 
    motherPlanet: 'Mars',
    distanceToPlanet: 23436
},
{ 
    id: 4, 
    name: "Miranda", 
    diameter: 470, 
    url: "../assets/Miranda.png", 
    motherPlanet: 'Uranus',
    distanceToPlanet: 129900
},
{ 
    id: 5, 
    name: "Ariel", 
    diameter: 1160, 
    url: "../assets/Ariel.png", 
    motherPlanet: 'Uranus',
    distanceToPlanet: 190900
},
{ 
    id: 6, 
    name: "Umbriel", 
    diameter: 1169.4, 
    url: "../assets/Umbriel.png", 
    motherPlanet: 'Uranus',
    distanceToPlanet: 266000
},
{ 
    id: 7, 
    name: "Titania", 
    diameter: 1577.8, 
    url: "../assets/Titania.png", 
    motherPlanet: 'Uranus',
    distanceToPlanet: 436300
},
{ 
    id: 8, 
    name: "Oberon", 
    diameter: 1523, 
    url: "../assets/Oberon.png", 
    motherPlanet: 'Uranus',
    distanceToPlanet: 583500
}
]