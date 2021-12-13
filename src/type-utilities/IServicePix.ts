export default interface IServicePix {
    createBilling(): any;
    getQrCode(): any;
    getPayment(): any;
}

export type IPixBilling = Pick<IServicePix, 'createBilling'>

export type IPixGetPay = Omit<IServicePix, 'createBilling'>

