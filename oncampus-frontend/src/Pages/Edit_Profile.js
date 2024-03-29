import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import "../Components/profile/editProfile.css";
import {editProfile,resetStatus} from "../redux/actions/authActions";
import {  useNavigate,useLocation} from "react-router-dom"
import {resetErrorMessage} from '../redux/actions/authActions';
import Navbar from "../Components/Appbar/Navbar";




const Edit_Profile = () => {

    const location=useLocation();
    const navigate=useNavigate();
    const profileData=location.state.Data;
    const dispatch=useDispatch();

   var Name,Hostel,Room_Number,Phone,Profile_Picture;

   if(profileData){
      
       Name=profileData.name;
      Room_Number=profileData.room_number;
       Hostel=profileData.hostel;
      
       Phone=profileData.phone;
       Profile_Picture=profileData.profile_Picture;
     
   }

   const  Status8=useSelector((state=>state.auth.editProfileResponse));
  const  data=useSelector((state=>state.auth.editProfileData));
  
    const errorMessage2=useSelector((state)=>state.auth.errorMessage)
     var NewToken;
    if(data){
       NewToken=data.user_token;
    }
    
    
    if(Status8===200){
      localStorage.setItem("jwt",NewToken);
        dispatch(resetStatus);
        dispatch(resetErrorMessage);
         navigate('/sidebar')
         
     }
 
  

   const [name,setName]=useState(Name)
    const [hostel,setHostel]=useState(Hostel)
    const [room_number,setRoomNo]=useState(Room_Number)
    const [phone,setPhone]=useState(Phone)
    const [profile_Picture,setProfilePicture]=useState('')
    

    

   

    
    




    const handleSubmit=(e)=>{
        e.preventDefault();
        const token = localStorage.getItem("jwt");
          const decoded = jwt_decode(token);
      
        
        const formData= new FormData();
        formData.append('name',name)
        formData.append('hostel',hostel)
        formData.append('room_number',room_number)
        formData.append('phone',phone)
        formData.append('profile_picture',profile_Picture)
        
 
      
        dispatch(editProfile(formData));
      
      }



    return (
      <>
      <Navbar/> 
        <div className="signUpContainer">
        <div  className="signUpFormCont">
            <h1 style={{width:'100%',color:'#181818', marginTop:"6rem", fontFamily:"Inconsolata, monospace"}}>EDIT PROFILE</h1>
           
            
            <input  style={{fontFamily:"Inter, monospace",fontWeight:'500'}}defaultValue={Name} onChange={e=>setName(e.target.value)} placeholder="Name"  type="text" />
            
            <input style={{fontFamily:"Inter, monospace",fontWeight:'500'}} defaultValue={Phone} onChange={e=>setPhone(e.target.value)} type="number" placeholder="Mobile No" />

   
           
            <input style={{fontFamily:"Inter, monospace",fontWeight:'500'}} defaultValue={Hostel} onChange={e=>setHostel(e.target.value)} type="text" placeholder="Hostel(BH-1)" />
            <input style={{fontFamily:"Inter, monospace",fontWeight:'500'}} defaultValue={Room_Number} onChange={e=>setRoomNo(e.target.value)} type="text" placeholder="Room No" />
            <label style={{marginTop:'18px',fontFamily:"Inter, sans-serif",fontWeight:'700'}} htmlFor="input">Profile Picture</label>
            <input style={{border:'none'}} onChange={e=>setProfilePicture(e.target.files[0])} type="file" />
         
          
            
            <button style={{width:'24rem',height:'2.5rem',fontSize:'1.4rem',background:"#181818",color:'white',border:'none',fontFamily:"Inter, monospace",fontWeight:'700',
            borderRadius:'6px'}} onClick={handleSubmit}>Submit</button>
            <p style={{color:'black'}}>{errorMessage2}</p>
        </div>
        </div>
        </>
     );
}
 
export default Edit_Profile;