import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-bio-analisis',
  templateUrl: './bio-analisis.component.html',
  styleUrls: ['./bio-analisis.component.scss']
})
export class BioAnalisisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      console.log('se agrega imagen')
      PDF.save('ficha-conflictual.pdf');
    });
  }

}
