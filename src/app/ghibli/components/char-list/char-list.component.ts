import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'ghibli-char-list',
  templateUrl: './char-list.component.html',
  styleUrls: ['./char-list.component.css']
})
export class CharListComponent {
  @Input()
  public characterList: Character[] = [];

  @Output()
  onDeleteCharacter: EventEmitter<string> = new EventEmitter;

  deleteCharacterById(id: string) {
    this.onDeleteCharacter.emit(id);
  }
}
