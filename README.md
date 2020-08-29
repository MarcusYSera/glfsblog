<p>
View Markdown Preview with: shift command v
</p>

<p>
client: yarn start
  common errors occur if node_modules are not installed. run yarn install
</p>

<p>
server: node index.js
</p>

[detailing how to link google analytics into web app](https://support.google.com/analytics/answer/9289234?hl=en)

[detailing creation of custom dimensions and metrics](https://support.google.com/analytics/answer/2709829?hl=en)

if I add google Analytics, description to tags, events, and usage: 

https://www.hallaminternet.com/using-google-analytics-event-tracking/
https://firebase.google.com/docs/functions/analytics-events

#### Deployment

<p>
nginx, ci
</p>

##### helpful links

[video](https://www.youtube.com/watch?v=m2x1rUhT0fQ)
[getting yarn](https://github.com/Joystream/helpdesk/issues/16)

```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
```