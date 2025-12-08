"use client";
import React from "react";
import { TiTick } from "react-icons/ti";
import { FaBookmark, FaBookMedical, FaStar, FaHeart } from "react-icons/fa";
import { IoBookOutline, IoSparkles } from "react-icons/io5";
import { HiOutlineSparkles } from "react-icons/hi";

const stats = [
  {
    Icon: TiTick,
    text: "Books completed",
    number: 12,
    gradient: "from-emerald to-emerald/50",
    iconBg: "bg-emerald/20",
  },
  {
    Icon: FaBookmark,
    text: "Currently reading",
    number: 3,
    gradient: "from-accent to-accent-light",
    iconBg: "bg-accent/20",
  },
  {
    Icon: FaBookMedical,
    text: "Total pages read",
    number: 3240,
    gradient: "from-amber to-amber-light",
    iconBg: "bg-amber/20",
  },
  {
    Icon: FaStar,
    text: "Average rating",
    number: 4.2,
    gradient: "from-rose to-rose/70",
    iconBg: "bg-rose/20",
  },
];

const currentlyReading = [
  {
    title: "The Pragmatic Programmer",
    author: "Andy Hunt",
    progress: 50,
    pages: "200 / 400",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    progress: 30,
    pages: "90 / 300",
  },
];

const recentlyFinished = [
  {
    title: "1984",
    rating: 3,
    finishedDate: "Sep 25, 2025",
  },
  {
    title: "Brida",
    rating: 3,
    finishedDate: "Sep 15, 2025",
  },
  {
    title: "The Alchemist",
    rating: 5,
    finishedDate: "Oct 5, 2025",
  },
  {
    title: "400 Days",
    rating: 4,
    finishedDate: "Oct 1, 2025",
  },
];

const wantToRead = [
  {
    title: "Never Finished",
    author: "David Goggins",
    genre: "Self Help",
  },
  {
    title: "Meditations",
    author: "Marcus Aurelius",
    genre: "Philosophy",
  },
];

const StatsCard = ({ Icon, text, number, gradient, iconBg, delay }) => {
  return (
    <div 
      className="glass-card p-6 group animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${iconBg} group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={24} className={`text-white`} />
        </div>
        <HiOutlineSparkles className="text-text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <h2 className={`text-3xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-1`}>
        {typeof number === 'number' && number > 100 ? number.toLocaleString() : number}
      </h2>
      <p className="text-text-secondary text-sm">{text}</p>
    </div>
  );
};

const CurrentlyReadingCard = ({ title, author, progress, pages, delay }) => {
  return (
    <div 
      className="glass-card p-6 group animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex gap-4">
        {/* Book Cover Placeholder */}
        <div className="w-16 h-24 rounded-lg bg-gradient-to-br from-accent/30 to-amber/30 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
          <IoBookOutline size={28} className="text-white/60" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-white text-lg truncate group-hover:text-accent-light transition-colors">
            {title}
          </h3>
          <p className="text-text-secondary text-sm mb-3">by {author}</p>
          
          {/* Progress Bar */}
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full progress-bar rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-text-muted text-xs mt-2">{pages} pages</p>
        </div>
      </div>
    </div>
  );
};

const RecentlyFinishedCard = ({ title, rating, finishedDate, delay }) => {
  return (
    <div 
      className="glass-card p-6 group animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold text-white text-lg group-hover:text-accent-light transition-colors">
          {title}
        </h3>
        <div className="p-1.5 rounded-full bg-emerald/20">
          <TiTick size={16} className="text-emerald" />
        </div>
      </div>
      
      {/* Star Rating */}
      <div className="flex gap-1 mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            size={16}
            className={`transition-colors duration-300 ${
              star <= rating ? "text-amber" : "text-white/20"
            }`}
          />
        ))}
      </div>
      
      <p className="text-text-muted text-sm">Finished on {finishedDate}</p>
    </div>
  );
};

const WantToReadCard = ({ title, author, genre, delay }) => {
  return (
    <div 
      className="glass-card p-6 group animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-white text-lg group-hover:text-accent-light transition-colors">
            {title}
          </h3>
          <p className="text-text-secondary text-sm">by {author}</p>
        </div>
        <FaHeart 
          size={18} 
          className="text-rose/50 group-hover:text-rose group-hover:scale-110 transition-all duration-300 cursor-pointer" 
        />
      </div>
      
      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent-light">
        {genre}
      </span>
    </div>
  );
};

const SectionTitle = ({ children, icon: Icon }) => (
  <div className="flex items-center gap-3 mb-6">
    {Icon && (
      <div className="p-2 rounded-lg bg-accent/20">
        <Icon size={20} className="text-accent-light" />
      </div>
    )}
    <h2 className="text-xl font-bold text-white">{children}</h2>
  </div>
);

const Hero = () => {
  return (
    <div className="py-10 px-4 md:px-10 max-w-7xl mx-auto">
      {/* Welcome Section */}
      <div className="text-center mb-12 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-light text-sm font-medium mb-4">
          <IoSparkles className="animate-pulse" />
          Welcome back
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Munnoi's</span>
          <span className="text-white"> Library</span>
        </h1>
        <p className="text-text-secondary text-lg max-w-md mx-auto">
          "A reader lives a thousand lives before he dies. The man who never reads lives only one."
        </p>
      </div>

      {/* Stats Cards */}
      <section className="mb-12">
        <SectionTitle icon={HiOutlineSparkles}>Your Stats</SectionTitle>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((item, idx) => (
            <StatsCard key={idx} {...item} delay={idx * 100} />
          ))}
        </div>
      </section>

      {/* Currently Reading */}
      <section className="mb-12">
        <SectionTitle icon={FaBookmark}>Currently Reading</SectionTitle>
        <div className="grid md:grid-cols-2 gap-4">
          {currentlyReading.map((item, idx) => (
            <CurrentlyReadingCard key={idx} {...item} delay={idx * 100} />
          ))}
        </div>
      </section>

      {/* Recently Finished */}
      <section className="mb-12">
        <SectionTitle icon={TiTick}>Recently Finished</SectionTitle>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {recentlyFinished.map((item, idx) => (
            <RecentlyFinishedCard key={idx} {...item} delay={idx * 100} />
          ))}
        </div>
      </section>

      {/* Want to Read */}
      <section className="mb-12">
        <SectionTitle icon={FaHeart}>Want to Read</SectionTitle>
        <div className="grid md:grid-cols-2 gap-4">
          {wantToRead.map((item, idx) => (
            <WantToReadCard key={idx} {...item} delay={idx * 100} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
