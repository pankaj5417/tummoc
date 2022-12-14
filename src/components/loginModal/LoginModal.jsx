import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getLoginData,
  getUserDetails,
  loginError,
  loginLoading,
  loginSuccess,
  signInWithGoogle,
} from "../../redux/loginAction";

const style = {
  position: "absolute",
  top: "53%",
  left: "47%",
  transform: "translate(-50%, -50%)",
  transitionDelay: 2000,
  width: 380,
  height: 350,
  bgcolor: "#212121",
  borderRadius: "10px",
  border: "none",
  outline: "none",
  p: 5,
  boxShadow: 24,
  color: "white",
};
const textFieldStyle = {
  bgcolor: "#424242",
  borderRadius: "8px",
};

export default function LoginModal() {
  const [open, setOpen] = useState(true);
  //   const handleOpen = () => setTimeout(() => setOpen(true),2000)
  // const handleClose = () => setOpen(false);
  const initialState = {};
  const [formData, setFormData] = useState(initialState);

  const { loading, userDetail, error } = useSelector(
    (state) => ({
      loading: state.loginState.loading,
      userDetail: state.loginState.userDetail,
      error: state.loginState.error,
    }),
    function (prev, curr) {
      if (prev.loading === curr.loading && prev.error === curr.error) {
        return true;
      }
      return false;
    }
  );
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  console.log(formData);
  useEffect(() => {
    // setTimeout(() => {
    //   setOpen(true);
    // }, 2000);
  }, []);

  const loginUser = () => {
    dispatch(getUserDetails(formData));
  };

  const handleGoogleSignIn = () => {
    dispatch(signInWithGoogle());
  };
  return (
    loading?<h1 style={{color:"white",marginTop:"140px",textAlign:"center"}}>Loading...</h1>:
    <div>
      {/* <Modal
        open={true}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      > */}
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            textAlign="center"
          >
            Please fill the Login details below
          </Typography>
          <form onSubmit={(e) => e.preventDefault()}>
            <Box
              style={{
                height: "130px",
                marginTop: "50px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <TextField
                sx={textFieldStyle}
                name="email"
                required
                placeholder="Email id"
                onChange={handleChange}
              />
              <TextField
                sx={textFieldStyle}
                required
                name="password"
                placeholder="Enter your password *"
                onChange={handleChange}
              />
            </Box>
            <Box
              style={{
                display: "flex",
                marginTop: "50px",
                justifyContent: "space-between",
              }}
            >
              {/* <Button
                style={{
                  backgroundColor: "black",
                  padding: "8px 25px",
                  fontWeight: "400",
                }}
                variant="contained"
                onClick={handleGoogleSignIn}
              >
                Sign in with Google
              </Button>

              <a  onClick={handleGoogleSignIn} href="/auth/google" class="button">Sign in with Google</a>   */}
              <Button
                type="submit"
                onClick={loginUser}
                style={{
                  backgroundColor: "red",
                  width: "90%",
                  padding: "8px 25px",
                  fontWeight: "400",
                }}
                variant="contained"
              >
                Login
              </Button>
            </Box>
          </form>
        </Box>
      {/* </Modal> */}
    </div>
  );
}
