import { Component } from '@angular/core';
import { Istudent } from './interfaces/istudent';
import { StudentsService } from './services/students.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'studentName';
  student:Istudent;

  constructor(studentsService:StudentsService){
    this.student = studentsService.students
  }
}
