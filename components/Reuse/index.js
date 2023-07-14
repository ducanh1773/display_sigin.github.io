import React from 'react'

export const NiceImage = (props) => {

    const { imgUrl, name } = props

    return (
        <div>
            {imgUrl || 'no url'} - {name ||'no name'}
        </div>
    )
}