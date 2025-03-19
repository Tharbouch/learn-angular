import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideAngularModule,
  WavesLadder,
  Bed,
  Bath,
  MapPin,
} from 'lucide-angular';

export interface Home {
  id?: number; // Optional as it will be auto-generated for new homes
  title: string; // Title of the home listing
  description: string; // Detailed description of the property
  city: string; // City where the property is located
  rooms: number; // Number of rooms in the property
  bathrooms: number; // Number of bathrooms in the property
  hasPool: boolean; // Whether the property has a pool
  picture: string; // URL to the picture of the property
}

@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css'],
})
export class HomeCardComponent {
  @Input() home!: Home;
  readonly wavesLadderIcon = WavesLadder;
  readonly bedIcon = Bed;
  readonly bathIcon = Bath;
  readonly mapPinIcon = MapPin;
}
