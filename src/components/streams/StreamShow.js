import React from 'react';
import {connect} from 'react-redux';
import {fetchStream} from '../../actions';

class StreamShow extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.streamId);
    }

    render() {
        const {title, description} = this.props.stream;
        return (
            <div className="content ui">
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