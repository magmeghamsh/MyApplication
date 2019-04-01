import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {EducationComponent} from '../education/education.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(EducationComponent);
  }

  ngOnInit() {
  }

}
