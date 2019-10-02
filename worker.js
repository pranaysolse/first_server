const request = require('request');
var air_data = require("./models/air_data_model") 
const bodyparser = require('body-parser');
var axios = require('axios')
require('dotenv').config();
const express = require('express')
let app = express()
const mongoose = require('mongoose');

const api_key = process.env.API_KEY;

 mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

let db = mongoose.connection;

let instances = new air_data()
console.log("/////////////////////////////////////////////////////////////////////////////")
//  let  r = request.get(`https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69?api-key=${api_key}&format=json&offset=0&limit=2`, async (error, response, body) =>{
//     if(error) {
//         return console.log("error");
//     }
//     else {
//         return JSON.parse(body)
// }});
// console.log(r)
// db.on('error', console.error.bind(console, 'connection error:'));
//     db.once('open', async ()=>{
//         console.log("open")
//         console.log(json['records']);
//         var save_instance  = new air_data({id:"0"});
//         await save_instance.save(()=>{console.log("saved")})        
//         await air_data.collection.insert(json['records'], ()=>{
        
//             console.log("done inserting ");
//         });   
    
//         await save_instance.save(()=>{console.log("saved")})
//     });

db.on('error', console.error.bind(console, 'conncetions error'));
async function p(){
     await air_data.deleteMany({}, (err)=>console.log("err: ", err))
    
    await axios.get(`https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69?api-key=${api_key}&format=json&offset=1&limit=1399`)
    .then( res =>{ 
       console.log("log")
        // console.log(res.data.records)        
    //     air_data.insertMany(res.data.records, err => {if(err){console.log("inserting err: ", err)}})     //   db.close(()=>console.log("done ensrting exitin     
    })
    .catch( err => console.log(err))
//    .then(db.close( () =>console.log('done')))
}   
p();

// air_data.find().where('_id').exec((err, res)=>console.log("this ", res))

setTimeout(function(){
    db.close(()=>console.log("done exiting"))
}, 12000)
    


// let air = axios.get(`https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69?api-key=${api_key}&format=json&offset=0&limit=2`)
//             .then((response)=>{
//             return response
//             })
//             .catch((error)=>{
//                 console.log(error)
//                 return null;
//             })
                

// console.log(air)
// db.once('open', async ()  => { 
    
//     console.log("system connected");
    
//     //var s = mongoose.Schema({
//        // name:String,
//       //  value:Number
//     //});
//     //var s_model = mongoose.model('s_model', s);
//     let sa = new import_model({
//         name:"Pranay"
//     });
//     await sa.save(()=>console.log(" import model : saved imported")); 
//     //  var s_instance = new s_model({
//     //    name:'pranay',
//       //  value:20
//     //});
// //   await s_instance.save(()=>console.log("done"));
// //    s_model.find({name:"pranay"},'name value', async function(err, person){
// //        if(err){
// //            console.log("error")
// //             console.log(err);
// //         }else{
// //         console.log("person: ", person);
// //         console.log("this is it")
// //         await s_model.deleteMany({name:"pranay"}, (error)=>{
// //             if(error){console.log("error:" , error);
// //         }});
//             //await s_model.find(({name:"pranay"},'name value', function(err, person){
//             //console.log("person:", person)
//         //}))
//     await import_model.find({name:"Pranay"}, 'name', async (err,person)=>{
//         if (!err){console.log("inside the query");}
        
//        for(i in person){
//            console.log("async :", person[i])
//        } 
//     });
    
//     await db.close(()=>console.log("closing the db"));
// });
    //});

//    await db.close(()=>console.log('done'));
//}); 




// 1. first query the air data pm2 and all
// request.get(`https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69?api-key=${api_key}&format=json&offset=0&limit=1`, (error, response , body)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//     //console.log(JSON.parse(body));
//     }
//     // to do : function to pipe the data to the mongod
// });

// 2. query the commodity data
// request.get(`https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=${api_key}&format=json&offset=0&limit=1`,(error, response, body)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         let json= JSON.parse(body)
//         //json[]
//         console.log(json);
//         //console.log(json['records'][0]['min_price']);
    
//     }
// });
// 3.query the weather data
// request.get();