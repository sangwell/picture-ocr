import { Component, OnInit } from '@angular/core';
// import Tesseract from 'tesseract.js';
// import { createWorker } from 'tesseract.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  recognizedText: string | null = null;

  ngOnInit(): void {

  }

  // onFileChange(event: any): void {
  //   const file: File = event.target.files[0];
  //   if (file) {
  //     this.recognizeImage(file)
  //       .then(text => {
  //         this.recognizedText = text;
  //       })
  //       .catch(err => {
  //         console.error('Error recognizing image text:', err);
  //       });
  //   }
  // }

  // recognizeImage(image: File): Promise<string> {
  //   return new Promise((resolve, reject) => {
  //     Tesseract.recognize(
  //       image,
  //       'eng',
  //       {
  //         logger: (m:any) => console.log(m)
  //       }
  //     ).then(({ data: { text } }) => {
  //       resolve(text);
  //     }).catch((err:any) => {
  //       reject(err);
  //     });
  //   });
  // }
}
