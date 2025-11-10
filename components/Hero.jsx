import React from "react";
import { TiTick } from "react-icons/ti";
import { FaBookmark } from "react-icons/fa";
import { FaBookMedical } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const stats = [
  {
    Icon: TiTick,
    text: "Books completed",
    number: 12,
  },
  {
    Icon: FaBookmark,
    text: "Currently reading",
    number: 3,
  },
  {
    Icon: FaBookMedical,
    text: "Total pages read",
    number: 3240,
  },
  {
    Icon: FaStar,
    text: "Average rating",
    number: 4.2,
  },
];

const currentlyReading = [
  {
    title: "The Pragmatic Programmer",
    author: "Andy Hunt",
    status: "200 | 400",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    status: "Reading",
  },
];

const recentlyFinished = [
  {
    title: "1984",
    rating: 3,
    finishedDate: "sep 25 2025",
  },
  {
    title: "Brida",
    rating: 3,
    finishedDate: "sep 15 2025",
  },
  {
    title: "The Alchemist",
    rating: 5,
    finishedDate: "oct 5 2025",
  },
  {
    title: "400 days",
    rating: 4,
    finishedDate: "oct 1 2025",
  },
];

const wantToRead = [
  {
    title: "Never Finished",
    author: "David Goggins",
    genre: "Self help",
  },
  {
    title: "Meditations",
    author: "Marcus Aurelius",
    genre: "Philosophy",
  },
];

const StatsCard = ({ Icon, text, number }) => {
  return (
    <div className="space-y-2 p-5 border border-white shadow-2xl rounded-lg">
      <div className="flex gap-2 items-center">
        <Icon size={30} />
        <h3 className="font-bold">{text}</h3>
      </div>
      <h2 className="font-bold">{number}</h2>
    </div>
  );
};

const CurrentlyReadingCard = ({ title, author, status }) => {
  return (
    <div className="p-5 space-y-2 border border-white shadow-2xl rounded-md">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <h5 className="text-gray-600">by {author}</h5>
      <p className="text-gray-600">Status: {status}</p>
    </div>
  );
};

const RecentlyFinished = ({ title, rating, finishedDate }) => {
  return (
    <div className="p-5 space-y-2 border border-white shadow-2xl rounded-md">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <h5 className="text-gray-600">Rating: {rating}</h5>
      <p className="text-gray-600">Finished on: {finishedDate}</p>
    </div>
  );
};

const WantToRead = ({ title, author, genre }) => {
  return (
    <div className="p-5 space-y-2 border border-white shadow-2xl rounded-md">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <h5 className="text-gray-600">by {author}</h5>
      <p className="text-gray-600">Genre: {genre}</p>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="mt-10 flex flex-col mx-10">
      {/* Welcome */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Welcome back, Munnoi!</h1>
        <p className="text-gray-600">
          A reader lives a thousand lives before he dies.
        </p>
      </div>
      {/* Stats cards */}
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-2xl font-semibold text-left w-1/2 mb-2">
          YOUR STATS
        </h2>
        <div className="w-1/2 grid grid-cols-2 gap-3">
          {stats.map((item, idx) => (
            <StatsCard key={idx} {...item} />
          ))}
        </div>
      </div>
      {/* Currently reading cards */}
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-2xl font-semibold text-left w-1/2 mb-2">
          CURRENTLY READING
        </h2>
        <div className="w-1/2 grid grid-cols-2 gap-3">
          {currentlyReading.map((item, idx) => (
            <CurrentlyReadingCard key={idx} {...item} />
          ))}
        </div>
      </div>
      {/* Finished reading cards */}
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-2xl font-semibold text-left w-1/2 mb-2">
          RECENTLY FINISHED
        </h2>
        <div className="w-1/2 grid grid-cols-2 gap-3">
          {recentlyFinished.map((item, idx) => (
            <RecentlyFinished key={idx} {...item} />
          ))}
        </div>
      </div>
      {/* Want to read cards */}
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-2xl font-semibold text-left w-1/2 mb-2">
          WANT TO READ
        </h2>
        <div className="w-1/2 grid grid-cols-2 gap-3">
          {wantToRead.map((item, idx) => (
            <WantToRead key={idx} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
