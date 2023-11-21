import { Flex, Text, Heading, Box, Image, Button, Input, Link } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Grid } from '@chakra-ui/react'
import { RiContactsLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IconButton } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'

export default function Form({showform}) {
    const [name, setname] = useState("")
    const [mail, setmail] = useState("")
    const [number, setnumber] = useState("")
    const [location, setlocation] = useState("")
    const [course, setcourse] = useState("")


    
    
   const [show, setshow] = useState("true")

   const [nameerr, setnameerr] = useState(false)
   const [mailerr, setmailerr] = useState(false)
   const [numbererr, setnumbererr] = useState(false)
   const [locationerr, setlocationerr] = useState(false)
   const [courseerr, setcourseerr] = useState(false)


   const closeform = ()=>{
    setshow("false")
   }

   const validatename = ()=>{

    // NAME VALIDATION

    const fullNameRegex = /^[\\p{L} .'-]+$/;
    if(fullNameRegex.test(name))
    {
        setnameerr(true);


    }
    else if(!name)
    {
        setnameerr(true)
    }
    else{
        setnameerr(false)
    }
    
    // MAIL VALIDATION 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(mail))
    {
        setmailerr(false)
    }
    else if(!mail)
    {
        setmailerr(true)
    }
    else{
    setmailerr(true)
    }

    // NUMBER VALIDATION 

    const phoneNumberRegex = /^\+?\d{10}$/;
    if(phoneNumberRegex.test(number))
    {
        setnumbererr(true)
    }
    else if(!number)
    {
        setnumbererr(true)
    }
    else{
    setnumbererr(false)
    }

    // location validation 

  
    if(!location)
    {
        setlocationerr(true)
    }
    else{
    setlocationerr(false)
    }


    // course validation 

     if(!course)
    {
        setcourseerr(true)
    }
    else{
    setcourseerr(false)
    }
   }


   const handlesubmit = async(e) =>{
    e.preventDefault();
    if(!name||!mail||!number||!location||!course)
    {
        alert("enter the data")
    }
    else if(nameerr == true||mailerr == true||numbererr == true||locationerr == true||courseerr == true)
    {
        alert("Enter Complete Data")
    }
   
    else
    {
    
        const response = await fetch("http://localhost:2000/form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: name,
            mail: mail,
            number: number,
            location:location,
            course:course
          })
        })
    
        if (response.ok === false || !response) {
          console.log(response);
        }
        else {
          alert("thankyou for the response")
        }
    
    
      }
   
}

   
 

    
    return (

<>
        <Flex bgColor="black" h="100vh"  pos="absolute" w="full" top="0px" zIndex="4" opacity="0.5" display={(showform == "true")?"flex":"none"}>
          

        </Flex>
            <Flex h="43rem" w="65%" bgColor="white" flexDir="row" pos="absolute" top="10%" left="20%" zIndex="4" display={(showform == "true")?"flex":"none"} >
                <Flex w="40%" bgColor="#f5f5f6">
                    <Flex w="full" m="20px" flexDir="column" >
                        <Flex color="black" >
                            <Heading fontSize="20px">How collegedunia helps you in <br />Admission</Heading>
                        </Flex>
                        <Flex alignItems="center" justifyContent="center" h="70%">
                            <Grid templateColumns='repeat(2, 2fr)' gap={6} p="10px">
                                <Flex w="9rem" h="7rem" bgColor="white" justifyContent="center" alignItems="center" flexDir="column">
                                    <Image src="./Images/Brochure.png" boxSize="4rem" />
                                    <Text>Brochure Details</Text>

                                </Flex>
                                <Flex w="9rem" h="7rem" bgColor="white" justifyContent="center" alignItems="center" flexDir="column">
                                    <Image src="./Images/Check.png" boxSize="4rem" />
                                    <Text>Brochure Details</Text>

                                </Flex>
                                <Flex w="9rem" h="7rem" bgColor="white" justifyContent="center" alignItems="center" flexDir="column">
                                    <Image src="./Images/Counselling.png" boxSize="4rem" />
                                    <Text>Brochure Details</Text>

                                </Flex>
                                <Flex w="9rem" h="7rem" bgColor="white" justifyContent="center" alignItems="center" flexDir="column">
                                    <Image src="./Images/scholarship.png" boxSize="4rem" />
                                    <Text>Brochure Details</Text>

                                </Flex>
                                <Flex w="9rem" h="7rem" bgColor="white" justifyContent="center" alignItems="center" flexDir="column">
                                    <Image src="./Images/Shortlist.png" boxSize="4rem" />
                                    <Text>Brochure Details</Text>

                                </Flex>
                                <Flex w="9rem" h="7rem" bgColor="white" justifyContent="center" alignItems="center" flexDir="column">
                                    <Image src="./Images/Application.png" boxSize="4rem" />
                                    <Text>Brochure Details</Text>

                                </Flex>


                            </Grid>
                        </Flex>
                        <Flex h="12rem" flexDir="column">
                            <Heading fontSize="20px">What People say</Heading>

                            <Flex h="full" justifyContent="center " alignItems="center" >
                                <Flex bgColor="white" h="7rem" w="20rem" flexDir="row">
                                    <Flex w="30%" justifyContent="center" alignItems="center"><Image src="./Images/gurmeet.webp" borderRadius='full' boxSize="5rem" /></Flex>
                                    <Flex w="70%" flexDir="column">
                                        <Text p="10px" fontSize="14px" lineHeight="20px">
                                            Collegedunia is a one-stop solution to all your education related queries.
                                        </Text>
                                        <Text pl="10px" fontWeight="bold">Gurmeet</Text>
                                    </Flex>

                                </Flex>

                            </Flex>

                        </Flex>





                    </Flex>
                </Flex>
                <Flex w="65%" flexDir="column">
                    <Flex h="30%" flexDir="column" justifyContent="center" >
                       
     
                       
                        <Flex w="70%" ml="30px" gap="10px">
                            <Image src='./Images/form.png' boxSize="6rem" />
                            <Flex flexDir="column" w="full" justifyContent="center">
                                <Text fontSize="2xl" fontWeight="bold" color="#ff7900" >Register Now To Apply</Text>
                                <Text fontSize="lg">Get details and latest updates</Text>
                            </Flex>
                        </Flex>




                   
                    </Flex>

                    <Flex  h="70%" p="20px"  justifyContent="center">
                        <form onSubmit={handlesubmit}>
                            <Flex flexDir="column"  w="full"gap="10px">
                            <Flex gap="20px"  h="4rem">
                                <FormControl isInvalid={nameerr}>
                                    <Flex flexDir="row" >
                                        <FormLabel ><Flex w="50px" h="40px" justifyContent="center" alignItems="center"><RiContactsLine /></Flex></FormLabel>
                                        <Input type='text' placeholder="Name" onChange={(e)=>{setname(e.target.value)}}/>
                                        
                                        
                                    </Flex>
                                    <FormErrorMessage ml="4rem" mt="-2px"> Does Not Contain Numeric Value</FormErrorMessage>
                                    
                                    

                                </FormControl>
                                <FormControl isInvalid={mailerr}>
                                    <Flex flexDir="row">
                                        <FormLabel ><Flex w="50px" h="40px" justifyContent="center" alignItems="center"><MdOutlineMail /></Flex></FormLabel>
                                        <Input type='text' placeholder="Email Address" onChange={(e)=>{setmail(e.target.value)}}/>
                                    </Flex>
                                    <FormErrorMessage ml="4rem" mt="-2px" >invalid email id</FormErrorMessage>

                                </FormControl>
                            </Flex>
                        
                            <Flex gap="20px"  h="4rem">
                                <FormControl isInvalid={numbererr}>
                                    <Flex flexDir="row">
                                        <FormLabel ><Flex w="50px" h="40px" justifyContent="center" alignItems="center"><FaPhoneAlt />
                                        </Flex></FormLabel>
                                        <Input type='text' placeholder="Mobile Number" onChange={(e)=>{setnumber(e.target.value)}}/>
                                    </Flex>
                                    <FormErrorMessage ml="4rem" mt="-2px">Invalid phone number</FormErrorMessage>

                                </FormControl>
                                <FormControl isInvalid={locationerr}>
                                    <Flex flexDir="row">
                                        <FormLabel ><Flex w="50px" h="40px" justifyContent="center" alignItems="center"><MdLocationOn /></Flex></FormLabel>
                                        <Input type='text' placeholder="City You Live In" onChange={(e)=>{setlocation(e.target.value)}}/>
                                    </Flex>
                                    <FormErrorMessage ml="4rem" mt="-2px">invalid location</FormErrorMessage>

                                </FormControl>
                            </Flex>
                            <Flex gap="20px" h="4rem">
                                <FormControl isInvalid={courseerr}>
                                    <Flex flexDir="row" w="50%">
                                        <FormLabel ><Flex w="50px" h="40px" justifyContent="center" alignItems="center"><FaGraduationCap />
                                        </Flex></FormLabel>
                                        <Input type='text' placeholder="Course You Interested In" onChange={(e)=>{setcourse(e.target.value)}}/>
                                    </Flex>
                                    <FormErrorMessage ml="4rem" mt="-2px">invalid coursename</FormErrorMessage>

                                </FormControl>
                              
                             
                            </Flex>

                            <Flex  h="15rem" flexDir="column" gap="10px" w="full" >
                                <Text>By submitting this form, you accept and agree to our <Link color="blue">Terms of Use</Link></Text>
                                <Flex  h="3rem" justifyContent="space-between" alignItems="center">
                                    <Flex><Text color="#000000" fontSize="15px">Already Registered? Click Here To Login.</Text></Flex>
                                    <Flex w="10rem"><Input type='submit' onClick={validatename} w="full" zIndex="3" bgColor="#F38701" color="white"/></Flex>
                                </Flex>
                            </Flex>
                            </Flex>

                        </form>

                    </Flex>


                </Flex>



            </Flex>

            </>
        


    )
}
