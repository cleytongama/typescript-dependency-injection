import IPayment from './IPayment';

export default class ServicePayment implements IPayment {
    get() {
        console.log('Metodo busca pagamento')
    }
}