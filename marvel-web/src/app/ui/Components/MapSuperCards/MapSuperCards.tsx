'use client';
import React, { useEffect, useState } from "react";
import "./MapSuperCards.css";
import { getSuper } from "../../../../utils/api";
import SuperCard from "../SuperCard/SuperCard";
import ReactPaginate from "react-paginate";
import { Character } from "@/app/types/marvels";

export default function MapSuperCard() {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [heroes, setHeroes] = useState<Character[]>([]);

  const heroesPerPage = 10;
  const offSet = currentPage * heroesPerPage;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSuper(offSet);
      const totalHeroes = data.total;
      const calculatedTotalPages = Math.ceil(totalHeroes / heroesPerPage);
      setHeroes(data.results);

      if(totalPages !== calculatedTotalPages) {
        setTotalPages(calculatedTotalPages);
      }
    };

    fetchData();
  }, [offSet]);

  const handlePageClick = (data: { selected: number}) => {
    setCurrentPage(data.selected);
  };

  const displayedHeroes = heroes.slice(0, heroesPerPage);

  return (
    <div className="container-map-supercard">
      {displayedHeroes.map((character) => (
        <SuperCard key={character.id} character={character} />
      ))}

      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={3} 
        marginPagesDisplayed={1} 
        onPageChange={handlePageClick} 
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}