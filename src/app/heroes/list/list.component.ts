import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  heroesNames: string[] = ['Spiderman', 'Ironman', 'Thor', 'Black Widow'];
  deletedHero?: string

  removeLastHero(): void {
    this.deletedHero = this.heroesNames.pop();
  }

}
