const rp = require("request-promise");

class HealthService {
  static getStatus() {
    return new Promise((resolve, reject) => {
      resolve({ status: "UP" });
    });
  }
}

module.exports = HealthService;
