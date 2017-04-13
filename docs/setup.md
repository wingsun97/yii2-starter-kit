# SETUP

## TABLE OF CONTENTS
- [Before you begin](#before-you-begin)
- [Manual installation](#manual-installation)
    - [Requirements](#requirements)
    - [Setup application](#setup-application)
    - [Configure your web server](#configure-your-web-server)
    - [Single domain installtion](#single-domain-installation)

- [Docker installation](#docker-installation)
- [Vagrant installation](#vagrant-installation)
- [Demo users](#demo-users)
- [Important-notes](#important-notes)

## Before you begin
1. If you do not have [Composer](http://getcomposer.org/), you may install it by following the instructions
at [getcomposer.org](http://getcomposer.org/doc/00-intro.md#installation-nix).

2. Install composer-asset-plugin needed for yii assets management
```bash
composer global require "fxp/composer-asset-plugin"
```

3. Add following setting to you composer.json file:
```
  "repositories": {
    "packagist": {
      "type": "composer",
      "url": "https://packagist.phpcomposer.com"
    }
  }
```

### Install yii2-oauth2-server
```bash
php composer.phar require --prefer-dist filsh/yii2-oauth2-server "*"
```

### Install yii2-ajaxcrud
```bash
php composer.phar require --prefer-dist johnitvn/yii2-ajaxcrud "*"
```

### Install yii2-widgets
```bash
php composer.phar require --prefer-dist kartik-v/yii2-widgets "*"
```

### Install yii2-qrcode-helper
```bash
php composer.phar require --prefer-dist 2amigos/yii2-qrcode-helper:~1.0
```

### Install Yii2-user
```bash
php composer.phar require --prefer-dist dektrium/yii2-user
```

### Install yii2-rbac
```bash
php composer.phar require --prefer-dist dektrium/yii2-rbac:~1.0.0-alpha@dev
```
