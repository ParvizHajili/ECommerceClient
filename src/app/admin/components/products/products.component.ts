import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Product } from 'src/app/contracts/product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent extends BaseComponent implements OnInit {
  constructor(
    spinner: NgxSpinnerService,
    private httpClientService: HttpClientService
  ) {
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);

    this.httpClientService
      .get<Product[]>({
        controller: 'products',
      })
      .subscribe((data) => console.log(data));

    // this.httpClientService
    //   .post(
    //     {
    //       controller: 'products',
    //     },
    //     {
    //       name: 'Qələm',
    //       stock: 10,
    //       price: 100,
    //     }
    //   )
    //   .subscribe();

    // this.httpClientService
    //   .put(
    //     { controller: 'products' },
    //     {
    //       id: '6bd2ac80-b984-4030-aa81-0b1d26952b04',
    //       name: 'Samsung',
    //       stock: 100,
    //       price: 2500,
    //     }
    //   )
    //   .subscribe();

    // this.httpClientService
    //   .delete(
    //     {
    //       controller: 'products',
    //     },
    //     '993fd82f-f9f5-4b7d-a4ca-7f552c97d5d9'
    //   )
    //   .subscribe();

    // this.httpClientService
    //   .get({
    //    fullEndPoint:"https://jsonplaceholder.typicode.com/posts"
    //   })
    //   .subscribe((data) => console.log(data));
  }
}
