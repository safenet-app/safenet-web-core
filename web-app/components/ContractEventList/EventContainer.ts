export default interface EventContainer{
    id: string;
    date: string;
    time:string;
    estimatedDate:string;
    //users phone number
    phoneNumber:string;
    reportingUser: string;
    shortDescription: string;
    detailedDescription?: string;
    //geolocalization coordinates
    location: string;
    //filecoin media files
    files : string[];
    status:string;
    //reason to approve or reject and event
    statusMessage?: string;
    //contract admins
    adminAddresses?:string[];
  //this field is filled after contract creation
    contractAddress?:string;
}