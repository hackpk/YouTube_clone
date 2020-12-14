import React from 'react'
import './VideoRow.css';

const VideoRow = ({image,channel,views,description,subs,title,timestamp}) => {
    return (
        <div className='videoRow'>
            <img className= 'videoRow_logo' src ={image} alt ={channel} />
            <div className="videoRow_text">
                <h3>{title}</h3>
                <p className= 'videoRow_info'>{channel} .
                <span className= 'videoRow_subs'>
                    <span className= 'videoRow_num'>{subs}</span>  Subscribers
                </span>
                 . {views} Views . {timestamp}</p>
                <p className= 'videoRow_desc' >{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
