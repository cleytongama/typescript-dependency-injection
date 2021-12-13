import IPayment from './IPayment';
import IBilling from './IBilling';
import IQrCode from './IQrCode';
import IServicePix from './IServicePix';

export default class ServicePix {
    billing: IBilling
    payment: IPayment
    qrcode: IQrCode
    constructor(service: IServicePix) {
        this.billing = service.createBilling()
        this.payment = service.getPayment()
        this.qrcode = service.getQrCode()
    }
    createBilling() {
        this.billing.create()
    }

    getPayment() {
        this.payment.getPayment()
    }

    getQRcode() {
        this.qrcode.getQrCode()
    }
}
