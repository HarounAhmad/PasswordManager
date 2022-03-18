import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EntryListComponent} from "./entry-list/entry-list.component";
import {UserFormComponent} from "./user-form/user-form.component";

const routes: Routes = [
  { path: 'entries', component: EntryListComponent},
  { path: 'newEntry', component: UserFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
