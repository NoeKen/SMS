import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  pension: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', pension: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', pension: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', pension: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', pension: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', pension: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', pension: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', pension: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', pension: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', pension: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', pension: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'pension', 'symbol', 'edit', 'delete'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
