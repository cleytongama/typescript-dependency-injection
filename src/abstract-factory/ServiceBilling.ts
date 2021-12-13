import ICobranca from './IBilling';

export default class ServiceCobranca implements ICobranca {
    create() {
        console.log('Metodo de cobranca')
    }

}