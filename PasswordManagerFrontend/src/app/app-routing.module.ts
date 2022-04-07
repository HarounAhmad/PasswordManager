import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EntryListComponent} from "./entry-list/entry-list.component";
import {UserFormComponent} from "./user-form/user-form.component";
import {MainComponent} from "./main/main.component";
import {AuthGuardGuard} from "./auth-guard.guard";
import {LoginComponent} from "./login/login.component";
import {LowResolutionGuard} from "./low-resolution.guard";
import {EntriesListLowResolutionComponent} from "./entries-list-low-resolution/entries-list-low-resolution.component";

const routes: Routes = [

  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuardGuard],

    children: [
      { path: 'entries', component: EntryListComponent, canActivate: [LowResolutionGuard]},
      { path: 'entrieslowres', component: EntriesListLowResolutionComponent},
      { path: 'newEntry', component: UserFormComponent},

    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
