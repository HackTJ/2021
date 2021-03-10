import { h, FunctionalComponent } from "preact";
import NavigationBar from "../../components/navbar";
import HistoryPageContent from "../../components/content/history";

const HistoryPage: FunctionalComponent = () => (
    <>
        <NavigationBar />
        <HistoryPageContent />
    </>
);

export default HistoryPage;