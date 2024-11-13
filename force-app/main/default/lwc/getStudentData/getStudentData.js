import { LightningElement, track} from 'lwc';

export default class GetStudentData extends LightningElement {
    @track studentData={}
      firstName=''
      lastName=''
      email=''


      handleFirstname(event){
        this.firstName= event.target.value
        this.studentData.firstName= event.target.value
      }

      handleLastname(event){
        this.lastName= event.target.value
        this.studentData.lastName= event.target.value
      }

      handleEmailname(event){
           this.email= event.target.value
           this.studentData.email= event.target.value
      }
}