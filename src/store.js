import { createStore } from "redux";

const nums =["0","1","2","3","4","5","6","7","8","9"];
const sign = ["/", "*", "-", "+"]


const initialState ={
   text: "",
   complet: "0",
   equal: false,
   point: false
}

const reducerCalcu =(state = initialState, action) =>{

      switch(action.type){
         case "CHANG": 
            if(state.equal){
               return {
                  text: "0.",
                  complet: "0.",
                  equal: false,
                  point: true
               }
            }else{
               if(state.point){
                  return {
                     text: state.text,
                     complet: state.complet,
                     equal: false,
                     point: true
                  }
               }else{
                  switch(state.complet){
                     case "+":
                        return {
                           text: state.text+"0.",
                           complet: "0.",
                           equal: false,
                           point: true
                        }
                     case "-":
                        return {
                           text: state.text+"0.",
                           complet: "0.",
                           equal: false,
                           point: true
                        }
                     case "*":
                        return {
                           text: state.text+"0.",
                           complet: "0.",
                           equal: false,
                           point: true
                        }
                     case "/":
                        return {
                           text: state.text+"0.",
                           complet: "0.",
                           equal: false,
                           point: true
                        }
                     case "0":
                        return {
                           text: state.text+"0.",
                           complet: "0.",
                           equal: false,
                           point: true
                        }
                     default:
                        return {
                           text: state.text+".",
                           complet: state.complet+".",
                           equal: false,
                           point: true
                        }
                  }
               }
            }
         case "CHANGEM": 
         if(state.equal){
            return {
               text: state.complet+"-",
               complet: "-",
               equal: false,
               point: false
            }
         }else{
               if(state.complet === "-"){
                  return state
               }else{
                  return {text: state.text+"-", complet: "-", equal: false, point: false} 
               }
         }
         case "CHANGEO":
            if(state.equal){
               return {
                  text: state.complet+sign[action.id],
                  complet: sign[action.id],
                  equal: false,
                  point: false
               }
            }else{
               switch(state.complet){
                  case "0":
                     return state
                  case "+":
                     return {text: state.text.replace(/[\W\S\D]$/, sign[action.id]), complet: sign[action.id], equal: false, point: false}
                  case "-":
                     return {text: state.text.replace(/([/*+-]*)$/, sign[action.id]), complet: sign[action.id], equal: false, point: false}
                  case "/":
                     return {text: state.text.replace(/[\W\S\D]$/, sign[action.id]), complet: sign[action.id], equal: false, point: false}
                  case "*":
                     return {text: state.text.replace(/[\W\S\D]$/, sign[action.id]), complet: sign[action.id], equal: false, point: false}
                  default:
                     return {text: state.text+sign[action.id], complet: sign[action.id], equal: false, point: false} 
               }
            }
         case "CHANGE":
            if(state.equal){
               return {
                  text: nums[action.id],
                  complet: nums[action.id],
                  equal: false,
                  point: false
               }
            }else{
               switch(state.complet){
                  case "0":
                     return {text: state.text+nums[action.id], complet: nums[action.id], equal: false, point: state.point}
                  case "+":
                     return {text: state.text+nums[action.id], complet: nums[action.id], equal: false, point: state.point}
                  case "-":
                     return {text: state.text+nums[action.id], complet: nums[action.id], equal: false, point: state.point}
                  case "/":
                     return {text: state.text+nums[action.id], complet: nums[action.id], equal: false, point: state.point}
                  case "*":
                     return {text: state.text+nums[action.id], complet: nums[action.id], equal: false, point: state.point}
                  default:
                     return {text: state.text+nums[action.id], complet: state.complet+nums[action.id], equal: false, point: state.point}
               }
            }
         case "RESULT":
             let ecuacion = Number(eval(state.text));
             return {text: state.text+"="+ecuacion, complet: ecuacion, equal: true}
         case "CLEAR":
            return {text: "", complet: "0", equal: false}
         default:
            return state;
      }
   
}
export default createStore(reducerCalcu);