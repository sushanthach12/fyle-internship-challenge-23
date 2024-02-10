import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-cards',
  templateUrl: './repo-cards.component.html',
  styleUrls: ['./repo-cards.component.scss']
})
export class RepoCardsComponent {
  @Input() repo!: GithubRepo | null;
  @Input('user') user!: User | null;
}
