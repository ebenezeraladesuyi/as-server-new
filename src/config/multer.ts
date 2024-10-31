import multer from "multer";

// config to store blog image
const blogImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Uploads/blogImages');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname)
    }
})

// to upload image
const uploadBlogImage = multer({
    storage: blogImageStorage,
    limits: {
        fileSize: 5 * 1024 * 1024 
    },
    fileFilter: function (req, file, cb) {
        if (!file.originalname.match(/\.(jpg|png|jpeg|gif)$/)) {
            return cb(new Error("only images file are allowed!") as any, false)
        }
        cb(null, true)
    }
}).single('blogImage')

export default uploadBlogImage;