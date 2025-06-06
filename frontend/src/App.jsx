import React from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        {/* Your page routes or content go here */}
      </div>
      <Footer />
    </>
  );
}

export default App;
