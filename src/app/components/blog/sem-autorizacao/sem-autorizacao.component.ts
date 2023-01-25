import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sem-autorizacao',
  templateUrl: './sem-autorizacao.component.html',
  styleUrls: ['./sem-autorizacao.component.css']
})
export class SemAutorizacaoComponent implements OnInit {

  constructor(private toast: ToastrService,
  ) { }

  ngOnInit(): void {

  }

}
