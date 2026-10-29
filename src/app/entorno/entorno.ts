import { Component } from '@angular/core';

@Component({
  selector: 'app-entorno',
  templateUrl: './entorno.html',
  styleUrl: './entorno.css',
})
export class Entorno {
  titulo = 'Práctica de gestión de entornos';
  bienvenida = 'Bienvenido a la aplicación de la práctica de Git y Vercel.';
  siglas = 'PROD';
  mensaje = 'Entorno de producción';
  clase = 'prod';
}