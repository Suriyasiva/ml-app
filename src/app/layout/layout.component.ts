import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {

  showSideBar: boolean = true;

  isAuthenticated: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(this.isAuthenticated){
      this.handleAuthSuccess()
    };
  };

  handleAuthSuccess() {
    const currentPath: string = this.router.url;
    if (currentPath === "/app/dashboard") {
      this.router.navigate(['/app/dashboard/overview']);
    }
  }

  handleMinimize() {
    this.showSideBar = !this.showSideBar;
  }

  

}
