import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {ContactComponent} from '../contact/contact.component';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  isClassVisible: boolean;
  hover: boolean;
  experience: number;
  impressumRef: BsModalRef;
  agbRef: BsModalRef;
  datenschutzRef: BsModalRef;
  nutzungsbedingungenRef: BsModalRef;
  selectionConfig = {
    ignoreBackdropClick: false,
    class: 'modal-lg'
  };

  constructor(private dialog: MatDialog, private modalService: BsModalService) { }

ngOnInit() {
  this.experience = (new Date()).getFullYear() - 1992;
}

  openContactModal() {
    const dialogRef = this.dialog.open(ContactComponent, {hasBackdrop: false});
    this.isClassVisible = true;
    dialogRef.afterClosed().subscribe(result => {
      this.isClassVisible = false;
      this.hover = false;
    });
  }

  openImpressum(templateNested) {
    this.impressumRef = this.modalService.show(templateNested, this.selectionConfig);
  }

  agb(templateNested) {
    this.agbRef = this.modalService.show(templateNested, this.selectionConfig);
  }

  datenscutz(templateNested) {
    this.datenschutzRef = this.modalService.show(templateNested, this.selectionConfig);
  }

  nutzungsbedingungen(templateNested) {
    this.nutzungsbedingungenRef = this.modalService.show(templateNested, this.selectionConfig);
  }

}
