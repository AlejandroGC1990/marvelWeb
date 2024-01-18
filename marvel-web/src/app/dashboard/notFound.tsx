'use client';
import "../ui/error.css";
import Link from 'next/link';

const NotFound = () => {
    return (
      <div className="error-container">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <button>
        View <Link href="/">all posts</Link>
      </button>
    </div>
  )
}

export default NotFound;