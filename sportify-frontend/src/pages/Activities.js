import { Menu } from '../components/Menu';
import {RightPageContent} from '../components/RightPageContent'
import { ActivitiesList } from "../components/ActivitiesList";


const Activities = () => {
    return (
        <div className="PageContent">
            <Menu />
            <div className="content">
                <ActivitiesList />
            </div>
            <RightPageContent />
        </div>
    )
}

export {Activities};