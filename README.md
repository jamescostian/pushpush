# Pushpush

[![Build Status](https://img.shields.io/travis/jamescostian/pushpush.svg?style=flat)](https://travis-ci.org/jamescostian/pushpush)

Get a [Pushover](https://pushover.net/) notification if you haven't pushed any open source code on Github today

# Installation

Assuming you have [Node](http://nodejs.org) and [NPM](https://npmjs.org) (which is bundled with Node), you can just run:

```
npm install -g pushpush
```

# Usage

Run `pushpush` from the command line, passing it your Github username as the first argument, your Pushover API token as the second argument, and the Pushover user key as the third. For example:

```
pushpush jamescostian azGDORePK8gMaC0QOYAMyEEuzJnyUi uQiRzpo4DXghDmr9QzzfQu27cmVRsG
```

If you've pushed a commit on the same day that you run pushpush, pushpush will say "Good job!". Otherwise, pushpush will say "PUSH!" and send you a pushover notification.

This program is useless, *unless* you set a cronjob to run it every day. For example, adding the following to crontab (by running `crontab -e`) will make pushpush run every day at 7PM (so you have enough time to write some code and push it, for the sake of OPEN SOURCING ALL THE THINGS):

```
00 19 * * * /usr/local/bin/pushpush
```

Sometimes, the above cronjob will not work because pushpush is located in a different path (e.g. `/usr/bin/pushpush`), which means that you'll have to change the path at the end to match the path to the pushpush binary. In order to find out where pushpush was installed, run `whereis pushpush`
