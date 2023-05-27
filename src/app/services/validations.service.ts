import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidationsService {
  constructor() {}
  getValidatorErrorMsg(validatorName: string, validatorValue?: unknown) {
    const config: { [key: string]: string } = {
      required: 'Required',
      pattern: 'Numbers Only',
    };
    return config[validatorName];
  }
}
