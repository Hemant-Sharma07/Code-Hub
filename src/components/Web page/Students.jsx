import React from "react";

const Students = () => {
  const student = [
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/008/846/307/non_2x/online-courses-with-students-sitting-on-books-pile-with-laptops-notebooks-png.png",
      number: "600+",
      des: "Different Courses",
    },
    {
      image:
        "https://cdn3d.iconscout.com/3d/premium/thumb/student-4048696-3369778.png?f=webp",
      number: "70,000+",
      des: "Student Enrolled",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/010/979/412/small/money-transfer-3d-illustration-png.png",
      number: "10,000+",
      des: "Successful Trnasition",
    },
  ];

  return (
    <>
      <div className="h-auto w-100 flex items-center flex-col flex-wrap text-center p-10">
        <div className="w-full  h-auto flex flex-wrap items-center flex-col text-center">
          <p className="text-white text-3xl md:text-4xl font-semibold">
            "Pure Hardwork, No shortcuts !"
          </p>
          <div className="w-36 h-1 border-b-4 border-yellow-500 mt-2 md:mt-4 mb-12 rounded"></div>
        </div>

        <div className="w-full h-auto flex justify-evenly flex-wrap px-4">
          {student.map((item) => {
            return (
              <div className="w-46 h-auto flex flex-col items-center mb-12">
                <img
                  className="rounded-full w-40 h-40 mb-4 bg-white"
                  src={item.image}
                  alt=""
                />
                <p className="text-3xl text-white font-bold">{item.number}</p>
                <p className="text-gray-600 text-xl font-semibold">
                  {item.des}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Students;
