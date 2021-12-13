import IPayment from './IPayment';
import IBilling from './IBilling';
import IQrCode from './IQrCode';

export default interface IServicePix {
    createBilling(): IBilling;
    getQrCode(): IQrCode;
    getPayment(): IPayment;
}