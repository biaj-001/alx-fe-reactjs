import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = parseInt(id);
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  const [isEditing, setIsEditing] = useState(false);

  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  if (!recipe) {
    return <p className="text-red-500">Recipe not found.</p>;
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Recipe Details</h2>

      {isEditing ? (
        <EditRecipeForm recipe={recipe} onClose={() => setIsEditing(false)} />
      ) : (
        <>
          <h3 className="text-xl font-semibold">{recipe.title}</h3>
          <p className="mb-4">{recipe.description}</p>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600"
            >
              Edit
            </button>

            <DeleteRecipeButton recipeId={recipe.id} />

            <button
              onClick={() =>
                isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id)
              }
              className={`${
                isFavorite ? 'bg-red-500' : 'bg-blue-500'
              } text-white py-1 px-3 rounded hover:opacity-90`}
            >
              {isFavorite ? 'Unfavorite' : 'Favorite'}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default RecipeDetails;
