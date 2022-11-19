import React, {useRef} from "react";
import { Menu } from '../components/Menu';
import {RightPageContent} from '../components/RightPageContent'
import {ActivityForm} from '../components/AddActivity'
import '../styles/activity.css'

const EditActivity = () => {
    const ref = useRef();

    return (
        <div className="PageContent">
            <Menu />
            <div className="content">
                <ActivityForm ref={ref}/>
            </div>
            <RightPageContent />
        </div>
    )
}

export {EditActivity}