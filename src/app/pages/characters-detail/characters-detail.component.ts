import { CharactersService } from './../../services/characters.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.scss'],
})
export class CharactersDetailComponent implements OnInit {
  id: any;
  myCharacter: any;

  constructor(
    private activatedRoute: ActivatedRoute, private characterService: CharactersService, private router: Router) {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.characterService.getCharacter(this.id).subscribe((data: any) => {
        console.log(data);
        this.myCharacter = { ...data };
      });
    });
  }

  ngOnInit(): void {}

  deleteCharacter() {
    this.characterService.deleteCharacter(this.id).subscribe();
    this.router.navigate(['/characters']);
  }
}
