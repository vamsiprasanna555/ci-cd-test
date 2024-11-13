import { LightningElement, track } from 'lwc';
import getContactList from '@salesforce/apex/ContactsList.getContactList'
export default class GetContactDetails extends LightningElement {
    @track contactDetail=[]
    countRecords= 4

    connectedCallback(){
        getContactList({count: this.countRecords}).then(response =>{
            console.log('Response is successfull', response)
            this.contactDetail= response
        }).catch(error =>{
            console.error(error)
        })
    }

    setContactCount(event){
            console.log('contact is loaded successfully', event.target.value)
            let inputValues= event.target.value
            if(inputValues === '') return 
            this.countRecords= inputValues
            getContactList({count: this.countRecords}).then(response =>{
                console.log('Response is successfull', response)
                this.contactDetail= response
            }).catch(error =>{
                console.error(error)
            })
    }
}