import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.scss'],
})
export class NewCharacterComponent implements OnInit {
  newCharacter?: any = {
    name: '',
    img: '',
    race: '',
  };

  characterForm!: FormGroup;

  constructor(
    private characterService: CharactersService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.characterForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      img: ['', [Validators.required, Validators.minLength(3)]],
      race: ['', [Validators.required]],
    });

    this.characterForm.valueChanges.subscribe((changes) => {
      this.newCharacter = changes;
    });
  }
  onFileChange(event: any) {
    const file = event.target.files[0];
    console.log(file);
    this.characterForm.patchValue({
    img: file,
    });
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('img', this.characterForm.get('img')?.value);
    formData.append('name', this.characterForm.get('name')?.value);
    formData.append('race', this.characterForm.get('race')?.value);
    console.log(formData);
    this.characterService.postCharacter(formData).subscribe(() => this.router.navigate(['/characters']));

  }
}
