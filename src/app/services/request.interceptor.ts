import { HttpContextToken, HttpInterceptorFn } from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  const token: string = sessionStorage.getItem('token') || '';
  if (req.context.get(BYPASS_JW_TOKEN) === false) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
  }

  return next(req);
};

export const BYPASS_JW_TOKEN = new HttpContextToken(() => false);
