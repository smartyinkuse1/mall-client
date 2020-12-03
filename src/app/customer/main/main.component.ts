import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  userIsAuthenticated = false;
  private authListenerSub: Subscription;
  constructor(private authService: AuthService,) { }

  ngOnInit(): void {
    this.userIsAuthenticated = this.authService.getAuth();
    console.log(this.userIsAuthenticated);
    this.authListenerSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        console.log(this.userIsAuthenticated);

      });
  }

}
