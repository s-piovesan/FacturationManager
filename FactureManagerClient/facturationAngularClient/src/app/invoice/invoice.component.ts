import 'rxjs/add/operator/switchMap'
import { Component, OnInit,OnChanges , Input, SimpleChanges , SimpleChange } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Invoice } from '../invoice';
import { InvoiceService } from '../invoice.service';
import { Line } from '../line';
import { LineService } from '../line.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit, OnChanges {

  @Input() invoiceId : string;
  customer: Customer;
  invoice: Invoice;
  lines: Line[];
  total: number = 0;
  monthes: string[] = ["janvier","février","mars","avril","mai", "juin", "juillet","aout","septembre", "octobre", "novembre", "decembre"]
  constructor(private router: Router, private customerService: CustomerService, private lineService: LineService, private invoiceService: InvoiceService) {
  }

  print(): void {
       let printContents, popupWin;
       printContents = document.getElementById('printSection').innerHTML;
       popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
       popupWin.document.open();
       popupWin.document.write(`
          <html>
              <head>
                  <title>Print tab</title>
                  <!-- Compiled and minified CSS -->
                   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.1/css/materialize.min.css">
                   <!-- Compiled and minified JavaScript -->
                   <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.1/js/materialize.min.js"></script>
              </head>
              <body onload="window.print();window.close()">${printContents}
              </body>
          </html>`
       );
       popupWin.document.close();
    }

  getNextDeliveryDate(lineDate : Date): Date {
    var daysOfDelivery : number[] = [2,4];
    var currentDate : Date = new Date(lineDate);

    var minDiff : number = 8;
    var dayline : number = currentDate.getDay();

    for (var day of daysOfDelivery) {
      var currentDiff : number = this.getDayDiff(dayline, day);

      if (currentDiff < minDiff){
        minDiff = currentDiff;
      }

    }



    return new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + minDiff);
  }

  getDayDiff(day1 : number, day2 : number ): number {
    var dayDiff : number = 0;

    if (day1 < day2){
      dayDiff = day2 - day1;
    }
    if  (day1 == day2){
      dayDiff = 0;
    }
    if  (day1 > day2){
      dayDiff = (7 - day1) + day2;
    }
    return dayDiff;


  }

  pad(num:number, size:number): string {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
  }

  loadData():void {
    this.invoiceService.getInvoice(this.invoiceId).then(
      (invoice) => {
        if (invoice != null) {
          this.invoice = invoice;
          this.customerService.getCustomer(invoice.customerId).then(
            (customer) => {
              this.customer = customer;
          })
          this.lineService.getLinesWithInvoiceId(invoice._id).then(
            (lines) => {
              var lastDeliveryDate : Date = new Date(1970,1,1);
              this.lines = new Array<Line>();
              for (var line of lines) {
                  var currentLineDeliveryDate : Date = this.getNextDeliveryDate(line.creationDate)

                  if (lastDeliveryDate.getTime() != currentLineDeliveryDate.getTime() ){
                    lastDeliveryDate = currentLineDeliveryDate;

                    var deliveryLine : Line = new Line()
                    deliveryLine.invoiceId = "";
                    deliveryLine.productId = "";
                    deliveryLine.creationDate= currentLineDeliveryDate;
                    deliveryLine.description= "Livraison du " + this.pad(currentLineDeliveryDate.getDate(),2) + " " + this.monthes[currentLineDeliveryDate.getMonth()] + " " + currentLineDeliveryDate.getFullYear() ;
                    deliveryLine.quantity = 0 ;
                    deliveryLine.price = 0 ;
                    deliveryLine.isInformationLine = true ;

                      this.lines.push(deliveryLine);
                      line.isInformationLine = false;
                      line.total = line.quantity * line.price;

                      this.lines.push(line);
                      this.total = this.total  + line.total;
                  }else{
                      line.isInformationLine = false;
                      line.total = line.quantity * line.price;

                      this.lines.push(line);
                      this.total = this.total  + line.total;
                  }
              }

          })
        }else{
            this.invoice = null;
        }
      });
  }

  ngOnChanges(changes: SimpleChanges) {

    this.loadData();

  }

  ngOnInit() {
      this.loadData();
  }


}
