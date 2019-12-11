import { FormControl } from '@angular/forms';

export function restrictedWords(words) {
    return (control: FormControl): { [key: string]: any } => {
        if (!words) {
            return null;
        }

      return null;
    };
}
