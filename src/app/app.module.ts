import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryTileComponent } from './gallery/gallery-tile/gallery-tile.component';
import { GalleryMenuComponent } from './gallery/gallery-menu/gallery-menu.component';
import { PricesComponent } from './priceEstimator/prices/prices.component';
import { CharDesComponent } from './char-des/char-des.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryFilterComponent } from './gallery/gallery-filter/gallery-filter.component';
import { OverlayComponent } from './overlay/overlay.component';
import { ItemComponent } from './priceEstimator/item/item.component';
import { IllustComponent } from './priceEstimator/illust-component/illust-component.component';
import { DropdownComponent } from './dropdown/dropdown.component';

const routes: Routes = [
  { path: '', component:CharDesComponent},
  { path: 'price', component:PricesComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'contact', component: ContactComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GalleryComponent,
    GalleryTileComponent,
    GalleryMenuComponent,
    PricesComponent,
    CharDesComponent,
    FooterComponent,
    ContactComponent,
    GalleryFilterComponent,
    OverlayComponent,
    ItemComponent,
    IllustComponent,
    DropdownComponent
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
