"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: 'api is /api/games' });
    }
}
exports.indexController = new IndexController();
