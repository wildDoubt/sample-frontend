import {Empty} from "antd";
import CreateToDoButton from "./CreateToDoButton";

const EmptyList = () => {
    return <Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{
            height: 60,
        }}
        description={
            <span>
        현재 등록된 일이 없습니다. 만들어 보세요.
      </span>
        }
    >
        <CreateToDoButton/>
    </Empty>

}

export default EmptyList;