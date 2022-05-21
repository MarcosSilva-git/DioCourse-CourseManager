import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "./user";
import { UserService } from "./user.service";

@Component({
  templateUrl: './user-info.component.html'
})
export class UserInfoComponent implements OnInit {

  user!: User

  constructor(private activatedRoute: ActivatedRoute, private courseService: UserService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')

    // if(id !== null)
    //   this.courseService
    //     .retriveById(+id)
    //     .subscribe({
    //       next: user => {
    //         this.user = user
    //       },
    //       error: error => console.log(error)
    //     })
  }

  // save(): void {
  //   this.courseService
  //     .save(this.course)
  //     .subscribe({
  //       next: user => console.log(user),
  //       error: error => console.log(error)
  //     })
  // }
}
