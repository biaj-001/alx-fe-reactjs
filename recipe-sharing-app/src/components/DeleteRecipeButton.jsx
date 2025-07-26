import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(id);
    navigate('/');
  };

  return (
    <button
      className="bg-red-500 text-white p-2 rounded mt-2"
      onClick={handleDelete}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;

