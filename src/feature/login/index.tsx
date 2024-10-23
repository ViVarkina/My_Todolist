import {Button, Input, Flex} from "antd"
import "./index.css"
import {useState} from "react";
import {useAppDispatch} from "../../App/rootStore";


export const Login = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useAppDispatch()

    const onClick = ()=>{
        if(login && password){
            console.log(login, password)
        }
    }

    return (
        <>
            <Flex gap={12} vertical style={{width: 500}}>
                <Input placeholder="Login" value={login} onChange={(el) => setLogin(el.target.value)}/>
                <Input placeholder="Password" type={"password"} value={password} onChange={(el) => setPassword(el.target.value)}/>
                <Button type="primary" onClick={onClick}>Log in</Button>
            </Flex>

        </>
    )
}