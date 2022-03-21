import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { ObjectHelper } from '../helpers/object.helper';

export function sameValueValidator(
  obj: Record<string, unknown>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  comp?: Record<string, (a: any, b: any) => boolean>
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let same = true;

    for (const key of Object.keys(obj)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const controlValue = control.get(key)?.value;
      const value = obj[key];
      if (
        ObjectHelper.isNullOrUndefined(value) &&
        ObjectHelper.isNullOrUndefined(controlValue)
      ) {
        continue;
      }

      if (
        (controlValue !== value && !comp?.[key]) ||
        comp?.[key]?.(controlValue, value) === false
      ) {
        same = false;
        break;
      }
    }

    return same ? { sameValue: true } : null;
  };
}