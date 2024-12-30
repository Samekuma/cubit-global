import { Component } from '@angular/core';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent {
  backgroundImageUrl: string = 'assets/images/featured/cta.jpg';

  constructor() {}

  showMessage(msg: string): string {
    return msg;
  }
}
