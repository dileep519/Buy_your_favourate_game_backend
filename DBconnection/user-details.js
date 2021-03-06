const mongoose=require("mongoose");

const user=mongoose.Schema({
    name:{
        type:String,
        required:true
    },email:{
        type:String,
        required:true
    },password:{
        type:String,
        required:true
    },
    address:[{
        house:{
            type:String,
            trim:true
        },
        street:{
            type:String,
            trim:true
        },area:{
            type:String,
            trim:true
        },city:{
            type:String,
            trim:true
        },pincode:{
            type:Number,
        }
    }],cart:[{
            Rank:{
                type:Number,
                required:true,
                trim:true
            },
            Name:{
                type:String,
                required:true,
                trim:true
            },
            Platform:{
                type:String,
                required:true,
                trim:true
            },
            Year:{
                type:Number,
                required:true
            },
            Genre:{
                type:String,
                required:true,
                trim:true
            },
            Publisher:{
                type:String,
                required:true,
                trim:true        
            },
            Global_Sales:{
                type:Number,
                required:true
            },
            Price:{
                type:Number,
                required:true
            }
    }],orders:[{
                Rank:{
                    type:Number,
                    required:true,
                    trim:true
                },
                Name:{
                    type:String,
                    required:true,
                    trim:true
                },
                Platform:{
                    type:String,
                    required:true,
                    trim:true
                },
                Year:{
                    type:Number,
                    required:true
                },
                Genre:{
                    type:String,
                    required:true,
                    trim:true
                },
                Publisher:{
                    type:String,
                    required:true,
                    trim:true        
                },
                Global_Sales:{
                    type:Number,
                    required:true
                },
                Price:{
                    type:Number,
                    required:true
                }
    }],
    date:{
        type:Date,
        default:Date.now
    },phone:{
        type:Number,
        default:""
    }
})

var userDetails=mongoose.model("Userdetails",user);

module.exports=userDetails;