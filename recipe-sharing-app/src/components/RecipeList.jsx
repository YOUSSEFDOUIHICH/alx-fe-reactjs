import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  

  return (
    <div>
      <h2>Liste des recettes</h2>
      <Link to="/add">
        <button>Ajouter une recette</button>
      </Link>
      {recipes.length === 0 ? (
        <p>Aucune recette disponible.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <DeleteRecipeButton />
            <Link to={`/recipe/${recipe.id}`}>Voir les détails</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;