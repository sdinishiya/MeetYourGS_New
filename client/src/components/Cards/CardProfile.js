import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {UpdateProfileImageDialog} from "../../views/admin/UpdateProfileImageDialog";
import {axiosInstance, BACKEND_API} from "../../axios/AxiosInstance";
import {updateUser} from "../../store/action/authAction";
import {useSnackbar} from "notistack";

// components

export default function CardProfile() {

  const user = useSelector((state) => state.authReducer);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [profileImage, setProfileImage] = useState("");

  const handleSetProfileImage = (image) => {
    setProfileImage(image);
  }

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  }

  const handleUpdate = async () => {

    let bodyFormData = new FormData();
    bodyFormData.append("image", profileImage);

    await axiosInstance({
      method: "POST",
      url: `${BACKEND_API.UPLOAD_IMAGE}/${user.userID}`,
      data: bodyFormData
    }).then(res => {
      if (res.status === 200) {
        enqueueSnackbar("Updated User Details", {
          variant: 'success'
        });

        dispatch(updateUser({
          ...user,
          userImage: res.data
        }))
      }
    })
  }

  return (
    <>
      <UpdateProfileImageDialog
          isDialogOpen={isDialogOpen}
          handleCloseDialog={handleCloseDialog}
          handleSetProfileImage={handleSetProfileImage}
          handleUpdate={handleUpdate}
      />
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16" >
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                    alt="..."
                    src={`data:image/jpeg;base64,${user.userImage}`}
                    className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-120-px"
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-20">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                </div>
                <div className="mr-4 p-3 text-center">
                  <button
                      className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setIsDialogOpen(true)}
                  >
                    Upload Profile Image
                  </button>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              {user.fname + " " + user.lname}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
              {user.address}
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                  An artist of considerable range, Jenna the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                  and records all of his own music, giving it a warm, intimate
                  feel with a solid groove structure. An artist of considerable
                  range.
                </p>
                <a
                  href="#pablo"
                  className="font-normal text-lightBlue-500"
                  onClick={(e) => e.preventDefault()}
                >
                  Show more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
