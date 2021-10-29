import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructorDirectiveComponent } from './structor-directive.component';
import { NgifComponent } from './ngif/ngif.component';

@NgModule({
  declarations: [StructorDirectiveComponent, NgifComponent],
  exports: [StructorDirectiveComponent],
  imports: [CommonModule],
})
export class StructorDirectiveModule {}
