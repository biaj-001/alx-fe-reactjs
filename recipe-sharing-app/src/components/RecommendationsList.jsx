import { useEffect, useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const RecommendationsList = () => {
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );
  const recommendations = useRecipeStore((state) => state.recommendations);

  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      generateRecommendations();
      setInitialized(true);
    }
  }, [generateRecommendations, initialized]);

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations available. Add more favorites!</p>
      ) : (
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
