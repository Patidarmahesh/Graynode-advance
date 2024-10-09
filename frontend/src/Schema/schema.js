import * as yup from "yup";

// ________|USER SCHEMA|_________
export const UserSchema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    mobile: yup.number().min(10).required(),
    password: yup
      .string()
      .required("Plz Enter Youre Password")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  })
  .required();
// ________|USER SCHEMA|_________

// ________|COMPANY SCHEMA|_________
export const CompanySchema = yup
  .object({
    companyType: yup.string().required(),
    industry: yup.string().required(),
    name: yup.string().required(),
    email: yup.string().email().required(),
    mobile: yup.number().required(),
    address: yup.string().required(),
    password: yup
      .string()
      .required("Plz Enter Youre Password")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  })
  .required();
// ________|COMPANY SCHEMA|_________

// ________|USER ANDD COMPANY LOGIN SCHEMA|_________
export const LoginWithUserAndCompany = yup
  .object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .required("Plz Enter Youre Password")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  })
  .required();
// ________|USER ANDD COMPANY LOGIN SCHEMA|_________

export const validationSchema = yup.object().shape({
  currentpassword: yup
    .string()
    .required("Current Password is required")
    .min(10, "Password must be at least 10 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/,
      "Must Contain 10 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  password: yup
    .string()
    .required("New Password is required")
    .min(10, "Password must be at least 10 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/,
      "Must Contain 10 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),  
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});
