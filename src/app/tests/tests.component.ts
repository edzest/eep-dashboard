import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestInfo } from '../test-info.model';
import { TestService } from '../test.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  constructor(private testService: TestService, private router: Router) { }

  allTests: Array<TestInfo> | undefined = [];

  ngOnInit(): void {
    this.testService.getAllTests().subscribe((data: Array<TestInfo>) => this.allTests = data)
  }

  takeTest(testId: number) {
    this.router.navigate(['/test', testId]);
  }

}
