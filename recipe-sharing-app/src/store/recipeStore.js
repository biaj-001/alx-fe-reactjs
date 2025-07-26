import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: '',
  filteredRecipes: [],

  // === CRUD Actions ===
  addRecipe: (newRecipe) => {
    const updatedRecipes = [...get().recipes, newRecipe];
    set({
      recipes: updatedRecipes,
      filteredRecipes: filterBySearch(updatedRecipes, get().searchTerm),
    });
  },
  updateRecipe: (updatedRecipe) => {
    const updatedRecipes = get().recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    set({
      recipes: updatedRecipes,
      filteredRecipes: filterBySearch(updatedRecipes, get().searchTerm),
    });
  },
  deleteRecipe: (id) => {
    const updatedRecipes = get().recipes.filter((recipe) => recipe.id !== id);
    set({
      recipes: updatedRecipes,
      filteredRecipes: filterBySearch(updatedRecipes, get().searchTerm),
      favorites: get().favorites.filter((fid) => fid !== id),
    });
  },

  // === Search Filter ===
  setSearchTerm: (term) => {
    const recipes = get().recipes;
    set({
      searchTerm: term,
      filteredRecipes: filterBySearch(recipes, term),
    });
  },

  // === Favorites ===
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // === Recommendations ===
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (r) => favorites.includes(r.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  },
}));

const filterBySearch = (recipes, term) => {
  if (!term) return recipes;
  return recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(term.toLowerCase())
  );
};
