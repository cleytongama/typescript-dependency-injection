import IPayment from './IPayment';
import IBilling from './IBilling';
import IQrCode from './IQrCode';

export type IServicePix = IBilling & IPayment & IQrCode

// Podemos utilizar tmb ...
// export default interface IServicePix extends IBilling, IPayment, IQrCode { }