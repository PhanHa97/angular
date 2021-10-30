import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructorDirectiveComponent } from './structor-directive.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgforComponent } from './ngfor/ngfor.component';

@NgModule({
  declarations: [StructorDirectiveComponent, NgifComponent, NgswitchComponent, NgforComponent],
  exports: [StructorDirectiveComponent],
  imports: [CommonModule],
})
export class StructorDirectiveModule {}
