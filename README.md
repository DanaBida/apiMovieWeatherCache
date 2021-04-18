# movie weather webapp

## Redis

## Run instructions:

1. Run redis (cache tool) locally.
 * If you have windows os: 
   Open the attached Redis zip and run redis.server.exe file.
   You can use the below link for more details:
   https://riptutorial.com/redis/example/29962/installing-and-running-redis-server-on-windows
 * If you have mac os: 
   Run the below commands:
    mkdir redis && cd redis
    curl -O http://download.redis.io/redis-stable.tar.gz
    tar xzvf redis-stable.tar.gz
    cd redis-stable
    make
    make test
    sudo make install
    redis-server
   You can use the below link for more details:
   https://phoenixnap.com/kb/install-redis-on-mac

2. In order to run the app, please run the below scripts:

## Scripts

### `yarn`

Install all the packages which the project depends on, and adding a node_modules folder with them

### `yarn run build`

Builds the app to the `dist` folder.

### `yarn start`

Start the project
