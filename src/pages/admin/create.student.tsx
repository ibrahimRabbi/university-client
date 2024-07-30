import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { FormEvent } from "react";

 

const CreateStudent = () => {

    const submitHandler = (e: FormEvent) => {
        e.preventDefault()
        console.log(e)
    }


    return (
        <div className="w-[60%] m-auto mt-14 border rounded-lg py-20 px-16">
            <form onSubmit={submitHandler} className="flex flex-col space-y-6">
                <Input size="large" placeholder="large size" prefix={<UserOutlined/>} />
                <Input.Password size="large" placeholder="input password" />
                <Input size="large" className="bg-slate-800 text-white" type="submit" value='Submit' />
            </form>
        </div>
    );
};

export default CreateStudent;