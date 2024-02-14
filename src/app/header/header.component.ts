import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) {}
userRole = 'user';
  ngOnInit(): void {}

  goToHome() {
    this.router.navigate(['home']);
  }

  goToProducts() {
    this.router.navigate(['products']);
  }

  goToAbout() {
    this.router.navigate(['about']);
  }

  goToContact() {
    this.router.navigate(['contact']);
  }

  goToAdmin() {
    // if(this.userRole === 'admin'){
    //   this.router.navigate(['admin']);
    // }else{
    //   this.router.navigate(['access-denied'])
    // }
    this.router.navigate(['admin']);
  }

  goToOffers() {
    this.router.navigate(['offers']);
  }

}
