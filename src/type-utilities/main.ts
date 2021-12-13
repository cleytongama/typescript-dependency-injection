import ServiceBilling from './ServiceBilling';
import ServicePayment from './ServicePayment';
import ServicePix from './ServicePix';

console.log("----Type Utilities ----")

const servicePix = new ServicePix()

const serviceBilling = new ServiceBilling(servicePix)
serviceBilling.create()

const servicePayment = new ServicePayment(servicePix)
servicePayment.getPayment()
servicePayment.getQrCode()
