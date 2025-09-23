export type Secteur = `Nord` | `Sud` | `Ouest` | `Est` | `Paris` ;
export type Service = `DSI` | `Compta` | `Labo` | `Dev` | `Commercial` | `Direction` ;
export type EmployeBase = { id: string ; nom: string ; service : Service ;} ;


export function AssignerSecteur( e : EmployeBase , s : Secteur ): string {
    return (`l'employé ${e.nom}` + ` `+ `appartient dorénavant au secteur ${s}`);
}
