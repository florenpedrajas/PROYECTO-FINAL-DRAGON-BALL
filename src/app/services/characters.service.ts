import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CharactersService {

  constructor(private http: HttpClient) { }

  public getAllCharacters(): Observable<any>{
    return this.http.get("https://db-back.vercel.app/characters");
  }

  public getCharacter(id: string): Observable<any>{
    return this.http.get("https://db-back.vercel.app/characters/"+ id);
  }

  public postCharacter(newCharacter:any){
    return this.http.post("https://db-back.vercel.app/characters/create", newCharacter);
  }

  public deleteCharacter(id: string){
    return this.http.delete("https://db-back.vercel.app/characters/delete/" +id);
  }

  public putCharacter(id: string, updatedCharacter:any){
    return this.http.put("https://db-back.vercel.app/characters/edit/" + id, updatedCharacter);
  }
}

