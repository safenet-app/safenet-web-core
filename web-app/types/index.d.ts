export interface DeleteEventDTO {
  id: string;
}

export interface CreateEventDTO extends DeleteEventDTO {
  time: date;
  date: Date;
  estimatedDate: string;
  reportingUser: string;
  shortDescription: string;
  phoneNumber: string;
  location: string;
  files: string[];
}

export interface UpdateEventDTO extends CreateEventDTO {
  files: string[];
  adminAddresses: string[];
  status: string;
  detailedDescription: string;
  statusMessage: string;
}
export interface DonationDTO  {
  id: string;
  idEvent?:string;
  donorName?: string;
  location?: string;
  materials?: map<string, number>;
  donorAddress?: string;
  currency?: string; // USDC for now
  amount?: number;
  status?: string;
  statusMessage?:string;
}
