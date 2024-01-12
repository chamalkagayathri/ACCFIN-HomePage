import { Component } from '@angular/core';

@Component({
  selector: 'app-part1',
  template: `
    <div style="padding-left: 150px;padding-right: 150px;padding-top: 80px">
    <div class="container" style="padding-top: 50px">
      <div class="row">
        <div class="col-7">
          <h1 style="font-size: 3.5rem">Empowering Your</h1>
          <h1 style="font-size: 3.5rem">Business <span class="text-primary">Success</span></h1>
          <p style="font-size: 13px;font-family: 'Roboto Thin 100', sans-serif">AccFin streamlines Business Setup, Bookkeeping, Legal Services, Payroll Management, and offers<br>Dedicated Support on our advanced Technology Platform. Unlock success effortlessly with AccFin<br>- your partner for business prosperity.</p>
          <br>
          <button type="button" class="btn btn-primary " style="width: 180px;background-color: #005E98;height: 50px">Our Services</button>
        </div>
        <div class="col-5">
          <img src="../../../assets/Vector.svg" alt="" style="height: 500px;position: relative;right: 100px">
        </div>
      </div>
    </div>
    </div>
     `,
  styleUrl: './part1.component.scss'
})
export class Part1Component {

}
