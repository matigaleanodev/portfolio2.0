import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const _toastr = inject(ToastrService);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      const errorMessage = error.error.message;
      const statusCode = error.error.statusCode;
      _toastr.error(errorMessage, `Error ${statusCode}`);
      return throwError(() => errorMessage);
    })
  );
};
