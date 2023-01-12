import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-card-user-component',
  templateUrl: './card-user-component.component.html',
  styleUrls: ['./card-user-component.component.css']
})
export class CardUserComponentComponent implements OnInit {
  @Input() user!: User;
  constructor() { }
  ngOnInit() {
  }
}
