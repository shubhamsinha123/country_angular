import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProvinceComponent } from './province.component';

const routes: Routes =[
  {path:'', component:ProvinceComponent},
];

@NgModule({
  declarations: [
    ProvinceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BooklistModule { }
