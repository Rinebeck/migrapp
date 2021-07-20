import { Component } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { LocalStorageService } from '../provider/local-storage.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  currency:any;
  term: string = '';
  icono: Array<{arrow: string, showDetails: boolean}> = [];

  results:Observable<any>;
  
  crimeDetails:{};
  healthDetails:{};
  pollutionDetails:{};
  trafficDetails:{};
  
  /*SELECT OPTIONS*/
  typesData = {
    values:'Costo de vida'
  }
  type=[
    { name:'Costo de vida', type:"cost"     },
    { name:'Criminalidad',  type:"crime"    },
    { name:'Sanidad',       type:"health"   },
    { name:'Contaminación', type:"pollution"},
    { name:'Tráfico',       type:"traffic"  },
  ]

  constructor(private ApiServices: ApiServiceService, private localStorage: LocalStorageService){      
    this.icono.push({    
      arrow: "arrow-down",
      showDetails: false
     }); 
     this.getData();
  }  

  ngOnInit() {}  
  
   ionViewWillEnter(){
    this.getData();  
    this.ApiServices.setCurrency(); 
  }

  setType() {
    let ty = this;
    //console.log('typesData',ty.typesData);
  }

  searchChanged(): void {
    this.getData(); 
    if(this.term.length > 4){
      this.results          = this.ApiServices.searchData(this.term); 
      this.crimeDetails     = this.ApiServices.getcrimeDetails(); 
      this.healthDetails    = this.ApiServices.gethealthDetails(); 
      this.pollutionDetails = this.ApiServices.getpollutionDetails(); 
      this.trafficDetails   = this.ApiServices.gettrafficDetails();
    }else{
      this.results = null; 
    }
  }
  
  onCancel(e){
    this.results = null;
    this.term = ""; 
  }

  toggleDetails(icono) {
    icono.showDetails = !icono.showDetails;
    icono.arrow = icono.arrow == "arrow-up" ? "arrow-down" : "arrow-up";
  }  

  getData() {        
    this.currency= JSON.parse(this.localStorage.getItem('data'));         
  }

}