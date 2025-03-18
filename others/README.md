echo "# multi-page-website-styled-davidb-exrdtcfyvubyiu656e45wesd" >> README.md
git init
git add README.md
git config user.name "Xasbus"
git config user.email "davidbilliot0828.gmail.com"
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Xasbus/multi-page-website-styled-davidb-exrdtcfyvubyiu656e45wesd.git
curl -sS https://webi.sh/gh | sh
gh auth login
git push -u origin main

git commit -m "updated README.md"
git push origin main

//save to all files
git add .

//View the value of origin
git remote -v

//how to change the origin
git remote set-url origin https://github.com/Anything-I-Want

// activate for source control
git init

// technique to see what verison is installed
git --version

//It renames the current branch to main
git branch -M main

//default origin and branch was already set. So it will defer to default
git push

//
git pull