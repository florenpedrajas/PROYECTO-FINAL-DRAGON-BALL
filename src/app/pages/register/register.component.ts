import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm! : FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      email: [""],
      password: [""]
    })
  }

  public onSubmit(){
    console.log(this.registerForm.value);

    this.authService.register(this.registerForm.value).subscribe(data => {
      this.router.navigate(['/login']);
    })
  }
}

