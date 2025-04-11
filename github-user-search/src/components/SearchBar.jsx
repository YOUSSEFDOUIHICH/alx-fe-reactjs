function SearchBar() {
    return (
      <div className="my-4">
        <input
          type="text"
          placeholder="Search GitHub user..."
          className="border p-2 rounded w-full max-w-md mx-auto block"
        />
      </div>
    );
  }
  
  export default SearchBar;