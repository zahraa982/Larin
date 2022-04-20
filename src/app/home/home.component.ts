import { Component, OnInit } from '@angular/core';
import { Name } from '../home';
import { HomeServiceService } from '../home-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
myname: Name= {
  name: 'Salah'
}
  constructor(private homeService :HomeServiceService) { }

  ngOnInit(): void {
  }

}
