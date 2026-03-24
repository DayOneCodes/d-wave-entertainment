import { AuthAPI } from "../api/authApi.js";

class AuthService {
  async login (user) {
    this.#validateEmail(user.email);
    return AuthAPI.login(user);
  }

  async logout () {
    return AuthAPI.logout();
  }

  async signup (user) {
    this.#validateEmail(user.email);
    return AuthAPI.signup(user);
  }

  async me () {
    return AuthAPI.me();
  }

  async verifyEmail (token) {
    return AuthAPI.verifyEmail({token});
  }

  #validateEmail (email) {
    
  }
}

export const authService = Object.freeze(new AuthService());