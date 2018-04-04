import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('formRef')
  myForm: any;
  constructor() { }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    loadterrif((err, data) => {
      if (err) { alert('There is some technical issue please contact you vendor'); }
      else {
        if (data.length) {
          this.CategoryA = data[0].A;
          this.CategoryB = data[0].B;
        }
      }
    });
  }
  updateData() {
    updateterrif({ A: this.CategoryA, B: this.CategoryB }, (err, data) => {
      if (err) { alert('There is some technical issue please contact you vendor'); }
      else {
        alert('User Updated Successfully');
      }
    });
  }
}
