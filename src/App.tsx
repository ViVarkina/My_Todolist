import './App.css'
import {Body} from "./body/Body.tsx";
import {Login} from "./feature/login";
import {Provider} from "react-redux";
import {rootStore} from "./App/rootStore";

function App() {

    if(true){
        return <Login/>
    }
  return (
    <>
      <Body/>
    </>
  )
}


export const WrapperApp=()=>{
    return (
        <Provider store={rootStore}>
            <App/>
        </Provider>
    )
}
export default App
