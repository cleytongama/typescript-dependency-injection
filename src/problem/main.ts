import ServicePix from './ServicePix';
import ServiceBilling from './ServiceBilling';
import ServicePayment from './ServicePayment';
import ServiceQrCode from './ServiceQrCode';

const service = new ServicePix(
    new ServiceBilling(),
    new ServicePayment(),
    new ServiceQrCode(),
    // Caso começe a crescer o número de dependencias ...
    //new ServiceA()
    //new ServiceB()
    //new ServiceC()
    //new ServiceD()
    //new ServiceE()
);
console.log("----Problema----")
service.createbilling()
service.getPayment()
service.getQRcode()