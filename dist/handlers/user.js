"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.showUserbyId = exports.showUser = void 0;
// Handler to return a generic message
const showUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    response.send({ msg: "checking data" });
});
exports.showUser = showUser;
// Handler to return a user by ID
const showUserbyId = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    response.send({ userId: id });
});
exports.showUserbyId = showUserbyId;
const createUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, mail, phone } = request.body;
    request.query.loginAfterCreate;
    request.params.id;
    response.status(201).send({
        id: "check", userName: userName, mail: mail, phone: phone
    });
});
exports.createUser = createUser;
