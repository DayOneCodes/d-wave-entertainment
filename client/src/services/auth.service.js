import { AuthAPI } from "../api/authApi.js";

class AuthService {
  async login (user) {
    return AuthAPI.login(user);
  }

  async logout () {
    return AuthAPI.logout();
  }

  async signup (user) {
    return AuthAPI.signup(user);
  }

  async me () {
    return AuthAPI.me();
  }

  async verifyEmail (token) {
    return AuthAPI.verifyEmail({token});
  }
}

export const authService = Object.freeze(new AuthService());