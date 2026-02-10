import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone: string): string {
    if (!phone || phone.length < 10 || phone.length > 11){
      return'Telefone inválido'
    }

  }

}
