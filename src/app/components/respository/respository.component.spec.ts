import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespositoryComponent } from './respository.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RespositoryComponent', () => {
  let component: RespositoryComponent;
  let fixture: ComponentFixture<RespositoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RespositoryComponent],
      imports: [HttpClientTestingModule],
      providers: [RespositoryComponent]
    });
    fixture = TestBed.createComponent(RespositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
