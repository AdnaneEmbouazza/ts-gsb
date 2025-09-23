import { type EmployeBase , type Service , type Secteur} from "./type.js";
import { AssignerSecteur } from "./type.js";

let employe : EmployeBase = {
    id: `Abc01`,
    nom: `Mathis`,
    service: `DSI`
}

let secteur : Secteur = `Nord`;

console.log(AssignerSecteur(employe , secteur )) ;



