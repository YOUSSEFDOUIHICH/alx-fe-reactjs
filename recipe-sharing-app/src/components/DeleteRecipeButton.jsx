import { useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // Ajout de useNavigate

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/"); // Redirection après suppression (modifie selon besoin)
  };

  return <button onClick={handleDelete}>Supprimer</button>;
};

export default DeleteRecipeButton;