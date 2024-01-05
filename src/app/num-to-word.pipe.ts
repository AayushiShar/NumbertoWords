import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numToWord'
})
export class NumToWordPipe implements PipeTransform {

  private ones=['','One','Two','Three','Four','Five','Six','Seven','Eight',
  'Nine'];
private teens=['Eleven', 'Twelve','Thirtheen','Fourteen','Fifteen','Sixteen'
,'Seventeen','Eighteen','Nineteen'];
private tens=['Ten','Twenty','Thirty','Fourty','Fifty','Sixty'
,'Seventy','Eighty','Ninety'];

  transform(value: number): string {
    if(isNaN(value)||value<0|| value>1000000){
      return 'Invalid number';
    }

    // const ones=['','One','Two','Three','Four','Five','Six','Seven','Eight',
    //                'Nine'];
    // const teens=['Eleven', 'Twelve','Thirtheen','Fourteen','Fifteen','Sixteen'
    //         ,'Seventeen','Eighteen','Nineteen'];
    //  const tens=['Ten','Twenty','Thirty','Fourty','Fifty','Sixty'
    //       ,'Seventy','Eighty','Ninety'];
          if(value===0){
            return 'Zero';
          }
          const lakh=Math.floor(value/100000);
          const thousand=Math.floor((value%100000)/1000)-11;
          const remainder=value%1000;

          const lakhString=lakh >0 ? `${this.ones[lakh]} Lakh` :'';
          const thousandString=thousand >0 ? `${this.tens[thousand]} Thousand`:'';
          const remainderString=this.convertUnderThousandToString(remainder);

          // let result= lakhString+ thousandString+remainderString;

          // return result.trim();
          return `${lakhString} ${thousandString} ${remainderString}`.trim();
        }

        private convertUnderThousandToString(value: number):string{
          const ones=['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
          const teens=['Eleven','Tweleve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen'];
          const tens=['','Ten','Twenty','Thirty','Fourty','Fifty','Sixty','Seventy','Eighty','Ninety'];

          if(value===0){
            return '';
          }
          else if(value<10){
            return ones[value];
          }
          else if(value>=11&&value<=19){
            return teens[value-11];
          }
          else{
            const digit=value%10;
            const ten=Math.floor(value/10)-11;
            return `${tens[ten]}  ${digit !==0? ones[digit]:''}`.trim();
          }
        
        }
  }


