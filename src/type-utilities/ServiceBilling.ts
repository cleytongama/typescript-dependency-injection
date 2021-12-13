import { IPixBilling } from './IServicePix';

export default class ServiceBilling {
    private pixBilling: IPixBilling
    constructor(pixBilling: IPixBilling) {
        this.pixBilling = pixBilling;
    }
    create() {
        this.pixBilling.createBilling()
    }
}