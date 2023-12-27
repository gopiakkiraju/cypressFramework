import { after, before } from "lodash";
import {loginPageMethods} from "../methods/pageMethods";
// import  {login}  from "../methods/pageMethodsApproach2";
// import {LoginPageMethods} from "../methods/pageMethodsApproach3";

describe("2nd set of Automation",() => {
  const loginMethods = new loginPageMethods(); 
  it("Adding items to cart", () =>{
    loginMethods.login("standard_user", "secret_sauce")
    // login("standard_user", "secret_sauce")
    // LoginPageMethods.login("standard_user", "secret_sauce")
    // Hooks
  })

})