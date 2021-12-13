import IBilling from './IBilling';

export default class ServiceBilling implements IBilling {
    create() {
        console.log('Metodo de cobranca')
    }

}