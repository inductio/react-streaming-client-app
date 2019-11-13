import React from 'react';
import Modal from '../Modal'
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.streamId)
    }

    renderContent = () => {
        if (this.props.stream) {
            return `Are you sure you want to delete this stream with title: ${this.props.stream.title}`;
        }

        return 'Are you sure you want to delete this stream?';
    };

    renderAction = () => {
        return (
            <React.Fragment>
                <button
                    onClick={() => history.push('/')}
                    className="ui button"
                >
                    <i className="icon arrow left"/>
                    Cancel
                </button>
                <button
                    className="ui negative button"
                    onClick={() => {this.props.deleteStream(this.props.streamId)}}
                >
                    <i className="icon trash"/>
                    Delete
                </button>
            </React.Fragment>
        )
    };

    render() {
        return (
            <div>
                <h3>Stream Delete</h3>
                <Modal
                    title="Delete Stream"
                    content={this.renderContent()}
                    actions={this.renderAction()}
                    onDissmis={() => history.push('/')}
                />
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
    deleteStream, fetchStream
})(StreamDelete);