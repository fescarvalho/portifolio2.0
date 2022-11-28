import AnimatesRoutes from "./AnimatesRoutes";
import { BrowserRouter } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <BrowserRouter>
      {loading ? (
        <div className="loader">
          <ScaleLoader
            loading={loading}
            color={"#5FCDD9"}
            height={100}
            width={20}
            margin={10}
          />
        </div>
      ) : (
        <div className="app">
          <AnimatesRoutes />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
