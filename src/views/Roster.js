import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import '../styles/Roster.css'




const Roster = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component='img'
                alt='green iguana'
                height='140'
                width='100'
                image='https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg'
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    Lizard
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
            </CardActions>
        </Card>
    )
}


export default Roster
