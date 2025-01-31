import {asyncHandler,ApiError,ApiResponse} from "../utils/allUtils.js";
import {AboutUs} from "../models/aboutus.model.js";

const addMember= asyncHandler(async(req,res)=>{
    const {name,email,enrollment,image,department}=req.body;
    if(name?.trim()==""||email?.trim()==""||enrollment?.trim()==""||image?.trim()==""||department?.trim()==""){
        throw new ApiError(400,"Please fill all the fields");
    }
    const user=await AboutUs.create({
        id:enrollment,
        name,
        email,
        image,
        department
    })
    return res.status(201).json(new ApiResponse(201,user,"User created successfully"));
});

const removeMember=asyncHandler(async(req,res)=>{
    const user=await AboutUs.findByIdAndDelete(req.params.id);
    if(!user){
        throw new ApiError(404,"User not found");
    }
    return res.status(200).json(new ApiResponse(200,null,"User deleted successfully"));
});

const updateMember=asyncHandler(async(req,res)=>{
    const user=await AboutUs.findByIdAndUpdate
    (req.params.id,req.body,{new:true});
    if(!user){
        throw new ApiError(404,"User not found");
    }
    return res.status(200).json(new ApiResponse(200,user,"User updated successfully"));
});

export {addMember,removeMember,updateMember};