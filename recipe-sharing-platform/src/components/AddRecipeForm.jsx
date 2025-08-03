import React, { useState } from "react";

const AddRecipeForm = () => {
  // State to handle input fields
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  // State for validation messages
  const ["validate", "errors", "setErrors"]= useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    if (!formData.title || !formData.ingredients || !formData.steps) {
      setValidationError("All fields are required!");
      return;
    }

    if (formData.ingredients.split(",").length < 2) {
      setValidationError("Please provide at least two ingredients.");
      return;
    }

    setValidationError("");

    // Simulate form submission
    console.log("Recipe Submitted:", formData);

    // Reset form fields
    setFormData({
      title: "",
      ingredients: "",
      steps: "",
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg"
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-700 text-center">
          Add New Recipe
        </h2>

        {validationError && (
          <p className="text-red-500 text-sm mb-4">{validationError}</p>
        )}

        {/* Recipe Title */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 font-medium mb-2"
          >
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
             onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter recipe title"
          />
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label
            htmlFor="ingredients"
            className="block text-gray-700 font-medium mb-2"
          >
            Ingredients (comma-separated)
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
             onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter ingredients, separated by commas"
          ></textarea>
        </div>

        {/* Preparation Steps */}
        <div className="mb-4">
          <label
            htmlFor="steps"
            className="block text-gray-700 font-medium mb-2"
          >
            Preparation Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe the preparation steps"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
