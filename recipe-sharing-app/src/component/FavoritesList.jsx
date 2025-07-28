import { useRecipeStore } from './component/recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore(state =>
    state.favorites.map(id =>
      state.recipes.find(recipe => recipe.id === id)
    )
  );

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-2">My Favorites</h2>
      {favorites.map(recipe => (
        recipe && (
          <div key={recipe.id} className="mb-3 border-b pb-2">
            <h3 className="text-lg font-medium">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        )
      ))}
    </div>
  );
};

export default FavoritesList;
