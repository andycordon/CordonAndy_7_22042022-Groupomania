//POST.ROUTES

const router = require("express").Router();
const postController = require("../controllers/post.controller");
const multer = require("multer");
const upload = multer();

//routes pour Posts
router.get("/", postController.readPost); //recupérer tout les posts
router.post("/", upload.single("file"), postController.createPost); //créer un post text+image
router.put("/:id", postController.updatePost); //modifier un post
router.delete("/:id", postController.deletePost); //supprimer un post
router.patch("/like-post/:id", postController.likePost); //like un post
router.patch("/unlike-post/:id", postController.unlikePost); //unlike un post

//routes pour comments
router.patch("/comment-post/:id", postController.commentPost); //commenter un post
router.patch("/edit-comment-post/:id", postController.editCommentPost); //modifier un commentaire de post
router.patch("/delete-comment-post/:id", postController.deleteCommentPost); //supprimer un commentaire de post

module.exports = router;
