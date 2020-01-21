import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextFieldFormComponent } from './text-field-form/text-field-form.component';


const routes: Routes = [
  {path: 'form', component: TextFieldFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
