import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentDetailsComponent } from './comment-details.component';
import { MatCardModule, MatButtonModule, MatButtonToggleModule } from '@angular/material';
import componentMockData from '../../data/commentData.json';
import { By } from '@angular/platform-browser';
import { get } from 'https';

fdescribe('CommentDetailsComponent', () => {
  let component: CommentDetailsComponent;
  let fixture: ComponentFixture<CommentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentDetailsComponent ],
      imports: [
        MatCardModule,
        MatButtonModule,
        MatButtonToggleModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the comment data', () => {
    expect(component.dataSource).toBeTruthy();
  });

  it('should have accurate data', () => {
    expect(component.dataSource.name).toBe(componentMockData.data.name);
    expect(component.dataSource.replies.length).toBe(componentMockData.data.replies.length);
  });

  it('should display image', () => {
    const element = fixture.debugElement.query(By.css('.card-header-image')).nativeElement;
    const elementStyle = getComputedStyle(element);
    expect(elementStyle).toBeTruthy();
    expect(elementStyle.backgroundImage).toContain(componentMockData.data.image);
  });
});
