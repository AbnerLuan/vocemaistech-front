import { UsuarioService } from '../../../../services/usuario.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-users-admin',
  templateUrl: './list-users-admin.component.html',
  styleUrls: ['./list-users-admin.component.css']
})
export class ListUsersAdminComponent implements OnInit {

  usuarios: Usuario[] = [];
  displayedColumns: string[] = ['id', 'name', 'cpf', 'profile', 'acoes'];
  dataSource = new MatTableDataSource<Usuario>(this.usuarios);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: UsuarioService,
    private toast: ToastrService) { }
  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      this.usuarios = resposta;
      this.dataSource = new MatTableDataSource<Usuario>(resposta);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  delete(id: any): void {
    const confirmacao = confirm("Quer realmente deletar esse usuário?");
    if (confirmacao) {
      this.service.delete(id).subscribe((resposta) => {
        if (resposta === null) {
          this.findAll();
          this.toast.info('Postagem Deletada com Sucesso!');
        }
      })
    };
  }

}


