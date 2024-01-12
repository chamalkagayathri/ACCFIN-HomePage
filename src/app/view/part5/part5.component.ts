import { Component } from '@angular/core';

@Component({
  selector: 'app-part5',
  template: `
    <div>
      <img src="../../../assets/Wrapper.png" alt="" style="width: 100%">
      <h1 style="position: relative;top: -400px;text-align: center;color: white">Explore Our Journey</h1>
      <p style="position: relative;top: -400px;text-align: center;color: white;font-weight: lighter">Immerse yourself in
        our journey, achievements, and client stories</p>
      <button
        style="position: relative;top: -400px;color: #7fc9e3;background-color: lightgray;border: none;border-radius: 100%;height: 80px;width: 80px;left: 700px">
        <i class="bi bi-play" style="font-size: 60px;font-weight: lighter;position: relative;left: 5px;top: -4px"></i>
      </button>
    </div>
  `,
  styleUrl: './part5.component.scss'
})
export class Part5Component {

}
