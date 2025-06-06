import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorshipsComponent } from './contributors.component';

describe('ContributorsComponent', () => {
  let component: SponsorshipsComponent;
  let fixture: ComponentFixture<SponsorshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SponsorshipsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsorshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
