import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-validation',
  templateUrl: './template-driven-validation.component.html',
  styleUrls: ['./template-driven-validation.component.css']
})
export class TemplateDrivenValidationComponent {
  productData:Product = new Product();
  totalPrice!:number;
  save (form:any)
  {
    console.log(this.productData)
    this.totalPrice = (this.productData.pQuantity * this.productData.pPrice)
  }
  reset ()
  {
    this.productData = new Product();
  }
}
class Product {
  pCategory!:string;
  pName!:string;
  pPrice!:number;
  pQuantity!:number;
}
