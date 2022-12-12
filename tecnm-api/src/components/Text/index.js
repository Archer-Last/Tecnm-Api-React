import React from "react";

const Text = (props) => {
    const {title,css_styles} = props
    console.log('Properties',props)
    return(
        <div className={`${css_styles}`}>{title}</div>
    )
}

Text.defaultProps = {
    title:'hola a todos perros',
    css_styles:'fs_10'
}

export default Text