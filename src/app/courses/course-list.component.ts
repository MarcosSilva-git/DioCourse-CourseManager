import { Component, OnInit } from "@angular/core";
import { CourseService } from "./course.service";
import { Course } from "./course";

@Component({
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

  _courses: Course[] = []
  filtedCourses: Course[] = []

  _filterBy!: string

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.retriveAll()
  }

  retriveAll(): void {
    this.courseService.retriveAll().subscribe({
      next: courses => {
        this._courses = courses
        this.filtedCourses = this._courses
      },
      error: error => console.log(error)
    })
  }

  deleteById(courseId: number): void {
    this.courseService
      .deleteByID(courseId)
      .subscribe({
        next: () => {
          const deletedCourse = this._courses.find(course => course.id === courseId)

          alert(`The course "${deletedCourse!.name}" was deleted!`)
          this.retriveAll()
        },
        error: () => {
          alert('Was not possible delet the course!')
        }
      })
  }

  set filter(value: string) {
    this._filterBy = value.toLocaleLowerCase()

    this.filtedCourses = this._courses.filter(course => course.name.toLocaleLowerCase().includes(this._filterBy))
  }

  get filter() {
    return this._filterBy
  }

}
