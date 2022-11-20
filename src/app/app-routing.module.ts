import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioAnalisisComponent } from './bio-analisis/bio-analisis.component';
import { BioModelacionComponent } from './bio-modelacion/bio-modelacion.component';
import { HipotesisComponent } from './hipotesis/hipotesis.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'bio-analisis', component:BioAnalisisComponent},
  {path:'bio-modelacion', component: BioModelacionComponent},
  {path:'hipotesis', component: HipotesisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
