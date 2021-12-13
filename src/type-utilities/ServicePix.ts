import IServicePix from './IServicePix';

export default class ServicePix implements IServicePix {
    createBilling() {
        console.log("Metodo cria pagamento")
    }
    getQrCode() {
        console.log("Metodo cria QrCode")
    }
    getPayment() {
        console.log("Metodo cria getPayment")
    }
}
