export function whoami(){
    console.log("Raaj" + " from KCT");
}
export default class Teacher{
constructor(name,clg){
    this.name=name;
    this.clg = clg;
}
getdetails(){
    console.log(this.name,this,clg);
}
}