import IQrCode from './IQrCode';

export default class ServiceQrCode implements IQrCode {
    get() {
        console.log('Metodo de busca um qrcode')
    }

}