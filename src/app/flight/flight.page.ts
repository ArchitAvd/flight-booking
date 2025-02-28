import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.page.html',
  styleUrls: ['./flight.page.scss'],
  standalone: false,
})
export class FlightPage implements OnInit {
  flight: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Fetch the flight data passed through router state
    const navigation = this.router.getCurrentNavigation();
    console.log('Navigation:', navigation);
    if (navigation?.extras?.state?.['data']) {
      // Corrected bracket notation for accessing 'data'
      this.flight = navigation.extras.state['data'].flight; // Access the flight from 'data'
      console.log('Flight Data:', this.flight);
    } else {
      console.error('No flight data found!');
    }
  }

  bookFlight() {
    alert('Flight booked!');
  }
}
