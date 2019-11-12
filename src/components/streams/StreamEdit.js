import React, {Component} from 'react';
import {connect} from 'react-redux';
import {editStream, fetchStream} from "../../actions";
import StreamForm from "./StreamForm";
import _ from 'lodash';

class StreamEdit extends Component {
    componentDidMount() {
        this.props.fetchStream(this.props.streamId)
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.streamId, formValues);
    };

    render() {
        if (!this.props.stream) {
            return <div>Stream loading...</div>
        }

        return (
            <div>
                <h3>Edit Stream:</h3>
                <StreamForm
                    initialValues={_.pick(this.props.stream, 'title', 'description')}
                    onSubmit={this.onSubmit}
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
    editStream, fetchStream
})(StreamEdit);