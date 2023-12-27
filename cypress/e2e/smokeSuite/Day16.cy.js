import {loginPageMethods} from "../methods/pageMethods";
// import  {login}  from "../methods/pageMethodsApproach2";
// import {LoginPageMethods} from "../methods/pageMethodsApproach3";
import values from '../../fixtures/example.json'

describe("1st set of Automation",() => {
  
  const loginMethods = new loginPageMethods();

  it("login flow",() =>{
    loginMethods.login(values.userName, values.pwd)
    let value1 = 2
    let value2 = 6
  })
})