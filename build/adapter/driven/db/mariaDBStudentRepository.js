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
class MariaDBStudentRepository {
    insert({ name, age, email, phone }) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield (0, connection_1.default)();
            return yield conn.query(`INSERT INTO students
            (name, age, email, phone)
            VALUES ('${name}', ${age}, '${email}', '${phone}')`, (err, rows, meta) => {
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
            return yield conn.query(`SELECT * FROM students WHERE id = ${parseInt(id)}`, (err, rows, meta) => {
                if (err)
                    return err;
                if (rows.length == 0) {
                    throw new Error(`Student with id ${id} not found`);
                }
                return rows;
            })
                .then((response) => response[0]);
        });
    }
    update({ id, name, age, email, phone }) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield (0, connection_1.default)();
            return yield conn.query(`UPDATE students 
            SET name = '${name}', age = ${age}, email = '${email}', phone = '${phone}' 
            WHERE id = ${parseInt(String(id))}`, (err, rows, meta) => {
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
            return yield conn.query(`DELETE FROM students WHERE id = ${parseInt(id)}`, (err, rows, meta) => {
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
            return yield conn.query('SELECT * FROM students', (err, rows, meta) => {
                if (err)
                    return err;
                return rows;
            });
        });
    }
    getAllAcademicHistoryByStudentId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield (0, connection_1.default)();
            return yield conn.query(`SELECT * FROM academic_histories WHERE studentId = ${parseInt(id)}`, (err, rows, meta) => {
                if (err)
                    return err;
                if (rows.length == 0) {
                    throw new Error(`Academic histories with id ${id} not found`);
                }
                return rows;
            });
        });
    }
    addAcademicHistory({ studentId, year, subject, grade, situation }) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield (0, connection_1.default)();
            return yield conn.query(`INSERT INTO academic_histories (studentId, year, subject, grade, situation) 
            VALUES ('${studentId}', '${year}', '${subject}', '${grade}', '${situation}')`, (err, rows, meta) => {
                if (err)
                    return err;
                return rows;
            })
                .then((id) => id.insertId);
        });
    }
    getAcademicHistoryById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield (0, connection_1.default)();
            return yield conn.query(`SELECT * FROM academic_histories WHERE id = ${parseInt(id)}`, (err, rows, meta) => {
                if (err)
                    return err;
                return rows;
            })
                .then((response) => response[0]);
        });
    }
    updateAcademicHistory({ id, year, subject, grade, situation }) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield (0, connection_1.default)();
            return yield conn.query(`UPDATE academic_histories
            SET year = ${year}, subject = '${subject}', grade = '${grade}', situation = '${situation}'
            WHERE id = ${parseInt(String(id))}`, (err, rows, meta) => {
                if (err)
                    return err;
                return rows;
            })
                .then((response) => response.affectedRows > 0);
        });
    }
    deleteAcademicHistory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield (0, connection_1.default)();
            return yield conn.query(`DELETE FROM academic_histories WHERE id = ${parseInt(id)}`, (err, rows, meta) => {
                if (err)
                    return err;
                return rows;
            })
                .then((response) => response.affectedRows > 0);
        });
    }
}
exports.default = MariaDBStudentRepository;
