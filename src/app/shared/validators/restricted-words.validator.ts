import { FormControl } from '@angular/forms';

export function restrictedWords(words: string[]): any {
    return (control: FormControl): { [key: string]: any } | null => {
      if (!words) return null;
      var invalidWords = words.map((w: any) =>
        control.value.includes(w) ? w : null
      ).filter((w: string) => w != null);

      return invalidWords && invalidWords.length > 0
        ? { restrictedWords: invalidWords.join(', ') }
        : null;
    };
  }
