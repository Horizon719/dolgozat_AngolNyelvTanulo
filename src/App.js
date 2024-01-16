import { szenvedoMondatok } from "./model/angol.js";
import './App.css';
import Model from "./model/Model";
import { useState } from "react";
import Kiegeszit from "./komponens/Kiegeszit";

function App() {
  const [szam, setSzam] = useState(2);
  const MODEL = new Model(szenvedoMondatok);
  const CIM = MODEL.getCim();
  const KERDES_OBJ = MODEL.getObj(szam);
  const HOSSZ = MODEL.getHossz();
  function adatKap(szam){
    setSzam(szam);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tanuljunk angolul!</h1>
      </header>
      <article>
        <Kiegeszit cim={CIM} kerdes={KERDES_OBJ} hossz={HOSSZ} adatKap={adatKap}></Kiegeszit>
      </article>
      <footer>
	  		<p>Milichovszky Sándor</p>
			</footer>
    </div>
  );
}

export default App;
