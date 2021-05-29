import { Component } from '@angular/core';
import { ApiService } from '../app/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchText: any = '';
  suggestions: any = [];
  companyList: any = [];
  // companyList: any = [{ "id": "1", "model": "Bhansali Engg." },
  //  { "id": "2", "model": "Coal India" },
  //   {"id": "3", "model": "IOLChemicals"},
  //   {"id":"4","model":"Dolat Investment"},
  //   {"id":"5","model":"NDTV"},
  //   {"id":"6","model":"Balmer Law.Inv."},
  //     {"id":"7","model":"Ebixcash World"},
  //     {"id":"8","model":"Mangalam Organic"},
  //     {"id":"9","model":"INEOSStyrolut."},
  // {"id":"10","model":"Expleo Solutions"},
  // {"id":"11","model":"Sh.Jagdamba Pol"},
  // {"id":"12","model":"GodawariPower"},
  // {"id":"13","model":"Cigniti Tech."},
  // {"id":"14","model":"Kirl.Ferrous"},
  //     {"id":"15","model":"Rites"},
  //     {"id":"16","model":"Guj.St.Petronet"},
  //     {"id":"17","model":"EsterIndustries"},
  // {"id":"18","model":"Anjani Portland"},
  // {"id":"19","model":"Venky's (India)"},
  // {"id":"20","model":"HeritageFoods"},{"id":"21","model":"SIS"},
  // {"id":"22","model":"GTPL Hathway"},
  // {"id":"23","model":"WelspunCorp"},
  // {"id":"24","model":"I G Petrochems"},
  // {"id":"25","model":"Geojit Fin.Ser."},
  // {"id":"26","model":"SaskenTechnol."},
  // {"id":"27","model":"Engineers India"},
  // {"id":"28","model":"PetronetLNG"},
  // {"id":"29","model":"Saksoft"},
  // {"id":"30","model":"Polyplex Corpn"}]

  constructor(private api: ApiService){}

  ngOnInit() {
    this.getCompanyList();
  } 
  getCompanyList(): void {
    this.api.getAll().subscribe(
      (res: any) => {
        this.companyList = res['data'];
      },
      (err: any) => {
        console.log(err)
      }
    );
  }


  fetchnames(val : any){
    if(val){
      this.suggestions = this.companyList.filter((item: any) => {return  item.model.toLowerCase().search(val.toLowerCase()) != -1})
    }else{
      this.suggestions = [];
    }
  }
  selectedItem(item: any){
    this.searchText = item.model;
    this.suggestions = [];
  }



}
