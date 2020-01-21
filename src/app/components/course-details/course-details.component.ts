import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/models/Course';
import { CoursesService } from 'src/app/services/courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})

export class CourseDetailsComponent implements OnInit {
  @Input() index: number;
  courses: Course[];
  course: Course;
  @Input() rate: number;

  constructor(private coursesService:CoursesService, private usersService: UsersService, private route: ActivatedRoute, private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
    this.getCourse();
  }

  onSubmitCourse() {
    this.course.sumOfRatings += this.rate;
    this.course.numberOfRatings ++;
  }

  getCourse(): void {
    const index = +this.route.snapshot.paramMap.get('index');
    this.coursesService.getCourse(index)
      .subscribe(course => this.course = course);
  }

}
