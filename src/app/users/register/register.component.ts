import { Component, OnInit } from '@angular/core';
/* Register */
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isError: boolean = false;



  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  get email() { return this.registerForm.get('email') };
  get password() { return this.registerForm.get('password') };

  ngOnInit() {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.registerForm.value);

    return this.authService
      .registeruser(this.email.value, this.password.value)
      .subscribe(
        data => {
/*           this.authService.setUser(data.user); */
          const token = data.accessToken;
          this.authService.setToken(token);
          this.router.onSameUrlNavigation = 'reload';
          //this.router.navigate(['/']);
          this.router.navigate(['/home']);

          this.isError = false;
        },
        error => { this.onIsError()
        console.log(error);
        }
      );

  }
  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }
}
