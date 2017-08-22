export class Invoice {
    _id: string;
    number: string;
    customerId: string;
  	creation_date : Date;
    start_period : Date;
    end_period : Date;
    status : string;
    total: number;
}
