import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrl: './app.component.scss',
  template: `
    <app-main/>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'home-page';
}
