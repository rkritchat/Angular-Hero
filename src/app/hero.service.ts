import { Component,Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HEROES } from './mock-hero';
import { Hero } from './hero/hero';

@Injectable()
export class HeroService{
    constructor(){}

    getHero():Observable<Hero[]>{
        return of(HEROES);
    }
}