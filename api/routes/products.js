const express =  require('express');
const router = express.Router();

router.get('/',(req, res, next)=>{
    res.status(200).json({
        message:'Handling GET requests to /products'
    })
})

router.post('/',(req, res, next)=>{
    const product = {
        name : req.body.name,
        price:req.body.price
    }
    res.status(200).json({
        message:'Handling post requests to /products',
        createProduct: product
    })
})

router.get('/:productId',(req,res)=>{
    const id= req.params.productId;
    if(id === "special"){
        res.status(200).json({
            message:'You discovered a special Id',
            id:id
        })
    }
    else{
        res.status(200).json({
            message:'You passed an id'
        })
    }
})

router.patch('/:productId',(req,res)=>{
    res.status(200).json({
        message:'Updated Product'
    })
})

router.delete('/:productId',(req,res)=>{
    res.status(200).json({
        message:'Deleted Product'
    })
})
module.exports = router;