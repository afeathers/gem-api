#!/bin/bash
set -e

service postgres start
mysql < /pg/setup.sql