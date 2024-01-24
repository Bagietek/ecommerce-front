import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section>
      <a [href]="externalLink" target="_self">Zaloguj</a>
      <button routerLink="shop">Sklep</button>
      <router-outlet></router-outlet>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
    externalLink = `http://localhost:8080/login`;
}
