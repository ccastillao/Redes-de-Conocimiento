
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [profesores, setProfesores] = useState([]);

  useEffect(() => {
    fetch("https://gist.githubusercontent.com/ccastillao/55276c22850c7a52da6d2710c5178677/raw/profesores.json")
      .then(res => {
        res.json().then(resj => { setProfesores(resj); console.log(resj) })
      });

  }, [])
  return (
    <div className="App">
      {profesores
        ?
        <div>
          {
            profesores.map((p, index) => (<div key={p.div}><img src={p.otros_campos.fotografia.sizes.thumbnail} alt="" /><h6>{p.title.rendered}</h6> <p>{index}</p> </div>)

            )
          }
        </div>

        :
        "loading..."}
    </div>
  );
}

export default App;
