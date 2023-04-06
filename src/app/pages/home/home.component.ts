import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  product: any = [];
  productUnselectedIcon = "favorite_icon_outlined"

  constructor(private srv: ProductService, private router: Router) {

  }
  ngOnInit(): void {
    console.log("I am executed by angular when ever the component is initialized")
    this.getAllProducts();
  }
  ngAfterViewInit() {
    console.log("I am executed by angular after the html is executed")
  }
  getAllProducts() {
    this.srv.all().subscribe(
      {
        next: (res) => {
          console.log("i am executed on success")
          console.log(res)
          this.product = res;
        },
        error: () => {
          console.log("i am executed on err")
        },
        complete: () => {
          console.log("i am executed on success or err")
        }
      }
    )
  }
  toggleProductSelection(event: any, product: any) {
    // alert("icon component clicked")
    product.selected = !product.selected;
  }
  selectionIcon(product: any) {
    // if(product.selected){
    //   return "favorite";
    // }
    // else{
    //   return "favorite_outlined";
    // }
    return product.selected ? "favorite" : "favorite_outlined";
  }
  formatPrice(price: any) {
    return '$' + price.toFixed(2);
  }
  onEditClick($event: any, product: any) {
    this.router.navigateByUrl("/product/" + product._id)
  }
}
