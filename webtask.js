'use latest';
const axios = require('axios');
const slackURL = 'https://slack.com/api/chat.postMessage';

let token
const config = {
    headers: {
        'Authorization': 'Bearer ' + token
    }
}

const slackAPI = (data, cb) => {
    axios.post(slackURL, data, config).then((res) => {
        console.log(res.data)
        cb(null)
    }).catch((err) => {
        console.log(err)
    });
};

module.exports = (ctx, cb) => {
    token = ctx.data.TOKEN
    let obj = {
        as_user: false,
        username: 'tweets_bot',
        icon_url: 'https://secure.gravatar.com/avatar/dbafebf712fa816299231d2763fd292e?s=200',
        channel: "general",
        text: "You tweeted this ticket:",
        attachments: [{
            title: ctx.data.text,
            fields: [
                { title: `Tweeted By: @${ctx.data.username}` },
                { title: `Tweet Link: ${ctx.data.tweet_link}` },
                { title: `Created: ${ctx.data.created}` }
            ]
        }]
    }

    slackAPI(obj, cb)
}