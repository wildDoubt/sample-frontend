import {Layout, Space} from "antd";
import {spaceStyle} from "../styles";
import EmptyList from "./todo/EmptyList";
import ToDoList from "./todo/ToDoList";
import {useEffect, useState} from "react";
import axios from "axios";
import useDeepCompareEffect from "use-deep-compare-effect";

const {Content} = Layout;
const AppContent = () => {
    const [dataList, setDataList] = useState([]);

    useDeepCompareEffect(()=>{
        axios.get("/todos")
            .then(response => {
                setDataList(response.data);
            })
    }, [dataList])

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