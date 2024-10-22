import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchStreams, deleteStream, editStream} from '../../actions';

class StreamList extends Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin = (stream) => {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link
                        to={`/streams/edit/${stream.id}`}
                        className="ui primary button"
                    >
                        <i className="icon edit"/>
                        Edit
                    </Link>
                    <Link
                        className="ui negative button"
                        to={`/streams/delete/${stream.id}`}
                    >
                        <i className="icon trash"/>
                        Delete
                    </Link>
                </div>
            )
        }
    };

    renderList() {
        return this.props.streams.map((stream) => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera"/>
                    <div className="content ui">
                        <Link to={`streams/${stream.id}`}>
                            {stream.title}
                        </Link>
                        <div className="ui description">Description: {stream.description}</div>
                    </div>
                </div>
            )
        })
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{textAlign: 'right'}}>
                    <Link to="/streams/new" className="ui button primary">
                        Create stream
                    </Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
};

export default connect(mapStateToProps, {
    fetchStreams, deleteStream, editStream
})(StreamList);