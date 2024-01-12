import { Component } from '@angular/core';

@Component({
  selector: 'app-part7',
  template: `
    <div style="padding-left: 150px;padding-right: 150px">
      <div style="text-align: center;padding-top: 100px">
        <h1>Our Trusted <span class="text-primary">Partners</span></h1>
        <p  style="font-size: 15px;font-family: 'Roboto Thin 100', sans-serif">Explore the successful collaborations with our esteemed clients who have chosen
          <br>ACCFIN for their business needs.</p>
      </div>
      <div class="container" style="padding-top: 50px">
        <div class="row">
          <div class="col-2">
            <img src="../../../assets/Group%206.svg" alt="" style="height: 120px">
          </div>
          <div class="col-2">
            <img src="../../../assets/Group%201.svg" alt="" style="height: 120px;padding-left: 20px">
          </div>
          <div class="col-2">
            <img src="../../../assets/Group%203.svg" alt="" style="height: 120px;padding-left: 30px">
          </div>
          <div class="col-2">
            <img src="../../../assets/Group%205.svg" alt="" style="height: 120px;padding-left: 40px">
          </div>
          <div class="col-2">
            <img src="../../../assets/Group%207.svg" alt="" style="height: 120px;padding-left: 50px">
          </div>
          <div class="col-2">
            <img src="../../../assets/Group%204.svg" alt="" style="height: 120px;padding-left: 60px">
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './part7.component.scss'
})
export class Part7Component {

}
