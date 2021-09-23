import React,{useEffect,useState,forwardRef} from 'react';
import AdminHeader from './AdminHeader';
import MaterialTable from 'material-table';
import { Container } from '@material-ui/core';
import {AddBox,Check,ViewColumn,DeleteOutline,Edit,SaveAlt, Remove,Clear,Search,FilterList,ChevronLeft,ChevronRight,FirstPage,LastPage,ArrowDownward } from '@material-ui/icons';
import axios from 'axios';


function AdminDashboard() {
  const [userData, setUserData] = useState([])
  useEffect(async() => {
  const  resp = await axios.get('http://localhost:8000/admin/users').catch((e)=>{
console.log(e);
  })
  setUserData(resp.data)
  console.log(userData);
  }, [])

  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };


  const column=[
    {title:'Teacher Name',field:'teacherName',
    minWidth:'175px'},
    {title:'School Name',field:'schoolName',
    minWidth:'175px'},
    {title:'Mobile Number',field:'mobileNumber',
    minWidth:'175px'},
    {title:'Qualification',field:'qualification',
    minWidth:'175px'},
    {title:'Other Qualification',field:'otherQualification',
    minWidth:'195px'},
    {title:'District',field:'district',
    minWidth:'175px'},
    {title:'Block',field:'block',
    minWidth:'175px'},
    {title:'Date Of Joining',field:'dateOfJoining', minWidth:'200px',
    minWidth:'175px'},
    {title:'Is Subscribed',field:'isSubscribed',
    minWidth:'175px'},
    {title:'Subscribe Date',field:'subscribeDate',
    minWidth:'175px'},
    {title:'Ieacher Name',field:'teacherName',
    minWidth:'175px'},
  ];
  return (
    <div>
      <AdminHeader/>
 
      <main>
        <Container>
      <MaterialTable 
      icons={tableIcons}
      columns= {column}
      data={userData}    
      options={{
        filtering: true,
        exportButton: true,
      }}
      style={{marginTop:'100px'}}
      />
        </Container>
      </main>
    </div>
  )
}

export default AdminDashboard
