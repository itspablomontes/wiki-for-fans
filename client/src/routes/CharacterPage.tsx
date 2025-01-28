import CharacterCard from "../components/CharacterCard";
import CharacterDescription from "../components/CharacterDescription";
import SkeletonPage from "../components/SkeletonPage";
import api from "../services/api";
import { useState, useEffect } from "react";
import { Character } from "../types/CharacterType";
import { ApiCharacterResponseType } from "../types/ApiResponseType";
import { useParams } from "react-router-dom";

const CharacterPage = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character>();
  const [loading, setLoading] = useState(true);

  const getCharacter = async () => {
    if (!id) return;
    try {
      const response = await api.get<ApiCharacterResponseType>(
        `/characters/find/${id}`
      );
      setCharacter(response.data.data);
    } catch (error) {
      console.error("Error fetching character", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCharacter();
  });

  if (loading) return <SkeletonPage />;
  if (!character) return <div>Character not found</div>;

  return (
    <div className="py-4 px-6 grid gap-12 justify-center md:grid-cols-[2fr_3fr]">
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
