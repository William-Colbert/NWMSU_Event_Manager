import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfA1u8dD8UnBStomM5vRNupK4H456IW48",
  authDomain: "nwmsu-event-manager.firebaseapp.com",
  projectId: "nwmsu-event-manager",
  storageBucket: "nwmsu-event-manager.firebasestorage.app",
  messagingSenderId: "933816110403",
  appId: "1:933816110403:web:5b2cc4a9a3259f94dc73f6",
  measurementId: "G-ZVF490QDTD"
};

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
