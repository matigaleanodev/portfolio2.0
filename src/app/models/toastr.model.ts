export interface ToastOption {
  message: string;
  color: Color;
  header: string;
  icon: string;
}

export type Color =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'medium'
  | 'dark';
