// src/App.jsx
// src/App.jsx
import ProfilePage from './ProfilePage.jsx';
import UserContext from './UserContext.jsx'; // ✅ Import the context

function App() {
  // User data to share across components
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // ✅ Wrap ProfilePage with the UserContext provider
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;

