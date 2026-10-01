import express from "express";

const app = express();
const port = 4000;

app.use(express.json());

const posts = [
    {
        id: 1,
        Image: "https://tse4.mm.bing.net/th/id/OIP.Tbl2uFeNce50cQ5IrQHcNQHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        caption: "Looking better than ever, Bow Bow"
    },
    {
        id: 2,
        Image: "https://images.pexels.com/photos/19024664/pexels-photo-19024664.jpeg?cs=srgb&dl=pexels-csibeman-19024664.jpg&fm=jpg",
        caption: "Just ate 1 kg of chicken , Go Protein Bow Bow!",
    },
    {
        id: 3, 
        Image: "https://tse3.mm.bing.net/th/id/OIP.UR0dlxc4kTpPz2EbHf03VAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        caption: "Long and Strong, Just touched some grass !",
    },
]

app.get("/api/posts", (req, res) => {
    res.status(200).json(posts);
})

app.post("/api/posts", (req, res) => {
    const {id, image, caption} = req.body;
    const newPost = {id, image, caption};
    posts.push(newPost);
    res.status(201).json(newPost);
})

app.listen(port, () => {
    console.log("Server started on port", port);
})