import { Component, OnInit } from '@angular/core';
import { KeypadService } from 'src/app/services/keypad.service';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {
  
  // buttons: string[] = ['1','2','3','4','5','6','7','8','9','send','0','space'];
  buttons : any =[
    {key : '1' , val : '@.?'},
    {key : '2' , val : 'ABC'},
    {key : '3' , val : 'DEF'},
    {key : '4' , val : 'GHI'},
    {key : '5' , val : 'JKL'},
    {key : '6' , val : 'MNO'},
    {key : '7' , val : 'PQRS'},
    {key : '8' , val : ' TUV'},
    {key : '9' , val : 'WXYZ'},
    {key : '*' , val : 'send'},
    {key : '0' , val : 'zero'},
    {key : '#' , val : 'space'},







  ]
  // alphabets : string[] = ['@.?' , 'ABC' , 'DEF' , 'GHI' ,'JKL' ,'MNO' , 'PQRS','TUV','WXYZ']
  code:string='';
  // validate : string = '';
  constructor(private _keyPadService : KeypadService) { }

  ngOnInit() {
  }


  getValue(event){
    if(event.target.value=='*'){
      this.onSubmit()
    }
    else if(event.target.value=='#'){
      this.code += ' ';
    }
    else{
      console.log("Event is:",event);
      this.code += event.target.value;
    }
    
  }

  //Clear the values
  clear(){
    this.code = '';
  }

  //Submit form
  onSubmit() { 
    // console.log("form is:", this.code)
    let filterCode = this.code.split("").filter((item)=>item != ' ').join("");
    // console.log("x is:", filterCode);
    if(filterCode.charAt(0) == '0'){
      let newCode = filterCode.slice(1);
      // console.log("New Code:", newCode)
        this._keyPadService.getCode(newCode).subscribe((res:any)=>{
      // console.log("Response is:", res)
        this.code = res.answer;
      })
    }else{
      this.code = 'Enter Valid values'
    }
   

    
  
  }
}
