import { Component } from '@angular/core';

@Component({
  selector: 'app-part2',
  template: `
    <div style="padding-left: 150px;padding-right: 150px">
    <div class="container" style="padding-top: 100px">
      <div class="row">
        <div class="col-3">
          <div class="container">
            <div class="row">
              <div class="col-4">
                <img src="../../../assets/rocket.svg" alt="">
              </div>
              <div class="col-8" style="color: #005E98">
                <h1>89+</h1>
                <p>Business Boosted</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="container">
            <div class="row">
              <div class="col-4">
                <img src="../../../assets/world.svg" alt="">
              </div>
              <div class="col-8" style="color: #005E98">
                <h1>3</h1>
                <p>Different Regions</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="container">
            <div class="row">
              <div class="col-4">
                <img src="../../../assets/trophy.svg" alt="">
              </div>
              <div class="col-8" style="color: #005E98">
                <h1>18</h1>
                <p>Industry Awards</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="container">
            <div class="row">
              <div class="col-4">
                <img src="../../../assets/user.svg" alt="">
              </div>
              <div class="col-8" style="color: #005E98">
                <h1>75+</h1>
                <p>Satisfied Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  `,
  styleUrl: './part2.component.scss'
})
export class Part2Component {

}
