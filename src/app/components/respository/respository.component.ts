import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-respository',
  templateUrl: './respository.component.html',
  styleUrls: ['./respository.component.scss']
})
export class RespositoryComponent {
  @Input() repourl: string | undefined = ''
  @Input('user') user!: User
  @Input() isLoading: boolean = false;

  page = 1
  perPage = 10
  repositories!: GithubRepo[];
  totalRepos: number = this.user?.public_repos;
  showNoRepo: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getAllRepos();
  }

  getAllRepos() {
    this.repositories = this.apiService.getUserRepos(this.user?.login, this.page, this.perPage)

    if (this.repositories.length === 0) {
      this.showNoRepo = true;
    } else this.showNoRepo = false
  }

  onPageChange(newPage: number) {
    if (newPage < 1) return;

    this.page = newPage
    this.getAllRepos()
  }

  ngOnChanges() {
    this.getAllRepos()
  }
}
