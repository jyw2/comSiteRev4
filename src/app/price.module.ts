import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './priceEstimator/item/item.component';
import { IllustComponent } from './priceEstimator/illust-component/illust-component.component';
import { DropdownComponent } from './priceEstimator/dropdown/dropdown.component';
import { PricesComponent } from './priceEstimator/prices/prices.component';


const routes: Routes = [
  { path: '', component:PricesComponent}
]

@NgModule({
  declarations: [
    ItemComponent,
    IllustComponent,
    DropdownComponent,
    PricesComponent
  ],
  exports:[
    PricesComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forChild(routes),
  ]
})
export class PriceModule{ }
