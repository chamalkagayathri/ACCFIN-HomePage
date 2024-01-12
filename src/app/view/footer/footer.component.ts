import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div style="background-color: #005E98;width: 100%;height: 400px;position: relative;top: 50px">
      <img src="../../../assets/darklogo.png" alt="" style="position: absolute;left: 150px;top: 40px;height: 80px">
      <div class="container">
        <div class="row" style="color: white;font-size: 13px">
          <div class="col" style="position: relative;left: 300px;top: 50px">
            <div style="padding-bottom: 10px"><a href="" style="text-decoration: none;color: white">Column One</a></div>
            <div style="padding-bottom: 5px"><a href="" style="text-decoration: none;color: white">Link One</a></div>
            <div style="padding-bottom: 5px"><a href="" style="text-decoration: none;color: white">Link Two</a></div>
            <div style="padding-bottom: 5px"><a href="" style="text-decoration: none;color: white">Link Three</a></div>
            <div style="padding-bottom: 5px"><a href="" style="text-decoration: none;color: white">Link Four</a></div>
            <div style="padding-bottom: 5px"><a href="" style="text-decoration: none;color: white">Link Five</a></div>
          </div>
          <div class="col" style="position: relative;left: 20px;top: 50px">
            <div style="padding-bottom: 10px"><a href="" style="text-decoration: none;color: white">Column Two</a></div>
            <div style="padding-bottom: 5px"><a href="" style="text-decoration: none;color: white">Link Six</a></div>
            <div style="padding-bottom: 5px"><a href="" style="text-decoration: none;color: white">Link Seven</a></div>
            <div style="padding-bottom: 5px"><a href="" style="text-decoration: none;color: white">Link Eight</a></div>
            <div style="padding-bottom: 5px"><a href="" style="text-decoration: none;color: white">Link Nine</a></div>
            <div style="padding-bottom: 5px"><a href="" style="text-decoration: none;color: white">Link Ten</a></div>
          </div>
          <div class="col" style="position: relative;left: -250px;top: 50px">
            <div style="padding-bottom: 10px"><a href="" style="text-decoration: none;color: white">Column Three</a></div>
            <div style="padding-bottom: 5px"><a href="" style="text-decoration: none;color: white">Link Eleven</a></div>
            <div style="padding-bottom: 5px"><a href="" style="text-decoration: none;color: white">Link Twelve</a></div>
            <div style="padding-bottom: 5px"><a href="" style="text-decoration: none;color: white">Link Thirteen</a></div>
            <div style="padding-bottom: 5px"><a href="" style="text-decoration: none;color: white">Link Fourteen</a></div>
            <div style="padding-bottom: 5px"><a href="" style="text-decoration: none;color: white">Link Fifteen</a></div>
          </div>
        </div>
      </div>

      <div class="container" style="color: white;font-size: 13px;padding-left: 860px;position: relative;top: -100px">
        <div class="row" style="padding-bottom: 10px">Subscribe</div>
        <div class="row" style="padding-bottom: 15px">Join our newsletter to stay up to date on features and releases.</div>
        <div class="row" style="padding-bottom: 15px">
          <input class="form-control me-2" aria-label="Search" style="border-radius: initial;width: 300px">
          <button class="btn btn-outline-light" style="border-radius: initial;width: 100px">Subscribe</button>
        </div>
        <div class="row">By Subscribing you agree to with our privacy Policy and provide consent to <br>recieve updates from our company.</div>
      </div>

      <div style="background-color: white;height: 0.5px;width: 1200px;position: relative;left: 150px"></div>

      <div class="container">
        <div class="row" style="padding-top: 20px">
          <div class="col"><a href="" style="text-decoration: none;color: white;font-size: 13px;position: relative;left: 60px">2023 7Needle. All right reserved.</a></div>
          <div class="col"><a href="" style="text-decoration: none;color: white;font-size: 13px;position: relative;left: -60px">Privacy Policy</a></div>
          <div class="col"><a href="" style="text-decoration: none;color: white;font-size: 13px;position: relative;left: -280px">Terms of Service</a></div>
          <div class="col"><a href="" style="text-decoration: none;color: white;font-size: 13px;position: relative;left: -480px">Cookies Settings</a></div>
        </div>
      </div>

     <div style="position: absolute;top: 330px;left: 1220px">
       <a href="" style="padding-right: 20px"><i class="bi bi-facebook" style="color: white"></i></a>
       <a href="" style="padding-right: 20px"><i class="bi bi-instagram" style="color: white"></i></a>
       <a href="" style="padding-right: 20px"><i class="bi bi-twitter" style="color: white"></i></a>
       <a href="" style="padding-right: 20px"><i class="bi bi-linkedin" style="color: white"></i></a>
     </div>
    </div>
  `,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
