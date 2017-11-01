#!/bin/bash

cd /srv/zju-apple.club
git fetch --all
git reset --hard origin/master
jekyll build --safe
