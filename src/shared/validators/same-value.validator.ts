import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function sameValueValidator(obj: Record<string, unknown>): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let same = true;

    for (const key of Object.keys(obj)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const controlValue = control.get(key)?.value;
      const value = obj[key];
      if (value === undefined) {
        continue;
      }

      if (controlValue !== value) {
        same = false;
        break;
      }
    }

    return same ? { sameValue: true } : null;
  };
}
