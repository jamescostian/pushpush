# pushpush

[![Build Status](https://img.shields.io/travis/jamescostian/pushpush.svg?style=flat)](https://travis-ci.org/jamescostian/pushpush)

Get a [Pushover](https://pushover.net/) notification if you haven't pushed any open source code on Github today

# Installation

Assuming you have [Node](http://nodejs.org) and [NPM](https://npmjs.org) (which is bundled with Node), you can just run:

```
npm install -g pushpush
```

If you want to get a notification every day, you can use a cronjob. For example, to have pushpush run every day at 7 PM, run `crontab -e` to edit your cronjobs and add the following line:

```
00 19 * * * /usr/local/bin/pushpush args
```

Of course, you'll need to replace `args` with the arguments you need to pass to pushpush, which can be seen in the Usage section.

*Note*: sometimes, the above cronjob will not work because pushpush is located in a different path (e.g. `/usr/bin/pushpush`), which means that you'll have to change the path (`/usr/loca/bin/pushpush`) to match the path to the pushpush binary. In order to find out where pushpush was installed, run `whereis pushpush`

# Usage

Run `pushpush` from the command line, passing it your Github username as the first argument, your Pushover API token as the second argument, and the Pushover user key as the third. For example:

```
pushpush jamescostian azGDORePK8gMaC0QOYAMyEEuzJnyUi uQiRzpo4DXghDmr9QzzfQu27cmVRsG
```

If you've pushed a commit on the same day that you run pushpush, pushpush will say "Good job!". Otherwise, pushpush will say "PUSH!" and send you a pushover notification.
