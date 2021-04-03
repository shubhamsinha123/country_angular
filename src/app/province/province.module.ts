import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProvinceComponent } from './province.component';
import { CommonUseModule } from '../common-use/common-use.module';

const routes: Routes =[
  {path:'', component:ProvinceComponent},
];

@NgModule({
  declarations: [
    ProvinceComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CommonUseModule
  ]
})
export class BooklistModule { }
