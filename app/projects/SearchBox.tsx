

const SearchBox = () => {
  return <div className="w-full bg-slate-300 rounded-lg px-2 py-3">
    <p className="text-lg uppercase text-slate-800">Custom Search</p>
    <form className="mt-3 w-full pr-2">
      <input type="text" className="bg-white w-full rounded focus:outline-none p-2 placeholder:text-slate-500 textslate-600 text-md" id="search" name="search" />
      <button type="submit" className="w-full rounded mt-2 bg-green-500 text-white py-2 text-lg md:text-2xl font-medium">Search</button>
    </form>
  </div>;
};
export default SearchBox;
