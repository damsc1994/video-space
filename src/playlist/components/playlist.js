import React from 'react';
import Media from './media';
import Play from '../../icons/components/play';
import Pause from '../../icons/components/pause';
import './playlist.css';

function PlayList(props){
    return (
        <div className="PlayList">
            {
               props.playlist.map((item, index) => {
                    return (
                        <Media 
                            title={item.title} 
                            autor={item.autor} 
                            image={item.cover} 
                            key={index}
                            type={item.type}
                            urlVideo={item.src}
                            handleClick={props.handleOpenModal}/>
                    );
                })
            }
        </div>
    )
}

export default PlayList;