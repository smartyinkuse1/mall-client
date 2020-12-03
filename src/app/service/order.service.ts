import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  api = environment.api + 'auth/'
  constructor(private http: HttpClient, private router: Router,) { }
}
