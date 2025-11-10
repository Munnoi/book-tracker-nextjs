import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return <nav>
    <h1>Book Tracker</h1>
    <div>
      <Link href={'/'}>Home</Link>
      <Link>All Books</Link>
      <Link>Add Book</Link>
      <CgProfile />
    </div>
  </nav>;
};

export default Navbar;
