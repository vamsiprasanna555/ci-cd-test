import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
const FIELDS=[Account.Name, Account.Industry, Account.Phone]
export default class LightningDataServiceExample extends LightningElement {
    
@api recordId
   isVisible=false

   @wire(getRecord, {recordId:'$recordId',fields:FIELDS})

   
handelEdit(){
    isVisible=true
}
handleCancel(){
    isVisible=false
}

handelSuccess(){
    isVisible=false
    this.dispatchEvent(
        new ShowToastEvent({
title:'Success',
message:'Successfully Updated',
variant:'success'
        })
    )
}


}




