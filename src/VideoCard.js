import React from 'react';
import './VideoCard.css';
import Avatar from '@material-ui/core/Avatar';

const VideoCard = ({image,title,channel,channelImage,views,timeStamp}) => {
    return (
        <div className='videoCard'>
            <img className = 'videoCard_thumbnail' src={image} alt = '' />
            <div className="videoCard_info">
                <Avatar 
                    className='videoCard_avatar'
                    src={channelImage}
                    alt={channel}
                />
                <div className="videoCard_text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} . {timeStamp}</p>
                </div>

            </div>

        </div>
    )
}

export default VideoCard
