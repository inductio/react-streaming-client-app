import React from 'react';
import {connect} from 'react-redux';
import {fetchStream} from '../../actions';
import flv from 'flv.js';

class StreamShow extends React.Component {
    constructor(props) {
        super(props);
        this.videoRef = React.createRef()
    }

    componentDidMount() {
        this.props.fetchStream(this.props.streamId);
        this.buildPlayer();
    }

    componentDidUpdate() {
        this.buildPlayer();
    }

    componentWillUnmount() {
        this.player.destroy();
    }

    buildPlayer() {
        if (this.player || !this.props.stream) {
            return;
        }

        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${this.props.streamId}.flv`
        });

        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }

        const {title, description} = this.props.stream;

        return (
            <div className="content ui">
                <video ref={this.videoRef} style={{'width': '100%'}} controls={true}/>
                <h1>{title}</h1>
                <h5 className="ui description">{description}</h5>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id],
        streamId: ownProps.match.params.id
    }
};

export default connect(mapStateToProps, {
    fetchStream
})(StreamShow)