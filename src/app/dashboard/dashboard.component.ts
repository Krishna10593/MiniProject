import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  constructor(private _router:Router){}
  logout(){
    sessionStorage.clear();
    this._router.navigateByUrl("");
  }
}
