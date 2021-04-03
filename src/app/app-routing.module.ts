import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';

const routes: Routes = [
  { path: '', component: CountriesComponent },
  { path: 'cities/:country/:province', loadChildren:() => import('./province/province.module').then(m => m.ProvinceModule) },
  { path: '**', component: CountriesComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
