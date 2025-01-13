const express = require('express');
const Item = require('../models/Item');
const { json } = require('body-parser');
const router = express.Router();

router.post('/', async (req,res)=>{
    try {
        const newItem = new Item(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
        console.log('post working');
        
    } catch (error) {
        res.status(400).json({error:error.message});
    }
})

router.get('/',async(req,res)=>{
    try{
        const items = await Item.find();
        res.status(200).json(items);
    }catch{
        res.status(500).json({error:err.message});
    }
})

router.get('/:id',async(req,res)=>{
    try {
        const item = await Item.findById(req.params.id);
        if(!item) return res.status(404).json({message:'item not found'});
        res.status(200).json(item);
    } catch (err) {
        res.status(500).json({error:err.message});
    }
});

router.put('/:id',async(req,res)=>{
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body,{new:true})
        if (!updatedItem) return res.status(404).json({message:'Item not found'});
        res.status(200).json(updatedItem); 
    } catch (err) {
        res.status(400).json({error:err.message})
    }
})

router.delete('/:id', async (req, res) => {
    try {
      const deletedItem = await Item.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Item not found' });
      res.status(200).json({ message: 'Item deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

module.exports = router;