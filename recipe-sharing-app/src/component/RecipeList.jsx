import React from 'react';
import { useRecipeStore } from './component/recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map(recipe => (
          <div key={recipe.id} className="p-4 border rounded-xl shadow-md bg-white">
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <p>{recipe.description}</p>
            <p><strong>Time:</strong> {recipe.prepTime} mins</p>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
