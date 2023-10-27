import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  listLinkCSS = `text-slate-100 p-3 border border-solid border-purple-500 rounded-md mx-2 hover:shadow-lg hover:bg-sky-500 hover:border-slate-100`;
  isActive:boolean = true;
  constructor() {}

  ngOnInit(): void {}
}
