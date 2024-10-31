"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
// config to store blog image
const blogImageStorage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Uploads/blogImages');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
// to upload image
const uploadBlogImage = (0, multer_1.default)({
    storage: blogImageStorage,
    limits: {
        fileSize: 5 * 1024 * 1024
    },
    fileFilter: function (req, file, cb) {
        if (!file.originalname.match(/\.(jpg|png|jpeg|gif)$/)) {
            return cb(new Error("only images file are allowed!"), false);
        }
        cb(null, true);
    }
}).single('blogImage');
exports.default = uploadBlogImage;
