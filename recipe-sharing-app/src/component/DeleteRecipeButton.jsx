import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './component/recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/');
  };

  return (
    <button onClick={handleDelete} className="bg-red-500 text-white p-2 mt-2">
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
