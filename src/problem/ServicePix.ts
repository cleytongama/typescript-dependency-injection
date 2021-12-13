import IBilling from './IBilling';
import IPayment from './IPayment';
import IQrCode from './IQrCode';

export default class ServicePix {
    private billing: IBilling
    private payment: IPayment
    private qrcode: IQrCode
    constructor(billing: IBilling, payment: IPayment, qrcode: IQrCode) {
        this.billing = billing
        this.payment = payment
        this.qrcode = qrcode
    }

    createbilling() {
        this.billing.create()
    }

    getPayment() {
        this.payment.get()
    }

    getQRcode() {
        this.qrcode.get()
    }
}