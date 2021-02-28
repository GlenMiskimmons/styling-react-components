import "./App.css";
import "./NewsletterOverride.css";

import React from "react";

import Newsletter from "./Newsletter.js";

function App() {
  return (
    <div className="app__newsletter">
      <Newsletter />
    </div>
  );
}

export default App;
