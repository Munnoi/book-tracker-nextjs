import React from "react";

const books = [
  {
    title: "The Pragmatic Programmer",
    author: "Andy Hunt",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
  },
  {
    title: "Never Finished",
    author: "David Goggins",
  },
];

const BookCard = () => {
  return <div></div>;
};

const BooksPage = () => {
  return (
    <div className="bg-amber-200 h-fit mx-10">
      {/* Search */}
      <div className="mx-auto bg-red-400 w-1/2 mt-10 flex flex-col space-y-5 p-5">
        <h1 className="text-4xl text-white font-bold text-center">All Books</h1>
        <p className="text-center text-gray-600">
          You have 15 books in your library.
        </p>

        <input
          type="text"
          className="w-full mx-auto p-3 bg-black/80 border border-gray-400 placeholder:text-white/50 outline-none text-white/50 rounded-md"
          placeholder="Search books..."
        />
        <div className="space-x-3 text-center">
          <span className="bg-black/80 p-2 text-white rounded-md">All</span>
          <span className="bg-black/80 p-2 text-white rounded-md">Reading</span>
          <span className="bg-black/80 p-2 text-white rounded-md">
            Completed
          </span>
          <span className="bg-black/80 p-2 text-white rounded-md">
            Wishlist
          </span>
        </div>
      </div>
      {/* Books */}
    </div>
  );
};

export default BooksPage;
