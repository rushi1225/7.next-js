
const getUsers = async () => {
    const req = await fetch("https://dummyjson.com/users")
    const res = await req.json();
    return res.users;

}



export default getUsers
