import { PokedexService } from './../services/pokedex.service';
import { Route, Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    private route: Router,
    private pokedexService: PokedexService
  ) {}

  pokemonsArr : any[] = [];
  loadingScreen = true;
  loadingFilter = false;

  ngOnInit(): void {
    this.pokedexService.getPokemons().subscribe(res => {
      this.pokemonsArr = res.results
      setTimeout(() => {
        this.loadingScreen = false
      }, 2000);

      this.pokedexService.receiveArr(res.results)
    }, err => {
      alert('Ocorreu um erro inesperado! Recarregue a página ou tente novamente mais tarde.')
    })
  }

  openDetail(pokemon: any){
    this.route.navigateByUrl(`detail/${pokemon.national_number}`)
  }

  reloadList(e: any[]){
    this.loadingFilter = true;
    this.pokemonsArr = e[0];

    setTimeout(() => {
      this.loadingFilter = false
    }, 1000);
  }

}


