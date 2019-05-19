#!/bin/bash

#1. Set up the REST server to multi user mode    true | false
export COMPOSER_MULTIUSER=true

# Execute the script for enabling authentication
./auth-github.sh
