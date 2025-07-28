import { useRecipeStore } from '../store/recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return (
    <button
      onClick={() => deleteRecipe(recipeId)}
      className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 ml-2"
    >
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
