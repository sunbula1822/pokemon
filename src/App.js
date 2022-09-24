import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import { useState, React } from "react";
import logo from "./assets/items/pokedex.png";

function App() {
  const [start, setStart] = useState(false);



  const startPokedex = () => {
    setStart(true);
  };

  return (
    <BrowserRouter className="App">
      {start ? (
        <Main />
        ) : (
        <div className="start-menu">
          <div className="red-background position-start-item">
            <img src={logo} />
          </div>
          <div className="ball-middle"></div>
          <div className="white-background position-start-item">
            <div className="center" onClick={startPokedex}>
              <button className="btn start">
                <svg
                  height="40px"
                  width="80px"
                  className="border"
                  
                  
                >
                  <polyline
                    points="179,1 179,59 1,59 1,1 179,1"
                    className="bg-line"
                  />
                  <polyline
                    points="179,1 179,59 1,59 1,1 179,1"
                    className="hl-line"
                  />
                </svg>
                <span>START</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
