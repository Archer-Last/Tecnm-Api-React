import React from "react";

const Button = (props) => {
    const {value,name,id,css_styles,handleClick} = props
    return(
        <input type='button'
           id={id}
           name={name}
           value={value}
           onClick={handleClick}
           className={`${css_styles}`} 
        />

        
    )
}

Button.defaultProps = {
    value:'hola a todos perros',
    css_styles:'fs_10',
    id:'button',
    name:'ejemplo',
    handleClick:''
}

export default Button