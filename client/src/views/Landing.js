import React from "react";
import { Link } from "react-router-dom";

// components

import Navbarsignup from "components/Navbars/Navbarsignup";
import Footer from "components/Footers/Footer.js";

export default function Landing() {
  return (
    <>
      <Navbarsignup transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
              "url(" + require("assets/img/gs3.jpg").default + ")",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                      MEET YOUR GS
                  </h1>
                  <br/>
                  <h3 className="text-white font-semibold text-2xl">
                     UDAPALATHA GRAMA NILADHARI WASAMA
                  </h3>
                  <p className="mt-4 text-lg text-blueGray-200">
                      We are the Grama Sevakha Niladhari division of Udapalatha GS wasama under the Kandy Division Secretariate.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Awarded Agency</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-4/12 px-4 text-center">
                <Link to="/client/src/components/Forum/AddForum.js">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Forum Discussion</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Keep engage with others providing meaningful information.
                      Remember that by this time, the user is curious.
                    </p>
                  </div>
                </div>
                </Link>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Verified Company</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Write a few lines about each one. A paragraph describing a
                      feature will be enough. Keep you user engaged!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-download text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Download official forms online
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  You can now download all your necessary documents and forms online without having to go to GS office. 
                  Isn’t it time saving?
                </p>
                {/* <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go. Just make sure you enable them first via
                  JavaScript.
                </p> */}
                <Link to="/Pages/Formpage" className="font-bold text-blueGray-700 mt-8">
                  Click to Download Forms
                </Link>
              </div>

              <Link to="/Pages/Formpage" className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-300">
                  <img
                    alt="..."
                    src={require("assets/img/img-form.jpg").default}
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-emerald-300 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Forms
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      You can now download all your necessary documents and forms online without having to go to GS office. 
                      Isn’t it time saving?
                    </p>
                  </blockquote>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}>
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0">
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100">
              </polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <Link to="/Pages/Projectpage" className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-400">
                  <img
                    alt="..."
                    className="max-w-full rounded-lg"
                    src={require("assets/img/img-cons.jpg").default}/>
                  
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px">
                        <polygon
                        points="-30,95 583,95 583,65"
                        className="text-emerald-400 fill-current"> 
                        </polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Project Details
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Take a look at the projects that are happening in your neighbourhood. 
                      There is so much that we can do as a community to help each other out for the welfare of everyone.
                    </p>
                  </blockquote>
                </Link>   
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  {/* <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div> */}
                  <h3 className="text-3xl font-semibold">Project Details</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    Take a look at the projects that are happening in your neighbourhood. 
                    There is so much that we can do as a community to help each other out for the welfare of everyone. 
                  </p>

                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <Link to="/Pages/Projectpage" className="font-bold flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Past Projects
                          </h4>
                        </div>
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link to="/Pages/Projectpage" className="font-bold flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Current projects
                          </h4>
                        </div>
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link to="/Pages/Projectpage" className="font-bold flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Projects Planned in the Future
                          </h4>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                {/* <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-download text-xl"></i>
                </div> */}
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Resource and material Distribution details
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  In need of resource materials for your on-going projects or inventions? 
                  We are here to provide and facilitate your small scale businesses.
                </p>
                <Link to="/Pages/Resoursepage" className="font-bold text-blueGray-700 mt-8">
                  Click to View & Request Resources
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <br/><br/><br/>
                <Link to="/Pages/Resourcepage" className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-300">
                  <img
                    alt="..."
                    className="max-w-full rounded-lg"
                    src={require("assets/img/img-rec.png").default}/>
                  
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px">
                        <polygon
                          points="-30,95 583,95 583,65"
                          className="text-emerald-300 fill-current">
                        </polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Resources
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      In need of resource materials for your on-going projects or inventions? 
                      We are here to provide and facilitate your small scale businesses.  
                    </p>
                  </blockquote>
                </Link> 
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
