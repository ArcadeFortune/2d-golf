import React, { useEffect, useRef } from "react";
import Menu from "./Menu/Menu";
import { GlobalProvider } from "./Globals";

function App() {
  console.log("Better Golf by me, ArcadeFortune \nI suggest you play me, it was hard work creating this, and no, I don't mean play me like that")
  
  return (
    <GlobalProvider>
      <Menu />
    </GlobalProvider>
  );
}

export default App;
