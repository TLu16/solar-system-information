import { MOONS } from "./mock-moons";
import { Planet } from "./planet";

export const PLANETS: Planet[] = [
    { id: 1, 
        name: "Sonne", 
        diameter: 1392700, 
        url: "../assets/sonne.png",
        numberOfMoons: 99
    },
    { id: 2, 
        name: "Merkur", 
        diameter: 4879.4, 
        url: "../assets/Merkur.jpg",
        distanceToSun: 149.6,
        numberOfMoons: 99 
    },
    { id: 3, 
        name: "Venus", 
        diameter: 12104, 
        url: "../assets/Venus.jpg",
        distanceToSun: 108.2,
        numberOfMoons: 99 
    },
    { id: 4, 
        name: "Erde", 
        diameter: 12742, 
        url: "../assets/erde.png" ,
        distanceToSun: 149.6,
        numberOfMoons: 1,
        moons: [MOONS[0]] 
    },
    { id: 5, 
        name: "Mars", 
        diameter: 6779, 
        url: "../assets/mars.jpg",
        distanceToSun: 228,
        numberOfMoons: 2,
        moons: [MOONS[1], MOONS[2]] 
    },
    { id: 6, 
        name: "Jupiter", 
        diameter: 139820, 
        url: "../assets/jupiter.jpg",
        distanceToSun: 778.5,
        numberOfMoons: 99 
    },
    { id: 7, 
        name: "Saturn", 
        diameter: 116460, 
        url: "../assets/saturn.jpg",
        distanceToSun: 1432,
        numberOfMoons: 99 
    },
    { id: 8, 
        name: "Uranus", 
        diameter: 50724, 
        url: "../assets/uranus.png",
        distanceToSun: 2867,
        numberOfMoons: 99 
    },
    { id: 9, 
        name: "Neptun", 
        diameter: 499244, 
        url: "../assets/neptun.png",
        distanceToSun: 4515,
        numberOfMoons: 99
    },
]