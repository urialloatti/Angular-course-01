import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { MainPageComponent } from './pages/main-page.component';
import { CharListComponent } from './components/char-list/char-list.component';
import { AddCharComponent } from './components/add-char/add-char.component';



@NgModule({
  declarations: [
    MainPageComponent,
    CharListComponent,
    AddCharComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class GhibliModule { }
