import { Component } from '@angular/core';
import { CharacterService} from './service/character.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the rick and morty app';
  public characters : any[] = [];
  public info : any = null;
  public q : string = "";
  public pages : any[] = [];
  public currentPage : number = 1;
  public url ='https://rickandmortyapi.com/api/';
 
  constructor(private characterService : CharacterService) {}

  ngOnInit() {
    this.getCharacters();
  }
  

  getCharacters(page : number = 1, name : string = "") {
      fetch(this.url)
      .then(response => response.json())
      .then(data => this.characterService.characters(page, name).subscribe(response => {
        this.characters = response.results
        this.info = response.info;
        this.pages = Array(this.info.pages).map((x,i)=>i); })
     );
      
     }
 search(event, n) {
    this.currentPage = n + 1;
    this.getCharacters(this.currentPage, this.q);
  }
 
  }
  
  



