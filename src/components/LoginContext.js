import React, { createContext, useContext, useState } from "react";

// Tạo LoginContext
const LoginContext = createContext();

export const useLogin = () => {
  return useContext(LoginContext);
};

export const LoginProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(false); // Thêm trạng thái isLogin

  const handleOpen = () => setIsOpen(true);
  const handleClose1 = () => setIsOpen(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  // Hàm handleLogin để thay đổi trạng thái đăng nhập
  const handleLogin = () => setIsLogin(true);
  const handleLogout = () => setIsLogin(false);

  return (
    <LoginContext.Provider
      value={{
        isOpen,
        showPassword,
        isLogin,
        handleOpen,
        handleClose1,
        togglePasswordVisibility,
        handleLogin, // Truyền hàm handleLogin vào context
        handleLogout, // Thêm hàm handleLogout vào context
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
