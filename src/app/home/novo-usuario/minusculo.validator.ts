import { AbstractControl, Validators } from "@angular/forms";

export function minusculoValidator(control: AbstractControl) {
    const valor = control.value as string;
    console.log('minusculoValidator valor:',valor);
    if (valor != valor.toLowerCase()) {
        console.log('qwer');
        return {
            minusculo: true
        }
    } else {
        return null;
    }
}