import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
    showFiller = false;

    constructor(private route: Router) {
    }

    goHome() {
        this.route.navigate(['/home']);
    }


}
