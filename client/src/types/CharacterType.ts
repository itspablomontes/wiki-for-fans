export interface Character {
  id?: number;
  name: string;
  born: string;
  died: string;
  house: string;
  titles: string[];
  affiliations: string[];
  phrase: string;
  description: string[];
  profile_image_url: string;
  created_at?: Date;
  updated_at?: Date;
}
