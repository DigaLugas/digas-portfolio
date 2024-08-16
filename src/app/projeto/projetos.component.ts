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
      title: 'Projeto 1',
      description: 'Descrição breve do projeto 1.',
      details: 'Detalhes completos do projeto 1.',
      image: 'assets/projeto1.jpg',
      link: 'https://example.com/project1'
    },
    {
      title: 'Projeto 2',
      description: 'Descrição breve do projeto 2.',
      details: 'Detalhes completos do projeto 2.',
      image: 'assets/projeto2.jpg',
      link: 'https://example.com/project2'
    },
    {
      title: 'Projeto 3',
      description: 'Descrição breve do projeto 3.',
      details: 'Detalhes completos do projeto 3.',
      image: 'assets/projeto3.jpg',
      link: 'https://example.com/project3'
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
