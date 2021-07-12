import { Box,makeStyles,Typography} from '@material-ui/core'
import img2 from '../Assets/images/img 2.png'
import img3 from '../Assets/images/img3.jpg'
import img from '../Assets/images/img.png'

const useStyle = makeStyles({
  image:{
    width:'450px',
    height:'500px'
  }
})
const Employees = () =>{
  const classes = useStyle();
    return(
      <Box>
        <Typography variant ="h4">Employees</Typography>
  <Box style={{display:'flex'}}>
    <img className = {classes.image} src={img2}/>
    <img className = {classes.image} src={img3} />
    <img className = {classes.image} src={img} />
  </Box>
  </Box>
    )
}
export default Employees;