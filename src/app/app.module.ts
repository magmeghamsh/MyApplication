import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CatalogComponent } from './catalog/catalog.component';
import { MatCardModule } from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CatalogComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        AppRoutingModule,
        MatCardModule,
        RouterModule.forRoot([{
            path: 'home',
            component: HomeComponent
        }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
