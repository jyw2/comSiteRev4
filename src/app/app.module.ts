import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CharDesComponent } from './char-des/char-des.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', component:CharDesComponent},
  { path: 'gallery', loadChildren: () => import('./gallery.module').then(m => m.GalleryModule)},
  { path: 'price', loadChildren: () => import('./price.module').then(m => m.PriceModule)},
  { path: 'contact', component: ContactComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CharDesComponent,
    FooterComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
