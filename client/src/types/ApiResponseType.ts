import { Character } from "./CharacterType";
import { House } from "./HouseType";
export interface ApiCharacterResponseType {
  message: string;
  data: Character;
}

export interface ApiHouseResponseType {
  message: string;
  data: House;
}
