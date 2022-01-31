import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PensionComponent } from '../pension/pension.component';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss']
})
export class AddClassComponent implements OnInit {

  constructor(private paiementRef : MatDialog) { }

  ngOnInit(): void {
  }

  openPension(){
    this.paiementRef.open(PensionComponent)
  }
}
