import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { COURSES } from '../mock-courses';
import { Course } from '../models/Course';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  // dbCourses: AngularFireList<Course>;
  // dataObserver: Observable<any[]>;
  courses: Course[];
  constructor(private db: AngularFireDatabase) {
    // this.dbCourses = db.list<Course>('/kursy');
    // this.dataObserver = this.dbCourses.valueChanges();
    // this.dataObserver.subscribe(courses => this.courses = courses)
  }

  getCourses() : Observable<Array<Course>> {
    return of(COURSES);

    // return this.db.list('https://wdai-kursy-74c6f.firebaseio.com/kursy').valueChanges();
    // return this.dataObserver;
  }

  getCourse(index:number) : Observable<Course> {
    return of(COURSES[index]);

    // return this.db.object(`/kursy/`)
    // return this.dbCourses[index];
  }

  addCourse(course) {
    COURSES.push(course);


    // let key = this.dbCourses.push(course).key;
    // course.id = key;
    // // this.db.object(`/kursy/${key}`).update(course);
    // this.db.list('/kursy').push(course);
  }

  deleteCourse(course) {
    COURSES.splice(COURSES.indexOf(course), 1);
    // this.db.object(`/kursy/${course.id}`).remove();
  }

  // update(course) {
  //   this.db.object(`/courses/${course.id}`).update(course);
  // }


  

  // constructor() { }

  // getCourses() : Observable<Course[]> {
  //   return of(COURSES);
  // }

  // getCourse(index:number) : Observable<Course> {
  //   return of(COURSES[index]);
  // }

  // addCourse(course) {
  //   COURSES.push(course);
  // }

  // deleteCourse(course) {
  //   COURSES.splice(COURSES.indexOf(course), 1);
  // }
}
