 

import { Component } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  name: string = '';
  id: string = '123456789';  // תז - לא ניתנת לעריכה
  address: string = '';
  email: string = '';

  saveDetails() {
    alert('הפרטים נשמרו בהצלחה!');
  }
}
