import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CatalogComponent} from './catalog/catalog.component';
import {MatCardModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {BsNavbarComponent} from './bs-navbar/bs-navbar.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {EducationComponent} from './education/education.component';
import {ProfessionComponent} from './profession/profession.component';
import {TechnologyComponent} from './technology/technology.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material';
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CatalogComponent,
        BsNavbarComponent,
        AboutMeComponent,
        EducationComponent,
        ProfessionComponent,
        TechnologyComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        AppRoutingModule,
        MatCardModule,
        MatGridListModule,
        MatInputModule,
        MatSidenavModule,
        MatButtonModule,
        MatDialogModule,
        MatTabsModule,
        MatExpansionModule,
        MatDividerModule,
        MatListModule,
        RouterModule.forRoot([
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'about-me',
                component: AboutMeComponent
            },
            {
                path: 'education',
                component: EducationComponent
            },
            {
                path: 'profession',
                component: ProfessionComponent
            },
            {
                path: 'tech',
                component: TechnologyComponent
            },
            {
                path: '',
                component: HomeComponent
            },
            {
                path: '*',
                component: HomeComponent
            },
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
