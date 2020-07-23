import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-change-color',
  templateUrl: './change-color.component.html',
  styleUrls: ['./change-color.component.css']
})
export class ChangeColorComponent implements OnInit {

  bgColor: string

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.bgColor = this.activatedRoute.snapshot.params['color']
  }

}
