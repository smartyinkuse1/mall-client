import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  api = environment.api + 'user/'
  constructor(private http: HttpClient, private router: Router,) { }
  getUserById(id) {
    return this.http.get(`${this.api}${id}`)
  }
}
