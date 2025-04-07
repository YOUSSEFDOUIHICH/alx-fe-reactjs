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
          <ul>
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Cooking Instructions</h2>
          <ol>
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;