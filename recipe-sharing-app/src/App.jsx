import AddRecipeForm from './component/AddRecipeForm';
import RecipeList from './component/RecipeList';

function App() {
  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;

