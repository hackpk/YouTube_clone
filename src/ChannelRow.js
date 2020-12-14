import React from 'react';
import './ChannelRow.css';
import Avatar  from '@material-ui/core/Avatar';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';


const ChannelRow = ({image,subs,videos,channel,description,verified}) => {
    return (
        <div className='channelRow'> 
            <Avatar className ='channelRow_logo' src={image} alt = {channel} />
            <div className="channelRow_info">
                <h4>
                    {channel}
                    {verified && <CheckCircleOutlineIcon />}
                </h4>
                <p>{subs} subscribers . {videos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
