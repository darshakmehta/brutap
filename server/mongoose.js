const mongoose = require('mongoose');
const mlabURI = "mongodb://<dbuser>:<dbpassword>@ds243054.mlab.com:43054/brutap";

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/bruvue');
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
module.exports = {
    mongoose
}