import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationsService } from 'src/app/services/validations.service';

@Component({
  selector: 'app-error-validation',
  templateUrl: './error-validation.component.html',
  styleUrls: ['./error-validation.component.scss'],
})
export class ErrorValidationComponent {
  @Input() control!: FormControl;

  constructor(private validator: ValidationsService) {}

  get errorMsg(): string | null {
    if (this.control.errors !== null) {
      for (const property in this.control.errors) {
        if (
          this.control.errors.hasOwnProperty(property) &&
          this.control.touched
        ) {
          return this.validator.getValidatorErrorMsg(
            property,
            this.control.errors[property]
          );
        }
      }
    }
    return null;
  }
}
