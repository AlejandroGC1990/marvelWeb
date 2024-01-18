"use client";

import { Character } from "@/app/types/marvels";
import { searchSuperCharacter } from "../../../utils/api";
import { useSearchParams } from "next/navigation";
import { FC, useEffect, useState } from "react";
import SuperCard from "@/app/ui/Components/SuperCard/SuperCard";
import SuperCardSkeleton from "@/app/ui/Components/Loading/SuperCardSkeleton";
import "./search.css";
import "../../ui/globals.css";

const SearchPage: FC = () => {
  const searchParams = useSearchParams();
  const querySearch = searchParams.get("query");
  const [character, setCharacter] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      function getRandomInt(count: number) {
        return Math.floor(Math.random() * count);
      }
      try {
        const random = getRandomInt(2);
        if(random === 1){
          console.log("ERROR1523")
          throw new Error()
        }
        const data = await searchSuperCharacter(querySearch);
        setCharacter(data.results);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };

    if (querySearch) {
      fetchData();
    }
  }, [querySearch]);

  return (
    <div className="container">
      <h1 className="green-text">
        Search for <span>"{querySearch}"</span>
      </h1>
      {isLoading ? (
        <div>
          <SuperCardSkeleton />
          <SuperCardSkeleton />
          <SuperCardSkeleton />
          <SuperCardSkeleton />
          <SuperCardSkeleton />
          <SuperCardSkeleton />
        </div>
      ) : (
        <div className="super-card-container">
          {character.map((character) => (
            <SuperCard key={character.id} character={character} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
//1.05.23
