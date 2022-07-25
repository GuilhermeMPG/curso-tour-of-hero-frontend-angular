import { Location } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {Hero} from '../../../core/models/hero.model'
import { HeroService } from "../../../core/services/hero.service";

@Component({
  selector:'app-hero-detail',
  templateUrl:'./hero-detail.component.html',
  styleUrls:['./hero-detail.component.scss']

})

export class HeroDetailComponent implements OnInit{
hero!:Hero;
 constructor(
  private heroService: HeroService,
  private location: Location,
  private route: ActivatedRoute,

  ){}

  ngOnInit(): void {
      this.getHero();
  }

  getHero():void{
    const id =Number( this.route.snapshot.paramMap.get('id'));
    this.heroService.getHeroes(id).subscribe((hero)=> (this.hero = hero));
  }
  goBack(){
    this.location.back();

  }



}