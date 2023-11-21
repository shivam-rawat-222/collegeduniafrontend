import { Button, Divider, Flex, Heading, Image, Input, Link, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { LuGraduationCap } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import { MdEdit } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import "../Style/home.css"
import Form from './Form';

export default function Home() {
    const [form, setform] = useState("false")
 
    









    return (
        <>
            <Flex h="100vh" w="full" >
                <Flex h="70%" w="full" flexDir="column" backgroundImage="url(https://images.collegedunia.com/public/asset/img/homepage/banner/Indian1642232971.webp?mode=stretch)" backgroundRepeat="no-repeat" bgSize="cover"   >


                    <Flex bgColor="black" w="100%" h="100%" zIndex="1" opacity="0.5">   
                    </Flex>

                    {/* NAVBAR MAIN */}

                    <Flex h={{base:"4rem",md:"5rem",lg:"6.5 rem"}} flexDir="column" w="full" pos="absolute" zIndex="3">
                        <Flex h="70%" zIndex="1" >
                            <Flex w={{base:"full",md:"full",lg:"20%"}} justifyContent={{base:"space-between",md:"space-between",lg:"center"}} alignItems="center" zIndex="1" >
                                <Image src='./Images/mainlogo.png' w="190px" h="35px" />
                                <Flex color="white" display={{base:"block",md:"block",lg:"none"}} pr="1rem"><GiHamburgerMenu /></Flex>
                            </Flex>
                            <Flex w="70%" flexDir="row"  display={{base:"none",md:"none",lg:"flex"}} >
                                <Flex w="16%" h="full" flexDir="column" >
                                    <Flex alignItems="center" h="50%" w="100%" paddingLeft="20px">
                                        <LuGraduationCap color='#ff7900' />
                                        <Text fontSize="xs" color="#ff7900" pl="2px">
                                            Select Goal &
                                        </Text>
                                        <IoLocationOutline color='#ff7900' />
                                        <Text fontSize="xs" color="#ff7900">City</Text>

                                    </Flex>
                                    <Flex h="50%" pl="20px" alignItems="center" >
                                        <Text fontSize="xs" color="white" >
                                            Select Goal

                                        </Text><RiArrowDropDownLine size="20px" color="white" />

                                    </Flex>
                                </Flex>
                                <Flex h="full" w="70%" justifyContent="center" alignItems="center">
                                    <Input type='text' h="50px" bgColor="white" placeholder="Search For Colleges, Exams, Courses and More.."></Input>

                                </Flex>
                                <Flex h="full" w="15%" p="5px">
                                    <Flex w="30%" justifyContent="center" alignItems="center">
                                        <MdEdit size="20px" filter='invert(100%)' />

                                    </Flex>
                                    <Flex w="80%" flexDir="column" >
                                        <Flex h="50%" w="full" color="white" fontSize="12px" alignItems="center">Write a Review</Flex>
                                        <Flex h="50%" w="80%" bgColor="#ff7900" borderRadius="4px" color="white" pl="4px" fontSize="10px" alignItems="center" >Get Upto ₹500*</Flex>
                                    </Flex>

                                </Flex>




                            </Flex>
                            <Flex w="20%"  display={{base:"none",md:"none",lg:"flex"}}>
                                <Flex w="40%" >
                                    <Flex w="20rem" m="10px" justifyContent="center" alignItems="center" gap="5px"  h="full">
                                        <TbGridDots color="white" size="25px"/>
                                        <Text color="white" fontSize="18px" pl="5px">Explore</Text>
                                        
                                        <Flex className='subexplore' bgColor="white"   h="350%" w="50%" position="absolute" display="none" top="70%"  left="45%" right="10%" ></Flex>


                                    </Flex>
                                   
                                    


                                </Flex>
                                
                                <Flex w="20%" justifyContent="center" alignItems="center">
                                    <Flex bgColor="black" p="25px" borderRadius="30px" opacity="0.4" zIndex="1" pos="absolute">



                                    </Flex>
                                    <Image src="./Images/bell.png" boxSize="25px" zIndex="1" />



                                </Flex>
                                <Flex w="30%" flexDir="column">
                                    <Flex bgColor="black" w="88px" ml="15px" h="37px" top="15px" pos="absolute" opacity="0.4" zIndex="1" borderRadius="20px" >

                                    </Flex>

                                    <Flex  m="15px" w="full" justifyContent="center" alignItems="center" zIndex="1" borderRadius="20px">
                                        <Flex w="40%" p="8px"><Image src="./Images/line.png" /></Flex>
                                        <Flex w="30%"><Image src="./Images/face.png" /></Flex>

                                    </Flex>

                                </Flex>

                            </Flex>


                        </Flex>
                        <Flex zIndex="1" h="full" justifyContent="space-between"  display={{base:"none",md:"none",lg:"flex"}}>
                            <Flex w="full"   display={{base:"none",md:"none",lg:"flex"}}>
                                <Flex color="white" gap="20px" alignItems="center" ml="2rem" fontSize={{base:"12px",md:"10px",lg:"10px"}}>
                                    <Link _hover={{color:"#ff7900"}}> All Courses</Link>
                                    <Link  _hover={{color:"#ff7900"}}> Btech</Link>
                                    <Link _hover={{color:"#ff7900"}}> MBA</Link>
                                    <Link _hover={{color:"#ff7900"}}> MBBS</Link>
                                    <Link _hover={{color:"#ff7900"}}> BCom</Link>
                                    <Link _hover={{color:"#ff7900"}}> BSc</Link>
                                    <Link _hover={{color:"#ff7900"}}> BSe(Nursing)</Link>
                                    <Link _hover={{color:"#ff7900"}}> BA</Link>
                                    <Link _hover={{color:"#ff7900"}}> BBA</Link>
                                    <Link _hover={{color:"#ff7900"}}> BCA</Link>
                                </Flex>
                            </Flex>
                            <Flex w="20%" justifyContent="center" alignItems="center" color="white" fontSize="13px"  display={{base:"none",md:"none",lg:"flex"}}>
                                Course Finder
                            </Flex>



                        </Flex>



                    </Flex>
                    <Flex w="full" h={{base:"2.5rem",md:"3rem",lg:"5.2rem"}} bgColor="black" pos="absolute" opacity="0.6" zIndex="2"  >


                    </Flex>
                    {/* MAIN NAVBAR END  */}
                    <Flex pos="absolute" h="55%" w="full" top="7rem" zIndex="1" justifyContent="center" alignItems="center" >
                        <Flex h="70%" w="70rem" flexDir="column" zIndex="2"  justifyContent="center">
                            <Flex h="20%" justifyContent="center" alignItems="center">
                                <Heading color="white" fontSize={{base:"15px",md:"20px",lg:"40px"}}>
                                    Find Over
                                   <Typewriter
                                    words={[" 2500+ Colleges "," 250+ Exams " ," 11000+ Courses ", " 1Lakh+ Reviews "]} 
                                    loop= {false}
                                    /> 
                                    In India
                                    


                                </Heading>
                            </Flex>
                            <Flex h="70%" flexDir="column" alignItems="center" gap="20px">
                                <Flex flexDir="row" w="90%" >

                                    <Flex w="90%" h={{base:"3rem",md:"3rem",lg:"3.5rem"}}><Input type="text" bgColor="white" h="full" placeholder="Search for colleges, exams, courses and more.."></Input></Flex>
                                    <Flex w="10%"><Button w="full" h="full" bgColor="#ff7900" color="white" fontSize={{base:"10px",md:"15px",lg:"20px"}}>Search</Button></Flex>


                                </Flex>
                                <Flex w="90%" h={{base:"25px",md:"40px",lg:"40px"}} justifyContent="flex-end">
                                    <Button bgColor="#ff7900" h="full" w={{base:"8rem",md:"10rem",lg:"10rem"}} color="white" onClick={()=>{
                                        console.log("show the form")
                                        setform("true")}} fontSize={{base:"10px",md:"15px",lg:"13px"}}>Need Councelling </Button>
                                </Flex>

                            </Flex>

                        </Flex>


                    </Flex>









                </Flex>
                

                
                <Form showform = {form}/>

            </Flex>




        </>

    )
}

