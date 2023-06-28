const express = require("express");
const orderss = require("../models/orderSchema");
const orderRouter = express.Router();

// router.get("/",(req,res)=>{
//     console.log("connect");
// });

// register user
// orderRouter.post("/add",async(req,res)=>{
   
//     const {name,email,age,mobile,work,add,desc} = req.body;

//     if(!name || !email || !age || !mobile || !work || !add || !desc){
//         res.status(422).json("plz fill the data");
//     }

//     try {
        
//         const preorder = await orderss.findOne({email:email});
//         console.log(preuser);

//         if(preorder){
//             res.status(422).json("this is user is already present");
//         }else{
//             const addorder = new orderss({
//                 name,email,age,mobile,work,add,desc
//             });

//             await addorder.save();
//             res.status(201).json(addorder);
//             console.log(addorder);
//         }

//     } catch (error) {
//         res.status(422).json(error);
//     }
// })

orderRouter.post('/', async(req, res)=>{
    const order = await orderss.create(req.body);
    if(order){
        res.status(200);
        res.json(order);
    }else{
        res.status(500);
        throw new Error('Order created failed')
    }
})


// get userdata

// orderRouter.get("/getdata",async(req,res)=>{
//     try {
//         const userdata = await users.find();
//         res.status(201).json(userdata)
//         console.log(userdata);
//     } catch (error) {
//         res.status(422).json(error);
//     }
// })
orderRouter.get('/getdata', async(req, res)=>{
    const order = await orderss.find({});
    if(order){
        res.status(200);
        res.json(order);
    }else{
        res.status(500);
        throw new Error('there are no order')
    }
})
// get individual user

orderRouter.get("/getorder/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;
        const order = await orderss.findById({_id:id});
        console.log(order);
        res.status(200).json(order)

    } catch (error) {
        res.status(500).json(error);
    }
})


// update user data

orderRouter.patch("/updatorder/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updatorder = await orderss.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updatorder);
        res.status(200).json(updatorder);

    } catch (error) {
        res.status(500).json(error);
    }
})


// delete user
orderRouter.delete("/deletorder/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const deletorder = await orderss.findByIdAndDelete({_id:id})
        console.log(deletorder);
        res.status(200).json(deletorder);

    } catch (error) {
        res.status(500).json(error);
    }
})




module.exports = orderRouter;










