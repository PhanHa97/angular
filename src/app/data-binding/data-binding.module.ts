import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding.component';
import { OnewayBindingComponent } from './oneway-binding/oneway-binding.component';
import { TwoewayBindingComponent } from './twoeway-binding/twoeway-binding.component';

@NgModule({
  declarations: [
    DataBindingComponent,
    OnewayBindingComponent,
    TwoewayBindingComponent,
  ],
  exports: [DataBindingComponent],
  imports: [CommonModule],
})
export class DataBindingModule {}
