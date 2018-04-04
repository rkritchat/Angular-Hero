import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../hero.service';

@Component({
    selector:'app-hero',
    templateUrl:'./hero.component.html',
    styleUrls:['./hero.component.css']
})

export class HeroComponent implements OnInit{
    heroes:Hero[];
    selectedHero:Hero;
    constructor(private heroService:HeroService){

    }
    ngOnInit(){
        this.getHeroes();
    }

    getHeroes() : void{
        this.heroService.getHero().subscribe((hero)=>this.heroes=hero);
    }

    selectHero(hero:Hero): void{
        this.selectedHero = hero;
    }
}