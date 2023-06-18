app.get('/api/data/aboutMe', async (req, res) => { // GET method 
    try {
        const data = await AboutMe.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.post('/api/data/aboutPostIcon', async (req, res) => { // POST method 
    try {
        const newData = await Social.create(req.body);
        res.status(201).json(newData);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.get('/api/data/getIcon', async (req, res) => { // GET POST method 
    try {
        const newData = await Social.find();
        res.json(newData);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.delete('/api/data/deleteData', async (req, res) => { // DELETE method all 
    try {
        await Social.deleteMany({});
        res.json({ message: 'All data deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.delete('/api/data/:id', async (req, res) => { // DELETE method by id
    try {
        const deletedData = await Social.findByIdAndDelete(req.params.id);
        if (!deletedData) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.json({ message: 'Data deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.put('/api/data/update/:id', async (req, res) => { // UPDATE method 
    try {
      const updatedData = await AboutMe.findByIdAndUpdate(req.params.id);
      if(updatedData){
        updatedData.name = req.body.name || updatedData.name
        updatedData.img = req.body.img || updatedData.img
        updatedData.des1 = req.body.des1 || updatedData.des1
        updatedData.des2 = req.body.des2 || updatedData.des2
        updatedData.title = req.body.title || updatedData.title
      }
      if (!updatedData) {
        return res.status(404).json({ error: 'Data not found' });
      }
      await updatedData.save()
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  