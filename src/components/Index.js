import React from 'react'
import { Container, CssBaseline, Typography, Card, CardActionArea, CardMedia, Grid, Paper, Box, Button, } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import toImage from '../assets/images/image5.jpg'
import PhotoGalary from './PhotoGalary'
import SaveIcon from '@material-ui/icons/Save';
import axios from 'axios';
import Header from './header'
import MenuItem from '@material-ui/core/MenuItem';




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    text_field: {
        width: '45ch',
        margin: '8px',
        marginTop: '7px'

    },
    TopImg: {
        width: "100%",
        display: 'block',
        objectFit: 'cover',
        height: 'auto'
    },
    TopImgh: {
        height: '300px',


    },
    SubscriptionForm: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 350,
    },
    fixedSidebar: {
        position: 'sticky',
        top: '0px',

    },
    spacing: {
        margin: '3px',
        width: '30ch',
        marginTop: '7px',
        [theme.breakpoints.down('sm')]: {
             width: '45ch',
          },

    },
    datefldspace: {
        marginTop: '15px',
        marginBottom: '15px'
    },
    buttonWidth: {
        width: '100%',
        backgroundColor:'#b53f3f'
    }


}));
function Index() {
    const currencies = [
        {
          value: 'USD',
          label: '$',
        },
        {
          value: 'EUR',
          label: '€',
        },
        {
          value: 'BTC',
          label: '฿',
        },
        {
          value: 'JPY',
          label: '¥',
        },
      ];

      

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [userRecords, setuserRecords] = React.useState({
        SchoolName:"",
        TeacherName:"",
        MobileNumber:"",
        Qualification:"",
        OtherQualification:"",
        TotalNoOfTeacherOnYourSchool:"",
        TotalNoOfNonTeacherOnYourSchool:"",
        district:"",
        block:"",
        years:"",
        DateOfJoining:"",
        Birthday:"",


    })
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const classes = useStyles();
    const HandleInput=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        console.log(userRecords);
        setuserRecords({...userRecords,[name]:value})
    }
    const subscribe=async()=>{
        const item ={userRecords}
const response = await axios.post('http://localhost:8000/admin/user',item).then((e)=>{
    console.log(e);

}

)
console.log(response);
    }
    return (
        <div>
            <Header/>
            <CssBaseline />
            <Grid container >
                <Grid item xs={12} md={12}>
                    <Box>
                        <Card className={classes.TopImgh}>
                            <CardActionArea>
                                <img src={toImage} className={classes.TopImg} />
                                {/* <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={toImage}
          title="Contemplative Reptile"
        />   */}
                            </CardActionArea>

                        </Card>
                    </Box>
                </Grid>
            </Grid>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>

                        <Box>
                            <Box className={classes.SubscriptionForm}>
                                <h2>সাবস্ক্রিপশন ফর্ম</h2>
                            </Box>
                            <from >
                                <Box className={classes.datefldspace}>
                                    <Paper className={classes.paper}>
                                        <Box container spacing={2}>
                                            <TextField
                                                className={classes.spacing}
                                                required
                                                id="outlined-required"
                                                label="School Name"
                                                onChange={HandleInput}
                                                variant="outlined"
                                                onChange={HandleInput}
                                                name="SchoolName"
                                            />

                                            <TextField
                                                className={classes.spacing}
                                                required
                                                id="outlined-required"
                                                label="Teacher Name"
                                                onChange={HandleInput}
                                                variant="outlined"
                                                name="TeacherName"
                                            />

                                            <TextField
                                                className={classes.spacing}
                                                required
                                                id="outlined-required"
                                                label="Mobile Number"
                                                type="number"
                                                variant="outlined"
                                                onChange={HandleInput}
                                                name="MobileNumber"
                                            />

                                            <TextField
                                                className={classes.spacing}
                                                required
                                                id="outlined-required"
                                                label="Qualification"
                                                onChange={HandleInput}
                                                variant="outlined"
                                                name="Qualification"
                                            />

                                            <TextField
                                                className={classes.spacing}
                                                required
                                                id="outlined-required"
                                                label="Other Qualification"
                                                variant="outlined"
                                                onChange={HandleInput}
                                                name="OtherQualification"
                                            />

                                            <TextField
                                                className={classes.spacing}
                                                required
                                                id="outlined-required"
                                                label="Total No Of Teacher On Your School"
                                                onChange={HandleInput}
                                                variant="outlined"
                                                name="TotalNoOfTeacherOnYourSchool"
                                            />

                                            <TextField
                                                className={classes.text_field}
                                                required
                                                id="outlined-required"
                                                label="Total No Of Non-Teacher On Your School"
                                                onChange={HandleInput}
                                                variant="outlined"
                                                name="TotalNoOfNonTeacherOnYourSchool"
                                            />

                                            <TextField
                                                className={classes.text_field}
                                                required
                                                id="outlined-required"
                                                label="Total No Of Student On Your School"

                                                variant="outlined"
                                                onChange={HandleInput}
                                                name="TotalNoOfStudentOnYourSchool"
                                            />
                                        </Box>

                                    </Paper>
                                </Box>

                                <Box className={classes.datefldspace}>

                                    <Paper className={classes.paper}>

                                        <Box spacing={4}>
                                        <TextField
                                            className={classes.formControl, classes.spacing}
                                                id="filled-select-currency-native"
                                                select
                                                label="District"
                                                value={userRecords.district}
                                                
                                                onChange={HandleInput}
                                                SelectProps={{
                                                    native: true,
                                                }}
                                                name='district'
                                                helperText="Please select your currency"
                                                variant="outlined"
                                                >
                                                {currencies.map((option) => (
                                                    <option key={option.value} value={option.value}>
                                                    {option.label}
                                                    </option>
                                                ))}
                                                </TextField>

                                            <TextField
                                            className={classes.formControl, classes.spacing}
                                                id="filled-select-currency-native"
                                                select
                                                label="Years"
                                                value={userRecords.years}
                                                
                                                onChange={HandleInput}
                                                SelectProps={{
                                                    native: true,
                                                }}
                                                name='years'
                                                helperText="Please select your currency"
                                                variant="outlined"
                                                >
                                                {currencies.map((option) => (
                                                    <option key={option.value} value={option.value}>
                                                    {option.label}
                                                    </option>
                                                ))}
                                                </TextField>
                                            <TextField
                                            className={classes.formControl, classes.spacing}
                                                id="filled-select-currency-native"
                                                select
                                                label="Block"
                                                value={userRecords.block}
                                                
                                                onChange={HandleInput}
                                                SelectProps={{
                                                    native: true,
                                                }}
                                                name='block'
                                                helperText="Please select your currency"
                                                variant="outlined"
                                                >
                                                {currencies.map((option) => (
                                                    <option key={option.value} value={option.value}>
                                                    {option.label}
                                                    </option>
                                                ))}
                                                </TextField>
                                        </Box>

                                        <Box className={classes.datefldspace}>
                                            <TextField
                                            
                                                className={classes.date_field}
                                                id="DateOfJoining"
                                                label="Date Of Joining"
                                                type="date"
                                                onChange={handleDateChange}
                                                defaultValue={selectedDate}
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                onChange={HandleInput}
                                                name="DateOfJoining"
                                            />

                                            <TextField
                                                className={classes.date_field}
                                                id="Birthday"
                                                label="Birthday"
                                                type="date"
                                                onChange={handleDateChange}
                                                defaultValue={selectedDate}
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                onChange={HandleInput}
                                                name="Birthday"
                                            />
                                        </Box>

                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            className={classes.button, classes.buttonWidth}
                                            startIcon={<SaveIcon />}
                                            onClick={subscribe}
                                        >
                                            Save
                                        </Button>
                                    </Paper>
                                </Box>

                            </from>
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={4} className={classes.fixedSidebar}>
                        <Box className={classes.SubscriptionForm}>
                            <h2>দাবি সমূহ</h2>
                        </Box>
                        <Paper className={classes.paper}>
                            <Box>

                                
                                    <marquee direction="up" behavior="scroll" height="500px">
                                    <ul>
                                    <li style={{ listStyle: 'none',textAlign: 'justify',
  textJustify: 'inter-word', textAlign: 'justify', marginBottom: '4px' }}>
                                        ১। পৌরসভার অর্ন্তগত সমস্ত এস এস কে এম.এস.কে সমূহকে শিক্ষা দপ্তরের অর্ন্তরভূক্ত
                                        করতে হবে।
                                    </li>
                                    <li style={{ listStyle: 'none',textAlign: 'justify',
  textJustify: 'inter-word', textAlign: 'justify', marginBottom: '4px' }}>
                                        ২। অ্যাকাডেমিক সুপার ভাইজার ও মাদ্রাসা শিক্ষা কেন্দ্রের শিক্ষক সহ শিক্ষার সাথে যুক্ত
                                        অন্যান্য চুক্তি ভিত্তিক কর্মীদের বাৎসরিক ৩ শতাংশ ইনক্রিমেন্ট ও অবসরকালীন ৩
                                        লক্ষ টাকা প্রদানের জি.ও দ্রুত প্রকাশ করতে হবে।
                                    </li>
                                    <li style={{ listStyle: 'none',textAlign: 'justify',
  textJustify: 'inter-word', textAlign: 'justify', marginBottom: '4px' }}>
                                        ৩। সমস্ত এস.এস কে, এম.এস.কে. কে গ্রাথমিক ও উচ্চ প্রাথমিক বিদ্যালয় হিসাবে মর্যাদা
                                        প্রদান করতে হবে।
                                    </li>
                                    <li style={{ listStyle: 'none',textAlign: 'justify',
  textJustify: 'inter-word', textAlign: 'justify', marginBottom: '4px'}}>
                                        ৪। পার্শ্ব শিক্ষক, শিক্ষাবন্ধু, শিক্ষামিত্র, এস.এস. কে. এম.এস.কে সহ মাদ্রাসা শিক্ষা দপ্তর
                                        ও পৌরসভার অর্ন্তগত সমস্ত সহায়ক সহায়িকা সহ সমগ্ৰশিক্ষায় নিযুক্ত কর্মী ও
                                        কর্মচারীদের তাদের যোগ্যতা অনুসারে সুপ্রিমকোর্টের রায় কার্যকরী করে বেতন কাঠামো ও
                                        সমকাজে সমমজুরী প্রদান করতে হবে।
                                    </li>
                                    <li style={{ listStyle: 'none',textAlign: 'justify',
  textJustify: 'inter-word', textAlign: 'justify', marginBottom: '4px' }}>
                                        ৫। মাদ্রাসা শিক্ষা কেন্দ্রগুলিকে বোর্ড রিকগনাইজ প্রদান করে নবম- দশম শ্রেণি চালু করতে
                                        হবে।
                                    </li>
                                    <li style={{ listStyle: 'none',textAlign: 'justify',
  textJustify: 'inter-word', textAlign: 'justify', marginBottom: '4px' }}>
                                        ৬। অবসরকালীন ভাতার ব্যবস্থা করতে হবে।
                                    </li>
                                    <li style={{ listStyle: 'none',textAlign: 'justify',
  textJustify: 'inter-word', textAlign: 'justify', marginBottom: '4px' }}>
                                        ৭। কর্মরত অবস্থায় মারাগেলে তার পরিবারের একজনকে চাকুরী প্রদান করতে হবে।
                                    </li>
                                    <li style={{ listStyle: 'none',textAlign: 'justify',
  textJustify: 'inter-word', textAlign: 'justify', marginBottom: '4px' }}>
                                        ৮। সমস্ত কর্মীদের ই.পি.এফ চালু করতে হবে।
                                    </li>
                                    <li style={{listStyle: 'none',textAlign: 'justify',
  textJustify: 'inter-word', textAlign: 'justify', marginBottom: '4px'}}>
                                    ৯। শিক্ষামিত্র, কম্পিউটার শিক্ষক, প্রেরক, সহপ্রেরকদের বকেয়া সাম্মানিক দ্রুত পরিশোধ
করতে হবে।
                                    </li>
                                    <li style={{listStyle: 'none',textAlign: 'justify',
  textJustify: 'inter-word', textAlign: 'justify', marginBottom: '4px'}}>
                                    ১০। এজেন্সী মুক্ত করে সমস্ত NSI কম্পিউটার শিক্ষক শিক্ষিকাদের সরকারি আওতায় আনতে
হবে।
                                    </li>
                                    <li style={{listStyle: 'none',textAlign: 'justify',
  textJustify: 'inter-word', textAlign: 'justify', marginBottom: '4px'}}>
                                    ১১। যে সমস্ত কম্পিউটার শিক্ষক ৩মাসের প্রশিক্ষণ নিয়ে বসে আছে অবিলম্বে তাদের
অন্যান্য কম্পিউটার শিক্ষকদের মতো স্কুলে নিয়োগ করতে হবে।
                                    </li>
                                    <li style={{listStyle: 'none',textAlign: 'justify',
  textJustify: 'inter-word', textAlign: 'justify', marginBottom: '4px'}}>
                                    ১২। NSI/NSOC শিক্ষক শিক্ষিকাদের স্থায়ীকরণ করতে হবে এবং স্থায়ী কর্মীদের যাবতীয়
সুযোগ সুবিধা দিতে হবে।
                                    </li>
                                    <li style={{listStyle: 'none',textAlign: 'justify',
  textJustify: 'inter-word', textAlign: 'justify', marginBottom: '4px'}}>
                                    ১৩। সমস্ত শিক্ষা প্রতিষ্ঠানের শিক্ষক ও শিক্ষাকর্মী শূন্যপদে সচ্ছতার সহিত নিয়োগ করতে
হবে।
                                    </li>
                                    <li style={{listStyle: 'none',textAlign: 'justify',
  textJustify: 'inter-word', textAlign: 'justify', marginBottom: '4px'}}>
                                    ১৪। মাদ্রাসা শিক্ষা কেন্দ্রের গ্রাজুয়েট শিক্ষকদের এক হাজার টাকার বঞ্চনা দূর করতে হবে।
                                    </li>
                                    </ul>
                                    </marquee>
                             

                            </Box>
                        </Paper>
                    </Grid>



                    <Grid item xs={12} md={8} className={classes.fixedSidebar}>
                        <Box className={classes.SubscriptionForm}>
                            <h2>Galary</h2>
                        </Box>
                        <Paper className={classes.paper}>
                            <Box>
                                <PhotoGalary />
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Index
