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
    url: "../assets/Phobos_colour_2008.jpg", 
    motherPlanet: 'Mars',
    distanceToPlanet: 9377
},
{ 
    id: 3, 
    name: "Deimos", 
    diameter: 13, 
    url: "../assets/Deimos2.jpg", 
    motherPlanet: 'Mars',
    distanceToPlanet: 23436
}
]