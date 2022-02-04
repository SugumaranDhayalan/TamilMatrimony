import { Component, HostListener, Input, OnInit } from '@angular/core';
interface ProfileInfo {
  id: Number;
  name: String;
  age: Number;
  height: String,
  degree: String,
  caste: String,
  city: String,
  state: String,
  isPrimeMember: Boolean
}

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {
  @Input() profileList: ProfileInfo[] = [];
  @Input() profileInfo: any
  @Input() imageCount: any
  constructor() { }

  ngOnInit(): void {
  }


  trackByIndex = (index: number, item: any) => index;


}
