composer archive create -t dir -n .
composer network install --card PeerAdmin@hlfv1 --archiveFile docblocks@0.1.0.bna
composer network start --networkName docblocks --networkVersion 0.1.0 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card
composer card import --file networkadmin.card

