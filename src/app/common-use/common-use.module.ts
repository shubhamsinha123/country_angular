import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseInsensitiveFilterPipe } from '../case-insensitive-filter.pipe';


@NgModule({
  declarations: [
    CaseInsensitiveFilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CaseInsensitiveFilterPipe
  ]
})
export class CommonUseModule { }
