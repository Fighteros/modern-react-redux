import React from 'react'

const Spinner = (props) => {
    return (
        <div class="ui active  dimmer">
            <div class="ui large text loader">
                {props.message}
            </div>
        </div>
    )
}

// default props
Spinner.defaultProps = {
    message: 'Loading...'
}


export default Spinner
