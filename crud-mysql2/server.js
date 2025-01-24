const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 4000;

app.use(bodyParser.json());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:"newdemo",
});

db.connect((err)=>{
    if (err) {
        console.error('database connection failed',err.stack);
        return;
    }
    console.log('connected to the mysql');
    
})

// insert the data
app.post('/users',(req,res)=>{
    const {name,email} = req.body;
    const query = ' INSERT INTO users (name,email) VALUES (?,?)';
    db.query(query,[name,email],(err,result)=>{
        if(err){
            return res.status(500).json({error:err.message});
        }
        res.status(201).json({message:'user added successfully', userId:result.insertId});
    });
});

// read data - get
app.get('/users',(req,res)=>{
    const query = 'SELECT * FROM users';
    db.query(query,(err,results)=>{
        if(err){
            return res.status(500).json({error:err.message});
        }
        res.json(results);
    })
})

// single user - read
app.get('/users/:id',(req,res)=>{
    const {id} = req.params;
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query,[id],(err,results)=>{
        if(err){
            return res.status(500).json({error:err.message});
        }
        if(results.length === 0){
            return res.status(404).json({message:'user not found'});
        }
        res.json(results[0]);
    })
})

// update user
// UPDATE: Update a user by ID
app.put("/users/:id", (req, res) => {
    const { id } = req.params; // Get the user ID from the URL
    const { name, email } = req.body; // Get the new name and email from the request body
  
    // SQL query to update the user
    const query = "UPDATE users SET name = ?, email = ? WHERE id = ?";
  
    // Execute the query with the provided data
    db.query(query, [name, email, id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "User not found" }); // If no rows were updated
      }
  
      res.json({ message: "User updated successfully" });
    });
  });

  // DELETE: Delete a user by ID
app.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    const query = "DELETE FROM users WHERE id = ?";
    db.query(query, [id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json({ message: "User deleted successfully" });
    });
  });
  

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
