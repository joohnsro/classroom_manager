import http from "k6/http";
import { sleep, check, fail } from "k6";
import { Trend, Rate, Counter } from "k6/metrics";

export let getStudentsDuration = new Trend('get_students_duration');
export let getStudentsFailRate = new Rate('get_students_fail_rate');
export let getStudentsSuccessRate = new Rate('get_students_success_rate');
export let getStudentsReqs = new Rate('get_students_reqs');

export default () => {
    let res = http.get('http://localhost:3000/students');

    getStudentsDuration.add(res.timings.duration);
    getStudentsReqs.add(1);
    getStudentsFailRate.add(res.status == 0 || res.status > 399);
    getStudentsSuccessRate.add(res.status < 399);

    let durationMsg = 'Max duration ${4000/1000}s';
    if ( !check(res, {
        'max-duration': r => r.timings.duration < 4000,
    }) ) {
        fail(durationMsg);
    }

    sleep(1);
}