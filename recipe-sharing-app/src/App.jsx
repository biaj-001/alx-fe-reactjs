import AddRecipeForm from './component/AddRecipeForm';
import RecipeList from './component/RecipeList';
import FavoritesList from './component/FavoritesList';
import RecommendationsList from './component/RecommendationsList';

const App = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold"> Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
};

export default App;
