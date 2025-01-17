export interface House {
  id?: number;
  name: string;
  coat_of_arms: string;
  words: string;
  seat: string;
  region: string;
  head: string;
  notable_characters: string[];
  description: string[];
  house_banner_url: string;
  created_at: Date;
  updated_at: Date;
}
