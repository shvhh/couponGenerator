import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      console.log($('#example'))// .DataTable();
    });
  }

}
