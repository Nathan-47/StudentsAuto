import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const AppFooter = () => {

  //material-ui styling 
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: '',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  }


  return(

    // Footer
    <div className="Footer">
      <Container>
        {/* social row */}
        <Row>
          <Col>
          <a href="https://www.facebook.com/"><FacebookIcon id="facebook-icon"/></a>
          <a href="https://www.instagram.com/"><InstagramIcon id="instagram-icon" /></a>
          <p id="footer-text">@ Copyright Students Auto 2021</p>
          <p id="footer-text">Created by Nathan Parchment</p>
          </Col>
          <Col id="flex-col">
          <br></br>
          <p id="footer-text">TERMS</p>
          <p id="footer-text">PRIVACY</p>

         {/* terms & language select row */}
          <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="drpdwn-text">Language</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'footer-drpdwn',
          }}
        >
          <option></option>
          <option>French</option>
          <option>German</option>
        </Select>
      </FormControl>
          </Col>

          {/* This row is empty */}
          <Col id="flex-col"></Col>
          </Row>
          </Container>
      </div>
  );
}

export default AppFooter;