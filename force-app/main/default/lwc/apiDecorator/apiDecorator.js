import { LightningElement } from 'lwc';

export default class ApiDecorator extends LightningElement {
    setValue(){
        const inputValue= this.template.querySelector('lightning-input').value
        this.template.querySelector('c-child-decorator').childProperty1= inputValue
       
    }
}