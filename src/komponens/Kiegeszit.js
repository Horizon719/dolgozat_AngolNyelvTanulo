import { useState } from "react";
import MondatKiegeszit from "./MondatKiegeszit";

export default function Kiegeszit(props){
    
    
    const [pont, setPont] = useState(0);
    function adatKap(obj, kuldesSzam, szam){
        if (obj == props.kerdes.helyes) {
            if (kuldesSzam == 1) {
                setPont(pont+1);
            }
        }
        adatKuld(szam);
    }
    function adatKuld(szam){
        props.adatKap(szam);
    }
    return(
        <div>
        <h3>{props.cim}</h3>
        <p>Gépeld be a megfelelő alakot!</p>
        <MondatKiegeszit kerdes={props.kerdes} adatKap={adatKap} hossz={props.hossz}></MondatKiegeszit>
        <p>Az eddigi pontok: {pont}</p>
        </div>
    )
}