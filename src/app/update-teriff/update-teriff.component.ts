import { Component, OnInit } from '@angular/core';
declare function loadterrif(callback): any;
declare function updateterrif(data, callback): any;
@Component({
  selector: 'app-update-teriff',
  templateUrl: './update-teriff.component.html',
  styleUrls: ['./update-teriff.component.css']
})
export class UpdateTeriffComponent implements OnInit {
  CategoryA = {
    mainRateMain: '',
    mainRateDecimal: '1',
    mainLimit: '',
    DGRateMain: '',
    DGRateDecimal: '1',
    DGLimit: ''
  };
  CategoryB = {
    mainRateMain: '',
    mainRateDecimal: '1',
    mainLimit: '',
    DGRateMain: '',
    DGRateDecimal: '1',
    DGLimit: ''
  };
  constructor() {}

  ngOnInit() {}
  loadData() {
    loadterrif((err, data) => {
      this.CategoryA = data[0].A;
      this.CategoryB = data[0].B;
    });
  }
  updateData() {
    updateterrif({ A: this.CategoryA, B: this.CategoryB }, (err, data) => {});
  }
}
