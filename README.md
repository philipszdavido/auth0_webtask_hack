# auth0_webtask_hack
A [IFTTT(if this, then that)](https://ifttt.com)-based [Webtask](https://webtask.io) Slack bot that sends message to the general channel of a Slack group when a user tweets, retweets or replies a tweet in [Twitter](https://twitter.com). 

# Technologies
1. [Webtask.io](https://webtask.io)
1. [Node.js](https://nodejs.org)
1. [Slack bot](https://my.slack.com/services/new/add)
1. [Twitter](https://twitter.com)
1. [IFTTT](https://ifttt.com)

# App Overview

IFTTT sends `Twitter` triggers[tweets, RT and replies] to ===> `Webtask.io` URL, it sends the payload to ===> `Slack` group channel.

# Usage
1. Create a [Twitter](https://twitter.com) account if you don't have one.
1. Create a [Slack](slack.com) group and add a [Slack bot](https://my.slack.com/services/new/add) to the group.
1. Clone this repo to your machine, by running this command:

        git clone https://github.com/philipszdavido/auth0_webtask_hack

1. To deploy alongisde with your Slack bot token, run:

        wt create --secret TOKEN=<YOUR_SLACK_BOT_TOKEN_HERE> webtask.js

1. Create a [IFTTT](ifttt.com) Twitter trigger and link the webhook to the URL generated from the above command.

### Contribute
1. Fork this repository
2. Clone it to your local machine
3. Create a branch for the feature you want to implement
4. Push your changes to your repository
5. Submit a pull request

- Issue Tracker: https://github.com/philipszdavido/auth0_webtask_hack/issues
- Source Code: https://github.com/philipszdavido/auth0_webtask_hack

### Support
If you are having issues, please let me know.
Mail me at: kurtwanger40@gmail.com
