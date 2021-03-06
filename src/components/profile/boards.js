import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
import {Link} from 'react-router';
import Popup from '../popup/modal.js';

class Boards extends Component {
    constructor(props){
        super(props);

        this.state = {poppedUp: false};
    }

    openPopup(){
        this.setState({poppedUp: true});
    }

    closePopup(){
        this.setState({poppedUp: false});
    }

    render() {
        var that = this;
        function getPopup(){
            if(that.state.poppedUp){
                return (
                    <Popup type="createBoard" closePopup={that.closePopup.bind(that)}/>
                )
            }else{
                return null;
            }
        }

        return (
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <Link className="create" to="/profile" onClick={this.openPopup.bind(this)}>
                        <div className="panel panel-danger border">
                            <div className="panel-body createPanel">
                                Create New Board
                            </div>
                        </div>
                    </Link>
                </div>

                {this.props.userBoards.map((board, index) => (

                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={index}> 
                        <Link to={"/board/" + board.boardID}>
                            <div className="panel panel-danger border">
                                <div className="panel-body">
                                   <center><img src={board.imageURL} className="my-panel-content images"/></center>
                                </div>
                                <div className="panel-heading">{board.name}</div>
                            </div>
                        </Link>
                    </div>
                ))}
                
                {getPopup()}
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        userBoards: state.userBoards,
        user: state.user
    }
}

export default connect(mapStateToProps, actions)(Boards);

