import { Layout, Menu } from 'antd';
const { Sider } = Layout;





const StudentSidebar  = () => {

    const items = [
        {
            key: Math.random(),
            label: 'Profile',
        },
        {
            key: Math.random(),
            label: 'My Semeter',
        },
        {
            key: Math.random(),
            label: "My Classes",
        },
         
    ]


    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0">
            <div style={{ color: 'white', display: 'flex', justifyContent: "center", alignItems: "center", marginTop: '10px' }}>
                <h4 >LEGO</h4>
            </div>
            <Menu style={{ marginTop: '20px' }} theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
        </Sider>
    );
};

export default StudentSidebar;