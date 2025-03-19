import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeCardComponent } from './components/home-card/home-card.component';
import { Home } from './models/home';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Fixed typo: styleUrl -> styleUrls
})
export class AppComponent implements OnInit {
  title = 'angular-homes';
  homes: Home[] = [];

  ngOnInit(): void {
    axios
      .get<Home[]>('http://localhost:3000/homes')
      .then((response: { data: Home[] }) => {
        this.homes = response.data;
      });
  }

  // Sample home data for testing
  mockHome: Home[] = this.homes;
}
