import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
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
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule){
    if(parentModule){
      throw new Error('CoreModule has alredy been loaded. Import thid module in the AppModule. ')

    }

  }

}
