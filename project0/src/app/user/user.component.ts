import { Component, input, output} from '@angular/core';
import { User } from './user.model';

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.component.css',
  templateUrl: './user.component.html',
})
export class UserComponent {
  name = "Cristo Sebastian Edmundo Gonzalez";

  user = input.required<User>();
  select = output<string>();
  selected = input.required<boolean>();

  get imagePath(): string {
    return "/users/" + this.user().avatar;
  }

  onSelectUser(){
    this.select.emit(this.user().id);
  }



}