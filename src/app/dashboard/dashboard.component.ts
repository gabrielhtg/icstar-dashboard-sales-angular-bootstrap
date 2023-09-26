// dashboard.component.ts

import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $: any; // Deklarasikan jQuery

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(function (menuItem) {
      const subMenu = menuItem.querySelector(".sub-menu");

      menuItem.addEventListener("click", function (e) {
        e.preventDefault();
        if (subMenu) {
          subMenu.classList.toggle("show-sub-menu");
        }
      });
    });

    const sidebar = document.querySelector('.sidebar');
    const navbar = document.querySelector('.navbar');

    const sidebarCollapse = document.getElementById('sidebarCollapse');

    if (sidebar && navbar && sidebarCollapse) {
      sidebarCollapse.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        navbar.classList.toggle('active');
      });
    }
  }
}
