import { AuthAPI } from "../api/authApi";

class AuthService {
  async register(user) {
    return AuthAPI.register(user);
  }

  async login(user) {
    return AuthAPI.login(user);
  }

  async getCurrentUser () {
    try {
      await AuthAPI.refresh()
      const user = await AuthAPI.user();
      return user;
    }
    catch {
      return null;
    }
  }

  async logout(user) {
    return AuthAPI.logout(user);
  }
}

export const authService = Object.freeze(new AuthService());