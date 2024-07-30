import { Input } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { FormEvent } from "react";
import { useLoginMutation } from "../../redux/features/auth/authEndPoint";
import { useAppDispatch } from "../../redux/hook";
import { setUser } from "../../redux/features/auth/userSlice";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { useNavigate } from "react-router-dom";
 

const Login = () => {

    const [loginFunc, { isLoading }] = useLoginMutation()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    
 
    if (isLoading) {
        return <h1 className="text-6xl">Loading...</h1>
    }

     
    const submitHandler = async (e: FormEvent) => {
        e.preventDefault()
        const loggedin = await loginFunc({ rollId: e.target.roll.value, password: e.target.pass.value }).unwrap()
        const tokenDecoded:JwtPayload = jwtDecode(loggedin.token) 
        dispatch(setUser(tokenDecoded))
        navigate('/')
    }


    return (
        <div className="w-[60%] m-auto mt-14 border rounded-lg py-20 px-16">
            <form onSubmit={submitHandler} className="flex flex-col space-y-6">
                <Input type="text" name="roll" size="large" placeholder="enter your ID NO" prefix={<UserOutlined />} />
                <Input.Password size="large" name="pass" placeholder="input password" />
                <Input size="large" className="bg-slate-800 text-white" type="submit" value='Submit' />
            </form>
        </div>
    );
};

export default Login;