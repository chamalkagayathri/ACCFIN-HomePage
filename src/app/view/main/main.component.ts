import { Component } from '@angular/core';


@Component({
  selector: 'app-main',
  template: `
    <div style="font-family: 'Roboto', sans-serif">
      <app-header/>
      <app-part1/>
      <app-part2/>
      <app-part3/>
      <app-part4/>
      <app-part5/>
      <app-part6/>
      <app-part7/>
      <app-part8/>
      <app-footer/>
    </div>
  `,
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
