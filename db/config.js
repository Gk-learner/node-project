// // const mongoose = require('mongoose');
// // mongoose.connect("mongodb://localhost:27017/e-commerce");

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/e-commerce?directConnection=true')
    // .then(() => {
        console.log('Connected to MongoDB');
        // app.listen(5000, () => {
            // console.log('Server is running on port 5000');
        // });
    // })
    // .catch((error) => console.error('Error connecting to MongoDB:', error));

    