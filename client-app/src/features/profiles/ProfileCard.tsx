
import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { Card ,Icon,Image} from "semantic-ui-react";
import { Profile } from "../../app/Models/profile";

interface Props{
    profile: Profile;
}
export default observer( function ProfileCard({profile}: Props){
    return(
        <Card as={Link} to={`/profiles/${profile.username}`}>
            <Image src={profile.image || '/assets/user.png'} />
            <Card.Content>
                <Card.Header>{profile.displayName}</Card.Header>
                <Card.Description>{profile.bio}</Card.Description>
                {/* <Card.Description>{truncate( profile?.bio)}</Card.Description> */}
            </Card.Content>
            <Card.Content extra>
                <Icon name='user' />
                20 followers
            </Card.Content>
        </Card>
    )
})