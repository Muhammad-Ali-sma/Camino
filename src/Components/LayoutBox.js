import React from 'react'

const LayoutBox = ({ children, containerStyle }) => {
    return (
        <div className='layout-box-container'>
            <div className='layout-box-wrapper' style={containerStyle ?? {}}>
                {children}
            </div>
        </div>
    )
}

export default LayoutBox