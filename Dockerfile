FROM node:8
RUN apt-get update && apt-get install -y vim tmux locales

# Set locale
RUN sed -i '/en_US.UTF-8/s/^# //g' /etc/locale.gen && locale-gen
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

WORKDIR /usr/src/react-bootstrap-table2
COPY . .
RUN yarn install
EXPOSE 6006
CMD ["yarn", "storybook"]

