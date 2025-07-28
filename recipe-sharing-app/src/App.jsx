import AddRecipeForm from './component/AddRecipeForm.jsx';
import RecipeList from './component/RecipeList.jsx';
import FavoritesList from './component/FavoritesList.jsx';
import RecommendationsList from './component/RecommendationsList.jsx';

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
