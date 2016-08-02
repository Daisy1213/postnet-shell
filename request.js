/**
 * Created by zhangsha on 16-8-2.
 */

const request = require('sync-request');

function sendRequest(router, cmd) {
    let res = request('POST', `http://127.0.0.1:3000/${router}`, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `code=${cmd}`
    });
    console.log(res.getBody().toString());
}

module.exports = sendRequest;