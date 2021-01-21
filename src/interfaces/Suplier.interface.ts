export interface ISupplier{
  [key: string]: any;

  company: string;
  company_id: string;
  description: string;
  employee_count: string;
  hq_city: string;
  hq_country: string;
  hq_line1: string;
  hq_line2: string;
  industry:string;
  linkedin_url: string;
  logo_url: string;
  revenue: string;
  type: string;
  website: string;
}

export interface IData{
  [key: string]: ISupplier
}
