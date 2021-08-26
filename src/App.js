import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";

function App() {
  // Using useState, set the default value for currentPage to 'Home'
  const [currentPage, handlePageChange] = useState("Home");

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      // case "Blog":
      //   return <Blog />;
      // case "Contact":
      //   return <Contact />;
      // default:
      //   return <Home />;
    }
  };

  return (
    <div>
      {/* Pass the state value and the setter as props to NavTabs */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Call the renderPage function */}
      <div>{renderPage()}</div>
    </div>
  );
}
export default App;
