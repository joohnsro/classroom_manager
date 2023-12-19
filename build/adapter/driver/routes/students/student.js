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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mariaDBStudentRepository_1 = __importDefault(require("../../../driven/db/mariaDBStudentRepository"));
const studentService_1 = __importDefault(require("../../../../core/application/services/studentService"));
const repository = new mariaDBStudentRepository_1.default();
const service = new studentService_1.default(repository);
module.exports = {
    get: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        yield service.getById(req.params.studentId)
            .then(response => res.send(response))
            .catch(error => res.send({ error: error.message }));
    }),
    post: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        yield service.insert(Object.assign({}, req.body))
            .then(studentId => res.send({ id: studentId }))
            .catch(error => res.send({ error: error.message }));
    }),
    put: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let student = Object.assign(Object.assign({}, req.body), { id: req.params.studentId });
        yield service.update(student)
            .then(response => res.send(response))
            .catch(error => res.send({ error: error.message }));
    }),
    delete: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        yield service.delete(req.params.studentId)
            .then(response => res.send(response))
            .catch(error => res.send({ error: error.message }));
    }),
};