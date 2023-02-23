const mongoose = require ('mongoose');
mongoose.connect("mongodb://localhost:27017/e-com");

const ProductSchema = new mongoose.Schema({
    name:String,
    age:Number,
    city:String
});


const addInDB = async()=>{

    const Product= mongoose.model('products', ProductSchema);
    let data = new Product({name:"ashi", age :26, city:"Ghaziabad"})
    let result = await data.save()
    console.log(result)

}



//addInDB()


//UPDATE METHOD

const updateInDB = async()=>{

    const Product = mongoose.model('products', ProductSchema)
    let data = await Product.updateOne(
        {name:"ashi"},
        {
            $set:{name : "Ashi Shivhare", age:24}
        }
    )
    console.log(data)


}
updateInDB()