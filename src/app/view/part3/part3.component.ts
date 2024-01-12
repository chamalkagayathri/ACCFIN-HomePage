import { Component } from '@angular/core';

@Component({
  selector: 'app-part3',
  styleUrl: './part3.component.scss',
  template: `
    <div style="padding-left: 150px;padding-right: 150px">
    <div class="container" style="padding-top: 100px">
      <div class="row">
        <div class="col-6">
          <img src="../../../assets/OBJECTS.svg" alt="" style="height: 400px">
        </div>
        <div class="col-6">
          <h5 style="color: #005E98">About ACCFIN</h5>
          <h1>Your Business Partner</h1>
          <h1>for <span  class="text-primary">Success</span></h1>
          <p style="font-size: 13px;font-family: 'Roboto Thin 100', sans-serif">ACCFIN is your trusted partner for comprehensive business solutions. Our expert team <br>
            specializes in Business Setup, Online Bookkeeping, Legal Services, Payroll Management, and <br>
            cutting-edge Technology solutions, With a mission to simplify business management, we <br>
            provide tailored support and guidance to help your business thrive. Our commitment to <br>
            innovation keeps us at the forefront of technology, adapting to your evolving needs. Choose <br>
            AccFin for a dedicated partner invested in your business's success
            <br>
            <br>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci exercitationem mollitia officiis velit. At dolorem ducimus fugit illum magnam maiores nobis <br> officia officiis, quaerat quasi qui, sequi ullam unde.
          </p>
          <br>
          <button type="button" class="btn btn-primary " style="width: 180px;background-color: #005E98;height: 50px">About Us</button>
        </div>
      </div>
    </div>
    </div>
  `
})
export class Part3Component {

}
