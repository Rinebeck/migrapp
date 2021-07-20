import { Component, OnInit, ViewChild} from '@angular/core';
import { IonRadioGroup} from '@ionic/angular';
import { LocalStorageService } from '../provider/local-storage.service';


@Component({
  selector: 'app-currency',
  templateUrl: './currency.page.html',
  styleUrls: ['./currency.page.scss'],
})

export class CurrencyPage implements OnInit {    
 // @ViewChild('radioGroup') radioGroup: IonRadioGroup;  
    currencies:any;
    localName: any;
    itemChecked:any;
    search: String = "";
    select:any;

   getItems(){      

    this.currencies=[
        { id:'1',   change:4.20,  code:"AFN", currency:"Afghani"},
        { id:'2',   change:5.72,  code:"ALL", currency:"Lek"},
        { id:'3',   change:24.93, code:"AMD", currency:"Armenian"},
        { id:'4',   change:0.093, code:"ANG", currency:"Dutch Guilder"},
        { id:'5',   change:18.22, code:"AOA", currency:"Kwanza"},
        { id:'6',   change:2.30,  code:"ARS", currency:"Argentine Peso"},
        { id:'7',   change:0.076, code:"AUD", currency:"Australian Dollar"},
        { id:'16',  change:0.052, code:"BMD", currency:"Bermudian Dollar"},  
        { id:'17',  change:0.071, code:"BND", currency:"Brunei Dollar"},  
        { id:'18',  change:0.36,  code:"BOB", currency:"Boliviano"},  
        { id:'19',  change:0.20,  code:"BRL", currency:"Brazilian Real"},  
        { id:'25',  change:0.069, code:"CAD", currency:"Canadian Dollar"},  
        { id:'26',  change:87.34, code:"CDF", currency:"Congolese Franc"},  
        { id:'27',  change:0.052, code:"CHF", currency:"Swiss Franc"},  
        { id:'28',  change:0.052, code:"CLP", currency:"Chilean Peso"},  
        { id:'30',  change:0.36,  code:"CNY", currency:"Yuan"},  
        { id:'31',  change:173.01,code:"COP", currency:"Colombian Peso"},  
        { id:'32',  change:29.98, code:"CRC", currency:"Costa Rican Colon"},  
        { id:'37',  change:0.35,  code:"DKK", currency:"Danish Krone"},  
        { id:'38',  change:2.68,  code:"DOP", currency:"Dominican Peso"},  
        { id:'40',  change:0.87,  code:"EGP", currency:"Egyptian Pound"},  
        { id:'42',  change:0.046, code:"EUR", currency:"Euro"},  
        { id:'43',  change:0.11,  code:"FJD", currency:"Fiji Dollar"},  
        { id:'52',  change:0.40,  code:"GTQ", currency:"Quetzal"},  
        { id:'56',  change:1,     code:"HRK", currency:"Croatian Kuna"},  
        { id:'57',  change:1,     code:"HTG", currency:"Gourde"},  
        { id:'59',  change:1,     code:"IDR", currency:"Rupiah"},  
        { id:'62',  change:3.61,  code:"INR", currency:"Indian Rupee"},  
        { id:'63',  change:62.39, code:"IQD", currency:"Iraqi Dinar"},   
         { id:'69',  change:5.70, code:"JPY", currency:"Yen"},  
        { id:'73',  change:23.16, code:"KMF", currency:"Comorian franc"},  
        { id:'88',  change:2.89,  code:"MKD", currency:"Denar"},  
          //{ id:'89',  change:1, code:"MNT", currency:"Tugrik"},  
        { id:'90',  change:0.42,  code:"MOP", currency:"Pataca"},  
        { id:'91',  change:1.93,  code:"MRO", currency:"Ouguiya"},  
          //{ id:'92',  change:1, code:"MRU", currency:"Ouguiya"},  
        { id:'93',  change:1.90,  code:"MUR", currency:"Mauritius Rupee"},  
        { id:'94',  change:0.81,  code:"MVR", currency:"Rufiyaa"},  
        { id:'95',  change:39.48, code:"MWK", currency:"Kwacha"},  
        { id:'96',  change:1,     code:"MXN", currency:"Mexican Peso"},  
        { id:'97',  change:0.22,  code:"MYR", currency:"Malaysian Ringgit"},  
        { id:'98',  change:3.23,  code:"MZN", currency:"Metical"},     
        { id:'99',  change:0.74,  code:"NAD", currency:"Namibia Dollar"},    
          //{ id:'100', change:1, code:"NGN", currency:"Naira"},    
          //{ id:'101', change:1, code:"NIO", currency:"Cordoba Oro"},    
          //{ id:'102', change:1, code:"NOK", currency:"Norwegian Krone"},     
          //{ id:'103', change:1, code:"NPR", currency:"Nepalese Rupee"},    
          //{ id:'104', change:1, code:"NZD", currency:"New Zealand Dollar"},    
          //{ id:'105', change:1, code:"OMR", currency:"Rial Omani"},    
          //{ id:'106', change:1, code:"PAB", currency:"Balboa"},    
        { id:'107', change:0.17,  code:"PEN", currency:"Nuevo Sol"},    
        { id:'108', change:0.18,  code:"PGK", currency:"Kina"},    
        { id:'109', change:2.67,  code:"PHP", currency:"Philippine Peso"},    
        { id:'110', change:8.45,  code:"PKR", currency:"Pakistan Rupee"},    
        { id:'111', change:0.20,  code:"PLN", currency:"PZloty"},    
        { id:'112', change:315.49,code:"PYG", currency:"Guarani"},    
          //{ id:'113', change:1, code:"QAR", currency:"Qatari Rial"},   
          //{ id:'114', change:1, code:"RON", currency:"Leu"},   
        { id:'115', change:5.54,  code:"RSD", currency:"Serbian Dinar"},    
        { id:'116', change:3.33,  code:"RUB", currency:"Russian Ruble"},    
        { id:'117', change:47.71, code:"RWF", currency:"Rwanda Franc"},    
          //{ id:'118', change:1, code:"SAR", currency:"Saudi Riyal"},   
          //{ id:'119', change:1, code:"SBD", currency:"Solomon Islands Dollar"}, 
          //{ id:'120', change:1, code:"SCR", currency:"Seychelles Rupee"},    
          //{ id:'121', change:1, code:"SDG", currency:"Sudanese Pound"},    
          //{ id:'122', change:1, code:"SEK", currency:"Swedish Krona"},    
        { id:'123', change:0.072, code:"SGD", currency:"Singapore Dollar"},   
          //{ id:'124', change:1, code:"SHP", currency:"Saint Helena Pound"},   
          //{ id:'125', change:1, code:"SLL", currency:"Leone"},    
        { id:'126', change:30.43, code:"SOS", currency:"Somali Shilling"},    
        { id:'127', change:0.39,  code:"SRD", currency:"Suriname Dollar"},    
          //{ id:'128', change:1, code:"STD", currency:"Dobra"},   
          //{ id:'129', change:1, code:"STN", currency:"Dobra"}, 
          //{ id:'130', change:1, code:"SVC", currency:"Salvadoran colón"},    
          //{ id:'131', change:1, code:"SYP", currency:"Syrian Pound"},    
          //{ id:'132', change:1, code:"SZL", currency:"Lilangeni"},    
          //{ id:'133', change:1, code:"THB", currency:"Baht"},   
          //{ id:'134', change:1, code:"TJS", currency:"Somoni"},   
        { id:'135', change:0.18,  code:"TMT", currency:"Manat"},    
        { id:'136', change:0.15,  code:"TND", currency:"Tunisian Dinar"},    
          //{ id:'137', change:1, code:"TOP", currency:"Pa’anga"},    
        { id:'138', change:0.29,  code:"TRY", currency:"Turkish Lira"},   
        { id:'139', change:0.36,  code:"TTD", currency:"Trinidad and Tobago Dollar"}, 
        { id:'140', change:1.63,  code:"TWD", currency:"Taiwan Dollar"},    
        { id:'141', change:120.52,code:"TZS", currency:"Tanzanian Shilling"},    
          //{ id:'142', change:1, code:"UAH", currency:"Hryvnia"},    
          //{ id:'143', change:1, code:"UGX", currency:"Uganda Shilling"},   
        { id:'144', change:0.052, code:"USD", currency:"US Dollar"},   
        { id:'145', change:1.79,  code:"UYU", currency:"Peso Uruguayo"},    
        { id:'146', change:462.07,code:"VES", currency:"Venezuelan bolívar"},    
          //{ id:'147', change:1, code:"VND", currency:"Dong"},    
          //{ id:'148', change:1, code:"VUV", currency:"Vatu"},   
          //{ id:'149', change:1, code:"WST", currency:"Tala"}, 
          //{ id:'150', change:1, code:"XAF", currency:"CFA Franc BCEAO"},    
          //{ id:'151', change:1, code:"XAG", currency:"XAG"},    
          //{ id:'152', change:1, code:"XAU", currency:"XAU"},    
        { id:'153', change:0.14,  code:"XCD", currency:"East Caribbean Dollar"},   
        { id:'154', change:0.038, code:"XDR", currency:"XDR"},   
        { id:'155', change:30.91, code:"XOF", currency:"XOF"},    
          //{ id:'156', change:1, code:"XPD", currency:"XPD"},    
        { id:'157', change:5.63,  code:"XPF", currency:"CFP Franc"},    
          //{ id:'158', change:1, code:"XPT", currency:"XPT"},   
        { id:'159', change:13.12, code:"YER", currency:"Yemeni Rial"},    
        { id:'160', change:0.74,  code:"ZAR", currency:"Rand"},    
        { id:'161', change:0.68,  code:"ZMW", currency:"Zambian Kwacha"},    
          //{ id:'162', change:1, code:"ZWL", currency:"Zimbabwe Dollar"}       
      ] 
        this.getData();
    };          
           
      constructor(private localStorage: LocalStorageService){        
        this.initial();             
       }
       
       selectedCategory(value: any){     
        this.localStorage.setItem('data', JSON.stringify(value));  
        this.getData();  
        this.itemChecked = this.select.id;  
      }   

      getData() {        
        this.localName = this.localStorage.getItem('data');      
        this.select= JSON.parse(this.localName);    
        this.itemChecked = this.select.id;             
      } 

      initial(){        
        if (this.localName = this.localStorage.getItem('data') == null){
            this.select = ({id:96, change:1, code:"MXN", currency:"Mexican Peso"});
            this.localName = this.localStorage.setItem('data', JSON.stringify(this.select)); 
            this.itemChecked = this.select.id;               
         }
            this.getItems();         
      }
    
    get currenciesList(): Array<any> {
      return this.currencies.filter(c =>{
        return c.code.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
           c.currency.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
      })
    } 

       ngOnInit() { }      
} 
