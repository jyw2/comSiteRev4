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
import { ReceiveComponent } from './priceEstimator/receive/receive.component';
import { CharDesComponent } from './char-des/char-des.component';
import { ReceiveItemComponent } from './priceEstimator/receive/receive-item/receive-item.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryFilterComponent } from './gallery/gallery-filter/gallery-filter.component';
import { OverlayComponent } from './overlay/overlay.component';
import { ItemComponent } from './item/item.component';
import { ComplexItemComponent } from './complex-item/complex-item.component';

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
    ReceiveComponent,
    CharDesComponent,
    ReceiveItemComponent,
    FooterComponent,
    ContactComponent,
    GalleryFilterComponent,
    OverlayComponent,
    ItemComponent,
    ComplexItemComponent
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
