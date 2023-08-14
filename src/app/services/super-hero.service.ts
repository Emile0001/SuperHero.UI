import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero'; // Import model

@Injectable({
  providedIn: 'root',
})
export class SuperHeroService {
  public getSuperHeroes(): SuperHero[] {
    let hero = new SuperHero(); // Creating a new instance of SuperHero
    hero.id = 1; // assigning values to SuperHero properties
    hero.name = 'Spider Man';
    hero.firstName = 'Peter';
    hero.lastName = 'Parker';
    hero.place = 'New York City';

    return [hero]; // Returning an array containing the created SuperHero object
  }
}
