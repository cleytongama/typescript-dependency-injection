import IServicePix from './IServicePix';
import ServiceBilling from './ServiceBilling';
import ServicePayment from './ServicePayment';
import ServicePix from './ServicePix';
import ServiceQrCode from './ServiceQrCode';

const containerServicePix: IServicePix = {
    createBilling: () => new ServiceBilling(),
    getPayment: () => new ServicePayment(),
    getQrCode: () => new ServiceQrCode()
}
console.log("----Abstract Factory----")

const service = new ServicePix(containerServicePix)
service.createBilling()
service.getPayment()
service.getQRcode()
