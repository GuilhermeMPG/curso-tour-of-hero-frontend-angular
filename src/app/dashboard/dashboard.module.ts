import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../core/material/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [ DashboardComponent],
  imports: [
    CommonModule, DashboardRoutingModule, FlexLayoutModule, MaterialModule
  ]
})
export class DashboardModule { }
