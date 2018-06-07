import { ToastyService } from 'ng2-toasty';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private toastyService: ToastyService) { }

  handler(errorResponse: any) {
    let msg: string;
    if (typeof errorResponse === 'string') {
      msg = errorResponse;
    } else {
      msg = 'Erro ao processar serviço remoto. Tente novamente.';
      console.log('Ocorreu um erro', errorResponse);
    }
    this.toastyService.error(msg);
  }
}
