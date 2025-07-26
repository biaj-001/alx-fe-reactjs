import { useRecipeStore } from '../recipeStore';

const RecipeItem = ({ recipe }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div className="bg-gray-100 p-3 rounded shadow mb-3">
      <h3 className="text-lg font-bold">{recipe.title}</h3>
      <p>{recipe.description}</p>
      <button
        className="mt-2 text-sm px-3 py-1 bg-blue-500 text-white rounded"
        onClick={() => (isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id))}
      >
        {isFavorite ? 'Remove Favorite' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default RecipeItem;


