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
const mariaDBCourseRepository_1 = __importDefault(require("../../../driven/db/mariaDBCourseRepository"));
const courseService_1 = __importDefault(require("../../../../core/application/services/courseService"));
const repository = new mariaDBCourseRepository_1.default();
const service = new courseService_1.default(repository);
module.exports = {
    get: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        yield service.getAllDidacticMaterialsByCourseId(req.params.courseId)
            .then(response => res.send(response))
            .catch(error => res.send({ error: error.message }));
    }),
    post: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let didacticMaterial = Object.assign(Object.assign({}, req.body), { courseId: req.params.courseId });
        yield service.addDidacticMaterial(didacticMaterial)
            .then(didacticMaterialId => res.send({ id: didacticMaterialId }))
            .catch(error => res.send({ error: error.message }));
    }),
    put: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let didacticMaterial = Object.assign(Object.assign({}, req.body), { courseId: req.params.courseId, id: req.params.didacticMaterialId });
        yield service.updateDidacticMaterial(didacticMaterial)
            .then(response => res.send(response))
            .catch(error => res.send({ error: error.message }));
    }),
    delete: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        yield service.deleteDidacticMaterial(req.params.didacticMaterialId)
            .then(response => res.send(response))
            .catch(error => res.send({ error: error.message }));
    }),
};
