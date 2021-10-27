import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Baitap1Component } from './baitap1/baitap1.component';
import { Baitap1HeaderComponent } from './baitap1/baitap1-header/baitap1-header.component';
import { Baitap1ConentComponent } from './baitap1/baitap1-conent/baitap1-conent.component';
import { Baitap1SidebarComponent } from './baitap1/baitap1-sidebar/baitap1-sidebar.component';
import { Baitap1FooterComponent } from './baitap1/baitap1-footer/baitap1-footer.component';
import { Baitap2Module } from './baitap2/baitap2.module';

@NgModule({
  declarations: [
    AppComponent,
    Baitap1Component,
    Baitap1HeaderComponent,
    Baitap1ConentComponent,
    Baitap1SidebarComponent,
    Baitap1FooterComponent,
    
  ],
  imports: [BrowserModule, Baitap2Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
