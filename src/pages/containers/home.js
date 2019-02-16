import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Releated from '../components/releated';
import ModalContainer from '../../widget/container/modal';
import Modal from '../../widget/components/modal';
import HandleError from '../../error/container/handle-error';
import VideoPlayer from '../../player/containers/video-player';
class Home extends Component {
    state = {
        visible: false,
        media: null
    }
    handleCloseModal = () => {
        this.setState({
            visible: false
        });
    }

    handleOpenModal = (media) => {
        this.setState({
            visible: true,
            media
        });
    }


    render() {
        return (
            <HandleError>
                <HomeLayout>
                    <Releated/>
                    <Categories categories={this.props.data.categorias}
                                handleOpenModal={this.handleOpenModal}/>
                    {
                        this.state.visible &&  
                            <ModalContainer>
                                <Modal handleCloseClick={this.handleCloseModal}>
                                    <VideoPlayer autoPlay={false} 
                                                 urlVideo={this.state.media.urlVideo}
                                                 title={this.state.media.title}/>
                                </Modal>
                            </ModalContainer>
                    }
                    
                </HomeLayout>
            </HandleError>
        )
    }
}

export default Home;