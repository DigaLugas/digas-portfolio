import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThumbComponent } from './thumb/thumb.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
const routes: Routes = [
  { path: 'sobre', component: SobreComponent },
  { path: 'contato', component: ContatoComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
