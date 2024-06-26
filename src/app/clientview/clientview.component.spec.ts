import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientviewComponent } from './clientview.component';

describe('ClientviewComponent', () => {
  let component: ClientviewComponent;
  let fixture: ComponentFixture<ClientviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
