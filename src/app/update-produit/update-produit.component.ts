import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model'; // Import Categorie model

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: []
})
export class UpdateProduitComponent implements OnInit {
  currentProduit: Produit = new Produit();
  categories: Categorie[] = []; // Declare categories field
  updatedCatId: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private produitService: ProduitService
  ) {}

  ngOnInit(): void {
    this.categories = this.produitService.listeCategories();
    const productId = +this.activatedRoute.snapshot.params['id'];
    const fetchedProduit = this.produitService.consulterProduit(productId);
    if (fetchedProduit) {
      this.currentProduit = fetchedProduit;
      this.updatedCatId = this.currentProduit.categorie.idCat;
    } else {
      console.error(`Product with ID ${productId} not found.`);
    }
  }
  
  

  updateProduit() {
    this.currentProduit.categorie=this.produitService.consulterCategorie(this.updatedCatId);
    this.produitService.updateProduit(this.currentProduit);
    this.router.navigate(['produits']);
    }
}
