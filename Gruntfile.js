module.exports = function(grunt) {

    grunt.initConfig({
        pkg: 'yii2-starter-kit',
        sshconfig:{
            prod:{
                host: 'terentev.net',
                username: 'root',
                port: 22,
                agent: process.env.SSH_AUTH_SOCK
            }
        },
        sshexec:{
            deploy:{
                update:{
                    command: [
                        'cd /var/www/releases',
                        'git ls-remote https://trntv:pass904143@bitbucket.org/trntv/ochitos.ru.git master ' +
                        '| head -n 1 ' +
                        '| mkdir $1 && cd $1',
                        'git pull origin master',
                        'composer update',
                        '/usr/bin/php environments/' + grunt.option('env') + '/console/yii migrate --interactive=0',
                    ].join(' && '),
                    options:{
                        config: grunt.option('env')
                        git ls-remote https://trntv:pass904143@bitbucket.org/trntv/ochitos.ru.git master | head -n 1 | mkdir $1 && cd $1
                    }
                },
                release:{
                    command: [
                        'cd /var/www' // Create realease command
                    ].join(' && '),
                    options:{
                        config: grunt.option('env')
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-ssh');
    grunt.registerTask('deploy', ['sshexec:deploy']);

};