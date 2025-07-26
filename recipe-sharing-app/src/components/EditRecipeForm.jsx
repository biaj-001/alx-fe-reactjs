import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({ ...recipe, title, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="border p-1"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
      />
      <textarea
        className="border p-1 mt-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe Description"
      />
      <button className="bg-blue-500 text-white p-2 mt-2 rounded" type="submit">
        Save Changes
      </button>
    </form>
  );
};

export default EditRecipeForm;

