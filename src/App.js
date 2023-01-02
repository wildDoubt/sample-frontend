import {Layout} from 'antd';
import {useEffect} from "react";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";


const App = () => {
    useEffect(() => {

    });
    return (
        <>
            <Layout>
                <AppHeader></AppHeader>
                <AppContent></AppContent>
                <AppFooter/>
            </Layout>
        </>
    );
}

export default App;
