import { useRecipeStore } from './component/recipeStore';
import { useEffect } from 'react';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations(); // auto-generate on mount
  }, []);

  return (
    <div className="p-4 bg-green-50 rounded shadow mt-4">
      <h2 className="text-xl font-semibold mb-2">Recommended for You</h2>
      {recommendations.map(recipe => (
        <div key={recipe.id} className="mb-3 border-b pb-2">
          <h3 className="text-lg font-medium">{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
