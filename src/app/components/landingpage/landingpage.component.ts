import { Component } from '@angular/core';
import { HomeCardComponent } from '../home-card/home-card.component';
import { Home } from '../../models/home';
import { OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-landingpage',
  imports: [HomeCardComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css',
})
export class LandingpageComponent implements OnInit {
  title = 'angular-homes';
  homes: Home[] = [];

  ngOnInit(): void {
    axios
      .get<Home[]>('http://localhost:3000/homes')
      .then((response: { data: Home[] }) => {
        this.homes = response.data;
      });
  }
}
