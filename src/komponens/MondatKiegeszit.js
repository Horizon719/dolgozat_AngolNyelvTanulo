import { useState } from "react";
let kuldesSzam = 0;
export default function MondatKiegeszit(props){
    const [eredmeny, setEredmeny] = useState("");
    const [szam, setSzam] = useState(2);
    let splitelve = props.kerdes.mondat.split('_');
    let adat = "";
    function adatKuld(event){
        event.preventDefault();
        kuldesSzam += 1;
        event.target.reset();
        props.adatKap(adat, kuldesSzam, szam);
        setEredmeny("");
    }
    function katt(){
        if (szam < props.hossz) {
            setSzam((prevSzam) => prevSzam + 1); 
        } else{
            return;
        }
    } 
    function adatValt(event){
        adat = event.target.value
        if (adat == props.kerdes.helyes) {
            setEredmeny("helyes megoldás");
        } else{
            setEredmeny("helytelen megoldás");
        }
    }
    return(
        
        <form onSubmit={adatKuld}>
            <div>
                <span>
                    {splitelve[0]}
                    <input type="text" onChange={adatValt}></input>
                    {splitelve[1]}
                    &nbsp;({props.kerdes.alap})
                </span>
            </div>
            <input type="submit" className="btn btn-primary"></input>
            <p>{eredmeny}</p>
            <button onClick={katt}>Tovább</button>
        </form>
    )
}