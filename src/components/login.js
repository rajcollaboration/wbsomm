import React,{useState} from 'react';
import axios from 'axios';
import Header from './header';
import {login} from '../actions/login';
import { useDispatch } from 'react-redux';
import {Button,Grid} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Redirect} from "react-router-dom";
import Container from '@material-ui/core/Container';
import lImage from '../assets/images/1989711.svg';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bmargine:{
    width: '67%'
  },
  textInput:{
   width:'70%'
  },
  imageSize:{
    width:'100%'
  },
  display:{
    
  },
  color:{
    color:'#3f51b5'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flexGrow: "flex-end",
    marginTop:'30px'
  },
}));

export const Login = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
 
  const[userName,setUserName] = useState();
  const [Password,Setpass] = useState();

  const  elogin = async ()=>{
    const item = {userName,Password}
    console.log(item);
   const response = await axios.post('http://localhost:8000/admin/login',item).catch((e)=>{
console.log(e);
   })
   
   console.log(response.status);
   dispatch(login(response.data.data))
   if (response.status === 200) {
     console.log(response.status);
    return (
      
         <Redirect to={"/"} />
      
    )
    
  }else{
    console.log("jkhjks");
  }
  }


const UserName=(e)=>{
  setUserName(e.target.value); 
}
const Pass =(e)=>{
  Setpass(e.target.value);
}

    
   
  // const fetchProducts = async()=>{
  //   const response = await axios.post('http://localhost:6000/app/admin',loginData).catch((error)=>{
  //     console.log(error);
  //   })
  //   dispatch(login(response))
  // }

  
  return (
<div className={classes.root}>
<Header/>
     <Container>
     <Grid container spacing={3}> 
       <Grid item xs={12} md={6}> 
         <div>
           <img src={lImage} style={{marginTop:'80px'}} className={classes.imageSize} alt="pic"/>
        </div>  
       </Grid>
       <Grid item xs={12} md={6}>    
        <Paper className = {classes.paper} style={{marginTop:'80px'}}>
        <div className={classes.paper}><h2 className={classes.color}>Login Here</h2></div>
           <form className={classes.root} noValidate autoComplete="off">
        <div> 
       <TextField
       onChange={UserName}
         style={{width:'70%'}}
         error = {userName ===""}
         id="outlined-error-helper-text"
         label="Error"
         defaultValue={userName}
         helperText="Incorrect entry."
        variant="outlined"
        />
         <TextField
         onChange={Pass}
          style={{width:'70%'}}
          error = {Password ===""}
          id="outlined-error-helper-text"
          label="Password"
          defaultValue={Password}
          type="password"
          helperText="Incorrect entry."
          variant="outlined"
        />
        <Button onClick={elogin} variant="contained" color="primary" className={classes.textInput}>
          Theme Provider
        </Button>
      </div>
    </form>
       </Paper>
       </Grid>
     </Grid>
     </Container>
    </div>
   
  )
}
