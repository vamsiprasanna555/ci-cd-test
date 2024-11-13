import { LightningElement, api } from 'lwc';

export default class ChildDecorator extends LightningElement {
    @api childProperty1
    @api childProperty2

    
}