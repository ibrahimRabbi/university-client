import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
const { Sider } = Layout;





const AdminSidebar = () => {

    const items = [
        {
            key: Math.random(),
            label: 'Deshboard',
        },
        {
            key: Math.random(),
            label: <NavLink to='*'>Courses</NavLink>
        },
        {
            key: Math.random(),
            label: <NavLink to='/semester'>Assign Semester</NavLink>,
        },
        {
            key: Math.random(),
            label: "student Managment",
            children: [
                {
                    key: Math.random(),
                    label: <NavLink to='*'>Create Student</NavLink>
                },
                {
                    key: Math.random(),
                    label: <NavLink to='/admin/all-student'>All Student</NavLink>
                }
            ]
        },
        {
            key: Math.random(),
            label: 'Faculty Managment',
            children: [
                {
                    key: Math.random(),
                    label: <NavLink to='*'>Create Student</NavLink>
                },
                {
                    key: Math.random(),
                    label: <NavLink to='*'>All Student</NavLink>
                }
            ]

        }
    ]


    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div style={{ color: 'white', display: 'flex', justifyContent: "center", alignItems: "center", marginTop: '10px' }}>
                <h4 >LEGO</h4>
            </div>
            <Menu style={{ marginTop: '20px' }} theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
        </Sider>
    );
};

export default AdminSidebar;