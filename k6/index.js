import { group, sleep } from "k6";
import GetStudents from "./scenarios/getStudents.js";

export default () => {
    group('Endpoint Get Students', () => {
        GetStudents();
    });

    sleep(1);
}