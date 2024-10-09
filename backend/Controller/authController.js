const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JwtSecret = "maheshmerndeveloperinindore";
const { hashedPassword, comparePassword } = require("../Helper/authHelper");
const { userModel, companyModel } = require("../Models/authModel");
const { userUploadProfile } = require("../MiddleWare/imageUpload");

// ________|AUTH USER|_________
const userRegisterController = async (req, res) => {
  userUploadProfile(req, res, async (error) => {
    if (error) {
      return res.send({ message: error });
    }
    try {
      const { name, email, password, mobile } = req.body;
      switch (true) {
        case !name:
          return res.send({ message: "Name Is Required" });
        case !email:
          return res.send({ message: "Email Is Required" });
        case !password:
          return res.send({ message: "Password Is Required" });
        case !mobile:
          return res.send({ message: "Mobile Is Required" });
      }

      const existUser = await userModel.findOne({ email });
      const existCompanyUser = await companyModel.findOne({ email });
      if (existUser || existCompanyUser) {
        return res.send({
          status: 200,
          success: true,
          error: false,
          message: "Email Is Already Registertion",
        });
      }

      // ________|HASHED PASSWORD|_________
      let hashedPass = await hashedPassword(password);
      // ________|HASHED PASSWORD|_________

      const response = await userModel.create({
        ...req.body,
        password: hashedPass,
      });
      if (response) {
        res.send({
          status: 200,
          success: true,
          error: false,
          message: "User Registertion Is SuccessFull",
          data: response,
        });
      } else {
        res.send({
          status: 400,
          success: false,
          error: true,
          data: [],
        });
      }
    } catch (error) {
      res.send({
        status: 400,
        success: false,
        error: true,
        message: error.message,
        data: [],
      });
    }
  });
};

const userUpdateController = async (req, res) => {
  userUploadProfile(req, res, async (error) => {
    if (error) {
      return res.send({ message: error });
    }
    try {
      const { password } = req.body;
      const update = await userModel.findById(req.user);
      // ________|HASHED PASSWORD|_________
      let hashedPass = password
        ? await hashedPassword(password)
        : update.password;
      // ________|HASHED PASSWORD|_________
      const response = await userModel.findByIdAndUpdate(req.user, {
        ...req.body,
        background: req.files?.background
          ? req.files?.background[0].filename
          : update.background,
        profile: req.files?.profile
          ? req.files?.profile[0].filename
          : update.profile,
        password: hashedPass || update.password,
      });
      if (response) {
        return res.send({
          status: 200,
          success: true,
          error: false,
          message: "Company Profile Update SuccessFull",
          data: response,
        });
      } else {
        return res.send({
          status: 400,
          success: false,
          error: true,
          data: [],
        });
      }
    } catch (error) {
      return res.send({
        status: 400,
        success: false,
        error: true,
        message: error.message,
        data: [],
      });
    }
  });
};

const userAndCompanyLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.send({ message: "Email Is Required" });
    }
    if (!password) {
      return res.send({ message: "Password Is Required" });
    }
    const user = await userModel.findOne({ email: email });
    const company = await companyModel.findOne({ email: email });
    if (user || company) {
    } else {
      return res.send({
        status: 400,
        success: true,
        error: false,
        message: "Email Is Not Exist",
        data: [],
      });
    }

    if (user) {
      // ________|COMPARE PASSWORD|_________
      let compPass = await comparePassword(password, user.password);
      // ________|COMPARE PASSWORD|_________

      if (!compPass) {
        return res.send({
          status: 400,
          success: true,
          error: false,
          message: "Password Does Not Match",
          data: [],
        });
      }
      const token = jwt.sign({ _id: user.id }, JwtSecret, {
        expiresIn: "5d",
      });
      if (token) {
        return res.send({
          status: 200,
          success: true,
          error: false,
          message: "User Login SuccessFully",
          data: {
            name: user.name,
            email: user.email,
          },
          token,
        });
      }
    }

    if (company) {
      // ________|COMPARE PASSWORD|_________
      let compPass = await comparePassword(password, company.password);
      // ________|COMPARE PASSWORD|_________

      if (!compPass) {
        return res.send({
          status: 400,
          success: true,
          error: false,
          message: "Password Does Not Match",
          data: [],
        });
      }
      const token = jwt.sign({ _id: company.id }, JwtSecret, {
        expiresIn: "5d",
      });
      if (token) {
        return res.send({
          status: 200,
          success: true,
          error: false,
          message: "Company Login SuccessFully",
          data: {
            name: company.name,
            email: company.email,
          },
          token,
        });
      }
    }
  } catch (error) {
    return res.send({
      status: 400,
      success: false,
      error: true,
      message: error.message,
      data: [],
    });
  }
};

const getUserController = async (req, res) => {
  try {
    const response = await userModel.find({});
    if (response) {
      res.send({
        status: 200,
        success: true,
        error: false,
        message: "Get All User Is SuccessFull",
        data: response,
      });
    } else {
      res.send({
        status: 400,
        success: false,
        error: true,
        data: [],
      });
    }
  } catch (error) {
    res.send({
      status: 400,
      success: false,
      error: true,
      message: error.message,
      data: [],
    });
  }
};
// ________|AUTH USER|_________

const searchController = async (req, res) => {
  try {
    const { keyword } = req.params;
    const company = await companyModel.find({
      $or: [{ name: { $regex: keyword, $options: "i" } }],
    });
    let searchData = {
      allSearchData: [...company],
    };
    if (searchData) {
      res.send({
        status: 200,
        success: true,
        error: false,
        message: "Get Search User Is SuccessFull",
        data: searchData,
      });
    } else {
      res.send({
        status: 400,
        success: false,
        error: true,
        data: [],
      });
    }
  } catch (error) {
    res.send({
      status: 400,
      success: false,
      error: true,
      message: error.message,
      data: [],
    });
  }
};

const getSingleDataController = async (req, res) => {
  try {
    const responseUser = await userModel.findOne({ _id: req.user });
    if (responseUser) {
      return res.send({
        status: 200,
        success: true,
        error: false,
        message: "Get Single User Is SuccessFull",
        data: responseUser,
      });
    }
    const responseCompany = await companyModel.findOne({ _id: req.user });
    if (responseCompany) {
      return res.send({
        status: 200,
        success: true,
        error: false,
        message: "Get Single Company Is SuccessFull",
        data: responseCompany,
      });
    } else {
      res.send({
        status: 400,
        success: false,
        error: true,
        data: [],
      });
    }
  } catch (error) {
    res.send({
      status: 400,
      success: false,
      error: true,
      message: error.message,
      data: [],
    });
  }
};

const getNameDataController = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await userModel.findOne({ name: id });
    if (response) {
      return res.send({
        status: 200,
        success: true,
        error: false,
        message: "Get Single Company Is SuccessFull",
        data: response,
      });
    } else {
      res.send({
        status: 400,
        success: false,
        error: true,
        data: [],
      });
    }
  } catch (error) {
    res.send({
      status: 400,
      success: false,
      error: true,
      message: error.message,
      data: [],
    });
  }
};

const mobileUpdateController = async (req, res) => {
  try {
    const { mobile } = req.body;
    if (!mobile) {
     return res.send({message:"mobile Number Is Required"})
    }
    const user = await userModel.findByIdAndUpdate(req.user, {
      ...req.body,
      mobile: mobile,
    });
    const company = await companyModel.findByIdAndUpdate(req.user, {
      ...req.body,
      mobile: mobile,
    });
    if (user || company) {
      return res.send({
        status: 200,
        success: true,
        error: false,
        message: "Update Mobile Number SuccessFull",
        data: user || company,
      });
    } else {
      return res.send({
        status: 400,
        success: false,
        error: true,
        data: [],
      });
    }
  } catch (error) {
    return res.send({
      status: 400,
      success: false,
      error: true,
      message: error.message,
      data: [],
    });
  }
};

const passwordUpdateController = async (req, res) => {
  try {
    const { password, currentpassword } = req.body;
    if (!password) {
      return res.send({ message: "Password Is Required" });
    }
    if (!currentpassword) {
      return res.send({ message: "Current Password Is Required" });
    }
    const exestuser = await userModel.findOne({ _id: req.user });
    const exestcompany = await companyModel.findOne({ _id: req.user });
    if (exestuser || exestcompany) {
      // ________|COMPARE PASSWORD|_________
      let pass =
        (exestuser && exestuser.password) ||
        (exestcompany && exestcompany.password);
      let comparePass = await comparePassword(currentpassword, pass);
      // ________|COMPARE PASSWORD|_________
      if (!comparePass) {
        return res.send({ message: "Current Password Is Wrong" });
      }
    }
    // ________|HASHED PASSWORD|_________
    let hashedPass = await hashedPassword(password);
    // ________|HASHED PASSWORD|_________

    const user = await userModel.findByIdAndUpdate(req.user, {
      ...req.body,
      password: hashedPass,
    });
    const company = await companyModel.findByIdAndUpdate(req.user, {
      ...req.body,
      password: hashedPass,
    });
    if (user || company) {
      return res.send({
        status: 200,
        success: true,
        error: false,
        message: "Password Update SuccessFull",
        data: user || company,
      });
    } else {
      return res.send({
        status: 400,
        success: false,
        error: true,
        data: [],
      });
    }
  } catch (error) {
    return res.send({
      status: 400,
      success: false,
      error: true,
      message: error.message,
      data: [],
    });
  }
};

// ________|AUTH COMPANY|_________
const companyRegisterController = async (req, res) => {
  try {
    const { companyType, industry, address, name, email, password, mobile } =
      req.body;
    switch (true) {
      case !companyType:
        return res.send({ message: "Company Name Is Required" });
      case !industry:
        return res.send({ message: "Industry Is Required" });
      case !address:
        return res.send({ message: "Address Is Required" });
      case !name:
        return res.send({ message: "Name Is Required" });
      case !email:
        return res.send({ message: "Email Is Required" });
      case !password:
        return res.send({ message: "Password Is Required" });
      case !mobile:
        return res.send({ message: "Mobile Is Required" });
    }

    const existCompanyUser = await companyModel.findOne({ email });
    const existUser = await userModel.findOne({ email });
    if (existCompanyUser || existUser) {
      return res.send({
        status: 200,
        success: true,
        error: false,
        message: "Email Is Already Registertion",
      });
    }

    // ________|HASHED PASSWORD|_________
    let hashedPass = await hashedPassword(password);
    // ________|HASHED PASSWORD|_________

    const response = await companyModel.create({
      ...req.body,
      password: hashedPass,
    });
    if (response) {
      res.send({
        status: 200,
        success: true,
        error: false,
        message: "Company Registertion Is SuccessFull",
        data: response,
      });
    } else {
      res.send({
        status: 400,
        success: false,
        error: true,
        data: [],
      });
    }
  } catch (error) {
    res.send({
      status: 400,
      success: false,
      error: true,
      message: error.message,
      data: [],
    });
  }
};

const companyUpdateController = async (req, res) => {
  userUploadProfile(req, res, async (error) => {
    if (error) {
      return res.send({ message: error });
    }
    try {
      const { password } = req.body;
      const update = await companyModel.findById(req.user);
      // ________|HASHED PASSWORD|_________
      let hashedPass = password
        ? await hashedPassword(password)
        : update.password;
      // ________|HASHED PASSWORD|_________
      const response = await companyModel.findByIdAndUpdate(req.user, {
        ...req.body,
        background: req.files?.background
          ? req.files?.background[0].filename
          : update.background,
        profile: req.files?.profile
          ? req.files?.profile[0].filename
          : update.profile,
        password: hashedPass || update.password,
      });
      if (response) {
        return res.send({
          status: 200,
          success: true,
          error: false,
          message: "Company Profile Update SuccessFull",
          data: response,
        });
      } else {
        return res.send({
          status: 400,
          success: false,
          error: true,
          data: [],
        });
      }
    } catch (error) {
      return res.send({
        status: 400,
        success: false,
        error: true,
        message: error.message,
        data: [],
      });
    }
  });
};
// ________|AUTH COMPANY|_________

module.exports = {
  userRegisterController,
  userUpdateController,
  userAndCompanyLoginController,
  companyRegisterController,
  companyUpdateController,
  getUserController,
  getSingleDataController,
  getNameDataController,
  searchController,
  mobileUpdateController,
  passwordUpdateController,
};
