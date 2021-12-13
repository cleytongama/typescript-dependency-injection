import { IServicePix } from './IServicePix';

export default class ServicePix {
    service: IServicePix
    constructor(service: IServicePix) {
        this.service = service
    }
    createBilling() {
        this.service.create()
    }

    getPayment() {
        this.service.getPayment()
    }

    getQRcode() {
        this.service.getQrCode()
    }
}
