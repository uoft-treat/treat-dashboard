import React, {Component} from "react";
import errorToMessage     from "../../utilities/errorToMessage";

type ErrorBadgeProps = {
    error: any,
}

export default class ErrorBadge extends Component<ErrorBadgeProps> {

    render() {
        return (
            <div>
                {errorToMessage(this.props.error)}
            </div>
        )
    }

}