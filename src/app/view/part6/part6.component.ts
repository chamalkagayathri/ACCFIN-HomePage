import { Component } from '@angular/core';

@Component({
  selector: 'app-part6',
  template: `
    <div style="padding-left: 150px;padding-right: 150px">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <h5 style="color: #005E98">Hear From Our Clients</h5>
            <h1>What People Say <span class="text-primary">About Us</span></h1>
            <p  style="font-size: 15px;font-family: 'Roboto Thin 100', sans-serif">Discover what our satisfied clients say about their experience with <br>ACCFIN's exceptional services and support</p>
            <img src="../../../assets/aboutus.png" alt="" style="height: 500px">
          </div>
          <div class="col-6">
            <div class="card shadow-sm p-3 mb-5 bg-body-tertiary rounded" style="width: 560px;height: 170px;border: none;border-bottom-right-radius: 50px;border-top-left-radius: 50px;position: relative;left: -40px">
              <div class="card-body">
                <div class="container">
                  <div class="row">
                    <div class="col-3">
                      <img src="../../../assets/p2.jpg" alt="" style="border-radius: 100%;height: 80px">
                    </div>
                    <div class="col-9">
                      <h5>John D.</h5>
                      <p style="color: gray" class="card-text">ACCFIN has been instrumental in our business <br>growth. Their expertise in financial management <br> is unmatched.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card shadow-sm p-3 mb-5 bg-body-tertiary rounded" style="width: 560px;height: 170px;border: none;position: relative;left: 50px">
              <div class="card-body">
                <div class="container">
                  <div class="row">
                    <div class="col-3">
                      <img src="../../../assets/p3.jpg" alt="" style="border-radius: 100%;height: 80px">
                    </div>
                    <div class="col-9">
                      <h5>David W.</h5>
                      <p style="color: gray" class="card-text">ACCFIN's legal services team navigated complex<br>regulations effortlessly, ensuring our business<br>stays compliant and secure.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card shadow-sm p-3 mb-5 bg-body-tertiary rounded" style="width: 560px;height: 170px;border: none;position: relative;left: -40px">
              <div class="card-body">
                <div class="container">
                  <div class="row">
                    <div class="col-3">
                      <img src="../../../assets/p1.jpg" alt="" style="border-radius: 100%;height: 80px">
                    </div>
                    <div class="col-9">
                      <h5>Sarah L.</h5>
                      <p style="color: gray" class="card-text">Efficient, reliable, and responsive--ACCFIN has<br>been a true partner in managing our payroll<br>seamlessly.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  `,
  styleUrl: './part6.component.scss'
})
export class Part6Component {

}
