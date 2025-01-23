import { Character } from "../types/CharacterType";
import { House } from "../types/HouseType";

export interface SearchCharacter extends Character {
  type: "character";
}

export interface SearchHouse extends House {
  type: "house";
}

export type SearchResult = SearchCharacter | SearchHouse;
