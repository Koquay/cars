import { Component, OnInit } from '@angular/core';
import { ModelsService } from './models.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements OnInit {
  private model;

  constructor(
    private modelsService:ModelsService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.getModels();
  }

  private getModels() {
    const modelName = this.activatedRoute.snapshot.paramMap.get('modelName');
    console.log('modelName', modelName);

    this.modelsService.getModels(modelName).subscribe(model => {
      this.model = model;
    })
  }

}
