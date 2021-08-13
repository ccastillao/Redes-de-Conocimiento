
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [profesoresO, setProfesoresO] = useState([]);
  const [profesores, setProfesores] = useState();
  const [filtros, setFiltros] = useState(["Sociología", "Psicología", "Lenguas_Cultura", "Antropología", "Historia_Geografía", "Ciencia_Política", "Filosofía", "Facultad"]);



  useEffect(() => {
    if (!profesores) {
      fetch("https://gist.githubusercontent.com/ccastillao/55276c22850c7a52da6d2710c5178677/raw/profesores.json")
        .then(res => {
          res.json().then(resj => { setProfesoresO(resj); console.log(resj) })
        });


    }
    setTimeout(() => {
      setProfesores(profesoresO);
    }, 2000);
  }, [profesores])

  //Maps out departments to numbers

  function departamentos(number) {

    var numero = parseInt(number);
    var programa = "";

    switch (numero) {
      case 18:
        programa = "Sociología"
        break;
      case 14:
        programa = "Psicología"
        break;
      case 13:
        programa = "Lenguas_Cultura"
        break;
      case 9:
        programa = "Antropología"
        break;
      case 12:
        programa = "Historia_Geografía"
        break;
      case 10:
        programa = "Ciencia_Política"
        break;
      case 11:
        programa = "Filosofía"
        break;
      case 572:
        programa = "Facultad"
        break;
      default:
        programa = numero;
        break;
    }

    return programa;
  }

  return (
    <div className="App" >
      <div className="botones">
        {filtros.map((f, index) => (<button key={index} className={f} > {f}
        </button>))}</div>

      {profesores
        ?
        <div className="profesores">
          {
            profesores.map((p, index) => (<div className={"profe" + " " + departamentos(p["area-departamento"])} key={p.div}><img src={p.otros_campos.fotografia.sizes.thumbnail} alt="" /><p>{index + 1}</p> <p>{departamentos(p["area-departamento"])}</p><h4>{p.title.rendered}</h4> </div>)

            )
          }
        </div>

        :
        "loading..."}
    </div>
  );
}

export default App;
