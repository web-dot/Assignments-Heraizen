import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messgaeService : MessageService) {}

  getHeroes():Observable<Hero[]>{
    const heroes = of(HEROES);
    this.messgaeService.add('HeroService: fetched heroes');
    return heroes;
  }
}
