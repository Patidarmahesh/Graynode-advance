const { imageUploadss } = require("../MiddleWare/imageUpload");
const userCreatePost = require("../Models/userThoughtModal");

const createPostController = async (req, res) => {
  imageUploadss(req, res, async (error) => {
    console.log(req.body);
    console.log(req.files);
    if (error) {
      return res.send({ message: error });
    }
    try {
      const response = await userCreatePost.create({
        ...req.body,
        postedBy:req.user,
        image:req.files,
      });
      if (response) {
        res.send({
          status: 200,
          error: false,
          message: "Create Post SuccessFully",
          success: true,
          response,
        });
      } else {
        res.send({
          status: 400,
          error: true,
          success: false,
          response,
        });
      }
    } catch (error) {
      res.send({
        status: 400,
        error: true,
        success: false,
        response: [],
        message: error.message,
      });
    }
  });
};

// const getAllPostController = async (req, res) => {
//   try {
//     const response = await userCreatePost.aggregate([
//       {
//         $lookup: {
//           from: "users",
//           localField: "postedBy",
//           foreignField: "_id",
//           as: "AllPostData",
//         },
//       },
//       {
//         $lookup: {
//           from: "companies",
//           localField: "postedBy",
//           foreignField: "_id",
//           as: "AllPostData",
//         },
//       },
//       {
//         $unwind: "$AllPostData",
//       },
//       {
//         $project: {
//           __v: 0,
//           AllPostData: {
//             __v: 0,
//           },
//         },
//       },
//     ]);
//     if (response) {
//       res.send({
//         status: 200,
//         error: false,
//         message: "Get All Post SuccessFully",
//         success: true,
//         response,
//       });
//     } else {
//       res.send({
//         status: 400,
//         error: true,
//         success: false,
//         response,
//       });
//     }
//   } catch (error) {
//     res.send({
//       status: 400,
//       error: true,
//       success: false,
//       response: [],
//       message: error.message,
//     });
//   }
// };

const getAllPostController = async (req, res) => {
  try {
    const response = await userCreatePost
      .find()
      .populate("postedBy")
      .populate("comments.commentBy")
      .populate("likes.likedBy");
    if (response) {
      res.send({
        status: 200,
        error: false,
        message: "Get All Post SuccessFully",
        success: true,
        response,
      });
    } else {
      res.send({
        status: 400,
        error: true,
        success: false,
        response,
      });
    }
  } catch (error) {
    res.send({
      status: 400,
      error: true,
      success: false,
      response: [],
      message: error.message,
    });
  }
};

const deletePostController = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const response = await userCreatePost.findByIdAndDelete(id);
    if (response) {
      res.send({
        status: 200,
        error: false,
        message: "Delete Post SuccessFully",
        success: true,
        response,
      });
    } else {
      res.send({
        status: 400,
        error: true,
        success: false,
        response,
      });
    }
  } catch (error) {
    res.send({
      status: 400,
      error: true,
      success: false,
      response: [],
      message: error.message,
    });
  }
};

const likeController = async (req, res) => {
  try {
    const { id } = req.params;
    const like = {
      likedBy: req.user,
    };
    const response = await userCreatePost.findByIdAndUpdate(
      id,
      {
        $push: { likes: like },
      },
      {
        new: true,
      }
    );
    if (response) {
      res.send({
        status: 200,
        error: false,
        message: "Like Added SuccessFully",
        success: true,
        response,
      });
    } else {
      res.send({
        status: 400,
        error: true,
        success: false,
        response,
      });
    }
  } catch (error) {
    res.send({
      status: 400,
      error: true,
      success: false,
      response: [],
      message: error.message,
    });
  }
};

const unlikeController = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body.likes.filter((p) => p.likedBy._id === req.user);
    const unlike = {
      _id: data[0]._id,
      likedBy: req.user,
    };
    const response = await userCreatePost.findByIdAndUpdate(
      id,
      {
        $pull: { likes: unlike },
      },
      {
        new: true,
      }
    );
    if (response) {
      res.send({
        status: 200,
        error: false,
        message: "Like Remove SuccessFully",
        success: true,
        response,
      });
    } else {
      res.send({
        status: 400,
        error: true,
        success: false,
        response,
      });
    }
  } catch (error) {
    res.send({
      status: 400,
      error: true,
      success: false,
      response: [],
      message: error.message,
    });
  }
};

const commentAddController = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = {
      comment: req.body.comment,
      commentBy: req.user,
    };
    console.log("commentmmmmmm");
    const response = await userCreatePost.findByIdAndUpdate(
      id,
      {
        $push: { comments: comment },
      },
      {
        new: true,
      }
    );
    console.log(response);
    if (response) {
      res.send({
        status: 200,
        error: false,
        message: "Comment Added SuccessFully",
        success: true,
        response,
      });
    } else {
      res.send({
        status: 400,
        error: true,
        success: false,
        response,
      });
    }
  } catch (error) {
    res.send({
      status: 400,
      error: true,
      success: false,
      response: [],
      message: error.message,
    });
  }
};

const commentRemoverController = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = {
      _id: req.body._id,
      commentBy: req.user,
    };
    const response = await userCreatePost.findByIdAndUpdate(
      id,
      {
        $pull: { comments: comment },
      },
      {
        new: true,
      }
    );
    if (response) {
      res.send({
        status: 200,
        error: false,
        message: "Comment Remove SuccessFully",
        success: true,
        response,
      });
    } else {
      res.send({
        status: 400,
        error: true,
        success: false,
        response,
      });
    }
  } catch (error) {
    res.send({
      status: 400,
      error: true,
      success: false,
      response: [],
      message: error.message,
    });
  }
};

const getPerticularUserPostController = async (req, res) => {
  try {
    const { id } = req.headers;
    const response = await userCreatePost.find({ postedBy: id }).populate("postedBy")
    if (response.length) {
      res.send({ 
        status: 200,
        count: response.length,
        error: false,
        message: "Get Perticular Post In User SuccessFully",
        success: true,
        response,
      });
    } else {
      res.send({
        status: 400,
        error: true,
        success: false,
        response,
      });
    }
  } catch (error) {
    res.send({
      status: 400,
      error: true,
      success: false,
      response: [],
      message: error.message,
    });
  }
};

module.exports = {
  createPostController,
  getAllPostController,
  deletePostController,
  likeController,
  unlikeController,
  commentAddController,
  commentRemoverController,
  getPerticularUserPostController,
  // maheshlllllll,
};
