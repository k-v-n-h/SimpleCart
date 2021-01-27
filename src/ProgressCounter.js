import { progress } from "@stickyroll/decorators";
import React from "react";

class ProgressCounter extends React.Component {
    render() {
        return (
            <React.Fragment>
                <strong>progress: </strong>{" "}
                of{" "}
                <strong>{this.props.progress}</strong>
            </React.Fragment>
        );
    }
}

export default ProgressCounter;