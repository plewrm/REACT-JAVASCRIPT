class myData{
   start(){
    console.log("Start typing....");
   }
   changeData(data){
    this.data=data
   }
}
class Engine extends myData {
   bike(){
      console.log("Strong engin of bike");
   }
}
let myobj=new Engine();
// myobj.changeData("AllData");
