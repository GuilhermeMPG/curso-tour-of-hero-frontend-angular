import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { MessagesComponent } from './components/messages/messages.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material/material.module';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { LoadingComponent } from './components/loading/loading.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './interceptores/loading.interceptor';

const COMPONENT = [
  MessagesComponent,
  ToolbarComponent,
  PageNotFoundComponent,
  LoadingComponent
]
const MODULE = [
  MaterialModule,
  FlexLayoutModule,
  RouterModule,
  CommonModule
]


@NgModule({

  declarations:[COMPONENT],
  imports: [ MODULE],
  exports:[MODULE, COMPONENT],
  providers:[
    {
      provide:HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi:true
    }

  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule){
    if(parentModule){
      throw new Error('CoreModule has alredy been loaded. Import thid module in the AppModule. ')

    }

  }

}
