import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  // title = new FormControl("Mackbook", Validators.compose([Validators.required,
  // Validators.minLength(3), Validators.maxLength(5)]))

  // productForm = new FormGroup({
  //   title: new FormControl("Mackbook", Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(5)])),
  //   price: new FormControl("", Validators.compose([Validators.required,Validators.pattern('[0-9\.]*')]))
  // }) 

  productForm = this.fb.group({
    title: ["", Validators.compose([Validators.required, Validators.minLength(3)])],
    description: ["", Validators.compose([Validators.required])],
    image: ["", Validators.compose([Validators.required])],
    price: ["", Validators.compose([Validators.required])],
    //   feedback:this.fb.group({

    //   }),
    //   Options:this.fb.group({
    //     color:[],
    //     size:[]
    //   })
  })
  id: any = "";
  constructor(private fb: FormBuilder, private srv: ProductService, private router: Router, private ar: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.ar.params.subscribe((params: any) => {
      console.log(params)
      if (params.id) {
        this.id = params.id;
        this.getProduct()
      }
    })
    // this.title.valueChanges.subscribe(() => {
    //   console.log("i am watching the title changes from the ts")
    // })
  }
  getProduct() {
    this.srv.get(this.id).subscribe({
      next: (res) => {
        console.log(res)
        this.productForm.patchValue(res)
      }
    })
  }
  // onTitleKeyUp() {
  // console.log("i am executed by the event from html tag")
  // }
  onSubmit(event: any) {
    event.preventDefault();
    console.log("form is submitted")
    if (this.productForm.invalid) {
      return
    }
    console.log(this.productForm.value);
    if (this.id) {
      this.srv.update(this.productForm.value, this.id).subscribe({
        next: () => {
          // alert("product created")
          this.router.navigateByUrl("/")
        },
        error: () => {

        },
        complete: () => {

        }
      })
    }
    this.srv.create(this.productForm.value).subscribe({
      next: () => {
        // alert("product created")
        this.router.navigateByUrl("/")

      },
      error: () => {

      },
      complete: () => {

      }
    })
  }

}


// title: String = "mackbook";
 // get validTitle() {
  //   if (!this.title) {
  //     return "title can't be empty"
  //   }
  //   if (this.title.length < 3) {
  //     return "title should be min 3 chars"
  //   }
  //   if (this.title.length > 5) {
  //     return "title should be max 5 chars"
  //   }
  //   return '';
  // }
  // this is a ts way

  // titleErrors() {
  //   if (!this.title) {
  //     return "title can't be empty"
  //   }
  //   if (this.title.length < 3) {
  //     return "title should be min 3 chars"
  //   }
  //   if (this.title.length > 5) {
  //     return "title should be max 5 chars"
  //   }
  //   return '';
  // }
  // this is a js way