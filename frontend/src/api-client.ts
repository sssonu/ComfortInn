import Header from './components/Header';
import { RegisterFormData } from './pages/Register'
import { SignInformData } from './pages/SignIn';

const API_BASE_URL=import.meta.env.VITE_API_BASE_URL;
export const register= async(formData:RegisterFormData)=>{
    const response= await fetch(`${API_BASE_URL}/api/user/register`,{
        method:"POST",
        credentials:"include",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(formData)
    });

    const responseBody= await response.json();
    if(!response.ok){
        throw new Error(responseBody.message);

    }


}
export const SignIn = async (formData:SignInformData)=>{
    const response =await fetch(`${API_BASE_URL}/api/auth/login`,{
        method:"POST",
        credentials:"include",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(formData),
    })
    const body=await response.json()
    if(!response.ok){
        throw new Error(body.messsage)
    }
    return body;


}
export const validateToken= async()=>{
    const response=await fetch (`${API_BASE_URL}/api/auth/validate-token`,{
        credentials:"include",
    })
    if(!response.ok){
        throw new  Error ("Token invalid")

    }
    else{
        response.json();
    }
}
export const SignOut=async()=>{
    const response =await fetch(`${API_BASE_URL}/api/auth/logout`,{
        credentials:"include",
        method:"POST",

        

    })
    if(!response.ok){
        throw new Error ("Error during SignOut")
    }
}