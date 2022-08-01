import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hero } from '../models/hero.model';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  private heroesUrl= `${environment.baseUrl}/heroes`;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) {}


  //GET/heroes
  getHero(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((heroes)=> this.log(`fetched ${heroes.length} hero(es)`))

    );

    // const heroes = of(HEROES);
    // this.log("fetched heroes");

    // return heroes;
  }

  // GET/heroes/id
  getHeroes(id: number):Observable<Hero>{
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`).pipe(
      tap((hero)=> this.log(`fetched hero id=${id} and name= ${hero.name}`))

    );

    // const hero = HEROES.find(hero=> hero.id=== id)!;
    // this.log(`fetched hero id=${id}`);
    // return of(hero);
  }

  private log (message:string):void{
    this.messageService.add(`HeroService: ${message}`)
  }
}
