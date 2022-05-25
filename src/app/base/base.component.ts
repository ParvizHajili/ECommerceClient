import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

export class BaseComponent {
<<<<<<< HEAD
  constructor(private spinner: NgxSpinnerService){}
    showSpinner(spinnerNametype: SpinnerType){
      this.spinner.show(spinnerNametype);
    }

    hideSpinner(spinnerNametype: SpinnerType){
      this.spinner.hide(spinnerNametype);
    }
  }
=======
  constructor(private spinner: NgxSpinnerService) { }

  showSpinner(spinnerNameType: SpinnerType) {
    this.spinner.show(SpinnerType.BallTrianglePath);

    //setTimeout(() => this.hideSpinner(spinnerNameType), 1000);
  }

  hideSpinner(spinnerNameType: SpinnerType) {
    this.spinner.hide(spinnerNameType);
  }
}
>>>>>>> 6540a0446f64d1a9a27fbd19e49f7ae430dc57d5

export enum SpinnerType {
  BallAtom = 's1',
  BallScaleMultiple = 's2',
  BallSpinClockwiseFadeRotating = 's3',
  BallTrianglePath = 's4',
}
