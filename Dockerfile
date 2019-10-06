FROM ruby:2.4.4
MAINTAINER plapinhh@gmail.com

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get update && apt-get install -qq -y --no-install-recommends nodejs

RUN npm install -g yarn

RUN mkdir -p /app 
WORKDIR /app

ENV BUNDLER_VERSION 2.0.2
RUN gem install bundler -v $BUNDLER_VERSION

COPY Gemfile Gemfile.lock ./
RUN bundle install --jobs 20 --retry 5

COPY . ./

RUN yarn install

RUN bundle exec rake db:create
RUN bundle exec rake db:migrate

EXPOSE 3000

ENTRYPOINT ["bundle", "exec"]

CMD ["rails", "server", "-b", "0.0.0.0"]