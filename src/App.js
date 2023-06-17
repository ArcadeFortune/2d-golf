import React, { useState } from "react";
import Menu from "./Menu/Menu";
import { GlobalProvider } from "./Globals";

function App() {
  return (
    <GlobalProvider>
      <Menu />
    </GlobalProvider>
  );
}

export default App;
