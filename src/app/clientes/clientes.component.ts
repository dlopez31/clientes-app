import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
    { id: 1, nombre: 'Denys', apellido: 'Lopez', createAt: '2017-12-11', email: 'denys@gmail.com' },
    { id: 1, nombre: 'Yusmarys', apellido: 'Guatarama', createAt: '2018-10-11', email: 'yusmarys@gmail.com' },
    { id: 1, nombre: 'Darihanna', apellido: 'Lopez', createAt: '2019-05-04', email: 'darihanna@gmail.com' },
    { id: 1, nombre: 'Maria', apellido: 'Piñate', createAt: '2010-01-20', email: 'maria@gmail.com' },
    { id: 1, nombre: 'Deivis', apellido: 'Guatarama', createAt: '2018-11-19', email: 'deivis@gmail.com' },
    { id: 1, nombre: 'Genessis', apellido: 'Guatarama', createAt: '2018-11-01', email: 'genesis@gmail.com' },
    { id: 1, nombre: 'Dania', apellido: 'Delgado', createAt: '2019-06-29', email: 'dania@gmail.com' },
    { id: 1, nombre: 'Pepe', apellido: 'Pepito', createAt: '2000-12-31', email: 'pepe@gmail.com' },
    { id: 1, nombre: 'Pedro', apellido: 'Marquez', createAt: '2005-08-22', email: 'pedro@gmail.com' },
    { id: 1, nombre: 'Juan', apellido: 'Perez', createAt: '2009-10-05', email: 'juan@gmail.com' },
    { id: 1, nombre: 'Petra', apellido: 'Josefa', createAt: '2011-10-20', email: 'petra@gmail.com' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
