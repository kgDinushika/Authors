import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  router:Router;
  constructor(router:Router) { 
    this.router=router;
  }

  ngOnInit(): void {
  }

  onsubmit()
  {
    this.router.navigate(['shop']);
  }
}
