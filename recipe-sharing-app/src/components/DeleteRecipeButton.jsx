import useRecipeStore from "../store/recipeStore";

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return <button onClick={() => deleteRecipe(id)}>Supprimer</button>;
};

export default DeleteRecipeButton;