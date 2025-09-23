export type Secteur = `Nord` | `Sud` | `Ouest` | `Est` | `Paris`;
export type Service = `DSI` | `Compta` | `Labo` | `Dev` | `Commercial` | `Direction`;
export type EmployeBase = {
    id: string;
    nom: string;
    service: Service;
};
export declare function AssignerSecteur(e: EmployeBase, s: Secteur): string;
//# sourceMappingURL=type.d.ts.map