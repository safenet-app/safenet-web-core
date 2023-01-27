import { Polybase } from "@polybase/client";


const db = new Polybase({ defaultNamespace: "SafeNet"});
const donationsCollection = db.collection("Donations");

console.log(donationsCollection)

export default class Donation {
  

  async createDonation(id: string, idEvent:string,donorName: string, location: string, materials?: map<string,number>, donorAddress: string,amount: number){
    try {
      let materialsObject =   Object.fromEntries(materials);
      const data = await donationsCollection.create([id, idEvent, donorName, location,materialsObject , donorAddress, amount]);
      console.log(data)
    } 
    catch (error) {
      console.error(error);
    }
  }

  async updateDonation(){
    try {
      // let materialsObject =   Object.fromEntries(materials);
      const  data = await donationsCollection.record('1').call("setDonation", ['1','Marge Simpson','Villavicencio-Meta',{'tejas':'10', 'bultos':'5'}, '0x123456', 4]);
      return data;
    }
      catch(error){
      console.error(error);    
    }
  }

  async deleteDonation(){
    try {
        const  data = await donationsCollection.record('1').call("del", []);
        return data;
    }
    catch(error){
          console.error(error);    
    }
  }
}
