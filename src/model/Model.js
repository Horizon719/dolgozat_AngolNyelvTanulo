export default class Model{
    #adatok;
    #aktObj = [];
    constructor(adatok){
        this.#adatok = adatok;
    }

    getLista(){
        return {...this.#adatok};
    }

    getHossz(){
        return this.#adatok.length - 1;
    }

    getCim(){
        return this.#adatok[0];
    }

    getObj(index){
        let obj=this.#adatok[index];
        
        let kv = [...obj.valasztas];
        for (let i = kv.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [kv[i], kv[j]] = [kv[j], kv[i]];
        }

        this.#aktObj={
            magyar: obj.magyar,
            mondat: obj.mondat,
            alap: obj.alap,
            helyes: obj.valasztas[0],
            kevertValasztas: kv,
        };

        return this.#aktObj;
    }
}