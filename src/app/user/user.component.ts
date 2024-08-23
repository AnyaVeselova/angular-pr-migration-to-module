import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // The old way:
  @Input({ required: true }) avatar!: string | null;
  @Input({ required: true }) name!: string;

  // The new way: using input signals - read only
  // avatar = input.required<string>();
  // name = input.required<string>();

  get imagePath() {
    return `/users/${this.avatar}`;
  }
  // The new way: using computed on sygnals
  // imagePath = computed(() => {
  //   return `/users/${this.avatar()}`;
  // });

  onSelectUser() {
    this.select.emit(this.id);
  }
}
