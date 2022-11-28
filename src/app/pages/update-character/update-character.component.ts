import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-character',
  templateUrl: './update-character.component.html',
  styleUrls: ['./update-character.component.scss'],
})
export class UpdateCharacterComponent implements OnInit {
  characterForm!: FormGroup;
  updatedCharacter!: any;
  id: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private characterService: CharactersService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.characterService.getCharacter(this.id).subscribe((data) => {
        console.log(data);
        this.updatedCharacter = data;

        this.characterForm = this.formBuilder.group({
          name: [this.updatedCharacter.name, [Validators.required]],
          img: [
            this.updatedCharacter.img,
            [Validators.required, Validators.minLength(3)],
          ],
          race: [this.updatedCharacter.race, [Validators.required]],
        })
      });
    });



    this.characterForm.valueChanges.subscribe((changes) => {
      this.updatedCharacter = changes;
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
    this.characterService.putCharacter(this.id, formData).subscribe(() =>this.router.navigate(['/characters']))

  }
}
