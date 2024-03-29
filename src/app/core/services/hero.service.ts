import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { finalize, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hero } from '../models/hero.model';
import { LoadingService } from './loading.service';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = `${environment.baseUrl}/heroes`;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  //GET/heroes
  getAll(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(tap((heroes) => this.log(`fetched ${heroes.length} hero(es)`)));

    // const heroes = of(HEROES);
    // this.log("fetched heroes");

    // return heroes;
  }

  // GET/heroes/id
  getOne(id: number): Observable<Hero> {
    return this.http
      .get<Hero>(`${this.heroesUrl}/${id}`)
      .pipe(tap((hero) => this.log(`fetched  ${this.descAttributes(hero)}`)));

    // const hero = HEROES.find(hero=> hero.id=== id)!;
    // this.log(`fetched hero id=${id}`);
    // return of(hero);
  }

  // POST/ heroes
  create(hero: Hero): Observable<Hero> {
    return this.http
      .post<Hero>(this.heroesUrl, hero)
      .pipe(tap((hero) => this.log(`create ${this.descAttributes(hero)}`)));
  }
  // PUT/heroes/id
  update(hero: Hero): Observable<Hero> {
    return this.http
      .put<Hero>(`${this.heroesUrl}/${hero.id}`, hero)
      .pipe(tap((hero) => this.log(`updated  ${this.descAttributes(hero)}`)));
  }

  private descAttributes(hero: Hero): String {
    return `hero id = ${hero.id} and name = ${hero.name}`;
  }

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }
}
