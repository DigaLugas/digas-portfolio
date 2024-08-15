import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThumbComponent } from './thumb/thumb.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  { path: 'sobre', component: SobreComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
