import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div style="padding-left: 150px;padding-right: 150px">
    <nav class="navbar navbar-expand-lg" style="text-align: center">
      <div class="container-fluid">
        <img src="../../../assets/accfin_logo.jpg" alt="" style="height: 100px;width: 150px">
        <div class="collapse navbar-collapse" id="navbarSupportedContent" style="padding-left: 100px;font-size: 15px">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#" style="color: #005E98;font-weight: bold">Home</a>
            </li>
            <li class="nav-item" style="padding-left: 30px">
              <a class="nav-link active" aria-current="page" href="#">About Us</a>
            </li>
            <li class="nav-item" style="padding-left: 30px">
              <a class="nav-link active" aria-current="page" href="#">Services</a>
            </li>
            <li class="nav-item" style="padding-left: 30px">
              <a class="nav-link active" aria-current="page" href="#">Knowledge Hub</a>
            </li>
            <li class="nav-item" style="padding-left: 30px">
              <a class="nav-link active" aria-current="page" href="#">Careers</a>
            </li>
            <li class="nav-item" style="padding-left: 30px">
              <a class="nav-link active" aria-current="page" href="#">Contact Us</a>
            </li>
          </ul>
          <i class="bi bi-search" style="padding-right: 15px"></i>
          <button class="btn" type="submit" style="color: white;background-color: #005E98;width: 150px;height: 40px;font-size: 15px">Inquire Now</button>
        </div>
      </div>
    </nav>
    </div>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
