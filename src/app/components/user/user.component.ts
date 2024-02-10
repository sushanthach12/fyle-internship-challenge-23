import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent {

  @Input() user!: User | null;
  @Input() isLoading: boolean = false;

  constructor(private readonly apiService: ApiService) { }

  ngOnInit() {

  }
}
