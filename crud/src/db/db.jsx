const { username, password } = process.env
const connectionStr = "mongodb+srv://" + username + ":" + password + "@cluster0.ue48a.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0"