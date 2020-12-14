import React from 'react';
import './SearchPage.css';
import ChannelRow from './ChannelRow'
import TuneIcon from '@material-ui/icons/Tune';
import VideoRow from './VideoRow';



const SearchPage = () => {
    return (
        <div className='searchPage'>
            <div className="searchPage_filter">
                <TuneIcon  />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
                image='https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s48-c-k-c0xffffffff-no-rj-mo'
                channel='Pro Programmer'
                subs= '450K'
                videos='230'
                verified
                description='Very Informative task are performed in this channel'                
            />
            <hr />

            <VideoRow 
                image = 'https://assets.change.org/photos/8/ap/mb/CQapmBsKTbbLxDb-400x225-noPad.jpg?1587247288'
                title= 'Lento Cover By LAuren jauregi'
                channel = 'Lauren Jauregi'
                views = '1.2B'
                subs = '1M'
                timestamp = '1 year'
                description = 'lento song by lauren jauregi released in 2021'
            />
        </div>
    )
}

export default SearchPage
