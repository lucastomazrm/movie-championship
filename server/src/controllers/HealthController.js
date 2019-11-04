const service = require("../services/HealthService");

class HealthController {
  async health(req, res) {
    service.getStatus().then(status => {
      if (!status) {
        return res.status(404);
      } else {
        return res.status(200).json(status);
      }
    });
  }
}

module.exports = new HealthController();
