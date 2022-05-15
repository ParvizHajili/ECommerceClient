import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
<<<<<<< HEAD
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DeleteDirective } from '../../../directives/admin/delete.directive';

@NgModule({
  declarations: [ProductsComponent, CreateComponent, ListComponent,DeleteDirective],
=======



@NgModule({
  declarations: [
    ProductsComponent,
    CreateComponent,
    ListComponent
  ],
>>>>>>> parent of 9b4a532 (Listing and Pagination of Products)
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: ProductsComponent }
    ]),
    MatSidenavModule, MatFormFieldModule,
    MatInputModule, MatButtonModule
  ]
})
export class ProductsModule { }
