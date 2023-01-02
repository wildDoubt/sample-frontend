import {Layout, Space, Typography} from "antd";
import {spaceStyle} from "../styles";

const {Footer} = Layout;
const {Text, Link} = Typography;
const AppFooter = () => {
    return (
        <Footer>
            <Space direction="horizontal" style={spaceStyle}>
                <Text>Example To Do List created by</Text>
                <Link href="https://github.com/wildDoubt" target="_blank">wildDoubt</Link>
            </Space>
        </Footer>
    )
}

export default AppFooter;