import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task1Component } from './task1.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('Task1Component', () => {
  let component: Task1Component;
  let fixture: ComponentFixture<Task1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      
      imports: [Task1Component, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Task1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title as "Task 1"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('h1');
    expect(title?.textContent).toContain('Task 1');
  });

  // it('should have a "Back to Home" button with routerLink', () => {
  //   const button = fixture.debugElement.query(By.css('button[routerLink]'));
  //   expect(button.nativeElement.textContent).toContain('Back to Home');
  // });

  it('should render a row with tag details', () => {
    const row = fixture.debugElement.query(By.css('tbody tr'));
    const cells = row.queryAll(By.css('td'));
    expect(cells[0].nativeElement.textContent).toContain('000 test tag');
    expect(cells[1].nativeElement.textContent).toContain('16.4');
    expect(cells[2].nativeElement.textContent).toContain('K');
    expect(cells[3].nativeElement.textContent).toContain('Good');
  });

  it('should have an edit and reset button in the Value cell', () => {
    const valueCell = fixture.debugElement.query(
      By.css('tbody tr td:nth-child(2)')
    );
    const buttons = valueCell.queryAll(By.css('button'));
    expect(buttons.length).toBe(2);
    expect(
      buttons[0].query(By.css('img')).nativeElement.getAttribute('src')
    ).toContain('editing.png');
    expect(
      buttons[1].query(By.css('img')).nativeElement.getAttribute('src')
    ).toContain('reset.png');
  });
});
