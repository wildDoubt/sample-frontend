import {List} from "antd";
import CreateToDoButton from "./CreateToDoButton";

const ToDoList = ({data}) => {
    const renderItem = (item) => {
        return <>
            <List.Item>
                    {item.title}
            </List.Item>
            <List.Item>
                    {item.contents}
            </List.Item>
        </>
    }

    return <>
        <List
            dataSource={data}
            renderItem={renderItem}>
        </List>
        <CreateToDoButton/>
    </>
}

export default ToDoList;