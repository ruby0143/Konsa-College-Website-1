import React from 'react'

function Overview(props) {

  return (
    <>
      {/* before Overview  */}
      <div className='mt-[3rem] flex sm:hidden' style={{ overflowX: "auto" }}>
        <div className='mr-3 min-w-[180px] py-4 bg-[white] active:bg-[#EE7C00] active:text-[white] hover:bg-[#EE7C00] hover:text-[white] text-center cursor-pointer' style={{ borderRadius: "5px" , border: "1px solid #E9E9E9"}}>Overview</div>
        <div className='mx-3 min-w-[180px] py-4 bg-[white] active:bg-[#EE7C00] active:text-[white] hover:bg-[#EE7C00] hover:text-[white] text-center cursor-pointer' style={{borderRadius: "5px" , border: "1px solid #E9E9E9"}}>Connectivity</div>
        <div className='mx-3 min-w-[180px] py-4 bg-[white] active:bg-[#EE7C00] active:text-[white] hover:bg-[#EE7C00] hover:text-[white] text-center cursor-pointer' style={{borderRadius: "5px" , border: "1px solid #E9E9E9"}}>Fee Structure</div>
        <div className='mx-3 min-w-[180px] py-4 bg-[white] active:bg-[#EE7C00] active:text-[white] hover:bg-[#EE7C00] hover:text-[white] text-center cursor-pointer' style={{borderRadius: "5px" , border: "1px solid #E9E9E9"}}>Scholarship</div>
        <div className='mx-3 min-w-[180px] py-4 bg-[white] active:bg-[#EE7C00] active:text-[white] hover:bg-[#EE7C00] hover:text-[white] text-center cursor-pointer' style={{borderRadius: "5px" , border: "1px solid #E9E9E9"}}>About College</div>
        <div className='mx-3 min-w-[180px] py-4 bg-[white] active:bg-[#EE7C00] active:text-[white] hover:bg-[#EE7C00] hover:text-[white] text-center cursor-pointer' style={{borderRadius: "5px" , border: "1px solid #E9E9E9"}}>Cut Off</div>
        <div className='mx-3 min-w-[180px] py-4 bg-[white] active:bg-[#EE7C00] active:text-[white] hover:bg-[#EE7C00] hover:text-[white] text-center cursor-pointer' style={{borderRadius: "5px" , border: "1px solid #E9E9E9"}}>Placement Stats</div>
        <div className='mx-3 min-w-[180px] py-4 bg-[white] active:bg-[#EE7C00] active:text-[white] hover:bg-[#EE7C00] hover:text-[white] text-center cursor-pointer' style={{borderRadius: "5px" , border: "1px solid #E9E9E9"}}>College Review Video</div>
      </div>

      <div className='flex-row'>
        <div className='overview mt-[3rem]'>
          <h2 className='text-[#303030] text-xl my-3 font-bold'>Overview</h2>
          <hr />
          <div className='mt-[1.4rem]'>
            <p className='text-[14px] leading-[17px] md:leading-[20px] text-[#3A3A3A] md:tracking-[1.4px]'>{props.result.overview}</p>
            <div className="flex-col mt-[2rem] justify-around align-middle">
              <div className='flex items-center justify-around md:justify-start'>
                {/* ranking  */}
                <div className="nirf flex bg-[#FCFCFC] rounded-[3.85464px] p-2 items-center justify-around min-w-[150px] shadow-[1px_1px_6px_rgba(0,0,0,0.07)] hover:shadow-[3px_3px_5px_0px_rgba(0,0,0,0.07)] md:mr-[4rem]">
                  <img src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/features/NIRF.png" alt="NIRF logo" className='h-[32.31px]' />
                  <div className="rank">
                    <p className='text-[14px] text-[#2E2E2E] text-center font-semibold'>{props.result.nirf}</p>
                    <p className='text-[12px] text-[#434343] text-center'>NIRF Ranking</p>
                  </div>
                </div>
                {/* campus area  */}
                <div className="area flex bg-[#FCFCFC] rounded-[3.85464px] p-2 items-center justify-evenly min-w-[150px] shadow-[1px_1px_6px_rgba(0,0,0,0.07)] hover:shadow-[3px_3px_5px_0px_rgba(0,0,0,0.07)]">
                  <img src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/features/Area.png" alt="Area logo" className='h-[32.31px]' />
                  <div className="campusArea">
                    <p className='text-[14px] text-[#2E2E2E] text-center font-semibold'>{props.result.college_campus_area ? props.result.college_campus_area : `696 Acres`}</p>
                    <p className='text-[14px] text-[#2E2E2E] text-center'>Campus Area</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Qualifying exams  */}
        <div className='my-[2rem]'>
          <h2 className='text-[#303030] text-[15px] font-semibold mb-[1.2rem]'>Qualifying Exams</h2>
          <div className="flex whitespace-nowrap" style={{
            overflowX: "auto",
          }}>
            {props.result.exams?.map((exam, index) => {
              return <div id={index} className='hover:bg-[#303030] hover:text-[white] rounded-md mr-4 border-[1px] border-[rgba(233,233,233,1)] px-4 py-[.2rem] text-center text-[#2E2E2E] text-[14px]' style={{
                background: "linear-gradient(99.71deg, #F8F8F8 -20.28%, rgba(240, 240, 240, 0) 131.37%)",
                filter: "drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.08))",
                borderRadius: "5px"
              }}>{exam}</div>
            })}
          </div>
        </div>
        {/* mode of admission  */}
        <div className='mt-[2rem]'>
          <h2 className='text-[#303030] text-[15px] font-semibold mb-[1.2rem]'>Mode Of Admission</h2>
          <div className="flex whitespace-nowrap" style={{ overflowX: "auto" }}>
            {props.result.mode_of_admission?.map((exam, index) => {
              return <div id={index} className='hover:bg-[#303030] hover:text-[white] rounded-md mr-4 border-[1px] border-[rgba(233,233,233,1)] px-4 py-[.2rem] text-center text-[#2E2E2E] text-[14px]' style={{
                background: "linear-gradient(99.71deg, #F8F8F8 -20.28%, rgba(240, 240, 240, 0) 131.37%)",
                filter: "drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.08))",
                borderRadius: "5px"
              }}>{exam}</div>
            })}
          </div>
        </div>
      </div>

    </>
  )
}

export default Overview