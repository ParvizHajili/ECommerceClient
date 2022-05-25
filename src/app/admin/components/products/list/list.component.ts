<<<<<<< HEAD
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { List_Product } from 'src/app/contracts/list_product';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';

declare var $: any;
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> parent of 9b4a532 (Listing and Pagination of Products)

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

<<<<<<< HEAD
  displayedColumns: string[] = ['name', 'stock', 'price', 'createdDate','updatedDate','edit','delete'];
  dataSource: MatTableDataSource<List_Product> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  async getProducts(){
    this.showSpinner(SpinnerType.BallAtom);
    const allProducts: {totalCount: number; products: List_Product[]}= await this.productService.read(this.paginator ? this.paginator.pageIndex: 0,
     this.paginator ? this.paginator.pageSize: 5, ()=>this.hideSpinner(SpinnerType.BallAtom),errorMessage =>
    this.alertifyService.message(errorMessage,{
      dismissOthers:true,
      messageType: MessageType.Error,
      position: Position.TopRight
    }))
    this.dataSource = new MatTableDataSource<List_Product>(allProducts.products);
    this.paginator.length = allProducts.totalCount;
  }

  // delete(id,event){
  //   const img: HTMLImageElement = event.srcElement;
  //   $(img.parentElement.parentElement).fadeOut(1000)
  // }

  async pageChanged(){
    await this.getProducts();
  }

  async ngOnInit() {
   await this.getProducts();
=======
  ngOnInit(): void {
>>>>>>> parent of 9b4a532 (Listing and Pagination of Products)
  }

}
