export interface ContactFormProps {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  companyname: string;
  subject: string;
  message: string;
}

export interface ApiResponse {
  message: any;
  status: number;
  data: any;
  response?: any;
}
