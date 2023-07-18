import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'ghibli-add-char',
  templateUrl: './add-char.component.html',
  styleUrls: ['./add-char.component.css']
})
export class AddCharComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter;

  public character: Character = {
    id: '',
    name: '',
    raiting: 0
  };

  emitCharacter(): void {
    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);
    this.character = {id: '', name: '', raiting: 0};
  }
}
