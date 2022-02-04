import { Component, HostListener, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProfileService } from 'src/assets/services/profile.service';
import {ResponseData} from 'src/shared/model/model'

declare var $: any;

@Component({
  selector: 'app-regular',
  templateUrl: './regular.component.html',
  styleUrls: ['./regular.component.scss']
})
export class RegularComponent implements OnInit {

  profileList: ResponseData[] = [];
  profileInfo: any = [];
  activeItem: string = '';
  // for rendering image from picsum
  imageCount = 50;
  isLoading = false;
  scrollDetect = false;
  timeOut: any;


  constructor(
    private router: Router,
    private service: ProfileService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getList('allMatchList');
  }
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    const Scroll = event.target.scrollingElement.scrollTop;
    if (Scroll > 50) {
      this.scrollDetect = true;
    } else {
      this.scrollDetect = false;
    }
  }

  getList(type: string) {
    this.spinner.show();
    this.service.getProfileInfo(type).subscribe((result: any) => {
      this.timeOut = setTimeout(() => {
        this.spinner.hide();
        this.profileInfo = result;
        this.profileList = result.data;
        this.imageCount++;
        this.activeItem = type;
      }, 2000);

    }, err => {
      this.spinner.hide();
      console.log('getProfileInfo', err);
    });
  }

  redirectToPrime() {
    this.router.navigate(['prime'])
  }

  setActiveItem(page: string) {
    this.activeItem = page;
  }

  ngOnDestroy() {
    this.timeOut;
  }

}
