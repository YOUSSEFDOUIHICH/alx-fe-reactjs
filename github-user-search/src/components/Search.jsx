import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError(false);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 text-center">
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="p-2 border rounded w-full"
        />
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-gray-600">Loading...</p>}
      {error && <p className="text-red-500">Looks like we cant find the user</p>}
      {userData && (
        <div className="bg-white shadow p-4 rounded text-left">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h2 className="text-xl font-bold text-center mt-2">{userData.name || userData.login}</h2>
          <p className="text-center">
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Visit Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default Search;