import React from "react";
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";

// components
import OtherMaterialNavbar from "components/Navbars/OtherMaterialNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import OtherMaterialHeader from "components/Material/OtherMaterialHeader.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";


export default function AddnewotherMaterial() {
    const [materialid,setmaterialid] = useState("");
    const [materialname,setmaterialname] = useState("");
    const history = useHistory();
    const [materialList,setmaterialList] = useState([]);
    const [searchTerm,setSearchTerm]=useState("");
    
    const new_Materials = (e)=>{
      e.preventDefault();
      console.log(materialid);
       axios.post('http://localhost:3001/createnewother',{
        materialname:materialname,


        }).then(()=>{
           console.log("success");
           history.push("/AddnewotherMaterial");
         });
    };

    useEffect(()=>{
        axios.get("http://localhost:3001/newothermaterial").then((response)=>{
          setmaterialList(response.data)
        })
      },[])

  return (
    <>
    
  <main>
  <Sidebar />
    <div className="relative md:ml-64 bg-blueGray-100">
      <OtherMaterialNavbar />
      {/* Header */}
      <OtherMaterialHeader />
      <section className="pb-18 relative block bg-white">

      <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
        <br /> <br /> <br /> <br /> 
        <section className="relative block py-18 lg:pt-0 ">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
              {/* <Link to="/AddnewotherMaterial">
                  <button className="bg-emerald-400 text-white active:bg-emerald-300 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          type="submit" >
                          Add New Material
                  </button> 
                </Link>
                <Link to="/AddotherMaterial">
                  <button className="bg-emerald-400 text-white active:bg-emerald-300 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          type="submit" >
                          Add Material
                  </button> 
                </Link>
                <Link to="/OtherMaterial">
                  <button className="bg-emerald-400 text-white active:bg-emerald-300 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          type="submit" >
                          View Added Material
                  </button> <br/><br/>
                </Link> */}
               
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-emerald-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h1 className="text-2xl font-semibold uppercase text-center justify-center">
                        Add New Other Material
                    </h1>

                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Materialname
                      </label>
                      <input type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="Materialname" onChange={(event)=>{setmaterialname(event.target.value);}} 
                        required
                        placeholder="Material name..."/>
                    </div>

                    <box>
                    <div className="text-center mt-6">
                      {/* <button type="submit" onClick={add_fund} id="submitBtn"style={mystyle.submitBtn}> Add</button> */}
                      <button
                        className="bg-emerald-450 text-white active:bg-emerald-300 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                        onClick={new_Materials}>
                          ADD 
                      </button>
                      <Link to = '/AddnewotherMaterial'>
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
              <div className="w-full lg:w-6/12 px-4">
              {/* <Link to="/SupplyotherMaterial">
                  <button className="bg-emerald-400 text-white active:bg-emerald-300 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          type="submit" >
                          Distrubute Material    
                  </button>
                </Link>
                <Link to="/ViewSuppliedotherMaterial">
                  <button className="bg-emerald-400 text-white active:bg-emerald-300 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          type="submit" >
                          View Distrubuted Material
                  </button> <br/><br/>
                </Link> */}
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                  <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                      <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                        <h3 className="font-semibold uppercase text-center text-base text-blueGray-700">
                          Other Material
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="block w-full overflow-x-auto">
                    {/* Projects table */}
                    <table className="items-center w-full bg-transparent border-collapse">
                      <thead>
                        <tr>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                            Material ID
                          </th>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Material Name
                          </th>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                            Available Quantity
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                      {materialList.map((record)=>{
                    return(
                      <tr>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                          {record.materialid} 
                        </th>

                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                          {record.materialname} 
                        </th>
                      </tr>
                            )
                      })
                }
                      </tbody>
                    </table>
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
