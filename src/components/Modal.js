import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FormProvider, FCheckBox, FTextField } from "./form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, IconButton, InputAdornment, Stack } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import * as yup from "yup";
import { useLogin } from "./LoginContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const schema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  })
  .required();

export default function BasicModal() {
  const {
    isOpen,
    handleClose1,
    showPassword,
    togglePasswordVisibility,
    handleLogin,
  } = useLogin(); // Lấy handleLogin từ LoginContext

  const defaultValues = {
    email: "locse140456@gmail.com",
    password: "123456",
    remember: true,
  };

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = (data) => {
    if (
      data.email === defaultValues.email &&
      data.password === defaultValues.password
    ) {
      handleLogin(); // Gọi handleLogin khi thông tin đăng nhập đúng
      handleClose1(); // Đóng modal sau khi đăng nhập thành công
    } else {
      setError("afterSubmit", {
        type: "manual",
        message: "Incorrect email or password",
      });
    }
  };

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} display="flex" flexDirection="column">
          <Box
            flex={1}
            display="flex"
            flexDirection="row"
            justifyContent="center"
            gap={2}
          >
            <div>Login</div>
          </Box>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Box display="flex" flexDirection="column" gap={3}>
              <Stack spacing={3}>
                {errors.afterSubmit && (
                  <Alert severity="error">{errors.afterSubmit.message}</Alert>
                )}
                <FTextField name="email" label="Email address" />
                <FTextField
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={togglePasswordVisibility}
                          onMouseDown={(e) => e.preventDefault()}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>
              <FCheckBox name="remember" label="Remember me" />
              <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
              >
                Login
              </LoadingButton>
            </Box>
          </FormProvider>
        </Box>
      </Modal>
    </div>
  );
}
