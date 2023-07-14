import React from 'react'

export const NiceImage = (props) => {

    const { imgUrl, name , link_bds} = props

    return (
        <div>
            {imgUrl || 'no url'} - {name ||'no name'} - {link_bds}
        </div>
    )
}