import React, { useState, useEffect } from "react";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import axios from "axios";
import CollegeContainer from "../components/HomePageComponents/InnerContainers/collegeContainer";
import CollegeSkeleton from "../components/AllColleges/Components/CollegeSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import { useStateContext } from "../Context/useStateContext";

const AllColleges = () => {
  const {setSkeleton,skeleton,loader,setLoader}=useStateContext()
  const [paginatedData,setPaginatedData]=useState([])
  const [result, setResult] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const query = useLocation();
  // console.log("query", query);
  const PORT = 5000;
  const limit = 8

  const getData = async () => {
    await axios
      .get("https://konsa-college-backend-production-0c4c.up.railway.app/allcolleges")
      .then((response) => {
        if (response.status === 500) {
          console.log("College Not Found!");
        } else {
          setResult(response.data);
          setSkeleton(false)
          // console.log(">>>",result)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const getDataWithPagination = async () => {
    await axios
      .get(`https://konsa-college-backend-production-0c4c.up.railway.app/allclgs?page=1&limit=${limit}`)
      .then((response) => {
        if (response.status === 500) {
          console.log("College Not Found!");
        } else {
          setPaginatedData([...response.data.results]);
          setSkeleton(false);
          // if(result.length===59){setLoader(false)}
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMoreData = async () => {
    setLoader(true)
    const page = Math.ceil(paginatedData.length / limit) + 1;
    await axios
      .get(`https://konsa-college-backend-production-0c4c.up.railway.app/allclgs?page=${page}&limit=${limit}`)
      .then((response) => {
        if (response.status === 500) {
          console.log("College Not Found!");
        } else {
          setPaginatedData([...paginatedData,...response.data.results]);  
          if(result.length===59)setLoader(false)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  useEffect(() => {
    getDataWithPagination();
    getMoreData();
    getData()
  }, []);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = result.filter((value) => {
      return value.college_name
        .toLowerCase()
        .includes(searchWord.toLowerCase()) || value.college_uuid.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };


  // console.log(paginatedData);

  return (
    <>
      <div
        className="w-[full]  h-[30vh] flex flex-col justify-center items-center p-3"
        style={{
          background:
            "linear-gradient(180deg, rgba(238, 124, 0, 0.5) -68.86%, rgba(238, 124, 0, 0) 100%)",
        }}
      >
        <div className="text-xl md:text-2xl font-semibold text-gray-700 font-roboto">
          Explore From 200+ Colleges.....
        </div>

        <div className=" relative w-[90%] md:w-[60%] lg:w-[45%]  flex flex-row justify-between items-center bg-white rounded-xl p-4 md:px-6 mt-3">
          <input
            value={wordEntered}
            onChange={handleFilter}
            className="placeholder:text-xl w-[80%] font-roboto focus:outline-none text-gray-600 text-xl"
            placeholder="Search your Colleges....."
          ></input>
          <span>
            <img
              className="w-[23px] h-[23px]"
              src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/Vector.png"
            ></img>
          </span>
        </div>
      </div>
      <div className="mb-4">

        {skeleton ? (
          <div className="grid grid-cols-1 gap-6  p-8  xxs:px-12 xs:grid-cols-2 xs:px-4 sm:grid-cols-2 sm:p-12 md:px-20 lg:grid-cols-3 lg:p-16 xl:grid-cols-4">
            <CollegeSkeleton />
            <CollegeSkeleton />
            <CollegeSkeleton />
            <CollegeSkeleton />
            <CollegeSkeleton />
            <CollegeSkeleton />
            <CollegeSkeleton />
            <CollegeSkeleton />
          </div>
        ) : (
          <>
            {wordEntered.length ? (
              <div className="grid grid-cols-1 gap-6  p-8  xxs:px-12 xs:grid-cols-2 xs:px-4 sm:grid-cols-2 sm:p-12 md:pt-10 lg:grid-cols-3 lg:pt-10 xl:grid-cols-4">
                {filteredData.map((college) => {
                  return (
                    <CollegeContainer
                      key={college.college_uuid}
                      collegeName={college.college_name}
                      collegeLogo={college.college_logo_link}
                      collegeBanner={college.header_photo_link}
                      collegeId={college.college_uuid}
                    />
                  );
                })}
              </div>
            ) : (
              <InfiniteScroll
                dataLength={paginatedData.length}
                next={getMoreData}
                hasMore={paginatedData.length < result.length}
              >
                <div className="grid grid-cols-1 gap-6  p-8  xxs:px-12 xs:grid-cols-2 xs:px-4 sm:grid-cols-2 sm:p-12 md:pt-10 lg:grid-cols-3 lg:pt-10 xl:grid-cols-4">
                  {paginatedData?.map((college) => {
                    return (
                      <>
                       
                        <CollegeContainer
                          key={college.college_uuid}
                          collegeName={college.college_name}
                          collegeLogo={college.college_logo_link}
                          collegeBanner={college.header_photo_link}
                          collegeId={college.college_uuid}
                        />
      
                      </>
                    );
                  })}
                </div>
                {loader && (
                  <div className="grid grid-cols-1 gap-6  p-8  xxs:px-12 xs:grid-cols-2 xs:px-4 sm:grid-cols-2 sm:p-12 md:pt-6 lg:grid-cols-3 lg:pt-6 xl:grid-cols-4">
                    <CollegeSkeleton />
                    <CollegeSkeleton />
                    <CollegeSkeleton />
                    <CollegeSkeleton />
                    <CollegeSkeleton />
                    <CollegeSkeleton />
                    <CollegeSkeleton />
                    <CollegeSkeleton />
                  </div>
                )}
              </InfiniteScroll>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default AllColleges;
