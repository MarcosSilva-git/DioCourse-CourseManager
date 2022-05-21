import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RadomUserDTO } from "./RandomUserDTO";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = 'https://randomuser.me/api/'
  userRoute: string = this.baseUrl + '?results=100'

  constructor(private httpClient: HttpClient) { }

  retriveAll(): Observable<RadomUserDTO> {
    return this.httpClient.get<RadomUserDTO>(this.userRoute)
  }

  // retriveById(id: number): Observable<User> {
  //   return this.httpClient.get<User>(`${this.courseRoute}/${id}`)
  // }

  // save(newCourse: User): Observable<User> {
  //   if(newCourse.id)
  //     return this.httpClient.put<User>(`${this.courseRoute}/${newCourse.id}`, newCourse)

  //   else
  //     return this.httpClient.post<User>(`${this.courseRoute}/${newCourse.id}`, {
  //       newCourse
  //     })
  // }

  // deleteByID(id: number): Observable<any> {
  //   return this.httpClient.delete(`${this.courseRoute}/${id}`)
  // }

}
