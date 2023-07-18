import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid'

import { Character } from '../interfaces/character.interface';

@Injectable(
  {providedIn: 'root'}
  )
export class GhibliService {
  constructor() { }

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Calicifer',
      raiting: 5
    },
    {
      id: uuid(),
      name: 'Wizard Howl',
      raiting: 4
    },
    {
      id: uuid(),
      name: 'Sophie Hatter',
      raiting: 5
    }
  ];

  addCharacter(char: Character): void {
    const newChar: Character = {...char, id: uuid()}
    this.characters.push(newChar);
  }

  onDeleteCharacterById(id:string): void {
    this.characters = this.characters.filter(character => character.id !== id)
  }

}
