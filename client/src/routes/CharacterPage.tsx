import CharacterCard from "../components/CharacterCard";
import CharacterDescription from "../components/CharacterDescription";
import api from "../services/api";
import { useState, useEffect } from "react";
import { Character } from "../types/CharacterType";
import { ApiResponseType } from "../types/ApiResponseType";
import { useParams } from "react-router-dom";

const CharacterPage = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getCharacter = async () => {
    if (!id) return;
    try {
      const response = await api.get<ApiResponseType>(
        `/characters/find-character/${id}`
      );
      setCharacter(response.data.data);
    } catch (error) {
      console.error("Error fetching character", error);
      setError("Failed to load character data");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCharacter();
  }, [id]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!character) return <div>Character Not Found</div>;

  return (
    <div className="py-8 px-6 grid gap-12 justify-center md:grid-cols-[2fr_3fr]">
      <CharacterCard
        name={character.name}
        born={character.born}
        died={character.died}
        house={character.house}
        titles={character.titles}
        affiliations={character.affiliations}
        phrase={character.phrase}
        profile_image_url={character.profile_image_url}
      />
      <CharacterDescription description={character.description} />
    </div>
  );
};

export default CharacterPage;
