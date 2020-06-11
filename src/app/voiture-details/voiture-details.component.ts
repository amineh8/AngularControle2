import { Component, OnInit } from '@angular/core';
import { Voiture } from '../voiture';
import { ActivatedRoute } from '@angular/router';

import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-voiture-details',
  templateUrl: './voiture-details.component.html',
  styleUrls: ['./voiture-details.component.scss'],
  providers: [VoitureService]
})
export class VoitureDetailsComponent implements OnInit {

  private id: number;
    voiture: Voiture[];
    private sub: any;

    constructor(private VoitureService: VoitureService, private route: ActivatedRoute) {

      this.voiture = VoitureService.getvoitures();
  }

  ngOnInit() {
      
      this.sub = this.route.params.subscribe(params => {

          this.id = +params['id'];
      });
  }

  ngOnDestroy() {

      this.sub.unsubscribe();
  }

}
