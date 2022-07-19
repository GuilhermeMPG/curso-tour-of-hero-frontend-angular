import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../core/material/material.module';
import { RouterModule } from '@angular/router';
import { HeroesRoutingModule } from './heroes-routing.module';



@NgModule({
  declarations: [HeroDetailComponent,HeroesComponent],
  imports: [CommonModule, FormsModule, MaterialModule, HeroesRoutingModule ]
})
export class HeroesModule { }
