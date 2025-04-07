import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import recipeData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipeData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <div className="text-center mt-10 text-gray-700">Recipe not found.</div>;

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <Link to="/" className="text-blue-600 hover:underline">&larr; Back to Home</Link>
      <div className="bg-white rounded-lg shadow-md p-6 mt-4">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-60 object-cover rounded-md mb-6"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
        <p className="text-gray-700 mb-6">{recipe.summary}</p>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
            <li>Ingredient 3</li>
            {/* Add more or dynamically load later */}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Cooking Instructions</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>Step 1</li>
            <li>Step 2</li>
            <li>Step 3</li>
            {/* Add more or dynamically load later */}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;