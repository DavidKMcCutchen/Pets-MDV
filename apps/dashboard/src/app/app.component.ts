import { Component } from '@angular/core';


@Component({
  selector: 'pets-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Dogs';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'dogs', icon: 'view_list', title: 'Dogs'}
  ]
}
