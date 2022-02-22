import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private headers = new HttpHeaders ({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
  })

  constructor(private http: HttpClient) {
    this.getPokemons()
  }

  pokemonsArr = []

  getPokemons(){
    return this.http.get<any>(`https://unpkg.com/pokemons@1.1.0/pokemons.json`, {headers: this.headers})
  }

  receiveArr(arr: []){
    this.pokemonsArr = arr
  }

  getPokemonByID(id : any){
    return Promise.all([
      this.pokemonsArr.find((pokemon: any) => {
            return pokemon.national_number == id
      })
    ])
  }

  filterList(value: any){
    return Promise.all([
      this.pokemonsArr.filter((pokemon: any) => {
        return pokemon.name.toLowerCase().includes(value.toLowerCase())
      })
    ])
  }
}
