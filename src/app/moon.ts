import { Planet } from "./planet";

export interface Moon {
    id: number,
    name: string,
    diameter: number,
    url: string,
    motherPlanet?: string
}