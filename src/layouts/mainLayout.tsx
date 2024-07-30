import {Navigate, NavLink, Outlet} from "react-router-dom";
import { Layout } from 'antd';
import AdminSidebar from "./sidebar/AdminSidebar";
import { useAppSelector } from "../redux/hook";
import StudentSidebar from "./sidebar/StudentSidebar";
import FacultySidebar from "./sidebar/FacultySidebar";
 
// import StudentSidebar from "./sidebar/StudentSidebar";
 
const { Header, Content} = Layout;



const MainLayout = () => {

    const userData = useAppSelector(state => state.users)

     
    
    if (!userData.user) {
       return <Navigate to='/auth/sign-in'/>
}

     



    return (
        <Layout>
             {userData.role === 'admin'? <AdminSidebar/>: userData.role === 'faculty'? <FacultySidebar/>:<StudentSidebar/>}
            <Layout>
                <Header style={{ padding: 0 }}>
                    <NavLink to='#'>
                        <h1 style={{color:"white",textAlign:'center'}}>PH University</h1>
                    </NavLink>
                </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            height: '100vh'
                        }}>
                        <Outlet />
                    </div>
                </Content>
                 
            </Layout>
        </Layout>
    );
};

export default MainLayout;