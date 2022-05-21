import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

  course!: Course

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')

    if(id !== null)
      this.courseService
        .retriveById(+id)
        .subscribe({
          next: course => {
            this.course = course
          },
          error: error => console.log(error)
        })
  }

  save(): void {
    this.courseService
      .save(this.course)
      .subscribe({
        next: course => console.log(course),
        error: error => console.log(error)
      })
  }
}
