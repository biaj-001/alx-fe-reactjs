import { useEffect } from 'react';
import { useRecipeStore } from '../recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Recommended Recipes</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations at the moment.</p>
      ) : (
        recommendations.map((recipe) => (
          <div key={recipe?.id} className="bg-white shadow p-2 mb-2 rounded">
            <h3 className="font-bold">{recipe?.title}</h3>
            <p>{recipe?.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;

