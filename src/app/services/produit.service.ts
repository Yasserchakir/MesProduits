import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits: Produit[]; // Array of Produit objects
  produit! : Produit;
  categories : Categorie[];
  constructor() {
  this.categories = [ {idCat : 1, nomCat : "PC"},
  {idCat : 2, nomCat : "Imprimante"}];
  this.produits = [
  { idProduit : 1, nomProduit : "PC Asus", prixProduit : 3000.600,
  dateCreation : new Date("01/14/2011"), categorie : {idCat : 1, nomCat : "PC"}},
  { idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450,
  dateCreation : new Date("12/17/2010"), categorie : {idCat : 2, nomCat : "Imprimante"}},
  { idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 900.123,
  dateCreation : new Date("02/20/2020"),categorie : {idCat : 1, nomCat : "PC"}}
  ];
  }

  // Method to list all products
  listeProduits(): Produit[] {
    return this.produits;
  }

  // Method to add a product
  ajouterProduit(prod: Produit) {
    this.produits.push(prod);
  }

  // Method to remove a product
  supprimerProduit(prod: Produit) {
    const index = this.produits.indexOf(prod);
    if (index > -1) {
      this.produits.splice(index, 1);
    }
  }
  trierProduits(){
    this.produits = this.produits.sort((n1,n2) => {
    if (n1.idProduit! > n2.idProduit!) {
    return 1;
    }
    if (n1.idProduit! < n2.idProduit!) {
    return -1;
    }
    return 0;
    });
    }
    updateProduit(p:Produit)
    {
    // console.log(p);
    this.supprimerProduit(p);
    this.ajouterProduit(p);
    this.trierProduits();
    }
    
  // Method to retrieve a product by its ID
  consulterProduit(id: number): Produit | undefined {
    return this.produits.find(p => p.idProduit === id);
  }
  listeCategories():Categorie[] {
    return this.categories;
    }
    consulterCategorie(id:number): Categorie{
      return this.categories.find(cat => cat.idCat == id)!;
      }
}
