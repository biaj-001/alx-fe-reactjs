import React from "react";

// import WelcomeMessage from './components/WelcomeMessage.jsx';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';
// import UserProfile from './components/UserProfile.jsx';


function App() {
  return(
   <>
{/*     <WelcomeMessage/> */}
    <Header/>
    <MainContent/>
    <Footer/>
{/*     <UserProfile name="Alice" age="25" bio="Loves hiking and photography"/> */}
   </>

  );

}

export default App;
