"use client";
import React, { useState } from "react";
import { IoBookOutline, IoAddCircle } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";
import { useRouter } from "next/navigation";

const genres = [
  "Fiction",
  "Non-Fiction",
  "Self Help",
  "Technology",
  "Philosophy",
  "Science",
  "Biography",
  "History",
  "Fantasy",
  "Romance",
];

const statuses = [
  { id: "wishlist", label: "Want to Read", color: "from-amber to-amber-light" },
  { id: "reading", label: "Currently Reading", color: "from-accent to-accent-light" },
  { id: "completed", label: "Completed", color: "from-emerald to-emerald/70" },
];

const AddBookPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    status: "wishlist",
    rating: 0,
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRating = (rating) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Book added:", formData);
    router.push("/books");
  };

  return (
    <div className="py-10 px-4 md:px-10 max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-light text-sm font-medium mb-4">
          <HiOutlineSparkles className="animate-pulse" />
          New Addition
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Add a Book</span>
        </h1>
        <p className="text-text-secondary text-lg">
          Add a new book to your personal library
        </p>
      </div>

      {/* Form Card */}
      <form onSubmit={handleSubmit} className="glass-card p-8 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
        <div className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Book Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full py-3 px-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-text-muted focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all"
              placeholder="Enter book title..."
            />
          </div>

          {/* Author */}
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Author *
            </label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
              className="w-full py-3 px-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-text-muted focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all"
              placeholder="Enter author name..."
            />
          </div>

          {/* Genre */}
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Genre
            </label>
            <select
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              className="w-full py-3 px-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all appearance-none cursor-pointer"
            >
              <option value="" className="bg-bg-end">Select a genre...</option>
              {genres.map((genre) => (
                <option key={genre} value={genre} className="bg-bg-end">
                  {genre}
                </option>
              ))}
            </select>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Reading Status
            </label>
            <div className="flex flex-wrap gap-3">
              {statuses.map((status) => (
                <button
                  key={status.id}
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, status: status.id }))}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${formData.status === status.id
                      ? `bg-gradient-to-r ${status.color} text-white shadow-lg`
                      : "bg-white/5 text-text-secondary hover:bg-white/10 hover:text-white"
                    }
                  `}
                >
                  {status.label}
                </button>
              ))}
            </div>
          </div>

          {/* Rating (only for completed) */}
          {formData.status === "completed" && (
            <div className="animate-fade-in-up">
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Your Rating
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRating(star)}
                    className="p-2 rounded-lg hover:bg-white/10 transition-all group"
                  >
                    <FaStar
                      size={28}
                      className={`transition-all duration-200 ${
                        star <= formData.rating 
                          ? "text-amber" 
                          : "text-white/20 group-hover:text-amber/50"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Notes
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={4}
              className="w-full py-3 px-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-text-muted focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all resize-none"
              placeholder="Add any notes about this book..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-accent to-amber text-white font-semibold text-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg hover:shadow-accent/30"
          >
            <IoAddCircle size={24} className="group-hover:rotate-90 transition-transform duration-300" />
            Add to Library
          </button>
        </div>
      </form>

      {/* Preview Card */}
      {formData.title && (
        <div className="mt-8 animate-fade-in-up">
          <h3 className="text-lg font-semibold text-white mb-4">Preview</h3>
          <div className="glass-card p-6">
            <div className="flex gap-4">
              <div className={`w-20 h-28 rounded-lg bg-gradient-to-br ${statuses.find(s => s.id === formData.status)?.color || 'from-accent to-amber'} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <IoBookOutline size={32} className="text-white/80" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white text-lg">{formData.title}</h3>
                {formData.author && (
                  <p className="text-text-secondary text-sm">by {formData.author}</p>
                )}
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${statuses.find(s => s.id === formData.status)?.color} text-white`}>
                    {statuses.find(s => s.id === formData.status)?.label}
                  </span>
                  {formData.genre && (
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-white/10 text-text-secondary">
                      {formData.genre}
                    </span>
                  )}
                </div>
                {formData.status === "completed" && formData.rating > 0 && (
                  <div className="flex gap-1 mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        size={12}
                        className={star <= formData.rating ? "text-amber" : "text-white/20"}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddBookPage;
