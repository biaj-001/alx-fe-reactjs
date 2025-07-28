import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);

  const favoriteRecipes = recipes.filter((r) => favorites.includes(r.id));

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorite recipes.</p>
      ) : (
        favoriteRecipes.map((recipe) => (
          <div key={recipe.id} className="border p-2 mb-2 rounded">
            <Link to={`/recipe/${recipe.id}`}>
              <h3 className="text-blue-600 hover:underline">{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
