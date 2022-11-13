import AnimatesRoutes from "./AnimatesRoutes";
import { BrowserRouter } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
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
          <HashLoader loading={loading} color={"#5FCDD9"} size={100} />
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
