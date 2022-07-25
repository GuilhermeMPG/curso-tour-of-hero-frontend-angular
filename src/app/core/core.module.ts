import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { MessagesComponent } from './components/messages/messages.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material/material.module';
import { PageNotFoundComponent } from './components/page-not-found.component';

const COMPONENT = [
  MessagesComponent,
  ToolbarComponent
]
const MODULE = [
  MaterialModule,
  FlexLayoutModule,
  RouterModule,
  CommonModule
]


@NgModule({

  declarations:[COMPONENT, PageNotFoundComponent],
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
