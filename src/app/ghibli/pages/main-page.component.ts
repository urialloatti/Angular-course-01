import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { GhibliService } from '../services/ghibli.service';

@Component({
  selector: 'app-ghibli-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( private ghibliService: GhibliService) {}

  get characters(): Character[] {
    return [...this.ghibliService.characters]
  }

  onDeleteCharacter(id: string): void {
    this.ghibliService.onDeleteCharacterById(id)
  }

  onNewCharacter(char: Character): void {
    this.ghibliService.addCharacter(char)
  }
}
