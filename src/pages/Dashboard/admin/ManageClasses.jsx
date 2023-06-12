import React, { useContext } from "react";
import useClasses from "../../../hooks/useClasses";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { privatePost, updateStatus } from "../../../utilities/apiCaller";
import { Helmet } from "react-helmet-async";

const ManageClasses = () => {
  const [data, refetch] = useClasses(`/admin-classes`);

  

  const handleAction = async (id, status, email) => {
    let feedback = "";
    if (status === "feedback") {
      status = "denied";
      //--------------------

      await Swal.fire({
        title: "Give some feedback",
        input: "text",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "Look up",
        showLoaderOnConfirm: true,
        preConfirm: (text) => {
          return text;
        },
      }).then((result) => {
        if (result.isConfirmed) {
          feedback = result.value;
        }
      });

      //--------------------
    }

    const data = { id, status, feedback  };
    updateStatus(data).then((res) => {
      if (res.acknowledged === true) {
        Swal.fire({
          icon: "success",
          title: "Status successfully updated",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
      if(status==='approved'){
        privatePost('/instructor-classcount',{email}).then(res=>console.log(res))
      }

    });
   

    




  };

  return (
    <div className="container">
      <Helmet><title>DANCE-FLOW | MANAGE CLASSES</title></Helmet>
      <h1 className="uppercase text-center font-eczar text-5xl py-24  dark:text-white text-[#9956C1]">
        Manage Classes{" "}
      </h1>

      <div className="overflow-x-auto p-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-[#6f548f] text-white">
              <th>SL.</th>

              <th>Class</th>
              <th>Ins Name</th>
              <th>Ins Email</th>
              <th>Seats</th>
              <th>Price</th>
              <th>Ststus</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {data.map((item, i) => (
              <tr className="dark:text-white" key={i}>
                <td>{i + 1} </td>
                <td className="flex flex-col gap-2">
                  <img
                    className="w-[100px] h-[50px] rounded-lg shadow-lg border-2"
                    src={item.image}
                    alt=""
                  />
                  <span>{item.className}</span>
                </td>

                <td>{item.insName}</td>
                <td>{item.insEmail}</td>
                <td>{item.seats}</td>
                <td>{item.price}</td>
                <td
                  className={`font-bold  ${
                    item.status === "pending"
                      ? "text-[#f79240]"
                      : item.status === "approved"
                      ? "text-[#099437]"
                      : item.status === "denied"
                      ? "text-[#e41717]"
                      : ""
                  }`}
                >
                  {item.status}
                </td>
                <td>
                  <span className="flex">
                    <span className="flex flex-col justify-start gap-1">
                      <button
                        disabled={item.status !== "pending"}
                        onClick={() => handleAction(item._id, "approved", item.insEmail)}
                        className={` p-2 rounded-lg text-white ${
                          item.status !== "pending"
                            ? "bg-[#95c999]"
                            : "bg-[#167e1f]"
                        }`}
                      >
                        Approve
                      </button>
                      <button
                        disabled={item.status !== "pending"}
                        onClick={() => handleAction(item._id, "denied")}
                        className={` p-2 rounded-lg text-white ${
                          item.status !== "pending"
                            ? "bg-[#ca7575] cursor-not-allowed"
                            : "bg-[#a50a0a]"
                        }`}
                      >
                        Deny
                      </button>
                      <button
                        disabled={item.status !== "denied"}
                        onClick={() => handleAction(item._id, "feedback")}
                        className={` p-2 rounded-lg text-white ${
                          item.status !== "denied"
                            ? "bg-[#dbb7e4] cursor-not-allowed"
                            : "bg-[#a02ebd]"
                        }`}
                      >
                        Feedback
                      </button>
                    </span>
                  </span>
                </td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
