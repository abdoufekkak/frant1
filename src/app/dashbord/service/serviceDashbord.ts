import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,BehaviorSubject} from 'rxjs';
import { apiUrl } from 'src/app/admin/service/api';
import { Dashbord } from '../model/dashbord';
import { PDFDocument, rgb } from 'pdf-lib';

@Injectable({
  providedIn: 'root',
})
export class serviceDashbord {

  private dashbord: Dashbord[] = [];

  constructor(private http: HttpClient) {}




  getDashbord(datedebut?:Date,datefin?:Date) : Observable<Dashbord[]>{
    if(datedebut &&datefin) {
        return this.http.get<Dashbord[]>(`${apiUrl}/commande?datedebut=${datedebut}&datefin=${datefin}`);
    }
    else{
        return this.http.get<Dashbord[]>(`${apiUrl}/commande`);

    }
  }

  getcalcule() :Observable<any>{

    return this.http.get<any>(`${apiUrl}/commande/calculer`)

  }

credit(id:number){
    return this.http.get<any>(`${apiUrl}/commande/credit/${id}`)
}
async modifyPDFField(date_1:Date,nom:string,tel:string,nom_livreur:string,tel_phone:string,panie:any) {
  try {
    const formattedDate = date_1.toLocaleDateString('en-CA', {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
    });
    // Chargez le PDF que vous souhaitez modifier (remplacez le chemin par votre PDF)
    const pdfUrl = 'assets/test1.pdf';
    const existingPdfBytes = await fetch(pdfUrl).then(res => res.arrayBuffer());

    // Ouvrez le PDF
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    // Remplacez le nom du champ par le nom que vous avez identifié
    const fieldName = 'date1';
    const field = pdfDoc.getForm().getTextField(fieldName);
    field.setText(String(formattedDate));

    const fieldName1 = 'Text1';
    const field1 = pdfDoc.getForm().getTextField(fieldName1);
    field1.setText(nom);
    
    const fieldName2 = 'Text3';
    const field2 = pdfDoc.getForm().getTextField(fieldName2);
    field2.setText(tel);
    const fieldName3 = 'Text5';
    const field3 = pdfDoc.getForm().getTextField(fieldName3);
    field3.setText(nom_livreur);

    const fieldName4 = 'Text6';
    const field4 = pdfDoc.getForm().getTextField(fieldName4);
    field4.setText(tel_phone);
    // Créez un tableau de bytes pour le PDF modifié
    const page = pdfDoc.getPages()[0]; // Sélectionnez la première page, ou adaptez-le selon vos besoins
     
    const rows = panie.length;
    const columns = 4;
    const cellWidth = 120;
    const cellHeight = 20;
    const startX = 60;
    const startY = 480;
    const header=['produit',"prix","qnt","total"]
    const header_vide=['',"","",""]

    for (let col = 0; col < header.length; col++) {
      const x = startX + col * cellWidth;
      const y = startY - 0 * cellHeight;

      // Draw a rectangle for the table cell border
      page.drawRectangle({
        x,
        y,
        width: cellWidth,
        height: cellHeight,
        borderWidth: 1,
        borderColor: rgb(0, 0, 0),
      });

      // Add text to the cell
      page.drawText(header[col], {
        x: x + 8,
        y: y +5,
        size: 12,
        color: rgb(0, 0, 0),
      });
    }
    let s=0;
    for (let row = 1; row < rows+1; row++) {
      for (let col = 0; col < columns; col++) {
        const x = startX + col * cellWidth;
        const y = startY - row * cellHeight;
  
        // Draw a rectangle for the table cell border
        page.drawRectangle({
          x,
          y,
          width: cellWidth,
          height: cellHeight,
          borderWidth: 1,
          borderColor: rgb(0, 0, 0),
        });
  s=s+(panie[row-1][col+1] && panie[row-1][col+2] ? (panie[row-1][col+1] *panie[row-1][col+2]) : 0);
        page.drawText(String((panie[row-1][col] ? panie[row-1][col]  : "")), {
          x: x + 8,
          y: y +5,
          size: 12,
          color: rgb(0, 0, 0),
        });
      }
    }

    header_vide[3]=String(s)
     
    for (let col = 0; col < header.length; col++) {
      const x = startX + col * cellWidth;
      const y = startY - (panie.length+1) * cellHeight;

      // Draw a rectangle for the table cell border
      page.drawRectangle({
        x,
        y,
        width: cellWidth,
        height: cellHeight,
        borderWidth: 1,
        borderColor: rgb(0, 0, 0),
      });

      // Add text to the cell
      page.drawText(header_vide[col], {
        x: x + 8,
        y: y +5,
        size: 12,
        color: rgb(0, 0, 0),
      });
    }
  
   

    const pdfBytes = await pdfDoc.save();

    // Téléchargez le PDF modifié ou faites ce que vous voulez avec les données
    this.downloadPDF(pdfBytes);
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la modification du PDF :', error);
  }

 
}
downloadPDF(pdfBytes: Uint8Array) {
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const url = window.URL.createObjectURL(blob);
  window.open(url);
}


}
