import { LightningElement } from 'lwc';
import getAccountRevenue from '@salesforce/apex/AccountRevenueGenerator.getAccountRevenue'
export default class AccountRevenue extends LightningElement {
    accountList=[]
    countRecords= 5;

    connectedCallback(){
        getAccountRevenue({count: this.countRecords}).then(response =>{
            console.log('Response is Succesfull',response)
            this.accountList=response
        }).catch(error=>{
            console.error(error)
        })
    }  
    setCount(event){
        console.log('Response is Succesfull',event.target.value)
        let inputValue= event.target.value
        if(inputValue == '') return
        this.countRecords=inputValue
        getAccountRevenue({count: this.countRecords}).then(response =>{
            console.log('Response is Succesfull',response)
            this.accountList=response
        }).catch(error=>{
            console.error(error)
        })

    }     


}