"use client";
import React, { useState } from "react";
import { IoBookOutline, IoSearchOutline } from "react-icons/io5";
import { FaStar, FaEdit, FaTrash, FaCheckCircle } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";

const books = [
  {
    id: 1,
    title: "The Pragmatic Programmer",
    author: "Andy Hunt",
    status: "reading",
    rating: 0,
    genre: "Technology",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    status: "reading",
    rating: 0,
    genre: "Self Help",
  },
  {
    id: 3,
    title: "Never Finished",
    author: "David Goggins",
    status: "wishlist",
    rating: 0,
    genre: "Self Help",
  },
  {
    id: 4,
    title: "1984",
    author: "George Orwell",
    status: "completed",
    rating: 4,
    genre: "Fiction",
  },
  {
    id: 5,
    title: "The Alchemist",
    author: "Paulo Coelho",
    status: "completed",
    rating: 5,
    genre: "Fiction",
  },
  {
    id: 6,
    title: "Meditations",
    author: "Marcus Aurelius",
    status: "wishlist",
    rating: 0,
    genre: "Philosophy",
  },
];

const filters = [
  { id: "all", label: "All" },
  { id: "reading", label: "Reading" },
  { id: "completed", label: "Completed" },
  { id: "wishlist", label: "Wishlist" },
];

const statusColors = {
  reading: "from-accent to-accent-light",
  completed: "from-emerald to-emerald/70",
  wishlist: "from-amber to-amber-light",
};

const statusLabels = {
  reading: "Reading",
  completed: "Completed",
  wishlist: "Wishlist",
};

const BookCard = ({ title, author, status, rating, genre, delay }) => {
  return (
    <div 
      className="glass-card p-6 group animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex gap-4">
        {/* Book Cover Placeholder */}
        <div className={`w-20 h-28 rounded-lg bg-gradient-to-br ${statusColors[status]} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
          <IoBookOutline size={32} className="text-white/80" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-semibold text-white text-lg leading-tight group-hover:text-accent-light transition-colors">
              {title}
            </h3>
            {status === "completed" && (
              <FaCheckCircle className="text-emerald flex-shrink-0" size={16} />
            )}
          </div>
          
          <p className="text-text-secondary text-sm mb-2">by {author}</p>
          
          {/* Rating (for completed books) */}
          {status === "completed" && rating > 0 && (
            <div className="flex gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  size={12}
                  className={star <= rating ? "text-amber" : "text-white/20"}
                />
              ))}
            </div>
          )}
          
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${statusColors[status]} text-white`}>
              {statusLabels[status]}
            </span>
            <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-white/10 text-text-secondary">
              {genre}
            </span>
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex gap-2 mt-4 pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="flex-1 py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-text-secondary hover:text-white text-sm font-medium transition-all flex items-center justify-center gap-2">
          <FaEdit size={12} />
          Edit
        </button>
        <button className="flex-1 py-2 px-3 rounded-lg bg-white/5 hover:bg-rose/20 text-text-secondary hover:text-rose text-sm font-medium transition-all flex items-center justify-center gap-2">
          <FaTrash size={12} />
          Delete
        </button>
      </div>
    </div>
  );
};

const BooksPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = books.filter((book) => {
    const matchesFilter = activeFilter === "all" || book.status === activeFilter;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="py-10 px-4 md:px-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-light text-sm font-medium mb-4">
          <HiOutlineSparkles className="animate-pulse" />
          Your Collection
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">All Books</span>
        </h1>
        <p className="text-text-secondary text-lg">
          You have <span className="text-white font-semibold">{books.length} books</span> in your library
        </p>
      </div>

      {/* Search and Filters */}
      <div className="glass-card p-6 mb-8 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
        {/* Search Input */}
        <div className="relative mb-4">
          <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-3 pl-12 pr-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-text-muted focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all"
            placeholder="Search books by title or author..."
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeFilter === filter.id
                  ? "bg-gradient-to-r from-accent to-accent-light text-white shadow-lg"
                  : "bg-white/5 text-text-secondary hover:bg-white/10 hover:text-white"
                }
              `}
            >
              {filter.label}
              {filter.id !== "all" && (
                <span className="ml-2 px-1.5 py-0.5 rounded-full bg-white/20 text-xs">
                  {books.filter(b => b.status === filter.id).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Books Grid */}
      {filteredBooks.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBooks.map((book, idx) => (
            <BookCard key={book.id} {...book} delay={150 + idx * 50} />
          ))}
        </div>
      ) : (
        <div className="glass-card p-12 text-center animate-fade-in-up">
          <IoBookOutline size={48} className="mx-auto text-text-muted mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No books found</h3>
          <p className="text-text-secondary">
            Try adjusting your search or filter to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  );
};

export default BooksPage;
