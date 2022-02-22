import { PokedexService } from './../services/pokedex.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  disableSelect = new FormControl(false);
  favoritesList = []

  inputName = ''
  @Output() changeList = new EventEmitter<any[]>();
  
  constructor(
    private pokedexService: PokedexService
  ) { }

  ngOnInit(): void {
  }

  filterList(){
    this.pokedexService.filterList(this.inputName).then(res => {
      this.changeList.emit(res)
    })
  }

}
