import { EnrollmentService } from './enrollment.service';
import { User } from './user';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular','Springboot','React','Python'];
  topicHasError = true;

  userModel = new User('Tilak','tilak@test.com',3423455435,'default','morning',true);

  constructor(private _enrollmentService : EnrollmentService){}

  validateTopic(value: string){
    if (value == 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit(){
    this._enrollmentService.enroll(this.userModel).subscribe(
      data => console.log('Success!',data),
      error => console.error('Error!', error)
      
      
    )
    
  }

}
