"use client"

const Search = () => {
  return (
    <form className="border-2 rounded-full mt-4 border-slate-800 p-2 flex justify-between container mx-auto">
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search for a specific school or project"
        className="py-2 focus:outline-none focus:border-0 flex-1 px-4 placeholder:text-gray-300 text-base "
      />
      <button
        type="submit"
        className="bg-green-500 text-white text-center py-2 text-lg rounded-full font-medium w-1/4 min-w-[100px]"
      >
        Search
      </button>
    </form>
  );
};
export default Search;
