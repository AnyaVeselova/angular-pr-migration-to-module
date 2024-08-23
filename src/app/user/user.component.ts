import { Component, Input, Output, EventEmitter, output } from '@angular/core';

interface User {
  id: string;
  name: string;
  avatar: string;
}
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // The old way:
  @Input({ required: true }) user!: User;
  //Old way
  @Output() select = new EventEmitter<string>();

  //new way
  // select = output<string>();

  // The new way: using input signals - read only
  // avatar = input.required<string>();
  // name = input.required<string>();

  get imagePath() {
    return `/users/${this.user.avatar}`;
  }
  // The new way: using computed on sygnals
  // imagePath = computed(() => {
  //   return `/users/${this.avatar()}`;
  // });

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
