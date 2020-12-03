import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api = environment.api + 'auth/'
  isAuthenticated = false;
  private userId: string;
  private token: string;
  private tokenTimer: any;
  private authStatusListener = new Subject<boolean>();
  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }
  getToken() {
    return this.token;
  }
  getAuth() {
    return this.isAuthenticated;
  }
  getUserId() {
    return this.userId;
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
  login(Username: string, Password: string) {
    const loginData = { email: Username, password: Password };
    this.http.post(`${this.api}login`, loginData)
      .subscribe((res: any) => {
        // console.log(res);
        const token = res.token;
        this.token = token;
        if (token) {
          const expiresIndur = 3600;
          this.setAuthTimer(expiresIndur);
          this.isAuthenticated = true;
          this.userId = res.userId;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresIndur * 1000);
          console.log(expirationDate);
          this.saveAuthData(token, expirationDate, this.userId);
          this.toastr.success("Login Successful")
          this.router.navigate(['/']);
        }
      });
  }
  register(name, email, password) {
    const registerData = { name, email, password }
    this.http.post(`${this.api}register`, registerData).subscribe((res: any) => {
      this.toastr.success("Account Created Successfully")
      this.router.navigate(["/login"])
    })
  }
  autoAutUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.Token;
      this.userId = authInformation.userId;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }

  }
  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.userId = null;
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/']);
  }
  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }
  private saveAuthData(token: string, expirationDate: Date, UserId: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('UserId', UserId);
  }
  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('UserId');
  }
  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const UserId = localStorage.getItem('UserId');
    if (!token || !expirationDate) {
      return;
    }
    return {
      Token: token,
      expirationDate: new Date(expirationDate),
      userId: UserId
    };
  }
  getCurrentUser() {
    return this.http.get(`${this.api}user`)
  }
}
