import { Component, OnInit } from "@angular/core";
import { UserService } from "./user.service";
import { User } from "./user";

@Component({
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  _users: User[] = []
  filtedUsers: User[] = []

  _filterBy!: string

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.retriveAll()
  }

  retriveAll(): void {
    this.userService.retriveAll().subscribe({
      next: users => {
        this._users = users.results
        this.filtedUsers = this._users
      },
      error: error => console.log(error)
    })
  }

  // deleteById(courseId: number): void {
  //   this.userService
  //     .deleteByID(courseId)
  //     .subscribe({
  //       next: () => {
  //         const deletedCourse = this._users.find(course => course.id === courseId)

  //         alert(`The course "${deletedCourse!.name}" was deleted!`)
  //         this.retriveAll()
  //       },
  //       error: () => {
  //         alert('Was not possible delet the course!')
  //       }
  //     })
  // }

  set filter(value: string) {
    this._filterBy = value.toLocaleLowerCase()

    this.filtedUsers = this._users.filter(user => user.name.first.toLocaleLowerCase().includes(this._filterBy))
  }

  get filter() {
    return this._filterBy
  }

}
