import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './componentes/country/view/view.component';
import { MainComponent } from './componentes/main/main.component';

const routes: Routes = [
  {
    path: 'view',
    component: ViewComponent,
  },
  {
    path: 'countries',
    component: MainComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'countries',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
