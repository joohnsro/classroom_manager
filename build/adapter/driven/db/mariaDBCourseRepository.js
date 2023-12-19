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
const connection_1 = __importDefault(require("./connection"));
class MariaDBCourseRepository {
    insert({ name }) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield (0, connection_1.default)();
            return yield conn.query(`INSERT INTO courses (name) VALUES ('${name}')`, (err, rows, meta) => {
                if (err)
                    return err;
                return rows;
            })
                .then((id) => id.insertId);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield (0, connection_1.default)();
            return yield conn.query(`SELECT * FROM courses WHERE id = ${parseInt(id)}`, (err, rows, meta) => {
                if (err)
                    return err;
                if (rows.length == 0) {
                    throw new Error(`Course with id ${id} not found`);
                }
                return rows;
            })
                .then((response) => response[0]);
        });
    }
    update({ id, name }) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield (0, connection_1.default)();
            return yield conn.query(`UPDATE courses SET name = '${name}' WHERE id = ${parseInt(String(id))}`, (err, rows, meta) => {
                if (err)
                    return err;
                return rows;
            })
                .then((response) => response.affectedRows > 0);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield (0, connection_1.default)();
            return yield conn.query(`DELETE FROM courses WHERE id = ${parseInt(id)}`, (err, rows, meta) => {
                if (err)
                    return err;
                return rows;
            })
                .then((response) => response.affectedRows > 0);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield (0, connection_1.default)();
            return yield conn.query('SELECT * FROM courses', (err, rows, meta) => {
                if (err)
                    return err;
                return rows;
            });
        });
    }
    getAllDidacticMaterialsByCourseId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield (0, connection_1.default)();
            return yield conn.query(`SELECT * FROM didactic_materials WHERE courseId = ${parseInt(id)}`, (err, rows, meta) => {
                if (err)
                    return err;
                if (rows.length == 0) {
                    throw new Error(`Didactic material with id ${id} not found`);
                }
                return rows;
            });
        });
    }
    addDidacticMaterial({ courseId, type, content }) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield (0, connection_1.default)();
            return yield conn.query(`INSERT INTO didactic_materials (courseId, type, content) 
            VALUES ('${courseId}', '${type}', '${content}')`, (err, rows, meta) => {
                if (err)
                    return err;
                return rows;
            })
                .then((id) => id.insertId);
        });
    }
    getDidacticMaterialById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield (0, connection_1.default)();
            return yield conn.query(`SELECT * FROM didactic_materials WHERE id = ${parseInt(id)}`, (err, rows, meta) => {
                if (err)
                    return err;
                return rows;
            })
                .then((response) => response[0]);
        });
    }
    updateDidacticMaterial({ id, type, content }) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield (0, connection_1.default)();
            return yield conn.query(`UPDATE didactic_materials SET type = '${type}', content = '${content}'
            WHERE id = ${parseInt(String(id))}`, (err, rows, meta) => {
                if (err)
                    return err;
                return rows;
            })
                .then((response) => response.affectedRows > 0);
        });
    }
    deleteDidacticMaterial(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield (0, connection_1.default)();
            return yield conn.query(`DELETE FROM didactic_materials WHERE id = ${parseInt(id)}`, (err, rows, meta) => {
                if (err)
                    return err;
                return rows;
            })
                .then((response) => response.affectedRows > 0);
        });
    }
    getAllClassSchedulesByCourseId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield (0, connection_1.default)();
            return yield conn.query(`SELECT * FROM class_schedules WHERE courseId = ${parseInt(id)}`, (err, rows, meta) => {
                if (err)
                    return err;
                if (rows.length == 0) {
                    throw new Error(`Class schedule with id ${id} not found`);
                }
                return rows;
            });
        });
    }
    addClassSchedule({ courseId, from, to }) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield (0, connection_1.default)();
            return yield conn.query(`INSERT INTO class_schedules (courseId, fromDate, toDate) 
            VALUES ('${courseId}', '${from}', '${to}')`, (err, rows, meta) => {
                if (err)
                    return err;
                return rows;
            })
                .then((id) => id.insertId);
        });
    }
    getClassScheduleById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield (0, connection_1.default)();
            return yield conn.query(`SELECT * FROM class_schedules WHERE id = ${parseInt(id)}`, (err, rows, meta) => {
                if (err)
                    return err;
                return rows;
            })
                .then((response) => response[0]);
        });
    }
    updateClassSchedule({ id, from, to }) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield (0, connection_1.default)();
            return yield conn.query(`UPDATE class_schedules SET fromDate = ${from}, toDate = '${to}'
            WHERE id = ${parseInt(String(id))}`, (err, rows, meta) => {
                if (err)
                    return err;
                return rows;
            })
                .then((response) => response.affectedRows > 0);
        });
    }
    deleteClassSchedule(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield (0, connection_1.default)();
            return yield conn.query(`DELETE FROM class_schedules WHERE id = ${parseInt(id)}`, (err, rows, meta) => {
                if (err)
                    return err;
                return rows;
            })
                .then((response) => response.affectedRows > 0);
        });
    }
    getAllProfessorsByCourseId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield (0, connection_1.default)();
            return yield conn.query(`SELECT * FROM professors WHERE courseId = ${parseInt(id)}`, (err, rows, meta) => {
                if (err)
                    return err;
                if (rows.length == 0) {
                    throw new Error(`Class schedule with id ${id} not found`);
                }
                return rows;
            });
        });
    }
    addProfessor({ courseId, name }) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield (0, connection_1.default)();
            return yield conn.query(`INSERT INTO professors (courseId, name) 
            VALUES ('${courseId}', '${name}')`, (err, rows, meta) => {
                if (err)
                    return err;
                return rows;
            })
                .then((id) => id.insertId);
        });
    }
    getProfessorById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield (0, connection_1.default)();
            return yield conn.query(`SELECT * FROM professors WHERE id = ${parseInt(id)}`, (err, rows, meta) => {
                if (err)
                    return err;
                return rows;
            })
                .then((response) => response[0]);
        });
    }
    updateProfessor({ id, name }) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield (0, connection_1.default)();
            return yield conn.query(`UPDATE professors SET name = '${name}' WHERE id = ${parseInt(String(id))}`, (err, rows, meta) => {
                if (err)
                    return err;
                return rows;
            })
                .then((response) => response.affectedRows > 0);
        });
    }
    deleteProfessor(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield (0, connection_1.default)();
            return yield conn.query(`DELETE FROM professors WHERE id = ${parseInt(id)}`, (err, rows, meta) => {
                if (err)
                    return err;
                return rows;
            })
                .then((response) => response.affectedRows > 0);
        });
    }
}
exports.default = MariaDBCourseRepository;
