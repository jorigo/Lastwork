import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasasociadasComponent } from './preguntasasociadas.component';

describe('PreguntasasociadasComponent', () => {
  let component: PreguntasasociadasComponent;
  let fixture: ComponentFixture<PreguntasasociadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreguntasasociadasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreguntasasociadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
