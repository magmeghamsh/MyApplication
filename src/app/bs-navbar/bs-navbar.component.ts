import {Component, OnInit} from '@angular/core';
import {fade} from '../animations';

@Component({
    selector: 'app-bs-navbar',
    templateUrl: './bs-navbar.component.html',
    styleUrls: ['./bs-navbar.component.css'],
    animations: [fade]
})
export class BsNavbarComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
