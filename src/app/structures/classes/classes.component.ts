import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Class } from 'src/app/interfaces/class';
import { AddClassComponent } from 'src/app/modals/classe/add-class/add-class.component';
import { EditClassComponent } from 'src/app/modals/classe/edit-class/edit-class.component';
import { ClasssesService } from 'src/app/services/classses.service';

import jspdf from 'jspdf';
import 'jspdf-autotable';
//import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  // admin: Admin[];
  classes : Class[];
  _id: number;


  constructor(
    // private adminService : AdminsService,
    private classeServices : ClasssesService,
    private dialogRef : MatDialog,
    private router : Router,
    ) { }

  ngOnInit(): void {
    this.classeServices.getClasses()
    .subscribe((data: Class[])=>{
      this.classes=data;
      //console.log('================ Classes : ', this.classes, '=======================');
    })


  }

  openModal(){
    this.dialogRef.open(AddClassComponent)
  }

  delete(classes : Class) : void {

    console.log(classes.class_id);

    this.classeServices.deleteClass(classes.class_id)
    .subscribe(data =>{
      this.classes = this.classes.filter(u => u !== classes);
    })
  }

  edit(classes : Class) : void {

    console.log(classes.class_id);
    this._id = classes.class_id;
    this.router.navigate(['editClass/' + this._id]);
    }
  convert() {
    let num =1;
    let pdf = new jspdf();
    pdf.setFontSize(12);
    pdf.setTextColor(99);
    pdf.setTextColor(255,0,0);
    pdf.text('SCHOOL CLASS LIST', pdf.internal.pageSize.getWidth()/2, 8, {align:"center"});
    var col = [["No", "Name","Level"]];
    var rows = [];
    var options = {
      headStyles:{
        valign: 'middle',
        halign : 'center'
      }
    };

      this.classes.forEach(element => {
        var temp = [num,element.nom,element.niveau];
        rows.push(temp);
        num ++;
      });

      (pdf as any).autoTable({
        head: col,
        body: rows,
        theme: 'striped',
        didDrawCell: data => {
            console.log(data.column.index)
        },
        headStyles:{
          valign: 'middle',
          halign : 'center',
          margin : {
            top : 100
       }
        }
      });
      pdf.save("test.pdf");
  }
}

 //   convert() {
      //     var pdf = new jspdf();

      //     pdf.text('Angular PDF Table', 11, 8);
      //     pdf.setFontSize(12);
      //     pdf.setTextColor(99);


      //     (pdf as any).autoTable({
      //     head: this.header,
      //     body: this.tableData,
      //     theme: 'plain',
      //     didDrawCell: data => {
      //         console.log(data.column.index)
      //     }
      //     })

      //     // Download PDF doc
      //     pdf.save('table.pdf');
      // }
