import { Avatar } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

import "../App.css"
import stories from '../sample/stories'
const Stories = () => {
    return (
        <Container maxWidth="md" sx={{ display: 'flex', 
            padding: '10px', 
            border: '1px solid #758283', 
            backgroundColor: "#FFFFFF", 
            borderRadius: '5px',
            marginTop: 5, 
            overflow : 'hidden', 
            overflowX: 'scroll',
            overflow: 'hidden',
            WebkitOverflowScrolling: 'touch',
        }}>
            {
                stories.map((story, index) => {
                    return (
                        <div key={index}>
                            <Avatar className='stories' sx={{ height: 70, width: 70 }} alt={story?.name} src={story?.url} />
                            <p className='story__name'>{story?.name}</p>
                        </div>
                    )
                })
            }
        </Container>
    )
}

export default Stories