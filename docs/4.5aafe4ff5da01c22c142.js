(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{EuaU:function(t,i,e){"use strict";e.r(i),e.d(i,"ProvinceModule",function(){return f});var c=e("ofXK"),a=e("tyNb"),s=e("fXoL"),n=e("xf3R"),r=e("a/0d");function o(t,i){if(1&t&&(s.Hb(0,"div"),s.Hb(1,"p",9),s.ac(2),s.Gb(),s.Gb()),2&t){const t=i.$implicit;s.vb(2),s.cc(" ",t," ")}}function b(t,i){if(1&t&&(s.Hb(0,"h4"),s.ac(1),s.Gb()),2&t){const t=s.Pb();s.vb(1),s.cc("Capital City: ",t.capital,"")}}function h(t,i){if(1&t&&s.Fb(0,"img",10),2&t){const t=s.Pb();s.Tb("src",t.flagUrl,s.Xb),s.Tb("alt",t.countryName)}}let l=(()=>{class t{constructor(t,i){this.route=t,this.dataService=i,this.countryName="",this.province="",this.cities=[],this.searchText="",this.flagUrl="",this.capital=""}ngOnInit(){this.route.params.subscribe(t=>{this.countryName=t.country,this.province=t.province,this.cities=this.dataService.fetchCitiesList(this.countryName,this.province),this.dataService.fetchCountryDetails(this.countryName,"flag").subscribe(t=>{this.flagUrl=t.data.flag}),this.dataService.fetchCountryDetails(this.countryName,"capital").subscribe(t=>{this.capital=t.data.capital}),console.log("cities: ",this.cities)})}searchTextChange(t){this.searchText=t.target.value}}return t.\u0275fac=function(i){return new(i||t)(s.Eb(a.a),s.Eb(n.a))},t.\u0275cmp=s.yb({type:t,selectors:[["app-province"]],decls:13,vars:10,consts:[[1,"row"],[1,"col-sm-4","bg-light"],["type","text","name","searchText","placeholder","Type City name to filter",1,"form-control","mb-3",3,"keyup"],[4,"ngFor","ngForOf"],[1,"col-sm-8"],[1,"text-center"],[1,"text-center","mx-auto",2,"max-width","300px"],[4,"ngIf"],["width","300",3,"src","alt",4,"ngIf"],[1,"small","mx-3"],["width","300",3,"src","alt"]],template:function(t,i){1&t&&(s.Hb(0,"div",0),s.Hb(1,"div",1),s.Hb(2,"h3"),s.ac(3),s.Gb(),s.Hb(4,"input",2),s.Nb("keyup",function(t){return i.searchTextChange(t)}),s.Gb(),s.Zb(5,o,3,1,"div",3),s.Qb(6,"caseInsensitiveFilter"),s.Gb(),s.Hb(7,"div",4),s.Hb(8,"h2",5),s.ac(9),s.Gb(),s.Hb(10,"div",6),s.Zb(11,b,2,1,"h4",7),s.Zb(12,h,1,2,"img",8),s.Gb(),s.Gb(),s.Gb()),2&t&&(s.vb(3),s.dc("Cities in ",i.province,", ",i.countryName,""),s.vb(2),s.Sb("ngForOf",s.Rb(6,7,i.cities,i.searchText)),s.vb(4),s.dc("",i.countryName,", ",i.province,""),s.vb(2),s.Sb("ngIf",i.capital),s.vb(1),s.Sb("ngIf",i.flagUrl))},directives:[c.h,c.i],pipes:[r.a],styles:[""]}),t})();var u=e("lIeg");const p=[{path:"",component:l}];let f=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=s.Cb({type:t}),t.\u0275inj=s.Bb({imports:[[c.b,a.c.forChild(p),u.a]]}),t})()}}]);