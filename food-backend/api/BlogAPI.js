const express = require('express');
const fs = require('fs');
const { promisify } = require('util');

const app = express();

const router = express.Router();
// Imageupload codes
const multer = require("multer");
const unlinkAsync = promisify(fs.unlink);

const blogLists = require('../Model/Blog');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpeg"
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
});

app.use(express.json());

router.post('/createBlog', upload.single("image"), async (req, res) => {
    try {
        const data = JSON.parse(req.body.data);
        console.log('data::: ', data);

        const dataAdd = blogLists.create({
            titel: data.title,
            Description: data.describe,
            type: data.type,
            Filepath: req.file.originalname
        })
        if (dataAdd != undefined) {
            res.send({ responce: "sended" });
        } else {
            res.send({ responce: 0 });
        }
    } catch (error) {
        res.send({ err: error })
        console.log('error::: ', error);
    }
})

router.get('/getAllBlogs', async (req, res) => {
    try {
        const dataAdd = await blogLists.find({});
        return res.send({ dataAdd });
    } catch (error) {
        console.log('error::: ', error);
        return res.send({ err: error });
    }
})

// router.delete('/deleteData/:id', async (req, res) => {
//     try {
//         const getBlogData = await blogLists.findById(req.params.id)

//         const path = `./public/${getBlogData.Filepath}`

//         const sneha = await unlinkAsync(path)


//         const dete = await blogLists.findByIdAndRemove(req.params.id)
//         return res.send({ message: "the data was remove" })


//     } catch (error) {
//         res.send({ err: error })
//         console.log('error::: ', error);
//     }
// })

router.post('/getEditdata', async (req, res) => {
    try {
        const abc = await req.body.my_id
        const getBlogdata = await blogLists.findById(abc)
        return res.send({ datas: getBlogdata })
    } catch (error) {
        console.log('error::: ', error);
        return res.send({ err: error });
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const getBlogData = await blogLists.findById(req.params.id);
        // const path = `./public/${getBlogData.Filepath}`
        const path = `./public/${getBlogData.Filepath}`
        const kd = await unlinkAsync(path);
        const dete = await blogLists.findByIdAndRemove(req.params.id);
        return res.send({ message: "the data was remove" });
    } catch (error) {
        console.log('error::: ', error);
        return res.send(error);
    }
})



module.exports = router;