const {Product} =require('../db')
const getProducts= async(req,res)=>{
   try {const products= await Product.findAll()
    res.satus(200).send(products)}
    catch(e){
res.status(400).json({message: e.message})
    }
}
const getProduct = async (req, res) => {

    const {id} = req.params;

    try {

        const product = await Airport.findPk(id)

        if(!product) return res.status(404).send({massage:'The product does not exist'})

        res.status(200).send(product);

    }catch(error){

        return res.status(400).send({message: error.message});

    }
};
const  createProduct= async (req, res) => {

    const {productName, img, img2, img3, price, stock} = req.body;

    try {
        const newAirport = await Airport.create({
        
            productName: productName,
            img:img,
            img2,img2,
            img3:img3,
            price:price, stock:stock
            
        });

        res.status(200).send(newAirport); 

    }catch(error) {

        return res.status(400).send({error})   

    }
};
