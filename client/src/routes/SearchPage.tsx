import api from "../services/api";
import { motion } from "motion/react";
import { SearchListItem } from "../components/SearchListItem";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SearchResult } from "../types/SearchResult";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const location = useLocation();

  const getSearchResults = async (query: string) => {
    try {
      const response = await api.get<SearchResult[]>(
        `/search?query=${encodeURIComponent(query)}`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error fetching characters: ", error);
    }
  };
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query") || "";
    if (query) {
      getSearchResults(query);
    }
  }, [location.search]);

  return (
    <div className="flex flex-col justify-center items-center py-8 px-6 gap-9">
      <motion.div
        className="font-bold text-3xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        SEARCH RESULTS
      </motion.div>
      <div className="grid md:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr_1fr_1fr] gap-6 wrap">
        {searchResults.map((result) => (
          <SearchListItem
            key={result.id}
            id={result.id}
            name={result.name}
            image_result={
              result.type === "character"
                ? result.profile_image_url
                : result.house_banner_url
            }
            result_endpoint={
              result.type === "character" ? "character" : "house"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
