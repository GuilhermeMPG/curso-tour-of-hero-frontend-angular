import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { MessagesComponent } from './components/messages/messages.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material/material.module';

const COMPONENT = [
  MessagesComponent,
  ToolbarComponent
]
const MODULE = [
  MaterialModule,
  FlexLayoutModule,
  AppRoutingModule,
  CommonModule
]


@NgModule({

  declarations:[COMPONENT],
  imports: [ MODULE],
  exports:[MODULE, COMPONENT]
})
export class CoreModule { }
