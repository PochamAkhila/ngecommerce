import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { LoginComponent } from './pages/login/login.component'; 
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch:"full"
  },
  {
    path: "product",
    component: ProductComponent
  },
  {
    path: "product/:id",
    component: ProductComponent
  },
  {  
    path: "login",
    component: LoginComponent
  },
  {
    path:"**",
  component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
