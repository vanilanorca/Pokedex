import { PokedexService } from './../services/pokedex.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokedexService: PokedexService,
    private route: Router ) { }

  loadingScreen = true;

  ngOnInit(): void {
    this.pokedexService.getPokemonByID(this.activatedRoute.snapshot.params['id']).then(res => {
      if(res[0] == undefined){
        this.route.navigateByUrl('home')
      }
      this.pokemon = res[0]

      setTimeout(() => {
        this.loadingScreen = false
      }, 5000);
    })
  }

  showImg: boolean = false;
  pokemon: any

}
