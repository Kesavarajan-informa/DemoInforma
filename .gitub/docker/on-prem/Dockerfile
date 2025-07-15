# Pushed to https://gallery.ecr.aws/n7u5u3x8/taxcat-ui-on-prem
#   on Dev account us-east-2

FROM cypress/base:ubuntu18-node12.14.1
RUN apt-get update
RUN echo fs.inotify.max_user_watches=524288 | tee -a /etc/sysctl.conf && sysctl -p
RUN apt-get install -y screen libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb fonts-liberation xdg-utils gnupg
RUN wget -O /usr/src/google-chrome-stable_current_amd64.deb "https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb" &&   dpkg -i /usr/src/google-chrome-stable_current_amd64.deb ;   apt-get install -f -y &&   rm -f /usr/src/google-chrome-stable_current_amd64.deb
RUN curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg && install -o root -g root -m 644 microsoft.gpg /etc/apt/trusted.gpg.d/ && sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/edge stable main" > /etc/apt/sources.list.d/microsoft-edge-dev.list' && rm microsoft.gpg && apt update && apt install -y microsoft-edge-stable
RUN npm i cypress
RUN npx cypress install

# ENTRYPOINT [ "bash" ]
