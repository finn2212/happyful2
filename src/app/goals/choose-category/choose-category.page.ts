import { Component, OnInit } from '@angular/core';
import { GoalsService } from '../goals.service'
import { Router } from '@angular/router';
import { Category } from '../../models/category'

@Component({
  selector: 'app-choose-category',
  templateUrl: './choose-category.page.html',
  styleUrls: ['./choose-category.page.scss'],
})
export class ChooseCategoryPage implements OnInit {

  constructor(
    private router: Router,
    private goalsService: GoalsService
  ) { }

  ngOnInit() {
  }
  next() {

  }
  selectCategory(category: number) {
    console.log(Category[category]);
    this.goalsService.newGoalCategory = Category[category];
    this.router.navigateByUrl('/tabs/goals/new-goal');
  }
}
