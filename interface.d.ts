export interface Personne {
    id: string;
    nom: string;
    email: string;
}
export interface Visitor extends Personne {
    secteur: "Nord" | "Sud" | "Ouest" | "Est" | "Paris";
    vehiculePersonnel?: boolean;
}
//# sourceMappingURL=interface.d.ts.map