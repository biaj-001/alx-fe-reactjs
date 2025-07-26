import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './AddRecipeForm';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipeForm />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;


