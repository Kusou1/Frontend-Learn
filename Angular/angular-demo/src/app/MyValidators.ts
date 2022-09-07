import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs"

export class MyValidators {
    static cannotContainSpace(control: AbstractControl) {
        // 验证未通过
        if (/\s/.test(control.value)) return { cannotContainSpace: true }
        // 验证通过
        return null
    }
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise(resolve => {
          if (control.value == "admin") {
             resolve({ shouldBeUnique: true })
           } else {
             resolve(null)
           }
        })
      }
}