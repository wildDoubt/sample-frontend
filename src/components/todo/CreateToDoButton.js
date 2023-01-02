import {Button} from "antd";
import CreateToDoModal from "./CreateToDoModal";
import {useState} from "react";
import axios from "axios";

const CreateToDoButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onClickButton = () => {
        setIsModalOpen(true);
    }

    const parseData = (data) => {
        if (data.includes("\n")) {
            const splitIndex = data.indexOf("\n");

            return {
                title: data.substring(0, splitIndex),
                contents: data.substring(splitIndex + 1)
            }
        }
        return {title: data, contents: ""}
    };

    const createToDo = (data) => {
        const {title, contents} = parseData(data);
        
        axios.post("/todo", {
            title: title,
            contents: contents
        })
            .then((response) => {
                console.log(response.data);
            });
        window.location.replace("/");
    }

    const handleOk = ({data, initializeData}) => {
        createToDo(data)
        initializeData();
        setIsModalOpen(false);
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    }

    return (
        <>
            <Button type="primary" onClick={onClickButton}>할 일 생성</Button>
            <CreateToDoModal isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}/>
        </>
    )
}

export default CreateToDoButton;