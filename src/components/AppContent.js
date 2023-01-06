import {Image, Layout, Space} from "antd";
import {spaceStyle} from "../styles";
import EmptyList from "./todo/EmptyList";
import ToDoList from "./todo/ToDoList";
import {useEffect, useState} from "react";
import axios from "axios";

const {Content} = Layout;
const AppContent = () => {
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        axios.get("/todos")
            .then(response => {
                setDataList(response.data);
            })
    }, [])

    const RenderDataList = () => {
        if (dataList.length === 0) {
            return <EmptyList/>
        }

        return <ToDoList data={dataList}/>
    }

    return <Content>
        <Space direction="horizontal" style={spaceStyle}>
            <RenderDataList/>
        </Space>
        <Space direction="horizontal" style={spaceStyle}>
            <Image
                src="https://wonyeong-web-23489273498.s3.ap-northeast-2.amazonaws.com/images/web-architecture.png"
                width="15%"/>
        </Space>
    </Content>
}

export default AppContent;