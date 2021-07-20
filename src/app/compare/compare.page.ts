import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { LocalStorageService } from '../provider/local-storage.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-compare',
  templateUrl: './compare.page.html',
  styleUrls:  ['./compare.page.scss'],
})
export class ComparePage implements OnInit {   
  icono: Array<{arrow: string, showDetails: boolean}> = [];
  currency:any;

  city: string = '';
  city2: string = '';
  results:Observable<any>;
  results2:Observable<any>;

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

    setType() {
      let ty = this;
    }

  constructor(private ApiServices: ApiServiceService, private localStorage: LocalStorageService){      
    this.icono.push({    
      arrow: "arrow-down",
      showDetails: false
     }); 
     this.getCurrency();
  }  

  ngOnInit() { }  
  
   ionViewWillEnter(){
    this.getCurrency();     
  }

  compare(){
    if(this.city.length > 4 && this.city2.length > 4){
      //this.results = this.ApiServices.searchDatas(this.city, this.city2); 

      this.results  = this.ApiServices.searchData(this.city); 
      this.results2 = this.ApiServices.searchData(this.city2); 

      this.crimeDetails     = this.ApiServices.getcrimeDetails(); 
      this.healthDetails    = this.ApiServices.gethealthDetails(); 
      this.pollutionDetails = this.ApiServices.getpollutionDetails(); 
      this.trafficDetails   = this.ApiServices.gettrafficDetails();

    }else{
      this.results = null;
      this.results2 = null;
    }
  }

  toggleDetails(icono) {
    icono.showDetails = !icono.showDetails;
    icono.arrow = icono.arrow == "arrow-up" ? "arrow-down" : "arrow-up";
  }  
  
  getCurrency() {        
    this.ApiServices.setCurrency(); 
    this.currency= JSON.parse(this.localStorage.getItem('data'));         
  }
  
}

  
 
 