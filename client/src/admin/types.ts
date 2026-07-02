export interface Contact {
  id: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
}

export interface Proposal {
  id: number;
  company: string;
  name: string;
  email: string;
  phone: string;
  website: string;
  service: string;
  budget: string;
  message: string;
  createdAt: string;
}