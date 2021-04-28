import React from "react";
interface IState{
    "empid":number;
    "empname":string;
    "empsalary":number;
    "emphobies":string[];
    "allemp":any[];
    "consolun":any;
}
interface IProps{

}
class State extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state={
            "empid":11100,
            "empname":"empone",
            "empsalary":10000000,
            "emphobies":["cricket","movies","reading"],
            "allemp":[
                {"empname":"gangireddy",'empsalary':10000,"empdomain":"forntdev"},
                {"empname":"sudha","empsalary":20000,"empdomain":"angulardev"},
                {"empname":"reddy","empsalary":30000,"empdomain":"reactjs"}
            ],
            "consolun":"the end of the employees"
        }
    }
    render(){
        return(
            
            <React.Fragment>
                <div >
                EmpId:{this.state.empid}
                <br/><br/>
                EmpName:{this.state.empname}
               <br/><br/>
               Empsalary:{this.state.empsalary}
               <br/><br/>
               Emphobies:{this.state.emphobies.map((arg:string,index:number)=>
               (
                   <p key={index}>{arg}</p>
               ))};
               <table>
                   <tr>
                       <th>emname</th>
                       <th>empsalary</th>
                       <th>empdomain</th>
                   </tr>
                   {this.state.allemp.map((elments:any,index:number)=>(
                      <tr>
                          <td>{elments.empname}</td>
                          <td>{elments.empsalary}</td>
                          <td>{elments.empdomain}</td>
                      </tr> 
                   ))}
               </table>
               <br/>
               Conclusion:{this.state.consolun}
               </div>
               
            </React.Fragment>
        )
    }
}
export default State;