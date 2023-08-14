import { Component } from '@angular/core';
import { SuperHero } from './models/super-hero'; // Import model
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SuperHero.UI';

  heroes: SuperHero[] = []; // Declare an array of SuperHero objects

  constructor(private superHeroServices: SuperHeroService) {}

  ngOnInit(): void {
    // Fetch superhero data from a service and assign it to the heroes array
    this.heroes = this.superHeroServices.getSuperHeroes();
    console.log(this.heroes);
  }
}
