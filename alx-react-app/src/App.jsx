import UserProfile from './components/UserProfile';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

import WelcomeMessage from './components/WelcomeMessage';
import './app.css'

function App() {
  return (

      <div>
          <WelcomeMessage />
          <Header />
          <MainContent />
          <Footer />
          <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      </div>
  );
}

export default App;



