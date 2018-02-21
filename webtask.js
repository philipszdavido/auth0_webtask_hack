'use latest';
const axios = require('axios');
const slackURL = 'https://slack.com/api/chat.postMessage';

const token = "xoxb-317584411232-Vr5PKZqx3USy33bOQb7sKrUG"
const config = {
    headers: {
        'Authorization': 'Bearer ' + token
    }
}

const callAPI = (data) => {
    axios.post(slackURL, data, config).then((res) => {
        console.log(res.data)
        cb(null)
    }).catch((err) => {
        console.log(err)
    });
};

module.exports = (ctx, cb) => {
    let obj = {
        as_user: false,
        username: 'tweets_bot',
        icon_url: 'https://secure.gravatar.com/avatar/dbafebf712fa816299231d2763fd292e?s=200',
        channel: "general",
        text: "You tweeted this ticket:",
        attachments: [{
            title: ctx.data.tweet,
            fields: [
                { title: 'Tweeted BY: ', value: ctx.data.username },
                { title: 'Created: ', value: ctx.data.created }
            ]
        }]
    }

    callAPI(obj)
}