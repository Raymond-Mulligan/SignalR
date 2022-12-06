import { group } from "console";
import { observer } from "mobx-react-lite";
import React, { Fragment, useState } from "react";
import { Header, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import ActvityListItem from "./ActivityListItem";



export default observer( function ActivityList()
{
    const [target, setTarget] = useState('');
    const {activityStore} = useStore();
    const {groupedActivities} = activityStore;

    return(
        <>
            {groupedActivities.map(([group, activities]) =>(
                <Fragment key={group}>
                    <Header sub color='teal'>
                        {group}
                    </Header>
                            {activities.map(activity =>(
                                <ActvityListItem key={activity.id} activity={activity} />
                            ))}
                </Fragment>
            ))}
        </>

    )
})