import { MOONS } from "./mock-moons";
import { Planet } from "./planet";

export const PLANETS: Planet[] = [
    { id: 1, 
        name: "Sonne", 
        diameter: 1392700, 
        url: "../assets/sonne.png",
        numberOfMoons: 0
    },
    { id: 2, 
        name: "Merkur", 
        diameter: 4879.4, 
        url: "../assets/Merkur.png",
        distanceToSun: 149.6,
        numberOfMoons: 0 
    },
    { id: 3, 
        name: "Venus", 
        diameter: 12104, 
        url: "../assets/venus.png",
        distanceToSun: 108.2,
        numberOfMoons: 0 
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
        url: "../assets/Mars1.png",
        distanceToSun: 228,
        numberOfMoons: 2,
        moons: [MOONS[1], MOONS[2]] 
    },
    { id: 6, 
        name: "Jupiter", 
        diameter: 139820, 
        url: "../assets/jupiter.png",
        distanceToSun: 778.5,
        numberOfMoons: 95 
    },
    { id: 7, 
        name: "Saturn", 
        diameter: 116460, 
        url: "../assets/saturn2.png",
        distanceToSun: 1432,
        numberOfMoons: 146 
    },
    { id: 8, 
        name: "Uranus", 
        diameter: 50724, 
        url: "../assets/uranus.png",
        distanceToSun: 2867,
        numberOfMoons: 28,
        moons: [MOONS[3], MOONS[4], MOONS[5], MOONS[6], MOONS[7]] 
    },
    { id: 9, 
        name: "Neptun", 
        diameter: 499244, 
        url: "../assets/neptun.png",
        distanceToSun: 4515,
        numberOfMoons: 16
    },
]