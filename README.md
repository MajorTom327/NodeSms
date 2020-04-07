# Node SMS

This project is a basic service for sending SMS with an API from a Raspberry-pi configured to send SMS with Gammu through an Huawei E3531 Modem.

The project is a work in progress.

## Server

For the configuration of the raspberry pi with Gammu, you should take a look about this list of articles

* [Hardy's blog - Raspi 3 + Huawei 3531 = SMS server](https://hardy0700.wordpress.com/2016/07/16/raspi-3-huawei-3531-sms-server/)
* [instructables - Giving the Raspberry Pi a Serial Modem Using the HUAWEI E3531 USB Dongle (+ Send SMS)](https://www.instructables.com/id/Giving-the-Raspberry-Pi-a-Serial-Modem-Using-the-H/)
* [Some help from emnify : FR:](https://support.emnify.com/hc/fr/articles/115001721233-Comment-utiliser-Huawei-E3531-en-mode-Modem-)

## Installation dev

``` bash
git clone https://github.com/MajorTom327/NodeSms.git
cd NodeSms
npm install
npm run dev
```

## Hardware

* [Huawei E3531](https://www.amazon.fr/gp/product/B00HSZEY34/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1)
* [Raspberry pi 3 model B](https://www.amazon.fr/gp/product/B01CD5VC92/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1)

