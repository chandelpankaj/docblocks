# DocBlocks
Blockchain Network to store Digital Documents

This is a Business Network for storing and accessing digital documents that are issued by education institutes.

This network defines:

Participants:
Network Admin
Institute
Institute Admin
Certificate Issuer
Authenticator
Student

Asset:
Document

Transactions:
Create Document
Create Institute
Create Institute Admin
Create Certificate Issuer
Create Authenticator
Create Student

For each Institute there is an Institute Admin. Institute admin can only create new Student, certificate issuer, authenticator and issue identities to them.

Authenticator can only read the documents.

Certificate issuer can read all the documents as well as can create new documents.

Student can only read his/her own documents only.


## Setup
## Installing Development Environment

## Installing Pre-requisites
Operating System: Ubuntu Linux: 14.04 / 16.04 LTS

To download Prequisites use following command

```
curl -O https://hyperledger.github.io/composer/v0.19/prereqs-ubuntu.sh

chmod u+x prereqs-ubuntu.sh
```

Run the script and enter root password when prompted

```
./prereqs-ubuntu.sh
```

## Installing Components

## 1. Install the CLI Tools
Do not use sudo for following npm commands

```
npm install -g composer-cli@0.19
npm install -g composer-rest-server@0.19
npm install -g generator-hyperledger-composer@0.19
npm install -g yo

```
## 2. Install Hyperledger Fabric

```
mkdir ~/fabric-dev-servers && cd ~/fabric-dev-servers

curl -O https://raw.githubusercontent.com/hyperledger/composer-tools/master/packages/fabric-dev-servers/fabric-dev-servers.tar.gz
tar -xvf fabric-dev-servers.tar.gz
```

Download a local Hyperledger Fabric v1.1 runtime:

```
cd ~/fabric-dev-servers
export FABRIC_VERSION=hlfv11
./downloadFabric.sh
```

Copy the folder ##docblocks of this repository to '/fabric-dev-servers'
```
cd docblocks
```

## Install OAuth2.0 for github authentication
```
npm install -g passport-github
```


## Install IPFS
Visit IPFS installation page at https://docs.ipfs.io/introduction/install/ and download and install the prebuilt ipfs-go binary for linux

Once everything is ready, run the daemon in another terminal

```
ipfs daemon
```

## Install LAMP or any other web server

Place the 'web-app/docblocks' folder in the web server root directory 

## Run the application

```
./multi-user.sh
```

This will start app on http://localhost:3000/

Access token is needed for authentication. So authorize using http://localhost:3000/auth/github/


After successful authentication it will redirect to http://localhost/docblocks/


## Interact with the application
Network admin card is needed to interact with application. 

Execute the script `./get-admin-card.sh` to create admin card.
A card 'docBlocksAdmin.card' will be created.

Visit the page http://localhost/docblocks/php/uploadCard.php and upload the newly created card file.

![Upload Card](/web-app/docblocks/Screenshots/uploadCard.png?raw=true)

Now first Institute needs to be created.
So go to http://localhost/docblocks/php/createInstitute.php/ and create a new Institute.

![Create Institute](/web-app/docblocks/Screenshots/createInstitute.png?raw=true)

Now create Institute Admin

Go to http://localhost/docblocks/php/createInstituteAdmin.php/

Here enter the same institute id that is entered at the time of creating institute.

![Create Institute Admin](/web-app/docblocks/Screenshots/createInstituteAdmin.png?raw=true)

Now an id needs to be issued to the institute admin so that institute admin can create new participants (certificate issuer, authenticator and student)

Go to http://localhost/docblocks/php/issueIdentity.php/
From Drop down menu, select participant type as 'Institute Admin' and add participant id same as that entered at the time of creating the institute admin. After submitting the form, a card file will be downloaded.
![Issue Identity](/web-app/docblocks/Screenshots/createInstituteAdmin.png?raw=true)

Now logout from github and again login using other id and again upload the card that is created in the previous step.
Now this new id will be the institue admin. So whenever application is accessed using this github account. It will act as institute admin. Card needs to be uploaded only once and becomes invalid after uploading, so no other can use the card.

Now create a student.
http://localhost/docblocks/php/createStudent.php/

![Create Student](/web-app/docblocks/Screenshots/createStudent.png?raw=true)

Now create certificate issuer

http://localhost/docblocks/php/createCertificateIssuer.php

![Create Certificate Issuer](/web-app/docblocks/Screenshots/createCertificateIssuer.png?raw=true)

Issue identity to this certificate issuer. A card file will be downloaded.
The card can be uploaded using another github id, but same github id can also hold multiple card and it is possilble to switch between the cards. 
For now, I have now set the procedure for switching between the cards. So the card that is uploaded first time is the default card.
So if web application is used then another github id is required to act as certificate issuer
(or)
upload the certificate issuer card and set it as default card using explorer interface
http://localhost:3000/explorer/

Go to wallet->import{setDefault} and enter the name of the card that is uploaded

Create Document

Enter the Document ID, Student ID(to whom the certificate is being issued) and select the document pdf file.
The file will be uploaded to IPFS and its hash will be stored in the blockchain.

http://localhost/docblocks/php/createDocument.php

![Create Document](/web-app/docblocks/Screenshots/createDocument.png?raw=true)

## To Download Document
There are different methods:
1. All documents that belongs to a particular student can be viewed
2. Document can be read by using document id

For now, only method 1 is implemented.

After submitting the form, the document will be downloaded.

http://localhost/docblocks/php/documents.php

![Create Document](/web-app/docblocks/Screenshots/documents.png?raw=true)
