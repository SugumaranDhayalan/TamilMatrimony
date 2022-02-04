import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.scss']
})
export class PrimeComponent implements OnInit {

  constructor( private router: Router ) {}

  ngOnInit(): void {
  }

  close(){
    this.router.navigate(['']);
  }

  onFileChange(e: Event){
    const element = e.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {

    }
  }

  verifyProfile(): void {
  }
}
