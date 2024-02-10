import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoCardsComponent } from './repo-cards.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RepoCardsComponent', () => {
  let component: RepoCardsComponent;
  let fixture: ComponentFixture<RepoCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepoCardsComponent],
      imports: [HttpClientTestingModule],
      providers: [RepoCardsComponent]
    });
    fixture = TestBed.createComponent(RepoCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
