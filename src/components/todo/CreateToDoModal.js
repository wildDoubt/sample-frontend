import {Input, Modal, Typography} from "antd";
import {useState} from "react";

const CreateToDoModal = ({isModalOpen, handleOk, handleCancel}) => {
    const [toDoData, setToDoData] = useState("");

    const onChangeData = (e) => {
        setToDoData(e.target.value);
    }

    const initializeToDoData = () => {
        setToDoData("");
    }

    return <Modal title="할 일" open={isModalOpen}
                  onOk={() => handleOk({data: toDoData, initializeData: initializeToDoData})}
                  onCancel={handleCancel}>
        <Typography.Text>
            엔터로 제목과 내용을 구분합니다.
        </Typography.Text>
        <Input.TextArea
            rows={10}
            autoSize={{
                minRows: 6,
                maxRows: 12
            }}
            onChange={onChangeData}
            value={toDoData}
        >
        </Input.TextArea>
    </Modal>
}

export default CreateToDoModal;