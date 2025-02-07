#!/bin/bash

echo "# deeplogic" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:novozhilovsergeydisk/deeplogic.git
git push -u origin main
