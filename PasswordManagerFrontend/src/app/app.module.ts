import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {EntryService} from "./entry.service";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ClipboardModule} from "@angular/cdk/clipboard";
import {TooltipModule} from "primeng/tooltip";
import {PanelMenuModule} from "primeng/panelmenu";

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    DialogModule,
    BrowserAnimationsModule,
    ClipboardModule,
    TooltipModule,
    PanelMenuModule,
  ],
  providers: [EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
