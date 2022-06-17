import { toast } from 'react-toastify';

export const toastConfig = {
  //position: toast.POSITION.BOTTOM_CENTER,
  autoClose: 3000,
  pauseOnFocusLoss: true,
  hideProgressBar: false,
  closeOnClick: true,
  closeButton: true,
};

export function notifySuccess(msg: string) {
  toast.success(msg);
}

export function notifyError(msg: string) {
  toast.error(msg);
}
