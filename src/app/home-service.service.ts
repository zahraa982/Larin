import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
students = [
  {id:101, name: "alex", email: "alex@gmail.com"},
  {id:102, name: "Lamy", email: "Lamy@gmail.com"},
  {id:103, name: "Bary", email: "Bary@gmail.com"}
]
  constructor() { }

  public getStudent(): Array<{id,name,email}>{
  return this.students;
  }
  public createStudent(students: {id,name,email}){
  this.students.push(students)
}
}
