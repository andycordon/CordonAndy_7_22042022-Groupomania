const router = require("express").Router();
const postController = require("../controllers/post.controller");
//const multer = require("multer");
//const upload = multer();

router.get("/", postController.readPost); //recupérer tout les posts
router.post("/", postController.createPost); //créer un post
router.put("/:id", postController.updatePost); //modifier un post
router.delete("/:id", postController.deletePost); //supprimer un post
router.patch("/like-post/:id", postController.likePost); //like un post
// router.patch("/unlike-post/:id", postController.unlikePost); //Ne pas liker un post

// comments
// router.patch("/comment-post/:id", postController.commentPost);
// router.patch("/edit-comment-post/:id", postController.editCommentPost);
// router.patch("/delete-comment-post/:id", postController.deleteCommentPost);

module.exports = router;
