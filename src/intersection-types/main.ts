import { IServicePix } from './IServicePix';
import ServiceBilling from './ServiceBilling';
import ServicePayment from './ServicePayment';
import ServicePix from './ServicePix';
import ServiceQrCode from './ServiceQrCode';

const containerDependence: IServicePix = {
    create: () => new ServiceBilling().create(),
    getPayment: () => new ServicePayment().getPayment(),
    getQrCode: () => new ServiceQrCode().getQrCode()
}

console.log("----Intersect Types----")

const service = new ServicePix(containerDependence)

service.createBilling()
service.getPayment()
service.getQRcode()
