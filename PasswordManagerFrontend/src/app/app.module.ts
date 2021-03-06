import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
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
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import {PasswordModule} from "primeng/password";
import {CardModule} from "primeng/card";
import { EntriesListLowResolutionComponent } from './entries-list-low-resolution/entries-list-low-resolution.component';
import {RippleModule} from "primeng/ripple";
import {AppServiceService} from "./app-service.service";
import {MessagesModule} from "primeng/messages";
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    LoginComponent,
    MainComponent,
    EntriesListLowResolutionComponent,
    SignUpComponent,
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
    PasswordModule,
    CardModule,
    RippleModule,
    MessagesModule,
  ],
  providers: [EntryService, AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
