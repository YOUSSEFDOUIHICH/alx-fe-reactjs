import { useState } from "react";
import { fetchAdvancedUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const data = await fetchAdvancedUsers(username, location, minRepos);
      setUsers(data.items);
    } catch (err) {
      setError(true);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <form
        onSubmit={handleSearch}
        className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-4"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded px-4 py-2 w-full"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded px-4 py-2 w-full"
        />
        <input
          type="number"
          placeholder="Min Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border rounded px-4 py-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
        >
          Search
        </button>
      </form>

      <div className="mt-6">
        {loading && <p className="text-center text-gray-600">Loading...</p>}
        {error && (
          <p className="text-center text-red-500">
            Looks like we cant find the user
          </p>
        )}
        {users.length > 0 && (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {users.map((user) => (
              <li
                key={user.id}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h2 className="text-lg font-bold">{user.login}</h2>
                    <a
                      href={user.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;