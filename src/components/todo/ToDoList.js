import {Button, Card, Checkbox, List} from "antd";
import CreateToDoButton from "./CreateToDoButton";
import axios from "axios";

const ToDoList = ({data}) => {
    const onClickCheckBox = (item, e) => {
        axios.patch("/todo", {
            id: item.id,
            completed: e.target.checked
        });
    }
    const renderDescription = (item) => {
        return <div style={{
            display: "flex",
            justifyContent: "space-between"
        }}>
            <div>{item.contents}</div>
            <Checkbox
                defaultChecked={item.completed}
                onClick={(e) => onClickCheckBox(item, e)}/>
        </div>
    }

    const onClickCancelButton = (item, e) => {
        axios.delete(`/todo/${item.id}`)
            .then(() => window.location.reload("/"))
    }

    const renderItem = (item) => {
        const description = renderDescription(item);
        return <Card
            title={item.title}
            bordered={false}
            style={{
                width: "50vw",
                margin: "10px",
            }}
            extra={<Button danger onClick={(e) => onClickCancelButton(item, e)}>삭제</Button>}
        >
            <Card.Meta description={description}>
            </Card.Meta>
        </Card>
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