import { Component } from '@angular/core';

@Component({
  selector: 'app-part4',
  template: `

    <div style="padding-left: 150px;padding-right: 150px">
      <div style="text-align: center;padding-top: 100px">
        <h5 style="color: #005E98">What We Offer</h5>
        <h1>Our Comprehensive <span class="text-primary">Services</span></h1>
        <p style="font-size: 15px;font-family: 'Roboto Thin 100', sans-serif">Empowering business with tailored solutions, AccFin ensures success through expert guidance, precision, and
          <br>unwavering support</p>
      </div>

      <div class="container">
        <button style="background-color: transparent;border: 1px solid #005E98;border-radius: 100%;position: relative;left: -100px;top: 240px;height: 50px;width: 50px">
          <i class="bi bi-chevron-left" style="color: #005E98;font-size: 25px"></i>
        </button>
        <div class="row">
          <div class="col-4" style="padding-top: 20px">
            <div class="card shadow-sm p-3 mb-5 bg-body-tertiary rounded" style="width: 350px;height: 400px;border: none">
              <img src="../../../assets/abstract_720652%201.svg" class="card-img-top" alt=""
                   style="height: 130px;padding-right: 200px;padding-top: 50px">
              <div class="card-body">
                <h4 class="card-title">Business Setup</h4>
                <p class="card-text" style="font-family:'Roboto Thin 100', sans-serif;color: gray">Lorem ipsum dolor sit amet,ibussed temporibu fugit ipsa iure mollitia non obcaecati
                  perspiciatis temporibus vel velit...</p>
              </div>
              <div class="card-body" style="padding-bottom: 60px">
                <a href="#" class="card-link" style="text-decoration: none;color: #005E98">Read More <i
                  class="bi bi-arrow-right-short" style="color: #005E98"></i></a>
              </div>
            </div>
          </div>
          <div class=" col-4">
            <div class="card" style="width: 350px;height: 450px;color: white;background-color: #005E98;border-bottom-right-radius: 20px;border-top-left-radius: 20px;padding-top: 60px;padding-left: 20px">
              <img src="../../../assets/abstract(1).png" class="card-img-top" alt="" style="height: 80px;width: 80px">
              <div class="card-body">
                <h4 class="card-title">Business Setup</h4>
                <p class="card-text">Lorem ipsum dolor sit amet,ibussed temporibu fugit mollitia non obcaecati
                  perspiciatis temporibus vel velit...</p>
              </div>
              <div class="card-body" style="padding-bottom: 60px">
                <a href="#" class="card-link" style="text-decoration: none;color: white">Read More <i
                  class="bi bi-arrow-right-short" style="color: white"></i></a>
              </div>
            </div>
          </div>
          <div class="col-4" style="padding-top: 20px">
            <div class="card shadow-sm p-3 mb-5 bg-body-tertiary rounded" style="width: 350px;height: 400px;border: none">
              <img src="../../../assets/abstract_720652%201.svg" class="card-img-top" alt=""
                   style="height: 130px;padding-right: 200px;padding-top: 50px">
              <div class="card-body">
                <h4 class="card-title">Business Setup</h4>
                <p class="card-text" style="font-family:'Roboto Thin 100', sans-serif;color: gray">Lorem ipsum dolor sit amet,ibussed temporibu fugit ipsa iure mollitia non obcaecati
                  perspiciatis temporibus vel velit...</p>
              </div>
              <div class="card-body" style="padding-bottom: 60px">
                <a href="#" class="card-link" style="text-decoration: none;color: #005E98">Read More <i
                  class="bi bi-arrow-right-short" style="color: #005E98"></i></a>
              </div>
            </div>
          </div>
        </div>
        <button style="background-color: transparent;border: 1px solid #005E98;border-radius: 100%;position: relative;right: -1160px;top: -293px;height: 50px;width: 50px">
          <i class="bi bi-chevron-right" style="color: #005E98;font-size: 25px"></i>
        </button>
      </div>
    </div>
  `,
  styleUrl: './part4.component.scss'
})
export class Part4Component {

}
