import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = "fyle-frontend-challenge"

  username: string = "";
  submitted = false
  isLoading: boolean = true

  constructor(
    private apiService: ApiService,
  ) { }

  user!: User;

  ngOnInit() {
  }
  
  getUser() {
    this.apiService.getUser(this.username).subscribe({
      next: (value) => {
        this.user = value
      },
    })
    this.isLoading = false
  }

  onSubmit() {
    setTimeout(() => {
      this.getUser();
    }, 200);
  }

  ngOnChanges() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false
    }, 1000);
  }
}
