
import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  students: any[]; 
  constructor() {
    
    this.students = [
      { firstName: 'Nutsa', lastName: 'Jashiashvili', personalNumber: '01205047941' },
      { firstName: 'Mari', lastName: 'Gviniashvili', personalNumber: '016890765' },
      { firstName: 'Luka', lastName: 'Gumberidze', personalNumber: '015678900' }
    ];
  }
}
