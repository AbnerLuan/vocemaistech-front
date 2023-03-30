import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-meus-cursos',
  templateUrl: './meus-cursos.component.html',
  styleUrls: ['./meus-cursos.component.css']
})
export class MeusCursosComponent implements OnInit {  

  constructor(private toast: ToastrService,
  ) { }

  ngOnInit(): void {            
  }   

}
