import {Navigate, NavLink, Outlet} from "react-router-dom";
import { Button, Layout } from 'antd';
import AdminSidebar from "./sidebar/AdminSidebar";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import StudentSidebar from "./sidebar/StudentSidebar";
 
import { removeUser } from "../redux/features/auth/userSlice";
 
// import StudentSidebar from "./sidebar/StudentSidebar";
 
const { Header, Content} = Layout;



const MainLayout = () => {

    const userData = useAppSelector(state => state.users)
    const dispatch = useAppDispatch()
    

     
    
    if (!userData.user) {
       return <Navigate to='/auth/sign-in'/>
}

    const logOutHandler = () => {
        dispatch(removeUser(null))
    }

    
    return (
        <Layout>
             {userData.role === 'faculty'? <AdminSidebar/>:<StudentSidebar/>}
            <Layout>
                <Header style={{ padding: 0 }}>
                    {userData.user ? <Button onClick={logOutHandler}>Log Out</Button>:''}
                </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            height: '100vh'
                        }}>
                        <Outlet/>
                    </div>
                </Content>
                 
            </Layout>
        </Layout>
    );
};

export default MainLayout;