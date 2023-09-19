import { Component } from '@angular/core';
import { Moment } from 'src/app/interfaces';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent {
  btnText = "Enviar"

  constructor (private momentService: MomentService) {}

  async createHandler(moment: Moment) {
    const data: FormData = new FormData()

    data.append("title", moment.title) 
    data.append("description", moment.description) 
    
    if(moment.image) {
      data.append("image", moment.image)
    }


    await this.momentService.createMoment(data).subscribe()

  }
}
