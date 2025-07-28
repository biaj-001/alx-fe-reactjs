import { useRecipeStore } from '../store/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes by title..."
      onChange={(e) => setSearchTerm(e.target.value)}
      className="border p-2 mb-4 w-full rounded"
    />
  );
};

export default SearchBar;
