var mongoose = require("mongoose");

(async () => {
  try {
    const db = await mongoose.connect("mongodb+srv://america:Ramon123456@cluster0.rlkv9.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongodb is connected to", db.connection.host);
  } catch (error) {
    console.error(error);
  }
})();