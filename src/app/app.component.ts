import { Component, OnInit } from '@angular/core';
import { NgsRevealConfig } from 'ngx-scrollreveal';
import * as ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NgsRevealConfig],
})
export class AppComponent implements OnInit {
  title = 'my-resume';
  darkMode: string | undefined;

  constructor(config: NgsRevealConfig) {
    config.distance = '50px';
    config.duration = 1500;
    config.easing = 'cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    config.origin = 'top';
    config.beforeReveal = (el: HTMLElement) => {};
  }

  ngOnInit() {
    const menuElement = document.querySelector('.menu');
    const menuToggleButton = document.querySelector('.menu-toggle-button');

    document.querySelectorAll('.menu-toggle-button').forEach((btn) => {
      btn.addEventListener('click', () => {
        menuElement?.classList.toggle('change');
        menuToggleButton?.classList.toggle('change');
      });
    });

    const RemoveActiveLinkClass = (e: any) => {
      if (e.target.classList.contains('list-link')) {
        menuElement?.classList.toggle('change');
        menuToggleButton?.classList.toggle('change');
      }
    };

    document.addEventListener('click', RemoveActiveLinkClass);

    const themeToggleButton = document.querySelector('.theme-toggle-button');
    const bodyElement = document.body;
    // const currentTheme = localStorage.getItem('darktheme');
    // console.log(currentTheme);

    // if (currentTheme) {
    //   bodyElement.classList.add('.dark-theme');
    // }

    const toggelTheme = () => {
      bodyElement?.classList.toggle('dark-theme');
      // if (bodyElement.classList.contains('dark-theme')) {
      //   localStorage.setItem('darktheme', 'active');
      // } else {
      //   localStorage.removeItem('darktheme');
      // }
    };
    themeToggleButton?.addEventListener('click', toggelTheme);
  }
}
