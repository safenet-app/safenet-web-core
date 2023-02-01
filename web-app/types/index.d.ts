export interface DeleteEventDTO {
  id: string;
}

export interface CreateEventDTO extends DeleteEventDTO {
  date: date;
  time: date;
  estimatedDate: string;
  phoneNumber: string;
  reportingUser: string;
  shortDescription: string;
  location: string;
}

export interface UpdateEventDTO extends CreateEventDTO {
  files: string[];
  adminAddresses: string[];
  status: string;
  detailedDescription: string;
  statusMessage: string;
}
