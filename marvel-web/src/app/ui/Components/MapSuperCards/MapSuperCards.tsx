"use client";
import React, { useEffect, useState } from "react";
import "./MapSuperCards.css";
import { getSuper } from "../../../../utils/api";
import SuperCard from "../SuperCard/SuperCard";
import ReactPaginate from "react-paginate";
import { Character } from "@/app/types/marvels";
import NotFound from "@/app/dashboard/notFound";
import SuperCardSkeleton from "../Loading/SuperCardSkeleton";

export default function MapSuperCard() {
  const [currentPage, setCurrentPage] = useState(0);
  const [heroes, setHeroes] = useState<Character[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [noResults, setNoResults] = useState<boolean>(false);

  const heroesPerPage = 12;
  const offSet = currentPage * heroesPerPage;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const data = await getSuper(offSet);
      const totalHeroes = data.total;
      const calculatedTotalPages = Math.ceil(totalHeroes / heroesPerPage);

      setHeroes(data.results);

      if (totalPages !== calculatedTotalPages) {
        setTotalPages(calculatedTotalPages);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [offSet, totalPages]);

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  const displayedHeroes = heroes.slice(0, heroesPerPage);

  return (
    <div className="container-map">
      {isLoading ? (
        <div className="container-map-skeletons">
          <SuperCardSkeleton />
          <SuperCardSkeleton />
          <SuperCardSkeleton />
          <SuperCardSkeleton />
          <SuperCardSkeleton />
          <SuperCardSkeleton />
        </div>
      ) : noResults ? (
        <NotFound />
      ) : (
        <div className="container-map-supercard">
          {displayedHeroes.map((character) => (
            <SuperCard key={character.id} character={character} />
          ))}
          <div className="container-pagination">
            <ReactPaginate
              pageCount={totalPages}
              pageRangeDisplayed={3}
              marginPagesDisplayed={1}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              activeClassName={"active"}
              forcePage={currentPage}
            />
          </div>
        </div>
      )}
    </div>
  );
}
