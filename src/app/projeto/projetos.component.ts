import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent {
  projects = [
    {
      title: 'Email Service com AmazonSES',
      description: 'Um serviço para facilitar o envio de emails utilizando o Amazon SES.',
      details: 'Este projeto é um aplicativo Spring Boot que fornece um serviço de envio de e-mail usando Amazon SES (Simple Email Service). Ele aproveita o poder da injeção de dependência do Spring e do SDK do Amazon SES para enviar e-mails com eficiência e segurança.',
      image: 'assets/ProjetoAWS.png',
      link: 'https://github.com/DigaLugas/SpringEmailSender/tree/main'
    },
    {
      title: 'Galaxy Sandbox',
      description: 'Um sandbox que te permite criar seu própio universo',
      details: 'Feito em Js, é um simulador de galáxia que usa p5.js e muitos conceitos abordados em sala de aula, creio que esse foi um dos meus melhores trabalhos academicos',
      image: 'assets/SolarSystem.jpeg',
      link: 'https://editor.p5js.org/lucasgustavorodrigues10/full/FBfMrbwtg'
    },
    {
      title: 'CRUD com Spring',
      description: 'Desenvolvimento de um CRUD simples com SPrimg',
      details: 'Um crud usando Spring Boot, MySQL, Maven, Flyway e outras depêndencias do Spring.',
      image: 'assets/CRUD.jpeg',
      link: 'https://github.com/DigaLugas/APIEstoqueForte'
    }
  ];


  selectedProject: any;
  isModalVisible: boolean = false;

  openModal(project: any): void {
    this.selectedProject = project;
    this.isModalVisible = true;
  }

  onCloseModal(): void {
    this.isModalVisible = false;
  }
}
