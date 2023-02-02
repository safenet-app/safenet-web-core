import { Polybase } from "@polybase/client";

const db = new Polybase({ defaultNamespace: "SafeNet" });
const donationsCollection = db.collection("Donations");

console.log(donationsCollection);

export default class Donation {
  async createDonation(
    id: string,
    idEvent: string,
    donorName: string,
    location: string,
    material:string,
    quantity:number,
    donorAddress: string,
    amount: number
  ) {
    try {
      let tempMaterial =  new Map();
      if (material.length!=0){
          tempMaterial.set(material,quantity);
      }
      if (tempMaterial) {
        let materialsObject = Object.fromEntries(tempMaterial);
        const data = await donationsCollection.create([
          id,
          idEvent,
          donorName,
          location,
          materialsObject,
        ]);
        console.log(data);
      } else if (donorAddress && amount) {
        const data = await donationsCollection.create([
          id,
          idEvent,
          donorName,
          donorAddress,
          amount,
        ]);
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async updateDonation(
    id: string,
    idEvent: string,
    donorName: string,
    location: string,
    materials: Map<string, number>,
    donorAddress: string,
    amount: number,
    status: string,
    statusMessage: string
  ) {
    try {
      let materialsObject = Object.fromEntries(materials);
      const data = await donationsCollection
        .record(id)
        .call("setDonation", [
          idEvent,
          donorName,
          location,
          materialsObject,
          donorAddress,
          amount,
          status,
          statusMessage,
        ]);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async deleteDonation(id: string) {
    try {
      const data = await donationsCollection.record(id).call("del", []);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
