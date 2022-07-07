import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Container } from '@mui/system'

const SuggestedUser = ({ url, name }) => {
  return (
    <Container maxWidth="sm" sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      border: '1px solid #758283',
      backgroundColor: "#FFFFFF",
      borderRadius: '5px',
      marginTop: 2,
    }}>
      <Avatar sx={{ mr: 2 }} alt={name} src={url} />
      <h5><b>{name}</b></h5>
    </Container>
  )
}

const Suggestions = () => {
  return (
    <>
      <h3>Suggestions for you</h3>
      <SuggestedUser url="https://media-exp2.licdn.com/dms/image/C4E03AQFpJAMG9BkyFQ/profile-displayphoto-shrink_400_400/0/1622117540362?e=1662595200&v=beta&t=OxeDSSTSxcvDoi3lCQL0rxKkgU9WS5uRA0JvGB6MrRo" name="Dinesh" />
      <SuggestedUser url="https://images.pexels.com/photos/5332934/pexels-photo-5332934.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" name="test" />      <SuggestedUser url="https://media-exp2.licdn.com/dms/image/C4E03AQFpJAMG9BkyFQ/profile-displayphoto-shrink_400_400/0/1622117540362?e=1662595200&v=beta&t=OxeDSSTSxcvDoi3lCQL0rxKkgU9WS5uRA0JvGB6MrRo" name="Dinesh" />
      <SuggestedUser url="https://images.pexels.com/photos/5332934/pexels-photo-5332934.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" name="test" />
      <SuggestedUser url="https://media-exp2.licdn.com/dms/image/C4E03AQFpJAMG9BkyFQ/profile-displayphoto-shrink_400_400/0/1622117540362?e=1662595200&v=beta&t=OxeDSSTSxcvDoi3lCQL0rxKkgU9WS5uRA0JvGB6MrRo" name="Dinesh" />
      <SuggestedUser url="https://images.pexels.com/photos/5332934/pexels-photo-5332934.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" name="test" />
    </>
  )
}

export default Suggestions