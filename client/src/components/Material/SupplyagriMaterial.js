import React from "react";
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

// components
import AgriMaterialNavbar from "components/Navbars/AgriMaterialNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import AgriMaterialHeader from "components/Material/AgriMaterialHeader.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";


export default function SupplyagriMaterial() {
    const [getmaterial,setgetmaterial] = useState ([])
    const [supplieddate,setsupplieddate] = useState("");
    const [materialid,setmaterialid] = useState("");
    const [materialname,setmaterialname] = useState("");
    const [name,setname] = useState("");
    const [description,setdescription] = useState("");
    const [quantity,setquantity] = useState("");
    
    const history = useHistory();
    // const [materialList,setmaterialList] = useState([]);

    const agri_Materials = (e)=>{
      e.preventDefault();
      console.log(materialid);
       axios.post('http://localhost:3001/agrisupply',{
        supplieddate:supplieddate,
        materialid:materialid,
        materialname:materialname,
        name:name,
        description:description,
        quantity:quantity,

        }).then(()=>{
           console.log("success");
           history.push("/ViewSuppliedagriMaterial");
         });
    };
  
  useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get('http://localhost:3001/agrimaterial', {
            
        });
        setgetmaterial(response.data);
        console.log(response.data);
    };
    fetchData();
}, []);

const mystyle = {

    formControl: {
      minWidth: '454px',
    },


  };

  return (
    <>
    
  <main>
  <Sidebar />
    <div className="relative md:ml-64 bg-blueGray-100">
      <AgriMaterialNavbar />
      {/* Header */}
      <AgriMaterialHeader />
      <section className="pb-18 relative block bg-white">
      <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
        <br /> <br /> <br /> <br /> 
        <section className="relative block py-18 lg:pt-0 ">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div className="w-full lg:w-10/12 px-4">
            {/* <Link to="/AddnewagriMaterial">
                  <button className="bg-emerald-400 text-white active:bg-emerald-300 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          type="submit" >
                          Add New Material
                  </button> 
                </Link>
                <Link to="/AddagriMaterial">
                  <button className="bg-emerald-400 text-white active:bg-emerald-300 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          type="submit" >
                          Add Material
                  </button> 
                </Link>
                <Link to="/AgriMaterial">
                  <button className="bg-emerald-400 text-white active:bg-emerald-300 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          type="submit" >
                          View Added Material
                  </button> 
                </Link>
                <Link to="/SupplyagriMaterial">
                  <button className="bg-emerald-400 text-white active:bg-emerald-300 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          type="submit" >
                          Distrubute Material    
                  </button>
                </Link>
                <Link to="/ViewSuppliedagriMaterial">
                  <button className="bg-emerald-400 text-white active:bg-emerald-300 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          type="submit" >
                          View Distrubuted Material
                  </button> <br/><br/>
                </Link> */}
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-emerald-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h1 className="text-2xl font-semibold uppercase text-center justify-center">
                      Distrubute Agriculture Material
                    </h1>
                    
                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Date
                      </label>
                      <input type="date"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="Date" onChange={(event)=>{setsupplieddate(event.target.value);}} 
                        required
                        placeholder="Date"/>
                    </div>

                    <div className="relative w-full mb-3 mt-8">
                    <labe className="block uppercase text-blueGray-600 text-xs font-bold mb-2"> Material Name </labe> 
                   
                    <FormControl className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                            <Select
                                native
                                onChange={(event) => { setmaterialid(event.target.value); }}
                                style={mystyle.search} >
                                               
                                <option aria-label="None" value="" />
                                {getmaterial.map((record) => (
                                    <option Value={record.materialid}>{record.materialname}</option>
                                ))}
                            </Select>
                        </FormControl><br /> 
                      
                    </div>

                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Beneficiary Name
                      </label>
                      <input type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="Beneficiary Name" onChange={(event)=>{setname(event.target.value);}} 
                        required
                        placeholder="Enter Name..."/>
                    </div>

                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Description
                      </label>
                      <input type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="Description" onChange={(event)=>{setdescription(event.target.value);}} 
                        required
                        placeholder="Description..."/>
                    </div>

                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Quantity
                      </label>
                      <input type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="Quantity" onChange={(event)=>{setquantity(event.target.value);}} 
                        required
                        placeholder="Enter Quantity..."/>
                    </div>
                    
                    <box>
                    <div className="text-center mt-6">
                      {/* <button type="submit" onClick={add_fund} id="submitBtn"style={mystyle.submitBtn}> Add</button> */}
                      <button
                        className="bg-emerald-450 text-white active:bg-emerald-300 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                        onClick={agri_Materials}>
                          Distrubute 
                      </button>
                      <Link to = '/AgriMaterial'>
                      <button
                        className="bg-red-100 text-white active:bg-red-100 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"> 
                        CANCEL  
                      </button>
                      </Link>
                    </div>
                    </box>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        </div>
        <FooterAdmin />
        </section>
        
        </div>
      </main>
                 
    </>
  );
}
