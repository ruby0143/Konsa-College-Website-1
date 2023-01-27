import React from 'react'
import IIT_Bombay_logo from "../../assets/counsellingColleges/IIT_Bombay.svg"
import IIT_Delhi_logo from "../../assets/counsellingColleges/IIT_Delhi.svg"
import IIT_Kharagpur_logo from "../../assets/counsellingColleges/IIT_Kharagpur.svg"
import IIT_Hamirpur_logo from "../../assets/counsellingColleges/IIT_Hamirpur.svg"
import NIT_logo from "../../assets/counsellingColleges/NIT.svg"
import DTU_logo from "../../assets/counsellingColleges/DTU.svg"
import NSUT_logo from "../../assets/counsellingColleges/NSUT.svg"
import IGDTUW_logo from "../../assets/counsellingColleges/IGDTUW.svg"
import IITD_logo from "../../assets/counsellingColleges/IITD.svg"
import DSEU_logo from "../../assets/counsellingColleges/DSEU.svg"
import CounsellingContainer from './InnerContainers/counsellingContainer'

const CollegeCounselling = () => {

  const collegeCounsellings = [
    {
      id: 1,
      counsellingName : "JoSAA",
      fullForm : "Joint Seat Allocation Authority",
      collegeList : [
        { logo : IIT_Bombay_logo },
        { logo : IIT_Delhi_logo },
        { logo : IIT_Kharagpur_logo },
        { logo : IIT_Hamirpur_logo },
        { logo : NIT_logo },
      ]
    },
    {
      id: 2,
      counsellingName : "JAC",
      fullForm : "Joint Admission Counselling",
      collegeList : [
        { logo : DTU_logo },
        { logo : NSUT_logo },
        { logo : IGDTUW_logo },
        { logo : IITD_logo },
        { logo : DSEU_logo },
      ]
    },
    {
      id: 3,
      counsellingName : "MHT - CET",
      fullForm : "Maharashtra Common Entrance Test",
      collegeList : [
        { logo : DTU_logo },
        { logo : NSUT_logo },
        { logo : IGDTUW_logo },
        { logo : IITD_logo },
        { logo : DSEU_logo },
      ]
    },
    {
      id: 4,
      counsellingName : "MHT - CET",
      fullForm : "Maharashtra Common Entrance Test",
      collegeList : [
        { logo : DTU_logo },
        { logo : NSUT_logo },
        { logo : IGDTUW_logo },
        { logo : IITD_logo },
        { logo : DSEU_logo },
      ]
    },
    {
      id: 5,
      counsellingName : "MHT - CET",
      fullForm : "Maharashtra Common Entrance Test",
      collegeList : [
        { logo : DTU_logo },
        { logo : NSUT_logo },
        { logo : IGDTUW_logo },
        { logo : IITD_logo },
        { logo : DSEU_logo },
      ]
    },
  ]

  return (
    <div className='mb-4' >
      <div className='text-center text-xl md:text-2xl mb-1 font-semibold text-[#303030]' >
        College Counselling
      </div>
      <div className='flex md:max-w-[1100px] md:m-auto items-center overflow-x-auto overflow-y-hidden gap-3 py-2'>
        {
          collegeCounsellings.map(counselling => {
            return <CounsellingContainer key={counselling.id} counsellingName={counselling.counsellingName} fullForm={counselling.fullForm} collegeList={counselling.collegeList} />
          })  
        }
          <button className='min-w-[170px] md:min-w-[200px] lg:min-w-[250px] h-[136px] md:h-[156px] lg:h-[170px] flex justify-center items-center shadow-md rounded-md border border-gray-200   bg-gradient-to-r from-white to-[#fff6ec] font-medium cursor-pointer'>
            <div className='text-sm text-[#EE7C00]'>
              Show More &#10140;
            </div>
          </button>
      </div>
    </div>
  )
}

export default CollegeCounselling
