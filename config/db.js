import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://boburmirzosherboev:GDHoOdhY3a3YOgIw@cluster0.cs4cbzo.mongodb.net/foodie').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.