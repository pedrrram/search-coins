"use client";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Spinner from "./Spinner";

const SearchForm = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [isSearching, startTransition] = useTransition();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search || search.length > 50) {
      setError(true);
      return;
    }
    setError(false);
    startTransition(() => {
      router.push(`/coin/${search}`);
    });
  };

  return (
    <form className="space-y-8" onSubmit={handleSearch}>
      <div className="space-y-4 leading-8">
        <span className="block">Enter Symbol Name and Search:</span>
        <input
          type="text"
          className={`w-full py-3 px-5 rounded border ${
            error ? "border-rose-400" : "border-neutral-100"
          } placeholder:text-[#242424] focus:outline-none`}
          placeholder="Symbol Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <button
        className={`w-full text-white bg-[#0059FF] py-3 px-5 rounded h-14 leading-8 flex items-center justify-center disabled:opacity-80`}
        disabled={isSearching}
      >
        {isSearching ? <Spinner /> : "Search"}
      </button>
    </form>
  );
};

export default SearchForm;
