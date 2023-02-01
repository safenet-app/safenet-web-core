export interface DeleteEventDTO {
  id: string;
}

export interface CreateEventDTO extends DeleteEventDTO {
  timestamp: number;
  estimatedDate: string;
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
