import React, { useState, useEffect } from "react";
import recipeData from "../data.json";
import { Link } from "react-router-dom";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load mock data
    setRecipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">{recipe.title}</h2>
            <p className="text-gray-600 mt-2">{recipe.summary}</p>
            <Link to={`/recipe/${recipe.id}`}>
            <button className="mt-4 inline-block text-sm text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition">
            View Recipe
            </button>
</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;