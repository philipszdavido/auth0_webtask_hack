curl --request POST --url https://wt-dbafebf712fa816299231d2763fd292e-0.run.webtask.io/auth0_webtask.io_hack

curl -X POST -H 'Authorization: Bearer xoxb-317584411232-Vr5PKZqx3USy33bOQb7sKrUG' \
-H 'Content-type: application/json' \
--data '{"channel":"general","icon_url":"https://secure.gravatar.com/avatar/dbafebf712fa816299231d2763fd292e?s=200","username":"tweets_bot","text":"I hope the tour went well, Mr. Wonka.","attachments": [{"text":"Who wins the lifetime supply of chocolate?","fallback":"You could be telling the computer exactly what it can do with a lifetime supply of chocolate.","color":"#3AA3E3","attachment_type":"default","callback_id":"select_simple_1234","actions":[{"name":"winners_list","text":"Who should win?","type":"select","data_source":"users"}]}]}' \
https://slack.com/api/chat.postMessage


curl --request GET --url https://wt-dbafebf712fa816299231d2763fd292e-0.run.webtask.io/auth0_webtask.io_hack?tweet="dfdf"&username="asas"&created="asaas"
