import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../components/auth/auth.service';
import { CoursesService } from './courses.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user:User = {email: '', enrolledCourses: [], ratedCourses: []}
  constructor(public router:Router, public authService: AuthService, public courseService: CoursesService) {
    this.user.email = authService.getUser().email;
  }
}
