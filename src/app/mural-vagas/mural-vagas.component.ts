import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/Vagas.model';
import { VagasService } from '../vagas.service';


@Component({
  selector: 'app-mural-vagas',
  templateUrl: './mural-vagas.component.html',
  styleUrls: ['./mural-vagas.component.css']
})
export class MuralVagasComponent implements OnInit {

 public vagas: Vaga[] = []

  constructor(private __vagasService: VagasService) { }

  ngOnInit(): void {
    this.listarVagas();
  }

  listarVagas(){
    this.__vagasService.getVagas()
      .subscribe(
        returnaVaga => {
          this.vagas = returnaVaga.map(
            item => {
              return new Vaga(item);
            }
          )
        }
      )
  }

}
