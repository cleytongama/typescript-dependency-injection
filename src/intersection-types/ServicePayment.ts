import IPayment from './IPayment';

export default class ServicePayment implements IPayment {
    getPayment() {
        console.log('Metodo busca pagamento')
    }
}