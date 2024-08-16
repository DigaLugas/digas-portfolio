import { Component, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent {
  @Input() project: any;
  @Input() isVisible: boolean = false;
  @Output() closeModalEvent = new EventEmitter<void>();  //EventEmitter to notify parent when the modal is closed

  closeModal() {
    this.isVisible = false;
    this.closeModalEvent.emit();  // Emit event to notify parent component
  }
}
