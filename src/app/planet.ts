import { Moon } from "./moon";

export interface Planet {
    id: number,
    name: string,
    diameter: number,
    url: string,
    moons?: Moon[]
}