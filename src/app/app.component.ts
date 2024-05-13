import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // const currentPath: string = this.router.url;
    // if (currentPath === "/") {
    //   this.router.navigate(['/app/dashboard']);
    // }
    // console.log('currentPath :>> ', currentPath);
  }

}
