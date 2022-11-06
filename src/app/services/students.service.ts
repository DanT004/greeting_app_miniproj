import { Injectable } from '@angular/core';
import { Istudent } from '../interfaces/istudent';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  students:Istudent = {
    firstName: "Bat",
    lastName: "Man"
  };
  constructor() { }
}
