import { IPixGetPay } from './IServicePix';

export default class ServicePayment {
    private pixGetPay: IPixGetPay
    constructor(pixGetPay: IPixGetPay) {
        this.pixGetPay = pixGetPay;
    }
    getPayment() {
        this.pixGetPay.getPayment()
    }
    getQrCode() {
        this.pixGetPay.getQrCode()
    }
}