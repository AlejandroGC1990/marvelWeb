'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, KeyboardEvent, useState } from "react";
import "./Navbar.css";

const Navbar: FC = ({}) => {
  const router = useRouter();
  const [ querySearch, setQuerySearch] = useState<string>('');

  const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter' && querySearch.trim() !== '') {
      setQuerySearch('');
      router.push(`/dashboard/search?query=${querySearch}`);
    }
  }
  
  return (
    <div className="navbar-container">
      <Link href="/" className="navbar-title">
        <p>Navbar - Marvel Gate</p>
      </Link>
      <div className="navbar-input">
        <input
          value={querySearch}
          type="text"
          placeholder="Search your super..."
          onChange={(e) => setQuerySearch(e.target.value)}
          onKeyDown={handleSearch}
        />
      </div>
    </div>
  );
};

export default Navbar;