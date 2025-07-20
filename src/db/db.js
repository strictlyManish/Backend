const mongoose = require("mongoose");

const connectToDB = async () => {
   await mongoose.connect(process.env.MONGOBD_URL)

        .then(() => {
            try {
                console.log("Database conected Successfully : 😍")
            } catch (error) {
                console.log("Soming is fisssy !")
            }
        })
}

module.exports = connectToDB;