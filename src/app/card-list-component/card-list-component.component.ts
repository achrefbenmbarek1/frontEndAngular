import { Component } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-card-list-component',
  templateUrl: './card-list-component.component.html',
  styleUrls: ['./card-list-component.component.css']
})
export class CardListComponentComponent {
  users: User[] = [
    new User('doctor', 'assets/doctor.jpg'),
    new User('secretary', 'assets/7941.jpg')
  ];
}
