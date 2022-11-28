import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  myCharacters?: any[];
  constructor(private characterService: CharactersService) {
    this.characterService.getAllCharacters().subscribe((data:any) => {
      console.log(data);
      const characterData: any[] = data.map((character: any) => ({
        id: character._id,
        name: character.name,
        image: character.img,
        race: character.race
      }))

      this.myCharacters = [...characterData];
      console.log(this.myCharacters)
    });
   }

  ngOnInit(): void {
  }

}
