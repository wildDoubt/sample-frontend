import {Layout, Space, Typography} from "antd";
import {spaceStyle, titleStyle} from "../styles";

const {Header} = Layout;


const AppHeader = () => {
    return (
        <Header>
            <Space direction="horizontal" style={spaceStyle}>
                <Typography.Title style={titleStyle}>To Do List</Typography.Title>
            </Space>
        </Header>
    )
}

export default AppHeader;