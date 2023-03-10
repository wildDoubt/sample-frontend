import {Layout, Space} from "antd";
import {spaceStyle} from "../styles";
import EmptyList from "./todo/EmptyList";
import ToDoList from "./todo/ToDoList";
import {useEffect, useState} from "react";
import axios from "axios";

const {Content} = Layout;
const AppContent = () => {
    const [dataList, setDataList] = useState([]);

    useEffect(()=>{
        axios.get("/todos")
            .then(response => {
                setDataList(response.data);
            })
    }, [])

    const RenderDataList = ()=>{
        if(dataList.length === 0){
            return <EmptyList/>
        }

        return <ToDoList data={dataList}/>
    }

    return <Content>
        <Space direction="horizontal" style={spaceStyle}>
            <RenderDataList/>
        </Space>
    </Content>
}

export default AppContent;