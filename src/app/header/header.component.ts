import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo: string;
  logoUrl: string;
  menuList: any = [
    { name: 'search', link: '/search' },
    { name: 'service', link: '/service' },
    { name: 'about', link: '/about' },
    { name: 'home', link: '/home' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
