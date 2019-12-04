import { Injectable } from '@angular/core';

declare let toastr:any
@Injectable()
export class ToastrService {
    success(message: string, title?: string) {
        toastr.success(message, title)
    }
    info(message: string, title?: string) {
        toastr.info(message, title)
    }
    warmomg(message: string, title?: string) {
        toastr.warning(message, title)
    }
    error(message: string, title?: string) {
        toastr.error(message, title)
    }
}