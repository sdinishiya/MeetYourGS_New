import React from "react";
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PresentProject1 from 'assets/img/PresentProject1.jpg' ; 
import UserProjectReviewCard from 'components/Projects/Cards/UserPresentProjects_admin';

// components
import PastProjectNavbar from "components/Navbars/Users/Projects/PastProjectNavbar.js";
import ProjectUserHeader from "components/Projects/Users/UserHeader.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";


const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
          margin: theme.spacing(30),
          width: theme.spacing(30),
          height: theme.spacing(50),
      },
  },
  
}));

export default function UserPastProject() {
  const classes = useStyles();
  const [viewList,setviewList]=useState([])
  const [past, setpast] = useState([]);
  const [edit,setedit]=useState(true);

  useEffect(() => {
    getpast();    
    console.log(edit);  
    },[edit]);

  
function getpast(){

  axios.get(`http://localhost:3001/get_past_projects`)
    .then(function (response) {
        // handle success
        console.log(response.data);
        setpast(response.data);

    })
    .catch(function (error) {
        // handle error
        // alert("error!!!!");
        console.log(error);
      //   alert(error.response.data.response);
    })
    .then(function () {
        // always executed

    });

}

  return (    
    <>
    
  <main>
    {/* <div className="relative md:ml-64 bg-blueGray-100"> */}
      <PastProjectNavbar />
      {/* Header */}
      <ProjectUserHeader />
      <section className="pb-18 relative block bg-white">
        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
        <br/><br/><br/>
        <section className="relative block py-18 lg:pt-0 ">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-12/12 px-4">
                <br/> 
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                      <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                          <h3 className="uppercase text-center font-bold text-base text-blueGray-700 ">
                            Past Projects
                            <br/> <br/>
                          </h3>
                          <p><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h3></p> 
                             <br/>
                             <Grid container spacing={2} className="m-5">
                              {past.map(project=> <Grid item xs={12} lg={4}>
                                <UserProjectReviewCard edit={edit} setedit={setedit} title={project.title} id={project.project_id} subheader={project.date} image={PresentProject1} description={project.intro}
                                      hovertitle='Build a School'/>
                                  </Grid>
                               )}
                             </Grid>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
        <FooterAdmin />
      </section> 
      {/* </div>  */}
    </main> 
  </>
  );
}

